import ToolBarWrapper from './ToolBarWrapper'
import { CreateButton, DownloadButton } from "../../atoms/Button"
import SearchBar from '../../molecules/search/SearchBar'
import DateRangePickerAtom from '../../molecules/search/DateRangePicker'
import FormRecepcionDm from '../../organisms/form/RecepcionDmForm'


const ToolBarRecepcionDm = ({ title = "FILTRO DE BUSQUEDA", 
    textButton = "registrar nuevo insumo", 
    onClick = {}, 
    onSearch = {},
    onDateStart = {},
    onDateEnd = {}, 
    downLoad = null,
    //onDateChange = {},
    
}) =>{
    
    return (
        <>
        <ToolBarWrapper title = {title}>
            <SearchBar onSearch={onSearch} />
            <DateRangePickerAtom
            //onChange={onDateChange}
            onDateStart={onDateStart}
            onDateEnd={onDateEnd}
            sx={{ maxWidth: 400 }}
            />
            <FormRecepcionDm/>
            <DownloadButton text = "DESCARGAR REPORTE"
            onClick={downLoad}
            />
        </ToolBarWrapper>
        </>
    )
}

export default ToolBarRecepcionDm