import fetch from 'node-fetch'

export default async function tokenize(req, res) {
  if (req.method === 'POST') {
    const {
        nomeTitular,
        numero,
        validade,
        cvv
    } = JSON.parse(req.body)

    const response = await fetch(
        'https://payment.safe2pay.com.br/v2/token',
        {
          method: 'POST',
          headers: {
            'x-api-key': process.env.PAY_SANDBOX ? process.env.PAY_SANDBOX_API_TOKEN : process.env.PAY_PROD_API_TOKEN,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            IsSandbox: process.env.PAY_SANDBOX === 'true' ? true : false,
            Holder: nomeTitular,
            CardNumber: numero,
            ExpirationDate: validade,
            SecurityCode: cvv
          })
        }
      )

      const resp = await response.json()
      return res.status(200).json(resp)
  }

  return res.status(405).json({})
}
