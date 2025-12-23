//url de prodcuccion
const BASE_URL = import.meta.env.VITE_PRODUCTION_URL

//nombre del inventario
import {TypeInventory,IdInventory} from '../../../json/TestData'

//template de layout
import InventarioLayout from '../../templates/inventory/MainInventory'

//componentes de inventario
import ToolBarInventory from '../../organisms/toolbar/ToolBarInventory'
import InventarioReactivosTest from '../../../Test/InventarioReactivos'

//componentes de la semaforizacióm
import SemaforizacionReactivosPage from '../semaforizacion/SemaforizacionReactivos'
import ToolBarSemaforizacion from '../../organisms/toolbar/ToolBarSemaforizacion'

//componentes reposicion
import ReposicionReactivoPage from '../Reposicion/ReposicionReactivo'
import ToolbarReposicion from '../../organisms/toolbar/ToolbarReposicion'

//funciones para filtrado de datos y descarga de cada componente
import handleDownLoadInventory from '../../../utils/functions/DownloadInventoryExcel'
import handleDownLoadSemaforizacion from '../../../utils/functions/DownloadSemaforizacion'

//hooks 
import {useState} from 'react'


const InventarioReactivoPage = () =>{

    //estados de inventario
    const [search, setSearch] = useState('')
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [downLoad, setDownLoad] = useState(null)

    //estados semaforizacion
    const [downloadSemaforizacion, setDownLoadSemaforizacion] = useState(null)
    const [searchSemaforizacion, setSearchSemaforizacion] = useState('')

    //estados de reposicion
    const [searchReposicion, setSearchReposicion] = useState("")
    const [startDateReposicion, setStartDateReposicion]= useState(null)
    const [endDateReposicion, setEndDateReposicion] = useState(null)
    const [downloadReposicion, setDownloadReposicion] = useState(null)

    const tabsData = [
        {
            label: "Inventario",
            value: "inventario",
            content: (
            <InventarioReactivosTest
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
                    `${BASE_URL}inventarioPrincipal/exportarExcelInventarioDM/`,
                    startDate,
                    endDate,
                    `reporte_inventario_dispositivos_medicos_${startDate}_${endDate}.xlsx`,
                    downLoad,
                    TypeInventory.Reactivo
                )
                }
            />
            ),
        },
        {
            label: "Semaforizacion",
            value: "semaforizacion",
            content: (
                <SemaforizacionReactivosPage
                    searchTerm={searchSemaforizacion}
                    onDownload={setDownLoadSemaforizacion}
                />
            ),
            toolbar: (
                <ToolBarSemaforizacion
                onSearch={setSearchSemaforizacion}
                downLoad = {()=> handleDownLoadSemaforizacion(
                    `${BASE_URL}inventarioPrincipal/reporteSemaforizacionDM/${IdInventory.Reactivos}`,
                    'reporte_vencimientos_reactivos.xlsx'
                )}
                />
            ),
        },
        {
            label: "Reposicion",
            value: "reposicion",
            content: (
                <ReposicionReactivoPage
                searchTerm={searchReposicion}
                dateStart={startDateReposicion}
                endDate = {endDateReposicion}
                onDownload={setDownloadReposicion}
                />
            ),
            toolbar: (
                <ToolbarReposicion
                    onSearch={setSearchReposicion}
                    onDateStart={setStartDateReposicion}
                    onDateEnd={setEndDateReposicion}
                    download={()=> 
                        handleDownLoadSemaforizacion(
                        `${BASE_URL}inventarioPrincipal/reporteReposicionDM/${IdInventory.Reactivos}`,
                        downloadReposicion,
                        'reporte_reposicion_reactivos.xlsx'
                    )}
                />
            ),
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
        title ="INVENTARIO REACTIVOS"
        tabsData={tabsData}
        />
    )
}

export default InventarioReactivoPage;