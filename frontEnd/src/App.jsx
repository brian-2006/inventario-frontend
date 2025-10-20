import React from 'react'
import TestRoutes from './routes/TestRoutes'
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import Layout from './components/templates/Layout'

function App() {
   

  return (
    <>  {/*rutas de pruebas */}
        <Routes>
                <Route path='/test/*' element={<TestRoutes />} />
        </Routes>
        <Layout/>
        
     
        
      
    </>
  )
}

export default App
