import FormInput from '../FormInput'
import FormSection from '../FormSection'
import { cpf } from 'cpf-cnpj-validator'
import email from 'email-validator'

export default function DadosPessoaisSection(props) {
    const { formHandlers: {setError, register, formState: { errors }} } = props

    const defaultValidation = {
        required: 'Campo obrigatório'
    }

    return <FormSection title="DADOS PESSOAIS">
        <FormInput
            label="CPF"
            containerClassName="col-12 col-sm-6"
            inputRef={register('cpf', {
                ...defaultValidation,
                validate: {
                    cpfIsValid: value => cpf.isValid(value) || 'CPF inválido'
                }
            })}
            errors={errors.cpf}
            onBlur={
                (e) => !cpf.isValid(e.target.value) &&
                    setError('cpf', { message: 'CPF inválido', type: 'custom' })
            }
        />
        <FormInput
            label="Nome Completo"
            containerClassName="col-12 col-sm-6"
            inputRef={register('nomeCompleto', defaultValidation)}
            errors={errors.nomeCompleto}
        />
        <FormInput
            label="Telefone"
            containerClassName="col-12 col-sm-6"
            inputRef={register('telefone', {required: 'Campo obrigatório'})}
            errors={errors.telefone}
        />
        <FormInput
            label="E-mail"
            containerClassName="col-12 col-sm-6"
            inputRef={register('email', {
                ...defaultValidation,
                validate: {
                    emailIsValid: value => email.validate(value) || 'Email inválido'
                }
            })}
            errors={errors.email}
            onBlur={
                (e) => !email.validate(e.target.value) &&
                    setError('email', { message: 'Email inválido', type: 'custom' })
            }

        />
        <FormInput
            label="RG"
            containerClassName="col-12 col-sm-4"
            inputRef={register('rg', defaultValidation)}
            errors={errors.telefone}
        />
        <FormInput
            label="Orgão Expedidor RG"
            containerClassName="col-12 col-sm-4"
            selectOptions={[
                'RJ',
                'MG',
                'SP'
            ]}
            inputRef={register('orgaoExpedidorRg', defaultValidation)}
            errors={errors.orgaoExpedidorRg}
        />
        <FormInput
            label="UF RG"
            containerClassName="col-12 col-sm-4"
            selectOptions={[
                'RJ',
                'MG',
                'SP'
            ]}
            inputRef={register('ufRg', defaultValidation)}
            errors={errors.ufRg}
        />
        <FormInput
            label="Data de Nascimento"
            containerClassName="col-12 col-sm-4"
            type="date"
            inputRef={register('dataNascimento', defaultValidation)}
            errors={errors.dataNascimento}
        />
        <FormInput
            label="Nome Completo da Mãe"
            containerClassName="col-12 col-sm-8"
            inputRef={register('nomeCompletoMae', defaultValidation)}
            errors={errors.nomeCompletoMae}
        />
    </FormSection>
}
