import RecepcionTable from '../components/organisms/table/RecepcionTable';
import {RecepcionTencinaRows} from '../json/TestData';
import {useState,  useEffect} from 'react'
import axios from 'axios'

const RecepcionTableTest = () => {

    const [data, setData] = useState([{}])
    const acta = 'medicamentos'

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/recepcionTecnica/getRecpcionList/${acta}/`)
        .then(response => {
        setData(response.data);
        console.log(data);
        console.log(typeof (data));
        })

        .catch(error => {
        console.log(error);
        })

    }, []);
    

    return (
        <RecepcionTable headers={RecepcionTencinaRows.Medicamento} items={data}/>
    )
}

export default RecepcionTableTest;