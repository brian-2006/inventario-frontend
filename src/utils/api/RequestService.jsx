import axios from 'axios';
const baseURL = import.meta.env.VITE_API_BASE_URL;
const BASE_URL = import.meta.env.VITE_PRODUCTION_URL

const CreateRequest = async ({
    payload, 
    type_request, 
    table, 
    id_item, 
    user_id, 
    justification,
    username,
    rol,
    module
}) => {

    const body = {
        requesteruser: user_id,
        justification: justification,
        targettable: table,
        target_id: id_item,
        actiontype: type_request,
        requestpayload: payload,
        username: username,
        rol: rol,
        module: module
    }
    console.log(body)
    const response = await axios.post(`${BASE_URL}request/createRequest/`, body);
    return response;


};

export default CreateRequest;