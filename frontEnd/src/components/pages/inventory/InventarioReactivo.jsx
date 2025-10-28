import InventarioLayout from '../../templates/inventory/MainInventory'
import ToolBarInventory from '../../organisms/toolbar/ToolBarInventory'
import InventarioReactivosTest from '../../../Test/InventarioReactivos'

const InventarioReactivoPage = () =>{
    return(
        <InventarioLayout
        title ="Inventario reactivos"
        toolbar = {<ToolBarInventory/>}
        table = {<InventarioReactivosTest/>}
        
        />
    )
}

export default InventarioReactivoPage;