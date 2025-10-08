import React from 'react'
import TestRoutes from './routes/TestRoutes'
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'


function App() {
   

  return (
    <>  
        <Routes>
                <Route path='/test/*' element={<TestRoutes />} />
        </Routes>
        {/*rutas de pruebas */}
      
    </>
  )
}

export default App
