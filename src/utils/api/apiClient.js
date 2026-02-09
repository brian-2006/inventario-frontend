import axios from 'axios'
const baseURL = import.meta.env.VITE_API_BASE_URL;
const BASE_URL = import.meta.env.VITE_PRODUCTION_URL



export const handleGet = async (Url, setData) =>{
    try{
        const response = await axios.get(`${BASE_URL}${Url}`)
        setData(response.data)
    }catch(error){
        console.log(error)
    }
}

export const handlePost = async (url, data) =>{
    try{
        const response = await axios.post(
            `${BASE_URL}${url}`,
            data,
            {headers: {"Content-Type": "application/json"}}
        )
        return response
    }catch(error){
        console.log(error)
    }
}