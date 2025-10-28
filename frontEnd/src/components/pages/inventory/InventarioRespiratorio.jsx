import InventarioLayout from '../../templates/inventory/MainInventory'
import ToolBarInventory from '../../organisms/toolbar/ToolBarInventory'
import InventarioRespiratorioTest from '../../../Test/InventarioRespiratorio'

const InventarioRespiratorioPage = () =>{
    return(
        <InventarioLayout
        title ="Inventario respiratorio"
        toolbar = {<ToolBarInventory/>}
        table = {<InventarioRespiratorioTest/>}
        
        />
    )
}

export default InventarioRespiratorioPage;