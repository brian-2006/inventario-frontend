import InventarioLayout from '../../templates/inventory/MainInventory'
import ToolBarInventory from '../../organisms/toolbar/ToolBarInventory'
import InventarioBioseguridadTest from '../../../Test/InventarioBioseguridad'

const InventarioBioseguridadPage = () =>{
    return(
        <InventarioLayout
        title ="Inventario bioseguridad"
        toolbar = {<ToolBarInventory/>}
        table = {<InventarioBioseguridadTest/>}
        
        />
    )
}

export default InventarioBioseguridadPage;