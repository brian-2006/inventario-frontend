import {Routes, Route} from 'react-router-dom'
import RecepcionTableTest from '../Test/RecepcionMedicamentosTest'
import RecepcionDmTest from '../Test/RecepcionDmTest'
import InventarioMedicamentos from '../Test/InventarioMedicamentos'
import InventarioDmTest from '../Test/InventarioDm'
import InventarioRespiratorio from '../Test/InventarioRespiratorio'
import InventarioBioseguridadTest from '../Test/InventarioBioseguridad'
import InventarioControlEspecialTest from '../Test/InventarioControlEspecial'
import InventarioAseoTest from '../Test/InventarioAseoTest'

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
            <Route path ="RecepcionTableTest" element={<RecepcionTableTest />} />
            <Route path = "RecepcionDmTest" element={<RecepcionDmTest/>}/>
            
        </Routes>
    )
}

export default TestRoutes;