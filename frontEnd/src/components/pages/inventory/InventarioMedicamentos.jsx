import InventarioLayout from '../../templates/inventory/MainInventory'
import ToolBarInventory from '../../organisms/toolbar/ToolBarInventory'
import InventarioMedicamentos from '../../../Test/InventarioMedicamentos'
import handleDownLoadInventory from '../../../utils/functions/DownloadInventoryExcel'

import {useState} from 'react'

const InventarioMedicamentosPage = () =>{

    const [search, setSearch] = useState('')
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [downLoad, setDownLoad] = useState(null)

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
            content: null,
            toolbar: "",
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