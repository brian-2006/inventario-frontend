//plantilla de intefaz
import RrquestLayout from '../../templates/request/RequestLayout';


//contenido de pendientes
import RequestAdmin from '../../organisms/Card/RequestAdminPendiente'
import RequestAdminValidado from '../../organisms/Card/RequestAdminValidado'
import RequestAdminNegado from '../../organisms/Card/RequestAdminNegado'



const RequestAdminPage = () =>{

    const tabsData = [
        {
            label: "Pendiente",
            value: "pendiente",
            content: (
            <RequestAdmin/>
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
            <RequestAdminValidado/>
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
            <RequestAdminNegado/>
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
            title ="Gestion de solicitudes"
            tabsData = {tabsData}            
        />
    )
}

export default RequestAdminPage;