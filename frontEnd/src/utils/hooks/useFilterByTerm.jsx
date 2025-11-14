import {useState, useEffect} from 'react'

const useFilterByTerm = ({q, data})=>{
    const [filteredData, setFilteredData] = useState([]);

    useEffect(()=>{

        if (!q) {
            // Si no hay término de búsqueda, mostrar todos los datos
            setFilteredData(data);
            return;
        }

        const filtered = data.filter((item)=>{
            return item["Nombre medicamento"]?.toLowerCase().startsWith(q.toLowerCase()) || item["Nombre dm"]?.toLowerCase().startsWith(q.toLowerCase());
        })
        setFilteredData(filtered);
    }, [data, q])

    return filteredData;
}

export default useFilterByTerm;