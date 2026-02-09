import {useState} from 'react'
import GetListRequest from '../api/RequestListService'
import { useNotifications } from '@toolpad/core/useNotifications';


const useRequestList = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const notification = useNotifications()
    

    const GetList= async(status)=>{
        setLoading(true)
        try{
            const response = await GetListRequest(status)
            notification.show(<strong>Solicitudes {status} cargadas</strong>, {
                severity: 'success',
                autoHideDuration: 3000,
            })
            return response
        }catch(error){
            setError(error)
            notification.show(<strong>Error al cargar solicitudes {status}</strong>, {
                severity: 'error',
                autoHideDuration: 3000,
            })
        }
        finally{
            setLoading(false)
        }
    }
    return {GetList, loading, error}

}

export default useRequestList;