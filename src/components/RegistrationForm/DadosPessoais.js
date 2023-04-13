import FormInput from '../FormInput'

export default function DadosPessoaisSection(props) {
    const {register} = props

    return (
        <div className="row">
            <FormInput
                label="CPF"
                containerClassName="col-6"
                {...register('cpf', {required: true})}
            />
            <FormInput
                label="Nome Completo"
                containerClassName="col-6"
                {...register('nomeCompleto', {required: true})}
            />
            <FormInput
                label="Telefone"
                containerClassName="col-6"
                {...register('telefone', {required: true})}
            />
            <FormInput
                label="E-mail"
                containerClassName="col-6"
                {...register('email', {required: true})}
            />
            <FormInput
                label="RG"
                containerClassName="col-4"
                {...register('rg', {required: true})}
            />
            <FormInput
                label="Orgão Expedidor RG"
                containerClassName="col-4"
                selectOptions={[
                    'RJ',
                    'MG',
                    'SP'
                ]}
                {...register('orgaoExpedidorRg', {required: true})}
            />
            <FormInput
                label="UF RG"
                containerClassName="col-4"
                selectOptions={[
                    'RJ',
                    'MG',
                    'SP'
                ]}
                {...register('ufRg', {required: true})}
            />
            <FormInput
                label="Data de Nascimento"
                containerClassName="col-4"
                type="date"
                {...register('ufRg', {required: true})}
            />
            <FormInput
                label="Nome Completo da Mãe"
                containerClassName="col-8"
                {...register('nomeCompletoMae', {required: true})}
            />                
        </div>
    )
}
