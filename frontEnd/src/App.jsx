import React from 'react'
import TestRoutes from './routes/TestRoutes'
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'

import FormRecepcionMedicamentos from './components/organisms/form/RecepcionMedicamentos'
import RecepcionDmForm from './components/organisms/form/RecepcionDmForm'

function App() {
   

  return (
    <>  
        <Routes>
                <Route path='/test/*' element={<TestRoutes />} />
                <Route path='/RecepcionMedicamentos' element={<FormRecepcionMedicamentos/>} />
                <Route path= '/recepcionDmForm' element = {<RecepcionDmForm/>}/>
        </Routes>
        {/*rutas de pruebas */}
      
    </>
  )
}

export default App
