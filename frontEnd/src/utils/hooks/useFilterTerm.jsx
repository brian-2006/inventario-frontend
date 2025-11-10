import { RowingTwoTone } from '@mui/icons-material';
import {useState, useEffect} from 'react'

const useFilterTerm = ({SearchTerm, data}) =>{
    const [filteredData, setFilteredData] = useState(data);
    
    const q = (SearchTerm || '').toLowerCase();
    

    useEffect(() => {
        const filtered = data.filter((row)=>{
            const nombre = (row.id_presentacion__id_medicamento__nombregenerico || '').toLowerCase() 
            const presentacion = (row.id_presentacion__presentacioncomercial || '').toLowerCase()
            const concentracion =( row.id_presentacion__concentracion || '').toLowerCase()
            const formaFarmaceutica = (row.id_presentacion__formulafarmaceutica || '').toLowerCase()

            let nombreCompleto = `${nombre} ${presentacion} ${concentracion} ${formaFarmaceutica}`;

            return nombreCompleto.toLowerCase().startsWith(q)
        })
        setFilteredData(filtered);
    }, [data, SearchTerm])

    return filteredData;
}

export default useFilterTerm;