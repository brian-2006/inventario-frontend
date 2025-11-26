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
import FormLogin from './components/organisms/form/LoginForm'
import ProtectedRoute from './components/routes/ProtectedRoute'
function App() {

  return (
    <>  {/*rutas de pruebas */}
        <Routes>
          {/*rutas de inventarios */}
                <Route path='/test/*' element={<TestRoutes />} />
                <Route path = "/" element = {<ProtectedRoute> <InventarioMedicamentosPage/> </ProtectedRoute>}/>
                <Route path ="/inventario/medicamentos" element ={<ProtectedRoute> <InventarioMedicamentosPage/> </ProtectedRoute>}/>
                <Route path = "/inventario/dispositivos-medicos" element = {<ProtectedRoute> <InventarioDMPage/> </ProtectedRoute>}/>
                <Route path = "/inventario/respiratorio" element = {<ProtectedRoute> <InventarioRespiratorioPage/> </ProtectedRoute>}/>
                <Route path = "/inventario/bioseguridad" element = {<ProtectedRoute> <InventarioBioseguridadPage/> </ProtectedRoute>}/>
                <Route path = "/inventario/aseo" element = {<ProtectedRoute> <InventarioAseoPage/> </ProtectedRoute>}/>
                <Route path = "/inventario/control-especial" element = {<ProtectedRoute> <InventarioControlEspecialPage/> </ProtectedRoute>}/>
                <Route path = "/inventario/equipos-biomedicos" element = {<ProtectedRoute> <InventarioEquiposBiomedicosPage/> </ProtectedRoute>}/>
                <Route path = "/inventario/reactivo" element = {<ProtectedRoute> <InventarioReactivoPage/> </ProtectedRoute>}/>
            {/*rutas de recepcion tecnica */}
                <Route path = "/recepcion-tecnica/medicamentos" element = {<ProtectedRoute> <RecepcionMedicamentosPage/> </ProtectedRoute>}/>
                <Route path = "/recepcion-tecnica/dispositivos-medicos" element={<ProtectedRoute> <RecepcionDispositivosMedicosPage/> </ProtectedRoute>}/>
            {/*Rutas de formularios*/ }
                <Route path = "/recepcion-tecnica/medicamentos/form" element = {<ProtectedRoute> <FormRecepcionMedicamentos/> </ProtectedRoute>}/>
                <Route path = "/recepcion-tecnica/dispositivos-medicos/form" element = {<ProtectedRoute> <FormRecepcionDm/> </ProtectedRoute>}/>
                <Route path = "/login" element = {<FormLogin/>}/>
        </Routes>
      
  


    </>
  )
}

export default App
