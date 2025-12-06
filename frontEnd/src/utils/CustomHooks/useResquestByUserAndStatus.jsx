import axios from 'axios'
import { useNotifications } from '@toolpad/core/useNotifications';
import {useState} from 'react'
const baseURL = import.meta.env.VITE_API_BASE_URL;
const BASE_URL = import.meta.env.VITE_PRODUCTION_URL

import {useAuth} from '../../providers/AuthProvider'



const useRequestByUserAndStatus = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    //estado para notificacion
    const notification = useNotifications()
    //datos de usuario
    const {user} = useAuth()

    const exCuteUserRequestList = async (id_user, status) => {
        setLoading(true)
        // const data ={
        //     id_user: id_user,
        //     status: status
        // }
        try {
            const response = await axios.get(`${BASE_URL}request/getRequestListByUserAndStatus/${status}/${id_user}/`);
            notification.show(`peticiones ${JSON.stringify(status)} de ${JSON.stringify(user.userInformation.fullName)}`, {
                severity: 'success',
                autoHideDuration: 3000,
            })
            return response
        } catch (error) {
            setError(error)
            notification.show('error al cargar las peticioenes', {
                severity: 'error',
                autoHideDuration: 3000,
            })
            throw error
        } finally {
            setLoading(false)
        }
    }
    return {exCuteUserRequestList, loading, error};
}

export default useRequestByUserAndStatus;