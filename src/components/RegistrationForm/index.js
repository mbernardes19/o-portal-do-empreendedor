import { useForm } from 'react-hook-form'
import DadosPessoaisSection from './DadosPessoais'
import InformacoesMEI from './InformacoesMEI'
import FormaAtuacao from './FormaAtuacao'
import EnderecoComercialSection from './EnderecoComercial'
import styles from '../../styles/Form.module.css'
import { db } from '../../utils/firebase'
import { setDoc, doc } from 'firebase/firestore/lite'
import { getSessionId } from '../../utils/session'

export default function RegistrationForm() {
    const { handleSubmit, ...formHandlers } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        setDoc(doc(db, 'pedidos-mei', getSessionId()), {
            pedido: JSON.stringify(data),
            pagamento: JSON.stringify({
                status: 'PENDENTE'
            })
        })
        sessionStorage.setItem(getSessionId(), JSON.stringify({
            pedido: JSON.stringify(data),
            pagamento: JSON.stringify({
                status: 'PENDENTE'
            })
        }))
    }

    const onInvalid = (data) => {
        console.log('ERRRORRRR', formHandlers.formState.errors)
    }


    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit, onInvalid)}>
            <DadosPessoaisSection formHandlers={formHandlers} />
            <InformacoesMEI formHandlers={formHandlers} />
            <FormaAtuacao formHandlers={formHandlers} />
            <EnderecoComercialSection formHandlers={formHandlers} />
            <input type="submit" />
        </form>
    )
}
