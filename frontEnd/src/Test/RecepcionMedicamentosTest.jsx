import RecepcionTable from '../components/organisms/table/RecepcionTable';
import {RecepcionTencinaRows} from '../json/TestData';
import {useState,  useEffect} from 'react'
import axios from 'axios'
//importamos custom hook para rangos de fechas seleccionados
import useFilterDate from '../utils/hooks/useFilterDate'

const RecepcionTableTest = ({SearchTerm, startDate, endDate, onDownLoad }) => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);


    const acta = 'medicamentos'
    
    const q = (SearchTerm || '').toLowerCase();


    const GetData =  () =>{
        axios.get(`http://127.0.0.1:8000/recepcionTecnica/getRecpcionList/${acta}/`)
        .then(response => {
        setData(response.data || []);
        onDownLoad(response.data || []);
        // console.log(data);
        // console.log(typeof (data));
        })

        .catch(error => {
        console.log(error);
        })
    }


 // Filtrar por fecha y coincidencia al mismo tiempo
  useEffect(() => {
    if (!data.length) return;

    //  Filtramos por rango de fechas
    let result = useFilterDate({ startDate, endDate, data });

    // Luego filtramos por búsqueda de texto
    if (q) {
      result = result.filter(dato =>
        (dato?.nombre || '').toLowerCase().startsWith(q)
      );
    }

    // 3️⃣ Guardamos los datos filtrados
    setFilteredData(result);
    GetData()
  }, [q, startDate, endDate, data]);

  // Cargar datos al montar el componente
  useEffect(() => {
    GetData();
  }, []);

    

    return (
        <RecepcionTable headers={RecepcionTencinaRows.Medicamento} items={filteredData}/>
    )
}

export default RecepcionTableTest;