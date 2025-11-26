import axios from 'axios';
const baseURL = import.meta.env.VITE_API_BASE_URL;

const CreateRequest = async ({
    payload, 
    type_request, 
    table, 
    id_item, 
    requester_user, 
    justification
}) => {

    const body = {
        requesteruser: requester_user,
        justification: justification,
        targettable: table,
        target_id: id_item,
        actiontype: type_request,
        requestpayload: payload
    }
    console.log(body)
    const response = await axios.post(`${baseURL}request/createRequest/`, body);
    return response;


};

export default CreateRequest;