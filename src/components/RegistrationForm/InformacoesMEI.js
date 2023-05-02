import FormInput from '../FormInput'
import ocupacoesPrincipais from '../../../data/ocupacoes-principais-mei'
import FormSection from '../FormSection'

const ocupacoes = ocupacoesPrincipais.map(ocup => `${ocup.OCUPACAO} ${ocup.CNAE}`)

export default function InformacoesMEI(props) {
    const { formHandlers: {setError, register, formState: { errors }} } = props

    const defaultValidation = {
        required: 'Campo obrigatório'
    }

    return (
        <FormSection
            title="INFORMAÇÕES DO MEI"
        >
            <FormInput
                label="Nome Fantasia do CNPJ MEI "
                containerClassName="col-12 col-sm-8"
                inputRef={register('nomeFantasia', defaultValidation)}
                errors={errors.nomeFantasia}
            />
            <FormInput
                label="Capital Social"
                containerClassName="col-12 col-sm-4"
                inputRef={register('capitalSocial', defaultValidation)}
                errors={errors.capitalSocial}
            />
            <FormInput
                label="Ocupação Principal do MEI"
                containerClassName="col-12"
                selectOptions={ocupacoes}
                inputRef={register('ocupacaoPrincipal', defaultValidation)}
                errors={errors.ocupacaoPrincipal}
            />
            <FormInput
                label="Ocupação Secundária do MEI – OPCIONAL"
                containerClassName="col-12"
                selectOptions={ocupacoes}
                inputRef={register('ocupacaoSecundaria')}
            />
        </FormSection>
    )
}
