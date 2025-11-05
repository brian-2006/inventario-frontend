import InventarioLayout from '../../templates/inventory/MainInventory'
import ToolBarInventory from '../../organisms/toolbar/ToolBarInventory'
import InventarioRespiratorioTest from '../../../Test/InventarioRespiratorio'
import handleDownLoadInventory from '../../../utils/functions/DownloadInventoryExcel'
import {useState} from 'react'



const InventarioRespiratorioPage = () =>{

    //estados de inventario
    const [search, setSearch] = useState('')
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [downLoad, setDownLoad] = useState(null)

    //estados semaforizacion

    const tabsData = [
        {
            label: "Inventario",
            value: "inventario",
            content: (
            <InventarioRespiratorioTest
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
                    "http://127.0.0.1:8000/inventarioPrincipal/exportarExcelInventarioDM/",
                    startDate,
                    endDate,
                    `reporte_inventario_Respiratorio_${startDate}_${endDate}.xlsx`,
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
            label: "Gastos",
            value: "gastos",
            content: null,
            toolbar: "",
        },
    ];



    return(
        <InventarioLayout
            title ="Inventario respiratorio"
            tabsData={tabsData}
        
        />
    )
}

export default InventarioRespiratorioPage;