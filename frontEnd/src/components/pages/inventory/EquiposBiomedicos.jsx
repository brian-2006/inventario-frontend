import InventarioLayout from '../../templates/inventory/MainInventory'
import ToolBarInventory from '../../organisms/toolbar/ToolBarInventory'
import InventarioEquiposBiomedicosTest from '../../../Test/InventarioEquiposBiomedicos'
//url de prodcuccion
const BASE_URL = import.meta.env.VITE_PRODUCTION_URL
//nombre del inventario
import {TypeInventory} from '../../../json/TestData'

//componentes de la semaforizacióm
import SemaforizacionEquiposBiomedicosPage from '../semaforizacion/SemaforizacionEquiposBiomedicos'
import ToolBarSemaforizacion from '../../organisms/toolbar/ToolBarSemaforizacion'

//componentes de reposicion
import ReposicionEquiposBionmedicosPage from '../Reposicion/ReposicionEquiposBionmedicos'
import ToolbarReposicion from '../../organisms/toolbar/ToolbarReposicion.jsx'

//hooks
import {useState} from 'react'

//funciones para filtrado de datos y descarga de cada componente
import handleDownLoadInventory from '../../../utils/functions/DownloadInventoryExcel'
import handleDownLoadSemaforizacion from '../../../utils/functions/DownloadSemaforizacion'

const InventarioEquiposBiomedicosPage = () =>{

    const [search, setSearch] = useState('')
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [downLoad, setDownLoad] = useState(null)

    //estados de semaforizacion
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
            <InventarioEquiposBiomedicosTest
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
                    TypeInventory.EquiposBiomedicos
                )
                }
            />
            ),
        },
        {
            label: "Semaforizacion",
            value: "semaforizacion",
            content: (
                <SemaforizacionEquiposBiomedicosPage
                    searchTerm = {searchSemaforizacion}
                    onDownload = {setDownLoadSemaforizacion}/>
            ),
            toolbar: <ToolBarSemaforizacion
                    onSearch={setSearchSemaforizacion}
                    downLoad={()=>handleDownLoadSemaforizacion(
                        `${BASE_URL}inventarioPrincipal/reporteSemaforizacionDM/`,
                        downloadSemaforizacion,
                        'reporte_vencimientos_equipos_biomedicos.xlsx'
                    )}
                />,
        },
        {
            label: "Reposicion",
            value: "reposicion",
            content: (
                <ReposicionEquiposBionmedicosPage
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
                download={()=> handleDownLoadSemaforizacion(
                    `${BASE_URL}inventarioPrincipal/reporteReposicion/`,
                    downloadReposicion,
                    'reporte_reposicion_euipos_biomedicos.xlsx'
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
        title ="Inventario equipos biomedicos"
        tabsData={tabsData}
        />
    )
}

export default InventarioEquiposBiomedicosPage;