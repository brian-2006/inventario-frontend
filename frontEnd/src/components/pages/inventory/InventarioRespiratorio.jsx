//plantilla de interfaz
import InventarioLayout from '../../templates/inventory/MainInventory'

//componentes inventario
import ToolBarInventory from '../../organisms/toolbar/ToolBarInventory'
import InventarioRespiratorioTest from '../../../Test/InventarioRespiratorio'

//funciones busquesa y descarga
import handleDownLoadInventory from '../../../utils/functions/DownloadInventoryExcel'
import handleDownLoadSemaforizacion from '../../../utils/functions/DownloadSemaforizacion'

//hooks
import {useState} from 'react'

//componetes de semaforizacion
import SemaforizacionRespiratorioPage from '../semaforizacion/SemaforizacionRespiratorio'
import ToolBarSemaforizacion from '../../organisms/toolbar/ToolBarSemaforizacion'


const InventarioRespiratorioPage = () =>{

    //estados de inventario
    const [search, setSearch] = useState('')
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [downLoad, setDownLoad] = useState(null)

    //estados semaforizacion
    const [downloadSemaforizacion, setDownLoadSemaforizacion] = useState(null)
    const [searchSemaforizacion, setSearchSemaforizacion] = useState('')

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
            content: (
                <SemaforizacionRespiratorioPage
                    searchTerm={searchSemaforizacion}
                    onDownload={setDownLoadSemaforizacion}
                />
            ),
            toolbar: (
                <ToolBarSemaforizacion
                onSearch={setSearchSemaforizacion}
                downLoad = {()=> handleDownLoadSemaforizacion(
                    'http://127.0.0.1:8000/inventarioPrincipal/reporteSemaforizacionDM/',
                    downloadSemaforizacion,
                    'reporte_vencimientos_respiratorios.xlsx'
                )}
                />
            ),
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