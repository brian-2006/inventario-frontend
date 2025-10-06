import React from 'react'
import TestRoutes from './routes/TestRoutes'
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'

import FormRecepcionMedicamentos from './components/organisms/form/RecepcionMedicamentos'

function App() {
   

  return (
    <>  
        <Routes>
                <Route path='/test/*' element={<TestRoutes />} />
                <Route path='/select' element={<FormRecepcionMedicamentos/>} />
        </Routes>
        {/*rutas de pruebas */}
      
    </>
  )
}

export default App
