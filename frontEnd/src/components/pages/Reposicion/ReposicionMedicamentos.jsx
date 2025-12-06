//filtos de tool bar 
import useFilterDate from '../../../utils/hooks/useFilterDate'
import useFilterByTerm from '../../../utils/hooks/useFilterByTerm'

//se importan los componentes
import ReposicionMedicamentosTable from '../../organisms/table/ReposicionMedicamentosTable'
//se importan hooks
import {useState, useEffect} from 'react'

//importamos librerias de llamados a la api
import axios from 'axios'
const BASE_URL = import.meta.env.VITE_PRODUCTION_URL

const ReposicionMedicamentosPage = ({searchTerm, dateStart, dateEnd, onDownload}) =>{

    const id_inventory = 9

    const [rawData, setRawData] = useState([])
    const [data, setData] = useState([])

    const GetData = async()=>{
        await axios.get(`${BASE_URL}/inventarioPrincipal/reposicion/${id_inventory}/`)
        .then(response => {
            setRawData(response.data);
            setData(response.data);
            //console.log(response.data)
            onDownload(response.data)
        })
        .catch(error => {
            console.log(error);
        })

    }

    useEffect(()=>{
        GetData()
    }, [])

    useEffect(()=>{

        // 1) Filtrar por coincidencia (solo si hay término)
        const q = (searchTerm || '').toLowerCase();
        const byTerm = q
          ? rawData.filter(item =>
              ((item["Nombre medicamento"] || '').toLowerCase().startsWith(q)) ||
              ((item["Nombre dm"] || '').toLowerCase().startsWith(q))
            )
          : rawData;

        // 2) Filtrar por rango de fechas (hook ya retorna sin filtrar si falta alguna fecha)
        const byDate = useFilterDate({
          startDate: dateStart,
          endDate: dateEnd,
          data: byTerm,
        });

        console.log(byDate)

        setData(byDate);
        onDownload(byDate);
    }, [searchTerm, dateStart, dateEnd, rawData])

    return(
        <>
        <h1>Reposicion medicamentos</h1>
        <ReposicionMedicamentosTable data = {data}/>
        </>
    )
}

export default ReposicionMedicamentosPage;