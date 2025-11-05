import TestRoutes from './routes/TestRoutes'
import {Routes, Route} from 'react-router-dom'

//componentes de prueba
import InventarioMedicamentosPage from './components/pages/inventory/InventarioMedicamentos'
import InventarioDMPage from './components/pages/inventory/InventarioDM'
import InventarioRespiratorioPage from './components/pages/inventory/InventarioRespiratorio'
import InventarioBioseguridadPage from './components/pages/inventory/InventarioBioseguridad'
import InventarioAseoPage from './components/pages/inventory/InventarioAseo'
import InventarioControlEspecialPage from './components/pages/inventory/ControlEspecial'
import RecepcionMedicamentosPage from './components/pages/RecepcionTecnica/RecepcionMedicamentos'
import RecepcionDispositivosMedicosPage from './components/pages/RecepcionTecnica/RecepcionDispositivosMedicos'
import FormRecepcionMedicamentos from './components/organisms/form/RecepcionMedicamentos'
import FormRecepcionDm from './components/organisms/form/RecepcionDmForm'
import InventarioEquiposBiomedicosPage from './components/pages/inventory/EquiposBiomedicos'
import InventarioReactivoPage from './components/pages/inventory/InventarioReactivo'
function App() {


  return (
    <>  {/*rutas de pruebas */}
        <Routes>
          {/*rutas de inventarios */}
                <Route path='/test/*' element={<TestRoutes />} />
                <Route path = "/" element = {<InventarioMedicamentosPage/>}/>
                <Route path ="/inventario/medicamentos" element ={<InventarioMedicamentosPage/>}/>
                <Route path = "/inventario/dispositivos-medicos" element = {<InventarioDMPage/>}/>
                <Route path = "/inventario/respiratorio" element = {<InventarioRespiratorioPage/>}/>
                <Route path = "/inventario/bioseguridad" element = {<InventarioBioseguridadPage/>}/>
                <Route path = "/inventario/aseo" element = {<InventarioAseoPage/>}/>
                <Route path = "/inventario/control-especial" element = {<InventarioControlEspecialPage/>}/>
                <Route path = "/inventario/equipos-biomedicos" element = {<InventarioEquiposBiomedicosPage/>}/>
                <Route path = "/inventario/reactivo" element = {<InventarioReactivoPage/>}/>
            {/*rutas de recepcion tecnica */}
                <Route path = "/recepcion-tecnica/medicamentos" element = {<RecepcionMedicamentosPage/>}/>
                <Route path = "/recepcion-tecnica/dispositivos-medicos" element={<RecepcionDispositivosMedicosPage/>}/>
            {/*Rutas de formularios*/ }
                <Route path = "/recepcion-tecnica/medicamentos/form" element = {<FormRecepcionMedicamentos/>}/>
                <Route path = "/recepcion-tecnica/dispositivos-medicos/form" element = {<FormRecepcionDm/>}/>
        </Routes>
      
  



    </>
  )
}

export default App
