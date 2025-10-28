import InventarioLayout from '../../templates/inventory/MainInventory'
import ToolBarInventory from '../../organisms/toolbar/ToolBarInventory'
import InventarioDmTest from '../../../Test/InventarioDm.jsx'

const InventarioDMPage = () =>{
    return(
        <InventarioLayout
        title ="inventario de Dispositivos Medicos"
        toolbar = {<ToolBarInventory/>}
        table = {<InventarioDmTest/>}
        
        />
    )
}

export default InventarioDMPage