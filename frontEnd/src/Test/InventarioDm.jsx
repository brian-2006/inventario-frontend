import CollapsibleTable from '../components/organisms/table/CollapsibleTable'
import {DmMainInventoryColumns, LoteRowsColums, TypeInventory} from '../json/TestData'
import axios from 'axios'
import {useState, useEffect} from 'react'
import useInventoryFilter from '../utils/hooks/useFilteredInventory'

const  InventarioDmTest = ({SearchTerm, startDate, endDate, onDownLoad})=> {

    const [rows, setRows] = useState([]);       
    const [loteRows, setLoteRows] = useState([]); 


    const GetData = ()=>{
        axios.get(`http://127.0.0.1:8000/inventarioPrincipal/getInventoryRowsJson/${TypeInventory.Dm}/`)
        .then(response => {
        const {rows, loteRows} = response.data;
        setRows(rows);
        setLoteRows(loteRows);
        onDownLoad(loteRows);
        console.log(loteRows);

        // console.log(rows);
        // console.log(loteRows);
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

    

    return (
        <>
            <CollapsibleTable
            mainHeaders={DmMainInventoryColumns}
            mainRows={filteredData}
            lotHeaders = {LoteRowsColums}
            lotRows = {filteredLotRows}
            />
        </>
    )
}

export default InventarioDmTest;
