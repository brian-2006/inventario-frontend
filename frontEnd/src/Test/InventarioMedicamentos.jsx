import CollapsibleTable from '../components/organisms/table/CollapsibleTable'
import {MedicineMainInventoryColumns, LoteRowsColums, TypeInventory} from '../json/TestData'
import axios from 'axios'
import {useState, useEffect} from 'react'
import useInventoryFilter from '../utils/hooks/useFilteredInventory'

const BASE_URL = import.meta.env.VITE_PRODUCTION_URL

const  InventarioMedicamentos = ({SearchTerm, startDate, endDate, onDownLoad})=> {

    const [rows, setRows] = useState([]);       
    const [loteRows, setLoteRows] = useState([]);


    const GetData = ()=>{
        axios.get(`${BASE_URL}inventarioPrincipal/getInventoryRowsJson/${TypeInventory.Medicamentos}/`)
        .then(response => {
        const {rows, loteRows} = response.data;
        setRows(rows);
        setLoteRows(loteRows);
        onDownLoad(loteRows);
        console.log(loteRows)
        })

        .catch(error => {
        console.log(error);
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

    console.log(`lotes rows filtrados ${filteredLotRows}`)

    

    return (
        <>
            <CollapsibleTable
            mainHeaders={MedicineMainInventoryColumns}
            mainRows={filteredData}
            lotHeaders = {LoteRowsColums}
            lotRows = {filteredLotRows}
            module = {TypeInventory.Medicamentos}
            />
        </>
    )
}

export default InventarioMedicamentos;
