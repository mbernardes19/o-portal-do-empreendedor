import FormInput from '../FormInput'
import ocupacoesPrincipais from '../../../data/ocupacoes-principais-mei'
import FormSection from '../FormSection'
import styles from '../../styles/FormSection.module.css'

const ocupacoes = ocupacoesPrincipais.map(ocup => `${ocup.OCUPACAO} ${ocup.CNAE}`)

export default function FormaAtuacao(props) {
    const { formHandlers: {setError, register, formState: { errors }} } = props

    const defaultValidation = {
        required: 'Escolha pelo menos uma forma de atuação'
    }

    return (
        <FormSection
            title="FORMA DE ATUAÇÃO"
        >
            {errors && errors.formaAtuacao && <p className={styles.error}>{errors.formaAtuacao.message}</p>}
            <FormInput
                type="checkbox"
                label="Estabelecimento fixo"
                containerClassName="col-8"
                inputRef={register('formaAtuacao', defaultValidation)}
                value="Estabelecimento fixo"
            />
            <FormInput
                type="checkbox"
                label="Internet"
                containerClassName="col-8"
                inputRef={register('formaAtuacao', defaultValidation)}
                value="Internet"
            />
            <FormInput
                type="checkbox"
                label="Em local fixo fora da loja"
                containerClassName="col-8"
                inputRef={register('formaAtuacao',defaultValidation)}
                value="Em local fixo fora da loja"
            />
            <FormInput
                type="checkbox"
                label="Correio"
                containerClassName="col-8"
                inputRef={register('formaAtuacao', defaultValidation)}
                value="Correio"
            />
            <FormInput
                type="checkbox"
                label="Porta a porta, postos móveis ou por ambulantes"
                containerClassName="col-8"
                inputRef={register('formaAtuacao', defaultValidation)}
                value="Porta a porta, postos móveis ou por ambulantes"
            />        
        </FormSection>
    )
}
