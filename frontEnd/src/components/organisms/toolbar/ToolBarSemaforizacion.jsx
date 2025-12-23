import ToolBarWrapper from './ToolBarWrapper'
import { CreateButton, DownloadButton } from "../../atoms/Button"
import SearchBar from '../../molecules/search/SearchBar'

const ToolBarSemaforizacion = ({

    title = "FILTROS DE BUSQEUDA",
    onSearch = {},
    downLoad = null
    
})=>{

    console.log(`informacion para descargar: ${downLoad}`)
    return(
    
        <ToolBarWrapper>
            <SearchBar onSearch ={onSearch}/>
            <DownloadButton text = "DESCARGAR REPORTE VENCIMIENTOS"
                onClick={downLoad}
            />
        </ToolBarWrapper>
    
    )
}

export default ToolBarSemaforizacion;

