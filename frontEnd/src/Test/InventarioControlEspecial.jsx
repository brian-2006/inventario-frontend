import CollapsibleTable from '../components/organisms/table/CollapsibleTable'
import {DmMainInventoryColumns, LoteRowsColums, TypeInventory} from '../json/TestData'
import axios from 'axios'
import {useState, useEffect} from 'react'

const  InventarioControlEspecialTest = ()=> {

    const [rows, setRows] = useState([]);       
    const [loteRows, setLoteRows] = useState([]); 

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/inventarioPrincipal/getInventoryRowsJson/${TypeInventory.ControlEspecial}/`)
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
            mainHeaders={DmMainInventoryColumns}
            mainRows={rows}
            lotHeaders = {LoteRowsColums}
            lotRows = {loteRows}
            />
        </>
    )
}

export default InventarioControlEspecialTest;
