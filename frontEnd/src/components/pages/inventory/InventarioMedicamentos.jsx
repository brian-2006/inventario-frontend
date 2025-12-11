//url de prodcuccion
const BASE_URL = import.meta.env.VITE_PRODUCTION_URL

//plantilla de intefaz
import InventarioLayout from '../../templates/inventory/MainInventory';

//components de inventario
import ToolBarInventory from '../../organisms/toolbar/ToolBarInventory';
import InventarioMedicamentos from '../../../Test/InventarioMedicamentos';

//componentes de semaforización
import ToolBarSemaforizacion from '../../organisms/toolbar/ToolBarSemaforizacion';
import SemaforizacionMedicamentosPage from '../semaforizacion/SemaforizacionMedicamentos';

//componentes de reposcion
import ToolbarReposicion from '../../organisms/toolbar/ToolbarReposicion';
import ReposicionMedicamentosPage from '../Reposicion/ReposicionMedicamentos';

//funciones de descarga y filtrado de datos
import handleDownLoadInventory from '../../../utils/functions/DownloadInventoryExcel'; //-> inventario
import handleDownLoadSemaforizacion from '../../../utils/functions/DownloadSemaforizacion'; //->semaforizacion

//hooks
import {useState} from 'react';

const InventarioMedicamentosPage = () =>{
    //estados del inventario
    const [search, setSearch] = useState('')
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [downLoad, setDownLoad] = useState(null)

    //estados de la semaforizacion
    const [searchSemaforizacion, setSearchSemaforizacion] = useState('')
    const [downLoadSemaforizacion, setDownLoadSemaforizacion] = useState(null) 

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
                        `${BASE_URL}inventarioPrincipal/exportarExcelInventario/`,
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
                <SemaforizacionMedicamentosPage 
                    searchTerm={searchSemaforizacion}
                    onDownload={setDownLoadSemaforizacion}
                    
                />
            ),

            toolbar: (
                <ToolBarSemaforizacion
                    onSearch={setSearchSemaforizacion}
                    downLoad={()=> handleDownLoadSemaforizacion(
                        `${BASE_URL}inventarioPrincipal/reporteSemaforizacion/`, 
                        downLoadSemaforizacion, 
                        "reporte_semaforizacion_medicamentos.xlsx"
                    )}
                />),
        },
        {
            label: "Reposicion",
            value: "reposicion",
            content: (
                <ReposicionMedicamentosPage
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
                        "reporte_reposicion_medicamentos.xlsx"
                    )}
                />
            ),
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
            tabsData = {tabsData}
            
        />

        

    )
}

export default InventarioMedicamentosPage