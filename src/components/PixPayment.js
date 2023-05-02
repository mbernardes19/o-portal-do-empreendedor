import Image from 'next/image'

export default function PixPayment({
    transactionId,
    statusMessage,
    statusDescription,
    qrCode,
    pixKey
}) {
    return (
        <section>
            <h1>{`Obrigado! Processo registrado com número #${transactionId}`}</h1>
            <h2>{statusMessage}</h2>
            <h3>{statusDescription}</h3>
            {qrCode && <Image src={qrCode} width={593} height={825} alt="Pix QR Code" />}
            <p>{`Chave "copia e cola": ${pixKey}`}</p>
        </section>
    )
}