//plantilla de intefaz
import RrquestLayout from '../../templates/request/RequestLayout';
//importamos estados
import {TypeState} from '../../../json/TestData'

//contenido de pendientes
import RequestAuxiliar from '../../organisms/Card/RequestAuxiliar'




const RequestAuxiliarPage = () =>{

    const tabsData = [
        {
            label: "Pendiente",
            value: "pendiente",
            content: (
            <RequestAuxiliar status = {TypeState.pendiente}/>
            ),
            // toolbar: (
            // <ToolBarInventory
            //     onSerach={setSearch}
            //     onDateStart={setStartDate}
            //     onDateEnd={setEndDate}
            //     downLoad={() =>
            //         handleDownLoadInventory(
            //             "http://127.0.0.1:8000/inventarioPrincipal/exportarExcelInventario/",
            //             startDate,
            //             endDate,
            //             `reporte_inventario_medicamentos_${startDate}_${endDate}.xlsx`,
            //             downLoad
            //         )
            //     }
            // />
            // ),
        },
        {
            label: "Validado",
            value: "Validado",
            content: (
            <RequestAuxiliar status = {TypeState.validado}/>
            ),

            // toolbar: (
            //     <ToolBarSemaforizacion
            //         onSearch={setSearchSemaforizacion}
            //         downLoad={()=> handleDownLoadSemaforizacion(
            //             "http://127.0.0.1:8000/inventarioPrincipal/reporteSemaforizacion/", 
            //             downLoadSemaforizacion, 
            //             "reporte_semaforizacion_medicamentos.xlsx"
            //         )}
            // />),
        },
        {
            label: "Negado",
            value: "Negado",
            content: (
            <RequestAuxiliar status = {TypeState.negado}/>
            ),
            // toolbar: (
            //     <ToolbarReposicion
            //         onSearch={setSearchReposicion}
            //         onDateStart={setStartDateReposicion}
            //         onDateEnd={setEndDateReposicion}
            //         download={()=> handleDownLoadSemaforizacion(
            //             'http://127.0.0.1:8000/inventarioPrincipal/reporteReposicion/',
            //             downloadReposicion,
            //             "reporte_reposicion_medicamentos.xlsx"
            //         )}
            //     />
            // ),
        },
        

    ];


    return(
        <RrquestLayout
            title ="Mis solicitudes"
            tabsData = {tabsData}            
        />
    )
}

export default RequestAuxiliarPage;