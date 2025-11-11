import InventarioLayout from '../../templates/inventory/MainInventory'
import ToolBarInventory from '../../organisms/toolbar/ToolBarInventory'
import InventarioAseoTest from '../../../Test/InventarioAseoTest'

import {useState} from 'react'

//componentes de la semaforizacióm
import SemaforizacionAseoPage from '../semaforizacion/SemaforizacionAseo'
import ToolBarSemaforizacion from '../../organisms/toolbar/ToolBarSemaforizacion'

//funciones para filtrado de datos y descarga de cada componente
import handleDownLoadInventory from '../../../utils/functions/DownloadInventoryExcel'
import handleDownLoadSemaforizacion from '../../../utils/functions/DownloadSemaforizacion'

const InventarioAseoPage = () =>{

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
            <InventarioAseoTest
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
                    downLoad = {()=> 
                        handleDownLoadInventory('http://127.0.0.1:8000/inventarioPrincipal/exportarExcelInventarioDM/', 
                        startDate, 
                        endDate, 
                        `reporte_inventario_dispositivos_medicos_${startDate}_${endDate}.xlsx`, 
                        downLoad
                    )}/>
            ),
        },
        {
            label: "Semaforizacion",
            value: "semaforizacion",
            content: (
                <SemaforizacionAseoPage
                    searchTerm = {searchSemaforizacion}
                    onDownload = {setDownLoadSemaforizacion}/>
            ),
            toolbar: <ToolBarSemaforizacion
                    onSearch={setSearchSemaforizacion}
                    downLoad={()=>handleDownLoadSemaforizacion(
                        'http://127.0.0.1:8000/inventarioPrincipal/reporteSemaforizacionDM/',
                        downloadSemaforizacion,
                        'reporte_vencimientos_aseo.xlsx'
                    )}/>,
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
        title ="Inventario Aseo"
        tabsData={tabsData}
        />
    )
}

export default InventarioAseoPage;