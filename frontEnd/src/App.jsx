import React from 'react'
import {MedicineMainInventoryColumns, MedicineMainInventoryItems, LoteRowsColums, LoteRowsItems, DataTest, RecepcionTencinaRows, Medicamentos } from './json/TestData';
import CollapsibleTable from './components/organisms/table/CollapsibleTable'
import RecepcionTable from './components/organisms/table/RecepcionTable'
//hooks
import {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    
  }, []);

  return (
    <>  
      <CollapsibleTable 
      mainHeaders={MedicineMainInventoryColumns} 
      mainRows={MedicineMainInventoryItems} 
      lotHeaders={LoteRowsColums}
      lotRows ={LoteRowsItems} />
      
      <RecepcionTable headers={RecepcionTencinaRows.Medicamento} items={Medicamentos}/>
        
      
    </>
  )
}

export default App
