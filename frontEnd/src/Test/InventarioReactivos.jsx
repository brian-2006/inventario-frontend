import CollapsibleTable from '../components/organisms/table/CollapsibleTable'
import {DmMainInventoryColumns, LoteRowsColums, TypeInventory} from '../json/TestData'
import axios from 'axios'
import {useState, useEffect} from 'react'
import useInventoryFilter from '../utils/hooks/useFilteredInventory'
//icono para el inventario vacio
import EmptyStatePage from '../components/molecules/EmptyState'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

const BASE_URL = import.meta.env.VITE_PRODUCTION_URL

const  InventarioReactivosTest = ({SearchTerm, startDate, endDate, onDownLoad})=> {
    const [loading, setLoading] = useState(false);
    const [rows, setRows] = useState([]);
    const [loteRows, setLoteRows] = useState([]); 

    const GetData = ()=>{
        setLoading(true)
        axios.get(`${BASE_URL}inventarioPrincipal/getInventoryRowsJson/${TypeInventory.Reactivo}/`)
        .then(response => {
        setLoading(false)
        const {rows, loteRows} = response.data;
        setRows(rows);
        setLoteRows(loteRows);
        onDownLoad(SearchTerm);
        })

        .catch(error => {
        console.log(error);
        setLoading(false)
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
           {loading?(
            <h1>Cargadno...</h1>
           ): rows > 0?( 
            <CollapsibleTable
            mainHeaders={DmMainInventoryColumns}
            mainRows={filteredData}
            lotHeaders = {LoteRowsColums}
            lotRows = {filteredLotRows}
            module= {TypeInventory.Reactivo}
            />
           ):(
            <EmptyStatePage 
                icon = {<RemoveShoppingCartIcon/>}
                title = "Inventario vació"
                description='Aún no se han agregado insumos a este inventario'
                color= "#27BBF5"
                height = "70vh"
            />
           )
            }
        </>
    )
}

export default InventarioReactivosTest;
