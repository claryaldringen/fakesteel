import { calculateShipping, idToLabel } from '../../utils'

export default (req, res) => {
  console.log(req.body)

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.seznam.cz',
    auth: {
      user: 'info@fakesteel.cz',
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  })

  const vs = Date.now().toString().substr(-10)
  const itemsPrice = req.body.basket.reduce(
    (total, { price }) => total + price,
    0
  )
  const shippingPrice =
    req.body.shipping === 'send'
      ? calculateShipping(
          req.body.country,
          req.body.basket.reduce((total, { weight }) => total + weight, 0)
        )
      : 0

  const total = itemsPrice + shippingPrice

  const summary = req.body.basket
    .map(({ count, weapon, price, ...props }) => {
      const propRows = Object.keys(props)
        .filter((prop) => prop !== 'weight')
        .map(
          (key) =>
            `<tr><td style="width: 70%;">${idToLabel(key)}:</td><td>${
              props[key]
            }</td></tr>`
        )

      return `<table style="border-bottom: solid 1px black;width: 100%;">
          <thead>
            <th colSpan={2} style="text-align: left;">${count}x ${idToLabel(
        weapon
      )}</th>
          </thead>
          <tbody>
            ${propRows}
          </tbody>
          <tfoot>
            <tr className={styles.small}>
              <td style="width: 70%;">
                <b>Price:</b>
              </td>
              <td>
                <b>${price} CZK</b>
              </td>
            </tr>
          </tfoot>
        </table>`
    })
    .reduce((acc, item) => `${acc}${item}`, '')

  let billing = `
    <table style="float: left;">
        <tr><td>IBAN:</td><td><b>CZ3120100000002702013198</b></td></tr>
        <tr><td>BIC/SWIFT:</td><td><b>FIOBCZPPXXX</b></td></tr>
        <tr><td>Identification:</td><td><b>${vs}</b></td></tr>
        <tr><td>Total price:</td><td><b>${total} CZK</b></td></tr>
    </table>`
  if (req.body.country === 'Czech Republic') {
    billing = `
    <table style="float: left;">
        <tr><td>Account number:</td><td><b>2702013198/2010</b></td></tr>
        <tr><td>Variable symbol:</td><td><b>${vs}</b></td></tr>
        <tr><td>Total price:</td><td><b>${total} CZK</b></td></tr>
    </table>`
  }

  let shipping = `<div style="float: right;">
    <b>Shipping to</b><br>
    ${req.body.name}<br>
    ${req.body.street}<br>
    ${req.body.city}<br>${req.body.code}<br>
    ${req.body.country}<br>
    ${req.body.additional}<br>
    <b>Shipping price: ${shippingPrice} CZK</b>
    </div>`
  if (req.body.shipping == 'pick') {
    shipping = `<div style="float: right;"><b>Shipment to be picked up at</b><br></div>`
  }

  const mailData2 = {
    from: 'info@fakesteel.cz',
    to: 'info@fakesteel.cz',
    subject: `Order no. ${vs}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `${req.body.name} (<a href="mailto:${req.body.email}">${req.body.email}</a>) just sent his/her order.<div style="text-align: center;"><h2>Billing and shipping</h2></div>${billing}${shipping}<div style="clear: both; text-align: center;"><h2>Order summary</h2></div>${summary}<b>Total items price: ${itemsPrice} CZK</b>`,
  }

  const mailData1 = {
    from: 'info@fakesteel.cz',
    to: req.body.email,
    subject: `Order confirmation from Fakesteel armory`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div style="max-width: 600px;"><div style="text-align: center; background: #333333; color: #ffffff; padding: 6%;"><h1>ORDER CONFIRMATION</h1>${req.body.name}, thank you for your order!
    <p>We've received your order and will dispatch it as soon as we receive payment into our bank account. You can find your purchase information below.</p></div>
    <div style="text-align: center;"><h2>Billing and shipping</h2></div>${billing}${shipping}
    <div style="clear: both; text-align: center;"><h2>Order summary</h2></div>${summary}<table style="width: 100%;"><tbody><tr><td style="width: 70%;font-weight: bold;">Total items price:</td><td style="font-weight: bold;">${itemsPrice} CZK</td></tr></tbody></table></div>`,
  }

  transporter.sendMail(mailData1, (err1) => {
    if (err1) {
      console.log(err1)
      res.status(500).json({ errType: 1, err: err1 })
    } else {
      transporter.sendMail(mailData2, (err2) => {
        if (err2) {
          console.log(err2)
          res.status(500).json({ errType: 2, err: err2 })
        } else {
          res.status(200).json({ email: req.body.email })
        }
      })
    }
  })
}
