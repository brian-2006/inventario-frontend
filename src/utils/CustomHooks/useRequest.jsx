import {useState} from 'react'
import { useNotifications } from '@toolpad/core/useNotifications';
import CreateRequest from '../api/RequestService'

const useCreateRequest = ()=>{
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    //estado para notificacion
    const notification = useNotifications()

    const executeCreate = async (payload, type_request, table, id_item, user_id, justification, username, rol, module) => {
        setLoading(true)
        try {
            const response = await CreateRequest({
                payload,
                type_request,
                table,
                id_item,
                user_id,
                justification,
                username,
                rol,
                module
            })
            notification.show('peticion creada', {
                severity: 'success',
                autoHideDuration: 3000,
            })
            return response
        } catch (error) {
            setError(error)
            notification.show('error al crear la peticion', {
                severity: 'error',
                autoHideDuration: 3000,
            })
            throw error
        } finally {
            setLoading(false)
        }
    }
    return {executeCreate, loading, error};
}

export default useCreateRequest;