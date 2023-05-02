import fetch from 'node-fetch'


export default async function transaction(req, res) {
  if (req.method === 'GET') {
        const {
            transactionId
        } = req.query

        const resp = await fetch(
            `https://api.safe2pay.com.br/v2/transaction/Get?Id=${transactionId}`, {
            headers: {
                'x-api-key': process.env.PAY_PROD_API_TOKEN
            }
        })

        const resp1 = await resp.json()
        return res.status(200).json(resp1)
    }

  return res.status(405).json({})
}
