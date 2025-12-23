//url de prodcuccion
const BASE_URL = import.meta.env.VITE_PRODUCTION_URL
//nombre del inventario
import {TypeInventory} from '../../../json/TestData'

//plantilla base de estructura
import InventarioLayout from '../../templates/inventory/MainInventory'

//components de inventario
import ToolBarInventory from '../../organisms/toolbar/ToolBarInventory'
import InventarioControlEspecialTest from '../../../Test/InventarioControlEspecial'

//componentes de la semaforizacion
import SemaforizacionControlEspecialPage from '../semaforizacion/SemaforizacionControlEspecial'
import ToolBarSemaforizacion from '../../organisms/toolbar/ToolBarSemaforizacion'

//componentes de reposicion
import ReposicionControlEspecialPage from '../Reposicion/ReposicionControlEspecial'
import ToolbarReposicion from '../../organisms/toolbar/ToolbarReposicion'

//hooks
import {useState} from 'react'

//funciones para filtrado de datos y descarga de cada componente
import handleDownLoadInventory from '../../../utils/functions/DownloadInventoryExcel' //-> Inventario
import handleDownLoadSemaforizacion from '../../../utils/functions/DownloadSemaforizacion' //-> Semaforizacion


const InventarioControlEspecialPage = () =>{
    //estados de seccion de inventario
    const [search, setSearch] = useState('')
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [downLoad, setDownLoad] = useState(null)

    //estados de la seccin de semaforización
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
                    `${BASE_URL}inventarioPrincipal/exportarExcelInventario/`,
                    startDate,
                    endDate,
                    `reporte_inventario_control_especial_${startDate}_${endDate}.xlsx`,
                    downLoad,
                    TypeInventory.ControlEspecial,
                )
                }
            />
            ),
        },
        {
            label: "Semaforizacion",
            value: "semaforizacion",
            content: (
                <SemaforizacionControlEspecialPage
                searchTerm={searchSemaforizacion}
                onDownload={setDownLoadSemaforizacion}
                />
            ),
            toolbar: (
            <ToolBarSemaforizacion
                        onSearch={setSearchSemaforizacion}
                        downLoad={()=>handleDownLoadSemaforizacion(
                            `${BASE_URL}inventarioPrincipal/reporteSemaforizacion/`,
                            downloadSemaforizacion,
                            'reporte_vencimientos_control_especial.xlsx'
                        )}
            />
            ),
        },
        {
            label: "Reposicion",
            value: "reposicion",
            content: (
                <ReposicionControlEspecialPage
                    searchTerm={searchReposicion}
                    dateStart={startDateReposicion}
                    dateEnd={endDateReposicion}
                    onDownload={setDownloadReposicion}
                />
            ),
            toolbar: (
            <ToolbarReposicion
                onSearch={setSearchReposicion}
                onDateStart={setStartDateReposicion}
                onDateEnd={setEndDateReposicion}
                download={()=> handleDownLoadSemaforizacion(`${BASE_URL}inventarioPrincipal/reporteReposicion/`,
                    downloadReposicion,
                    'reporte_reposicion_control_especial.xlsx'
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
        title ="Inventario Control Especial"
        tabsData={tabsData}
        
        />
    )
}

export default InventarioControlEspecialPage;