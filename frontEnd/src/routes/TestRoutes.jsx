import {Routes, Route} from 'react-router-dom'
import RecepcionTableTest from '../Test/RecepcionMedicamentosTest'
import RecepcionDmTest from '../Test/RecepcionDmTest'
import InventarioMedicamentos from '../Test/InventarioMedicamentos'
import InventarioDmTest from '../Test/InventarioDm'
import InventarioRespiratorio from '../Test/InventarioRespiratorio'
import InventarioBioseguridadTest from '../Test/InventarioBioseguridad'
import InventarioControlEspecialTest from '../Test/InventarioControlEspecial'
import InventarioAseoTest from '../Test/InventarioAseoTest'
import FormCreateDm from '../components/organisms/form/CreateDm'
import CreateMedicineForm from '../components/organisms/form/CreateMedicne'
import FormRecepcionMedicamentos from '../components/organisms/form/RecepcionMedicamentos'
import RecepcionDmForm from '../components/organisms/form/RecepcionDmForm'

const TestRoutes = () => {
    return (
        <Routes>
            {/* inventarios Principales */}
            <Route path ='InventarioDispositivosMedicos' element={<InventarioDmTest />} /> 
            <Route path="InventarioMedicamentos" element={<InventarioMedicamentos />} />
            <Route path="InventarioRespiratorio" element={<InventarioRespiratorio />} />
            <Route path = 'InventarioBioseguridad' element={<InventarioBioseguridadTest />} />
            <Route path = 'InventarioControlEspecial' element={<InventarioControlEspecialTest />} />
            <Route path = 'InventarioAseo' element = {<InventarioAseoTest/>}/>
            {/*recepciones*/}
            <Route path ="RecepcionMedicamentoTest" element={<RecepcionTableTest />} />
            <Route path = "RecepcionDmTest" element={<RecepcionDmTest/>}/>
            {/*formularios de cracion*/}
            <Route path = "CrearDm" element = {<FormCreateDm/>}/>
            <Route path = "CrearMedicamento" element = {<CreateMedicineForm/>}/>
            <Route path='RecepcionMedicamentosForm' element={<FormRecepcionMedicamentos/>} />
            <Route path= 'RecepcionDmForm' element = {<RecepcionDmForm/>}/>
        </Routes>
    )
}  
  
export default TestRoutes;