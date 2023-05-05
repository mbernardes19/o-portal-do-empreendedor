import fetch from 'node-fetch'
import requestIp from 'request-ip'


export default async function checkout(req, res) {
  if (req.method === 'POST') {
    const {
      paymentMethod,
      customer,
      products,
      payment
    } = JSON.parse(req.body)

    const userIp = requestIp.getClientIp(req)

    const basePayload = {
      IsSandbox: process.env.PAY_SANDBOX,
      Application: process.env.PAY_APPLICATION_NAME,
      Vendor: process.env.PAY_VENDOR,
      IpAddress: userIp
    }

    switch (paymentMethod) {
      case '6':
        return await makePixPayment({
          ...basePayload,
          IsSandbox: false,
          PaymentMethod: paymentMethod,
          Customer: customer,
          Products: products
        }, {req, res})
      case '2':
        return await makeCreditCardPayment({
          ...basePayload,
          IsSandbox: true,
          PaymentMethod: paymentMethod,
          Customer: customer,
          Products: products,
          PaymentObject: payment
        }, {req, res})
      default:
        return res.status(400).json({error: 'Payment method not accepted'})
    }
  }

  return res.status(405).json({})
}

const makePixPayment = async (payload, {req, res}) => {
  const response = await fetch(
    'https://payment.safe2pay.com.br/v2/Payment',
    {
      method: 'POST',
      headers: {
        'x-api-key': process.env.PAY_PROD_API_TOKEN,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }
  )

  const resp = await response.json()
  return res.status(200).json(resp)
}

const makeCreditCardPayment = async (payload, {req, res}) => {
  console.log('makeCreditCardPayment payload', payload)
  const response = await fetch(
    'https://payment.safe2pay.com.br/v2/Payment',
    {
      method: 'POST',
      headers: {
        'x-api-key': process.env.PAY_SANDBOX ? process.env.PAY_SANDBOX_API_TOKEN : process.env.PAY_PROD_API_TOKEN,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }
  )

  const resp = await response.json()
  return res.status(200).json(resp)
}