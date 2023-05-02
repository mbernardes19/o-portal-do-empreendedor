import FormInput from '../FormInput'
import FormSection from '../FormSection'

export default function OutrasInformacoes(props) {
    const { formHandlers: {setError, register, formState: { errors }} } = props

    const defaultValidation = {
        required: 'Campo obrigatório'
    }

    return <FormSection title="OUTRAS INFORMAÇÕES PESSOAIS">
        <FormInput
            label="Endereço Residencial Diferente do Comercial?"
            containerClassName="col-12 col-sm-4"
            inputRef={register('residencialIgualComercial', defaultValidation)}
        />
        <FormInput
            label="Tem CNH (emitida a partir de 2018)?"
            containerClassName="col-12 col-sm-4"
            inputRef={register('cnhNova', defaultValidation)}
        />
        <FormInput
            label="Li e aceito os termos e condições e o aviso de privacidade."
            type="checkbox"
            containerClassName="col-12 col-sm-4"
            inputRef={register('termosECondicoes', defaultValidation)}
        />
        <FormInput
            label="Concordo que os dados fornecidos acima serão usados de acordo com a Lei Geral de Proteção de Dados Pessoais, Lei nº 13.709/2018, e que a contratação deste serviço é opcional, privada e remunerada."
            type="checkbox"
            containerClassName="col-12 col-sm-4"
            inputRef={register('lgpd', defaultValidation)}
        />
    </FormSection>
}
