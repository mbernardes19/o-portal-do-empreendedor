import { useEffect, useState } from 'react'
import CreditoForm from './CreditoForm'
import { useForm } from 'react-hook-form'
import { makeCreditCardPayment } from '@/operations/creditCardPayment'
import { getFormData } from '@/utils/session'

export default function CreditoPayment() {
    const [tokenCartao, setTokenCartao] = useState(null)
    const [error, setError] = useState(null)
    const [isPaid, setIsPaid] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)
    const useFormReturn = useForm()

    useEffect(() => {
        const makePayment = async () => {
            if (tokenCartao && !isPaid) {
                setIsProcessing(true)

                const parsedFormData = getFormData()
                console.log('parsedFormData', parsedFormData)

                const response = await makeCreditCardPayment({
                    customer: {
                        Name: parsedFormData.pedido.nomeCompleto,
                        Identity: parsedFormData.pedido.cpf,
                        Phone: parsedFormData.pedido.telefone,
                        Email: parsedFormData.pedido.email,
                    },
                    address: {
                        ZipCode: parsedFormData.pedido.cep,
                        Street: parsedFormData.pedido.rua,
                        Number: parsedFormData.pedido.numero,
                        Complement: parsedFormData.pedido.complemento,
                        District: parsedFormData.pedido.bairro,
                        CityName: parsedFormData.pedido.cidade,
                        StateInitials: parsedFormData.pedido.estado,
                    },
                    products: [
                        {
                            Code: "001",
                            Description: "Teste 1",
                            UnitPrice: 200,
                            Quantity: 1
                        }
                    ],
                    payment: {
                        Holder: 'João da Silva',
                        CardNumber: '5307241132011148',
                        ExpirationDate: '10/2024',
                        SecurityCode: '582'
                    }
                })

                setIsProcessing(false)

                if (response.HasError) {
                    setError(response.Error)
                    setIsPaid(false)
                    setTokenCartao(null)
                    return
                }
                setError(null)
                console.log(response)
            }
        }

        makePayment()
    }, [tokenCartao, isPaid])

    if (isProcessing) {
        return <p>Processando pagamento...</p>
    }

    if (isPaid) {
        return (
            <div>
                <p>Pagamento realizado com sucesso!</p>
            </div>
        )
    }

    return (
        <>
            {error && <p>{error}</p>}
            <CreditoForm
                onCreditCardDataSubmit={setTokenCartao}
                onError={setError}
                {...useFormReturn}
            />
        </>
    )
}