import InventarioMedicamentosPage from './inventory/InventarioMedicamentos';
import InventarioBioseguridadPage from './inventory/InventarioBioseguridad';
import InventarioRespiratorioPage from './inventory/InventarioRespiratorio'

import TabsInventory from '../organisms/tab/TabSection'

const Home = () => {


  return (
        <TabsInventory
        tabSData={[
            {label: "inventario", value: "inventario", content: <InventarioMedicamentosPage/>, toolbar: ""},
            {label: "respiratorio", value: "respiratorio", content: <InventarioRespiratorioPage/>, toolbar: ""},
            {label: "reposicion", value: "reposicion", content: <InventarioBioseguridadPage/>, toolbar: ""}

        ]}/>
  );
};

export default Home;
