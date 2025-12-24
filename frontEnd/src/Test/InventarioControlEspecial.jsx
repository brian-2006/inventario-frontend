import CollapsibleTable from '../components/organisms/table/CollapsibleTable'
import {MedicineMainInventoryColumns, LoteRowsColums, TypeInventory} from '../json/TestData'
import axios from 'axios'
import {useState, useEffect} from 'react'
import useInventoryFilter from '../utils/hooks/useFilteredInventory'

//componene para estado de carga
import GenericTableSkeleton from '../components/molecules/LoadingStateTable'

const BASE_URL = import.meta.env.VITE_PRODUCTION_URL

const  InventarioControlEspecialTest = ({SearchTerm, startDate, endDate, onDownLoad})=> {
    const [loading, setLoading] = useState(false)
    const [rows, setRows] = useState([]);       
    const [loteRows, setLoteRows] = useState([]); 

    const GetData = ()=>{
        setLoading(true)
        axios.get(`${BASE_URL}inventarioPrincipal/getInventoryRowsJson/${TypeInventory.ControlEspecial}/`)
        .then(response => {
        setLoading(false)
        const {rows, loteRows} = response.data;
        setRows(rows);
        setLoteRows(loteRows);
        //onDownLoad(loteRows);
        onDownLoad(SearchTerm)
        console.log(loteRows);

        // console.log(rows);
        // console.log(loteRows);
        })

        .catch(error => {
        console.log(error);
        setLoading(false);
        })
    }

    const { filteredData, filteredLotRows } = useInventoryFilter({
        rows,
        loteRows,
        searchTerm: SearchTerm,
        startDate,
        endDate,
        onDownLoad
    });


    useEffect(() => {
        GetData();
    }, []);


    

    return (
        <>
            {loading ? (
                <GenericTableSkeleton/>
            ): (
            <CollapsibleTable
            mainHeaders={MedicineMainInventoryColumns}
            mainRows={filteredData}
            lotHeaders = {LoteRowsColums}
            lotRows = {filteredLotRows}
            module= {TypeInventory.ControlEspecial}
            />
            )
            }
        </>
    )
}

export default InventarioControlEspecialTest;
