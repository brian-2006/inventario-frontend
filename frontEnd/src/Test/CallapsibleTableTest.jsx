import CollapsibleTable from '../components/organisms/table/CollapsibleTable'
import {MedicineMainInventoryColumns, LoteRowsColums, TypeInventory} from '../json/TestData'
import axios from 'axios'
import {useState, useEffect} from 'react'

const  CallapsibleTableTest = ()=> {

    const [rows, setRows] = useState([]);       
    const [loteRows, setLoteRows] = useState([]); 

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/inventarioPrincipal/getInventoryRowsJson/${TypeInventory.Medicamentos}/`)
        .then(response => {
        const {rows, loteRows} = response.data;
        setRows(rows);
        setLoteRows(loteRows);

        console.log(rows);
        console.log(loteRows);
        })

        .catch(error => {
        console.log(error);
        })
    }, []);

    

    return (
        <>
            <CollapsibleTable
            mainHeaders={MedicineMainInventoryColumns}
            mainRows={rows}
            lotHeaders = {LoteRowsColums}
            lotRows = {loteRows}
            />
        </>
    )
}

export default CallapsibleTableTest
