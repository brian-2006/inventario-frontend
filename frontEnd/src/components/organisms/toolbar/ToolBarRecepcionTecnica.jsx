import ToolBarWrapper from './ToolBarWrapper'
import { CreateButton, DownloadButton } from "../../atoms/Button"
import SearchBar from '../../molecules/search/SearchBar'
import DateRangePickerAtom from '../../molecules/search/DateRangePicker'
import FormRecepcionMedicamentos from '../../organisms/form/RecepcionMedicamentos'


const ToolBarRecepcion = ({ title = "filtro de busqueda", 
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
            <FormRecepcionMedicamentos/>
            <DownloadButton text = "descargar reporte"
            onClick={downLoad}
            />
        </ToolBarWrapper>
        </>
    )
}

export default ToolBarRecepcion