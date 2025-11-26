import axios from 'axios'
const baseURL = import.meta.env.VITE_API_BASE_URL;


export const handleGet = async (Url, setData) =>{
    try{
        const response = await axios.get(`${baseURL}${Url}`)
        setData(response.data)
    }catch(error){
        console.log(error)
    }
}

export const handlePost = async (url, data) =>{
    try{
        const response = await axios.post(
            `${baseURL}${url}`,
            data,
            {headers: {"Content-Type": "application/json"}}
        )
        return response
    }catch(error){
        console.log(error)
    }
}