//plantilla layout
import InventarioLayout from '../../templates/inventory/MainInventory'

//componentes de inventario
import ToolBarInventory from '../../organisms/toolbar/ToolBarInventory'
import InventarioDmTest from '../../../Test/InventarioDm.jsx'

//componentes de semaforizacion
import SemaforizacionDispositivosMedicosPage from '../semaforizacion/SemaforizacionDispositivosMedicos'
import ToolBarSemaforizacion from '../../organisms/toolbar/ToolBarSemaforizacion'

//componentes de reposicion
import ReposicionDmPage from '../Reposicion/ReposicionDispositvosMedicos.jsx'
import ToolbarReposicion from '../../organisms/toolbar/ToolbarReposicion.jsx'

//funciones de descarga y filtrado de datos
import handleDownLoadInventory from '../../../utils/functions/DownloadInventoryExcel'
import handleDownLoadSemaforizacion from '../../../utils/functions/DownloadSemaforizacion.jsx'

//hooks
import {useState} from 'react'


const InventarioDMPage = () =>{
    //estados de inventario
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
            content: (
                <SemaforizacionDispositivosMedicosPage
                searchTerm={searchSemaforizacion}
                onDownload={setDownLoadSemaforizacion}
                />
            ),
            toolbar: (
            <ToolBarSemaforizacion
                        onSearch={setSearchSemaforizacion}
                        downLoad={()=>handleDownLoadSemaforizacion(
                            'http://127.0.0.1:8000/inventarioPrincipal/reporteSemaforizacionDM/',
                            downloadSemaforizacion,
                            'reporte_vencimientos_dispositivos_medicos.xlsx'
                        )}
            />
            ),
        },
        {
            label: "Reposicion",
            value: "reposicion",
            content: (
                <ReposicionDmPage
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
                    download={()=> handleDownLoadSemaforizacion('http://127.0.0.1:8000/inventarioPrincipal/reporteReposicion/',
                        downloadReposicion,
                        'reporte_reposicion_dispositivos_medicos.xlsx'
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
            title ="inventario de Dispositivos Medicos"
            tabsData={tabsData}
            
        />
    )
}

export default InventarioDMPage