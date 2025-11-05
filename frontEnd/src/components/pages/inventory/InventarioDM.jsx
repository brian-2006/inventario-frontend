import InventarioLayout from '../../templates/inventory/MainInventory'
import ToolBarInventory from '../../organisms/toolbar/ToolBarInventory'
import InventarioDmTest from '../../../Test/InventarioDm.jsx'
import handleDownLoadInventory from '../../../utils/functions/DownloadInventoryExcel'
import {useState} from 'react'


const InventarioDMPage = () =>{

    const [search, setSearch] = useState('')
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [downLoad, setDownLoad] = useState(null)

    const tabsData = [
        {
            label: "Inventario",
            value: "inventario",
            content: (
            <InventarioDmTest
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
                    `reporte_inventario_dispositivos_medicos_${startDate}_${endDate}.xlsx`,
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
            title ="inventario de Dispositivos Medicos"
            tabsData={tabsData}
            
        />
    )
}

export default InventarioDMPage