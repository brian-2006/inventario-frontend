import ToolBarWrapper from './ToolBarWrapper'
import { CreateButton, DownloadButton } from "../../atoms/Button"
import SearchBar from '../../molecules/search/SearchBar'
import DateRangePickerAtom from '../../molecules/search/DateRangePicker'

const ToolBarInventory = ({ title = "filtro de busqueda"}) =>{
    return (
        <>
        <ToolBarWrapper title = {title}>
            <SearchBar onSearch={valor => alert("Buscar: " + valor)} />
            <DateRangePickerAtom
            onChange={(range) => console.log("Rango seleccionado:", range)}
            sx={{ maxWidth: 400 }}
            />
            <CreateButton text = "crear nuevo insumo"/>
            <DownloadButton text = "descargar reporte"/>
        </ToolBarWrapper>
        </>
    )
}

export default ToolBarInventory