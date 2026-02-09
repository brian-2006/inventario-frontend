import ToolBarWrapper from './ToolBarWrapper'
import {DownloadButton } from "../../atoms/Button"
import SearchBar from '../../molecules/search/SearchBar'
import DateRangePickerAtom from '../../molecules/search/DateRangePicker'


const ToolbarReposicion = ({ 
    title = "FILTRO DE BUSQUEDA",
    onSearch = {},
    onDateStart = {},
    onDateEnd = {},
    download = null,
}) =>{
    return (
        <>
        <ToolBarWrapper title = {title}>
            <SearchBar onSearch={onSearch} />
            <DateRangePickerAtom
            onDateStart={onDateStart}
            onDateEnd={onDateEnd}
            sx={{ maxWidth: 400 }}
            />
            <DownloadButton text = "DESCARGAR REPORTE"
            onClick={download}/>
        </ToolBarWrapper>
        </>
    )
}

export default ToolbarReposicion