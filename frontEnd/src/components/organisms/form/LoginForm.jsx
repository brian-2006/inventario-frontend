import { useNotifications } from '@toolpad/core/useNotifications';
import { encode} from 'base-64'
//import jwt_decode from 'jwt-decode'
import { useNavigate } from "react-router-dom";
//libreria para llamados http
import axios from "axios";

import {useState} from 'react'
import { useAuth } from '../../../providers/AuthProvider'

import LoginForm from '../../molecules/form/LoginForm'

const FormLogin = () =>{
    const navigate = useNavigate()
    const notifications = useNotifications()
    const { login } = useAuth()
    const [formData, setFormData] = useState({user: '', password: ''})
    const [loading, setLoading] = useState(false)

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async(e) =>{
    e.preventDefault()
    setLoading(true)
    try{
      
        const payload = { email: formData.user, password: encode(formData.password) };
        //console.log(`contraseña limpia: ${payload.password}, contraseña codificada: ${encode(payload.password )}`)
        const response = await axios.post('https://judie-froggy-nonsportingly.ngrok-free.dev/angeles-application-service/api/v1/users/login', 
            payload,
            { headers: { 'Content-Type': 'application/json' } }
        ).then((response) => {
            console.log(response)
            if (response.status === 200){
                const { token, refreshToken } = response.data || {}
                if (token) {
                  login({ token, refreshToken })
                }
                navigate('/inventario/medicamentos')
                notifications.show('sesion autenticada',{
                    severity: 'success',
                    autoHideDuration: 3000,
                })
            }
            else{
                notifications.show("error al autenticar usuario",{ 
                severity: 'error',
                autoHideDuration: 3000,
            })
            }
        }).catch((error) => {
            console.log(error)
            notifications.show(`${error?.response?.data?.error || 'Error de conexion'}. Estado: ${error?.response?.status || 'N/A'}`,{ 
            severity: 'error',
            autoHideDuration: 3000,
        })
        })
    } catch(error){
        console.log(error)
        notifications.show("error al enviar los datos al la peticion",{ 
        severity: 'error',
        autoHideDuration: 3000,
      })
    } finally {
      setLoading(false)
    }
  }

  return(
    <LoginForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      loading={loading}
    />
  )
}

export default FormLogin;
  
  
  
  
  
  