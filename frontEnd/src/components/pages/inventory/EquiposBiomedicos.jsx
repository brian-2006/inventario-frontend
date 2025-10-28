import InventarioLayout from '../../templates/inventory/MainInventory'
import ToolBarInventory from '../../organisms/toolbar/ToolBarInventory'
import InventarioEquiposBiomedicosTest from '../../../Test/InventarioEquiposBiomedicos'

const InventarioEquiposBiomedicosPage = () =>{
    return(
        <InventarioLayout
        title ="Inventario equipos biomedicos"
        toolbar = {<ToolBarInventory/>}
        table = {<InventarioEquiposBiomedicosTest/>}
        
        />
    )
}

export default InventarioEquiposBiomedicosPage;