import InventarioLayout from '../../templates/inventory/MainInventory'
import ToolBarInventory from '../../organisms/toolbar/ToolBarInventory'
import InventarioControlEspecialTest from '../../../Test/InventarioControlEspecial'

const InventarioControlEspecialPage = () =>{
    return(
        <InventarioLayout
        title ="Inventario Control Especial"
        toolbar = {<ToolBarInventory/>}
        table = {<InventarioControlEspecialTest/>}
        
        />
    )
}

export default InventarioControlEspecialPage;