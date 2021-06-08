import { useState, useMemo, useCallback } from 'react'

import styles from './OrderForm.module.scss'

export const RecapitulationForm = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [street, setStreet] = useState()
  const [city, setCity] = useState()
  const [code, setCode] = useState()
  const [country, setCountry] = useState()
  const [shipping, setShipping] = useState()
  const [notice, setNotice] = useState()

  const onNameChange = useCallback((event) => setName(event.target.value), [
    setName,
  ])
  const onEmailChange = useCallback((event) => setEmail(event.target.value), [
    setName,
  ])
  const onStreetChange = useCallback((event) => setStreet(event.target.value), [
    setName,
  ])
  const onCityChange = useCallback((event) => setCity(event.target.value), [
    setName,
  ])
  const onCodeChange = useCallback((event) => setCode(event.target.value), [
    setName,
  ])
  const onCountryChange = useCallback(
    (event) => setCountry(event.target.value),
    [setName]
  )
  const onShipingChange = useCallback(
    (event) => setShipping(event.target.value),
    [setName]
  )
  const onNoticeChange = useCallback((event) => setNotice(event.target.value), [
    setName,
  ])

    const onClick = useCallback((e) => {
        e.preventDefault()

        const data = { name, email, street, city, code, country, shipping, notice }

        console.log(data)
        fetch('/api/order', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response ok')
            }
        })
    }, [name, email, street, city, code, country, shipping, notice])

  return (
    <div>
      <form className={styles.form}>
        <table className={styles.leftTable}>
          <tbody>
            <tr>
              <td>Full name:</td>
              <td>
                <input
                  type="text"
                  value={name}
                  onChange={onNameChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                <input
                  type="email"
                  value={email}
                  onChange={onEmailChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Street and No.:</td>
              <td>
                <input
                  type="text"
                  value={street}
                  onChange={onStreetChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>City:</td>
              <td>
                <input
                  type="text"
                  value={city}
                  onChange={onCityChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Post code:</td>
              <td>
                <input
                  type="text"
                  value={code}
                  onChange={onCodeChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Country:</td>
              <td>
                <input type="text" value={country} onChange={onCountryChange} />
              </td>
            </tr>
          </tbody>
        </table>
        <table className={styles.rightTable}>
          <tbody>
            <tr>
              <td>
                <label>Shipping:</label>
              </td>
              <td>
                <select value={shipping} onChange={onShipingChange}>
                  <option value="dpd">DPD</option>
                  <option value="cp">Česká pošta</option>
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <label>Notice:</label>
                <textarea value={notice} onChange={onNoticeChange} />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button onClick={onClick}>Send order</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}
