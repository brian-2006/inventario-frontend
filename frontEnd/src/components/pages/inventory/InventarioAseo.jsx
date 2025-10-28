import InventarioLayout from '../../templates/inventory/MainInventory'
import ToolBarInventory from '../../organisms/toolbar/ToolBarInventory'
import InventarioAseoTest from '../../../Test/InventarioAseoTest'

const InventarioAseoPage = () =>{
    return(
        <InventarioLayout
        title ="Inventario Aseo"
        toolbar = {<ToolBarInventory/>}
        table = {<InventarioAseoTest/>}
        
        />
    )
}

export default InventarioAseoPage;