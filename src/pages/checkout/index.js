import Payment from '../../components/Payment'
import PixPayment from '../../components/PixPayment'

export default function Checkout({transaction}) {
    if (transaction) {
        return <PixPayment
            transactionId={transaction.IdTransaction}
            statusMessage={transaction.Message}
            statusDescription={transaction.Description}
            qrCode={transaction.PaymentObject.QrCode}
            pixKey={transaction.PaymentObject.Key}
        />
    }
    return <Payment />
}

export async function getServerSideProps(context) {
    const { transactionId } = context.query
    if (transactionId) {
        const transaction = await fetch(`http://localhost:3000/api/transaction?transactionId=${transactionId}`)
        const resp = await transaction.json()
        return {
            props: {
                transaction: resp.ResponseDetail
            }
        }
    }

    return {
        props: {}
    }
} 
