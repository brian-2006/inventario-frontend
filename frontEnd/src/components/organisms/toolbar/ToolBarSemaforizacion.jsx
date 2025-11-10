import ToolBarWrapper from './ToolBarWrapper'
import { CreateButton, DownloadButton } from "../../atoms/Button"
import SearchBar from '../../molecules/search/SearchBar'

const ToolBarSemaforizacionMedicamentos = ({

    title = "filtro de busqueda",
    onSearch = {},
    downLoad = null
    
})=>{

    console.log(`informacion para descargar: ${downLoad}`)
    return(
    
        <ToolBarWrapper>
            <SearchBar onSearch ={onSearch}/>
            <DownloadButton text = "descargar reporte semaforizacion"
                onClick={downLoad}
            />
        </ToolBarWrapper>
    
    )
}

export default ToolBarSemaforizacionMedicamentos;

