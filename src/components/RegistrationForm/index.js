import { useForm } from 'react-hook-form'
import styles from '../../styles/RegistrationForm.module.css'
import FormInput from '../FormInput'
import DadosPessoaisSection from './DadosPessoais'

const onSubmit = (data) => console.log(data)

export default function RegistrationForm(props) {
    const {register, handleSubmit, watch, formState} = useForm()
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <DadosPessoaisSection register={register} />
            <input type="submit" />
        </form>
    )
}
