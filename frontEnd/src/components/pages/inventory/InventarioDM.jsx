import InventarioLayout from '../../templates/inventory/MainInventory'
import ToolBarInventory from '../../organisms/toolbar/ToolBarInventory'
import InventarioDmTest from '../../../Test/InventarioDm.jsx'
import handleDownLoadInventory from '../../../utils/functions/DownloadInventoryExcel'
import {useState} from 'react'

import SemaforizacionDispositivosMedicosPage from '../semaforizacion/SemaforizacionDispositivosMedicos'
import ToolBarSemaforizacion from '../../organisms/toolbar/ToolBarSemaforizacion'
import handleDownLoadSemaforizacion from '../../../utils/functions/DownloadSemaforizacion.jsx'

const InventarioDMPage = () =>{
    //estados de inventario
    const [search, setSearch] = useState('')
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [downLoad, setDownLoad] = useState(null)

    //estados de semaforizacion
    const [downloadSemaforizacion, setDownLoadSemaforizacion] = useState(null)
    const [searchSemaforizacion, setSearchSemaforizacion] = useState('')

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