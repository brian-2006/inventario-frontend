import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import InventarioLayout from '../../templates/inventory/MainInventory'
import ToolBarRecepcion from '../../organisms/toolbar/ToolBarRecepcionTecnica'
import RecepcionTableTest from '../../../Test/RecepcionMedicamentosTest'
import handleDownLoad from '../../../utils/functions/DowloadExcel'

const RecepcionMedicamentosPage = () =>{

    const [search, setSearch] = useState('')

    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    
    const [downLoad, setDownLoad] = useState(null)

    const navigate = useNavigate()

    const openForm = ()=>{
        navigate('/recepcion-tecnica/medicamentos/form')
    }

    

    return(
        <InventarioLayout
        title ="Recepcion tecnica de medicamentos"
        toolbar = {<ToolBarRecepcion textButton = "registrar nuevo medicamento" 
                    onClick={openForm} 
                    onSearch={setSearch} 
                    onDateStart = {setStartDate}
                    onDateEnd = {setEndDate}
                    downLoad = {()=> handleDownLoad('http://127.0.0.1:8000/recepcionTecnica/exportExcel/', startDate, endDate, search, `reporte_recepcion_tecnica_medicamentos_${startDate}_${endDate}.xlsx`)}
                />}
        table = {<RecepcionTableTest SearchTerm={search} 
                    startDate={startDate} 
                    endDate={endDate}
                    onDownLoad={setDownLoad}
                />}
        
        />
    )
}

export default RecepcionMedicamentosPage;