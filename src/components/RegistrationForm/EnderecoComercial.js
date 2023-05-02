import FormInput from '../FormInput'
import FormSection from '../FormSection'
import cep from 'cep-promise'

export default function EnderecoComercialSection(props) {
    const { formHandlers: {setError, clearErrors, setValue, register, formState: { errors }} } = props

    const defaultValidation = {
        required: 'Campo obrigatório'
    }

    return <FormSection title="ENDEREÇO COMERCIAL">
        <FormInput
            label="CEP"
            containerClassName="col-12 col-sm-4"
            inputRef={register('cep', {
                ...defaultValidation,
                validate: {
                    isCepValid: async value => {
                        try {
                            await cep(value)
                            return true
                        } catch (err) {
                            return 'CEP inválido'
                        }
                    }
                }
            })}
            onBlur={
                async (e) => cep(e.target.value)
                    .then((cep) => {
                        clearErrors('cep')
                        setValue('cidade', cep.city)
                        setValue('bairro', cep.neighborhood)
                        setValue('estado', cep.state)
                        setValue('rua', cep.street)
                        clearErrors('cidade')
                        clearErrors('bairro')
                        clearErrors('estado')
                        clearErrors('rua')
                    })
                    .catch(
                        (err) => {
                            setError('cep', { message: 'CEP inválido', type: 'custom' })
                            setValue('cidade', '')
                            setValue('bairro', '')
                            setValue('estado', '')
                            setValue('rua', '')
                        }
                    )
            }
            errors={errors.cep}
        />
        <FormInput
            label="Rua"
            containerClassName="col-12 col-sm-4"
            inputRef={register('rua', defaultValidation)}
            errors={errors.rua}
        />
        <FormInput
            label="Número"
            containerClassName="col-12 col-sm-4"
            inputRef={register('numero', defaultValidation)}
            errors={errors.numero}
        />
        <FormInput
            label="Tipo"
            containerClassName="col-12 col-sm-4"
            inputRef={register('tipo')}
        />
        <FormInput
            label="Complemento"
            containerClassName="col-12 col-sm-8"
            inputRef={register('complemento')}
        />
        <FormInput
            label="Bairro"
            containerClassName="col-4"
            inputRef={register('bairro', defaultValidation)}
            errors={errors.bairro}
        />
        <FormInput
            label="Cidade"
            containerClassName="col-4"
            inputRef={register('cidade', defaultValidation)}
            errors={errors.cidade}
        />
        <FormInput
            label="Estado"
            containerClassName="col-4"
            inputRef={register('estado', defaultValidation)}
            errors={errors.estado}
        />
    </FormSection>
}
