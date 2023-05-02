import { useForm } from 'react-hook-form'
import DadosPessoaisSection from './DadosPessoais'
import InformacoesMEI from './InformacoesMEI'
import FormaAtuacao from './FormaAtuacao'
import EnderecoComercialSection from './EnderecoComercial'

export default function RegistrationForm() {
    const { handleSubmit, ...formHandlers } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        console.log(errors)
    }

    const onInvalid = (data) => {
        console.log('ERRRORRRR', formHandlers.formState.errors)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
            <DadosPessoaisSection formHandlers={formHandlers} />
            <InformacoesMEI formHandlers={formHandlers} />
            <FormaAtuacao formHandlers={formHandlers} />
            <EnderecoComercialSection formHandlers={formHandlers} />
            <input type="submit" />
        </form>
    )
}
