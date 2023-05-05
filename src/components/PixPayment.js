import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import PixPaymentDisplay from "./PixPaymentDisplay"
import { makePixPayment } from '../operations/pixPayment'
import { getFormData } from "@/utils/session"

export default function PixPayment() {
    const [transaction, setTransaction] = useState()
    const [formData, setFormData] = useState(null)
    const router = useRouter()

    useEffect(() => {
        const fetchFormData = async () => {
            const parsedFormData = await getFormData()
            setFormData(parsedFormData)
        }
        
        fetchFormData()
    }, [])

    return (
        <section>
            <button
                onClick={async () => {
                    const pixPayment = await makePixPayment({
                        paymentMethod: "6",
                        customer: {
                            Name: formData.pedido.nomeCompleto,
                            Identity: formData.pedido.cpf,
                            Phone: formData.pedido.telefone,
                            Email: formData.pedido.email
                        },
                        address: {
                                ZipCode: formData.pedido.cep,
                                Street: formData.pedido.rua,
                                Number: formData.pedido.numero,
                                Complement: formData.pedido.complemento,
                                District: formData.pedido.bairro,
                                CityName: formData.pedido.cidade,
                                StateInitials: formData.pedido.estado,
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
                    router.push(`/checkout?transactionId=${pixPayment.ResponseDetail.IdTransaction}`, undefined, { shallow: true })
                    setTransaction(pixPayment.ResponseDetail)
                }}>
                    PIX
            </button>
            {transaction &&
                <PixPaymentDisplay
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