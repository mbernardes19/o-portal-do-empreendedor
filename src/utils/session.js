import { v4 as uuidv4 } from 'uuid'

export const setSessionId = () => {
    if (!localStorage.getItem('session-id')) {
        localStorage.setItem('session-id', uuidv4())
    }
}

export const getSessionId = () => {
    const sessionId = localStorage.getItem('session-id')

    if (!sessionId) {
        const newSessionId = uuidv4()
        localStorage.setItem('session-id', newSessionId)
        return newSessionId
    }

    return sessionId
}

export const getFormData = async () => {
    let formData = sessionStorage.getItem(getSessionId())
    if (!formData) {
        const docSnap = await getDoc(doc(db, 'pedidos-mei', getSessionId()))
        if (docSnap.exists()) {
            formData = docSnap.data()
        }
    } else {
        formData = JSON.parse(formData)
    }

    const parsedFormData = {
        pedido: JSON.parse(formData.pedido),
        pagamento: JSON.parse(formData.pagamento)
    }

    return parsedFormData
}