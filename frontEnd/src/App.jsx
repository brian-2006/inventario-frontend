import TestRoutes from './routes/TestRoutes'
import {Routes, Route} from 'react-router-dom'

import ToolBarWrapper from "./components/organisms/toolbar/ToolBarWrapper"

//componentes de prueba
import SearchBar from "./components/molecules/search/SearchBar"
import DateRangePickerAtom from "./components/molecules/search/DateRangePicker"
import {CreateButton, DownloadButton} from "./components/atoms/Button"
import Header from "./components/organisms/header/Header"
import SidebarItemExpandable from './components/organisms/sidebar/SidebarWrapper'
function App() {
   

  return (
    <>  {/*rutas de pruebas */}
        <Routes>
                <Route path='/test/*' element={<TestRoutes />} />
        </Routes>
        {/* <ToolBarWrapper title= "Filtros de busqueda recepcion tecnica" maxWidth = "sxl">
          <SearchBar onSearch={valor => alert("Buscar: " + valor)} />
          <DateRangePickerAtom
          onChange={(range) => console.log("Rango seleccionado:", range)}
          sx={{ maxWidth: 400 }}
          />
          <CreateButton text = "crear nuevo insumo"/>
          <DownloadButton text = "descargar reporte"/>
        </ToolBarWrapper>
        <ToolBarWrapper title= "Filtros de busqueda inventario principal" maxWidth = "sxl">
          <SearchBar onSearch={valor => alert("Buscar: " + valor)} />
          <DateRangePickerAtom
          onChange={(range) => console.log("Rango seleccionado:", range)}
          sx={{ maxWidth: 400 }}
          />
          <CreateButton text = "crear nuevo insumo"/>
          <DownloadButton text = "descargar reporte"/>
        </ToolBarWrapper> */}

        {/* <Header/> */}

        <SidebarItemExpandable/>
    

        
     
        
      
    </>
  )
}

export default App
