import axios from 'axios'
import { useNotifications } from '@toolpad/core/useNotifications';
import {useState} from 'react'
const baseURL = import.meta.env.VITE_API_BASE_URL;


const useRequestDeny = () => {
    const [loadingDeny, setLoadingDeny] = useState(false)
    const [error, setError] = useState(null)
    //estado para notificacion
    const notification = useNotifications()

    const executeDeny = async (id_request, admin_user, note) => {
        setLoadingDeny(true)
        try {
            const response = await axios.post(`${baseURL}request/DenyRequest/`, {
                data: {
                    id_request: id_request,
                    admin_user: admin_user,
                    note: note
                }
            });
            notification.show('peticion denegada exitosamente', {
                severity: 'success',
                autoHideDuration: 3000,
            })
            return response
        } catch (error) {
            setError(error)
            notification.show('error al denegar la peticion', {
                severity: 'error',
                autoHideDuration: 3000,
            })
            throw error
        } finally {
            setLoadingDeny(false)
        }
    }
    return {executeDeny, loadingDeny, error};
}

export default useRequestDeny;