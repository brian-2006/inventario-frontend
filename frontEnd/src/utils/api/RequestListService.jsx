import axios from 'axios'
const baseURL = import.meta.env.VITE_API_BASE_URL;
const BASE_URL = import.meta.env.VITE_PRODUCTION_URL

const GetListRequest = async (status) => {
    const response = await axios.get(`${BASE_URL}request/getRequestListByStatus/${status}/`)
    return response.data
}

export default GetListRequest;