import axios from 'axios'

// enpoint metodo create
function Create (URL, data) {

    const response = axios.post(URL, data)
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error)
    })

    return response
}

// enpoint metodo update
function UpdateById  (URL, id, data)  {
    const response = axios.put(`${URL}${id}`, data)
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error)
    })

    return response
}

//endpoint metodo consultar

function GetById  (URL, id)  {
    
    const response = axios.get(`${URL}${id}`)
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error)
    })

    return response
}

function GetList  (URL)  {

    const response = axios.get(URL)
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error)
    })

    return response
}

//endpoint para delete

function DeleteById  (URL, id)  {
    const response = axios.delete(`${URL}${id}`)
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error)
    })

    return response
}