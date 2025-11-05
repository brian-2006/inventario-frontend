import InventarioLayout from '../../templates/inventory/MainInventory'
import ToolBarInventory from '../../organisms/toolbar/ToolBarInventory'
import InventarioControlEspecialTest from '../../../Test/InventarioControlEspecial'
import handleDownLoadInventory from '../../../utils/functions/DownloadInventoryExcel'
import {useState} from 'react'

const InventarioControlEspecialPage = () =>{
    const [search, setSearch] = useState('')
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [downLoad, setDownLoad] = useState(null)

    const tabsData = [
        {
            label: "Inventario",
            value: "inventario",
            content: (
            <InventarioControlEspecialTest
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
                    `reporte_inventario_control_especial_${startDate}_${endDate}.xlsx`,
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
        title ="Inventario Control Especial"
        tabsData={tabsData}
        
        />
    )
}

export default InventarioControlEspecialPage;