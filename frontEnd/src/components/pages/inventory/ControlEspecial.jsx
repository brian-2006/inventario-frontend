//plantilla base de estructura
import InventarioLayout from '../../templates/inventory/MainInventory'

//components de inventario
import ToolBarInventory from '../../organisms/toolbar/ToolBarInventory'
import InventarioControlEspecialTest from '../../../Test/InventarioControlEspecial'

//funciones para filtrado de datos y descarga de cada componente
import handleDownLoadInventory from '../../../utils/functions/DownloadInventoryExcel' //-> Inventario
import handleDownLoadSemaforizacion from '../../../utils/functions/DownloadSemaforizacion' //-> Semaforizacion

//hooks
import {useState} from 'react'

//componentes de la semaforizacion
import SemaforizacionControlEspecialPage from '../semaforizacion/SemaforizacionControlEspecial'
import ToolBarSemaforizacionMedicamentos from '../../organisms/toolbar/ToolBarSemaforizacion'

const InventarioControlEspecialPage = () =>{
    //estados de seccion de inventario
    const [search, setSearch] = useState('')
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [downLoad, setDownLoad] = useState(null)

    //estados de la seccin de semaforización
    const [downloadSemaforizacion, setDownLoadSemaforizacion] = useState(null)
    const [searchSemaforizacion, setSearchSemaforizacion] = useState('')

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
            content: (
                <SemaforizacionControlEspecialPage
                searchTerm={searchSemaforizacion}
                onDownload={setDownLoadSemaforizacion}
                />
            ),
            toolbar: (
            <ToolBarSemaforizacionMedicamentos
                        onSearch={setSearchSemaforizacion}
                        downLoad={()=>handleDownLoadSemaforizacion(
                            'http://127.0.0.1:8000/inventarioPrincipal/reporteSemaforizacion/',
                            downloadSemaforizacion,
                            'reporte_vencimientos_control_especial.xlsx'
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
        title ="Inventario Control Especial"
        tabsData={tabsData}
        
        />
    )
}

export default InventarioControlEspecialPage;