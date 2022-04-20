import React, { useState, useCallback, useMemo } from 'react'
import validator from 'validator'

import { countries } from '../../data/countries'

import styles from './OrderForm.module.scss'
import classNames from 'classnames'
import {
  calculatePayment,
  calculateShipping,
  getSpearsShipping,
} from '../../utils'

/**
 * Value of select box when a user opts to pick up their order.
 */
const SHIPPING_OPTION_PICK_VALUE = "pick"

/**
 * Value of select box when a user opts to get their order shipped to them.
 */
const SHIPPING_OPTION_SEND_VALUE = "send"

const DEFAULT_SHIPPING_OPTION = SHIPPING_OPTION_SEND_VALUE

export const RecapitulationForm = ({ basket, setBasket }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [isPhoneRequired, setisPhoneRequired] = useState(DEFAULT_SHIPPING_OPTION === SHIPPING_OPTION_PICK_VALUE)
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [code, setCode] = useState('')
  const [country, setCountry] = useState('Czech Republic')
  const [state, setState] = useState('')
  const [shipping, setShipping] = useState(DEFAULT_SHIPPING_OPTION)
  const [payment, setPayment] = useState('transfer')
  const [notice, setNotice] = useState('')
  const [additional, setAdditional] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [sending, setSending] = useState(false)

  const itemsPrice = useMemo(
    () => basket.reduce((total, { price }) => total + price, 0),
    [basket]
  )

  const weight = useMemo(
    () => basket.reduce((total, { weight }) => total + weight, 0),
    [basket]
  )

  const onNameChange = useCallback((event) => setName(event.target.value), [
    setName,
  ])
  const onEmailChange = useCallback(
    (event) => {
      setEmail(event.target.value)
      if (validator.isEmail(event.target.value)) {
        setEmailError('')
      } else {
        setEmailError(`The email isn't valid!`)
      }
    },
    [setEmail, setEmailError]
  )
  const onPhoneChange = useCallback(
    (event) => {
      setPhone(event.target.value)
      if (validator.isMobilePhone(event.target.value)) {
        setPhoneError('')
      } else {
        setPhoneError(`The phone number isn't valid!`)
      }
    },
    [setPhone, setPhoneError]
  )
  const onStreetChange = useCallback((event) => setStreet(event.target.value), [
    setStreet,
  ])
  const onCityChange = useCallback((event) => setCity(event.target.value), [
    setCity,
  ])
  const onCodeChange = useCallback((event) => setCode(event.target.value), [
    setCode,
  ])
  const onCountryChange = useCallback(
    (event) => setCountry(event.target.value),
    [setCountry]
  )
  const onStateChange = useCallback((event) => setState(event.target.value), [
    setState,
  ])
  const onShippingChange = useCallback(
    (event) => {
      setShipping(event.target.value)
      setisPhoneRequired(event.target.value === SHIPPING_OPTION_PICK_VALUE)
    },
    [setShipping, setisPhoneRequired, setPhone]
  )
  const onPaymentChange = useCallback(
    (event) => setPayment(event.target.value),
    [setPayment]
  )
  const onNoticeChange = useCallback((event) => setNotice(event.target.value), [
    setName,
  ])
  const onAdditionalChange = useCallback(
    (event) => setAdditional(event.target.value),
    [setName]
  )

  const shippingPrice = useMemo(
    () =>
      shipping === SHIPPING_OPTION_SEND_VALUE
        ? calculateShipping(country, weight, getSpearsShipping(basket))
        : 0,
    [country, shipping, basket]
  )

  const paymentPrice = useMemo(
    () => calculatePayment(shippingPrice + itemsPrice, payment, country),
    [shippingPrice, itemsPrice, payment]
  )

  const onClick = useCallback(
    (e) => {
      e.preventDefault()
      e.stopPropagation()

      const data = {
        name,
        email,
        phone,
        street,
        city,
        code,
        country,
        state,
        shipping,
        payment,
        notice,
        additional,
        basket,
      }

      setSending(true)
      fetch('/api/order', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response ok')
        }
        setSending(false)
        setShowModal(true)
      })
    },
    [
      name,
      email,
      phone,
      street,
      city,
      code,
      country,
      state,
      shipping,
      payment,
      notice,
      additional,
      basket,
      setSending,
      setShowModal,
    ]
  )

  const closeModal = useCallback(() => {
    setBasket([])
    setName('')
    setEmail('')
    setPhone('')
    setStreet('')
    setCity('')
    setCode('')
    setCountry('Czech Republic')
    setState('')
    setAdditional('')
    setShipping(DEFAULT_SHIPPING_OPTION)
    setPayment('transfer')
    setNotice('')
    setShowModal(false)
  }, [])

  // there musn't be an error, and then either phone is provided or not required
  const isPhoneOk = !phoneError && (phone || !isPhoneRequired)
  const enabled =
    name &&
    email &&
    street &&
    city &&
    code &&
    isPhoneOk &&
    basket.length &&
    !emailError &&
    !sending

  return (
    <div>
      {showModal && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <h2>
              Your order has just been dispatched. Confirmation has been sent to
              your email {email}.
            </h2>
            <button onClick={closeModal}>OK</button>
          </div>
        </div>
      )}
      <h2>Shipping information</h2>
      <form className={styles.form}>
        <div className={styles.group}>
          Full name:<span className={styles.required}>*</span>
          <br />
          <input type="text" value={name} onChange={onNameChange} required />
        </div>
        <div className={styles.group}>
          Email:<span className={styles.required}>*</span>
          <br />
          <input type="email" value={email} onChange={onEmailChange} required />
          {emailError && (
            <>
              <br />
              <span className={styles.invalid}>{emailError}</span>
            </>
          )}
        </div>
        <div className={styles.group}>
          <label htmlFor="phone">
            Phone number:{isPhoneRequired && <span className={styles.required}>*</span>}
          </label>
          <br />
          <input
            id="phone"
            type="text"
            value={phone}
            onChange={onPhoneChange}
            required={isPhoneRequired}
          />
          {phoneError && (
            <>
              <br />
              <span className={styles.invalid}>{phoneError}</span>
            </>
          )}
        </div>
        <div className={styles.group}>
          Street and No.:<span className={styles.required}>*</span>
          <br />
          <input
            type="text"
            value={street}
            onChange={onStreetChange}
            required
          />
        </div>
        <div className={styles.group}>
          City:<span className={styles.required}>*</span>
          <br />
          <input type="text" value={city} onChange={onCityChange} required />
        </div>
        <div className={styles.group}>
          Post code:<span className={styles.required}>*</span>
          <br />
          <input type="text" value={code} onChange={onCodeChange} required />
        </div>
        <div className={styles.group}>
          <label htmlFor="country">Country:</label>
          <br />
          <select id="country" value={country} onChange={onCountryChange}>
            {countries.map(({ name, code }) => (
              <option key={code} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.group}>
          State or district:
          <br />
          <input type="text" value={state} onChange={onStateChange} />
        </div>
        <div className={styles.group}>
          <label htmlFor="additional">Additional information:</label>
          <br />
          <input
            id="additional"
            type="text"
            value={additional}
            onChange={onAdditionalChange}
          />
        </div>
        <div className={styles.group}>
          <label htmlFor="shipping">Shipping:</label>
          <br />
          <select value={shipping} id="shipping" onChange={onShippingChange}>
            <option value={SHIPPING_OPTION_SEND_VALUE}>Send it to me, please</option>
            <option value={SHIPPING_OPTION_PICK_VALUE}>I&apos;ll pick it up in Prague</option>
          </select>
        </div>
        <div className={styles.group}>
          <label htmlFor="payment">Payment method:</label>
          <br />
          <select value={payment} id="payment" onChange={onPaymentChange}>
            <option value="transfer">
              Bank transfer {country != 'Czech Republic' && '(+100 CZK)'}
            </option>
            <option value="paypal">PayPal (+5%)</option>
          </select>
        </div>
        <div className={styles.group}>
          <label htmlFor="notice">Notice:</label>
          <br />
          <textarea value={notice} onChange={onNoticeChange} />
        </div>
        <div className={styles.clear} />
        <table className={styles.recapTable}>
          <tbody>
            <tr>
              <td>Items price:</td>
              <td className={styles.priceCell}>{itemsPrice} CZK</td>
            </tr>
            <tr>
              <td>Shipping price:</td>
              <td className={styles.priceCell}>{shippingPrice} CZK</td>
            </tr>
            <tr>
              <td>Payment price:</td>
              <td className={styles.priceCell}>{paymentPrice} CZK</td>
            </tr>
            <tr>
              <td className={styles.totalLabel}>Total price:</td>
              <td className={styles.totalPrice}>
                {shippingPrice + itemsPrice + paymentPrice} CZK
              </td>
            </tr>
          </tbody>
        </table>
        <div className={styles.buttonGroup}>
          <button
            onClick={onClick}
            disabled={!enabled}
            className={classNames({ [styles.disabled]: !enabled })}
          >
            {sending ? 'Sending order...' : 'Send order'}
          </button>
        </div>
      </form>
    </div>
  )
}
