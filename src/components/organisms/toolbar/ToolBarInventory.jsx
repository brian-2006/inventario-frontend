import ToolBarWrapper from './ToolBarWrapper'
import { DownloadButton } from "../../atoms/Button"
import SearchBar from '../../molecules/search/SearchBar'
import DateRangePickerAtom from '../../molecules/search/DateRangePicker'


const ToolBarInventory = ({ 
    title = "FILTRO DE BUSQUEDA",
    onSerach = {},
    onDateStart = {},
    onDateEnd = {},
    downLoad = null,
}) =>{
    return (
        <>
        <ToolBarWrapper title = {title}>
            <SearchBar onSearch={onSerach} />
            <DateRangePickerAtom
            onDateStart={onDateStart}
            onDateEnd={onDateEnd}
            sx={{ maxWidth: 400 }}
            />
            <DownloadButton text = "DESCARGAR REPORTE"
            onClick={downLoad}/>
        </ToolBarWrapper>
        </>
    )
}

export default ToolBarInventory