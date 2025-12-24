import RecepcionTable from '../components/organisms/table/RecepcionTable';
import {RecepcionTencinaRows} from '../json/TestData';
import {useState,  useEffect} from 'react'
import axios from 'axios'
import useFilterDate from '../utils/hooks/useFilterDate'
//importamos skeleton de carga
import GenericTableSkeleton from '../components/molecules/LoadingStateTable'

const BASE_URL = import.meta.env.VITE_PRODUCTION_URL

const RecepcionTableTest  = ({SearchTerm, startDate, endDate, onDownLoad }) => {
    //definimos estado de carga
    const[loading, setLoading] = useState(false)

    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const acta = 'dispositivos medicos'

    const q = (SearchTerm || '').toLowerCase();

    const GetData = async () => {
        try {
            setLoading(true)
            const response = await axios.get(`${BASE_URL}recepcionTecnica/getRecpcionList/${acta}/`);
            setData(response.data);
            onDownLoad(response.data);
            //response? setLoading(false): setLoading(true)
            setLoading(false)
            //console.log(response.data);
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    useEffect(()=>{
        if (!data.length) return;

    // 1️ Filtramos por rango de fechas
    let result = useFilterDate({ startDate, endDate, data });

    // 2️ Luego filtramos por búsqueda de texto
    if (q) {
      result = result.filter(dato =>
        (dato?.nombre || '').toLowerCase().startsWith(q)
      );
    }

    // 3️ Guardamos los datos filtrados
    setFilteredData(result);
    //GetData()
    }, [q, startDate, endDate, data])

    useEffect(() => {
        GetData()
    }, []);
    

    return (
    <>
        {loading? (
            <GenericTableSkeleton/>
        ):(
            <RecepcionTable headers={RecepcionTencinaRows.Dm} items={filteredData}/>
        )
        }
    </>
    )
}

export default RecepcionTableTest;