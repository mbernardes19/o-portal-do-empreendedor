import PixPayment from '../../components/PixPaymentDisplay'

export default function Pix(transactionData) {
    return (
        <PixPayment
            transactionId={transactionData.IdTransaction}
            statusMessage={transactionData.Message}
            statusDescription={transactionData.Description}
            qrCode={transactionData.QrCode}
            pixKey={transactionData.Key}
        />
    )
}

