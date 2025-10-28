import InventarioLayout from '../../templates/inventory/MainInventory'
import ToolBarInventory from '../../organisms/toolbar/ToolBarInventory'
import InventarioMedicamentos from '../../../Test/InventarioMedicamentos'

const InventarioMedicamentosPage = () =>{
    return(
        <InventarioLayout
        title ="inventario de medicamentos"
        toolbar = {<ToolBarInventory/>}
        table = {<InventarioMedicamentos/>}
        
        />
    )
}

export default InventarioMedicamentosPage