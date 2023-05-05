import FormInput from './FormInput'

export default function CreditoForm(props) {
    const {register, formState: { errors }, handleSubmit, onCreditCardDataSubmit, onError} = props

    const defaultValidation = {
        required: 'Campo obrigatório'
    }

    const onSubmit = async (data) => {
        const response = await fetch('/api/tokenize', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        const resp = await response.json()
        console.log('RESP', resp)
        if (!resp.HasError) {
            onCreditCardDataSubmit(resp.ResponseDetail.Token)
        } else {
            onError(resp.Error)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
                label="Número do Cartão"
                containerClassName="col-12 col-sm-6"
                inputRef={register('numero', defaultValidation)}
                errors={errors.numero}
            />
            <FormInput
                label="Nome do Titular"
                containerClassName="col-12 col-sm-6"
                inputRef={register('nomeTitular', defaultValidation)}
                errors={errors.nomeTitular}
            />
            <FormInput
                label="CPF/CNPJ"
                containerClassName="col-12 col-sm-6"
                inputRef={register('cpjOuCnpj', defaultValidation)}
                errors={errors.cpjOuCnpj}
            />
            <FormInput
                label="Validade"
                containerClassName="col-12 col-sm-6"
                inputRef={register('validade', defaultValidation)}
                errors={errors.validade}
            />
            <FormInput
                label="Código de segurança (CVV)"
                containerClassName="col-12 col-sm-6"
                inputRef={register('cvv', defaultValidation)}
                errors={errors.cvv}
            />            
            <FormInput
                label="Valor de parcela"
                containerClassName="col-12 col-sm-6"
                inputRef={register('valorParcela', defaultValidation)}
                errors={errors.valorParcela}
            />
            <input type="submit" />
        </form>
    )
}