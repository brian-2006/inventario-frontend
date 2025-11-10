import InventarioLayout from '../../templates/inventory/MainInventory'
import ToolBarInventory from '../../organisms/toolbar/ToolBarInventory'
import InventarioMedicamentos from '../../../Test/InventarioMedicamentos'
import handleDownLoadInventory from '../../../utils/functions/DownloadInventoryExcel'
import handleDownLoadSemaforizacion from '../../../utils/functions/DownloadSemaforizacion'

//importamos tool bars
import ToolBarSemaforizacionMedicamentos from '../../organisms/toolbar/ToolBarSemaforizacion'

//se importan los tablas de contenido
import Home from '../Home'

import {useState} from 'react'

import axios from 'axios'

const InventarioMedicamentosPage = () =>{
    //estados del inventario
    const [search, setSearch] = useState('')
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [downLoad, setDownLoad] = useState(null)

    //estados de la semaforizacion
    const [searchSemaforizacion, setSearchSemaforizacion] = useState('')
    const [downLoadSemaforizacion, setDownLoadSemaforizacion] = useState(null) 



    const handlePost = async (url, data) => {
        try {
            const res = await axios.post(url, data);
            return res.data;
        } catch (e) {
            console.log(e);
        }
    };

    const tabsData = [
        {
            label: "Inventario",
            value: "inventario",
            content: (
            <InventarioMedicamentos
                SearchTerm={search}
                startDate={startDate}
                endDate={endDate}
                onDownLoad={setDownLoad}
            />
            ),
            toolbar: (
            <ToolBarInventory
                onSerach={setSearch}
                onDateStart={setStartDate}
                onDateEnd={setEndDate}
                downLoad={() =>
                handleDownLoadInventory(
                    "http://127.0.0.1:8000/inventarioPrincipal/exportarExcelInventario/",
                    startDate,
                    endDate,
                    `reporte_inventario_medicamentos_${startDate}_${endDate}.xlsx`,
                    downLoad
                )
                }
            />
            ),
        },
        {
            label: "Semaforizacion",
            value: "semaforizacion",
            content: (
                <Home 
                    searchTerm={searchSemaforizacion}
                    onDownload={setDownLoadSemaforizacion}
                    
                />
            ),

            toolbar: (
                <ToolBarSemaforizacionMedicamentos
                    onSearch={setSearchSemaforizacion}
                    downLoad={()=> handleDownLoadSemaforizacion("http://127.0.0.1:8000/inventarioPrincipal/reporteSemaforizacion/", downLoadSemaforizacion, "reporte_semaforizacion_medicamentos.xlsx")}
            />),
        },
        {
            label: "Reposicion",
            value: "reposicion",
            content: null,
            toolbar: "",
        },
        {
            label: "Gasto",
            value: "gasto",
            content: null,
            toolbar: "",
        },
    ];


    return(
        <InventarioLayout
            title ="inventario de medicamentos"
            toolbar = {<ToolBarInventory
                        onSerach={setSearch}
                        onDateStart={setStartDate}
                        onDateEnd={setEndDate}
                        downLoad = {()=> 
                            handleDownLoadInventory('http://127.0.0.1:8000/inventarioPrincipal/exportarExcelInventario/', 
                            startDate, 
                            endDate, 
                            `reporte_inventario_medicamentos_${startDate}_${endDate}.xlsx`, 
                            downLoad
                        )}
                    />}
            table = {<InventarioMedicamentos
                        SearchTerm={search}
                        startDate={startDate}
                        endDate={endDate}
                        onDownLoad={setDownLoad}
                    />}
            tabsData = {tabsData}
            
        />

        

    )
}

export default InventarioMedicamentosPage