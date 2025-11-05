import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import RecepcionDmTest from '../../../Test/RecepcionDmTest'
import ToolBarRecepcionDm from '../../organisms/toolbar/ToolBarRecepcionDm'
import handleDownLoad from '../../../utils/functions/DowloadExcel'
import RecepcionLayout from '../../templates/RecepcionTecnica/RecepcionLayout'

const RecepcionDispositivosMedicosPage = () =>{


    const [search, setSearch] = useState('')
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [downLoad, setDownLoad] = useState(null)

    const navigate = useNavigate()
    const openForm = ()=>{
        navigate('/recepcion-tecnica/dispositivos/form')
    }
    return(
        <RecepcionLayout
        title = "Recepcion tecnica de dispositivos medicos"
        toolbar = {<ToolBarRecepcionDm textButton = "registrar nuevo dispositivo" 
                    onClick={openForm} 
                    onSearch={setSearch} 
                    onDateStart = {setStartDate}
                    onDateEnd = {setEndDate}
                    downLoad = {()=> handleDownLoad(
                        'http://127.0.0.1:8000/recepcionTecnica/exportExcelDispositivosMedicos/', 
                        startDate, 
                        endDate, 
                        search, 
                        `reporte_recepcion_tecnica_DMs_${startDate}_${endDate}.xlsx`
                    )}
                />}
        table = {<RecepcionDmTest SearchTerm={search} 
                    startDate={startDate} 
                    endDate={endDate}
                    onDownLoad={setDownLoad}
                />}
        />
    )
}

export default RecepcionDispositivosMedicosPage