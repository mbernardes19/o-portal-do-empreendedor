import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import PixPayment from "./PixPayment"

export default function Payment() {
    const [transaction, setTransaction] = useState()
    const router = useRouter()

    const makePixPayment = async () => {
        const response = await fetch('/api/checkout', {
            method: 'POST',
            body: JSON.stringify({
                paymentMethod: "6",
                customer: {
                    Name: "João da silva",
                    Identity: "18978393080",
                    Phone: "51999999999",
                    Email: "safe2pay@safe2pay.com.br",
                    Address: {
                        ZipCode: "90670090",
                        Street: "Logradouro",
                        Number: "123",
                        Complement: "Complemento",
                        District: "Higienopolis",
                        CityName: "Porto Alegre",
                        StateInitials: "RS",
                        CountryName: "Brasil"
                    }
                },
                products: [
                            {
                        Code: "001",
                        Description: "Teste 1",
                        UnitPrice: 1.50,
                        Quantity: 1
                    }
                ]
            })
        })

        return await response.json()
    }

    return (
        <section>
            <button
                onClick={async () => {
                    const pixPayment = await makePixPayment()
                    router.push(`/checkout?transactionId=${pixPayment.ResponseDetail.IdTransaction}`, undefined, { shallow: true })
                    setTransaction(pixPayment.ResponseDetail)
                }}>
                    PIX
            </button>
            {transaction &&
                <PixPayment
                    transactionId={transaction.IdTransaction}
                    statusMessage={transaction.Message}
                    statusDescription={transaction.Description}
                    qrCode={transaction.QrCode}
                    pixKey={transaction.Key}
                />
            }
        </section>
    )
}