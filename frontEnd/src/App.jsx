import React from 'react'
import { 
  TableCell,
  TableHead, 
  TableRow, 
  Table, 
  TableContainer, 
  TableBody,
  Collapse
} from "@mui/material";
import Paper from '@mui/material/Paper';
import {MedicineMainInventoryColumns, MedicineMainInventoryItems, LoteRowsColums, LoteRowsItems, DataTest, RecepcionTencinaRows, Medicamentos } from './json/TestData';
import CollapsibleTable from './components/organisms/table/CollapsibleTable'
import RecepcionTable from './components/organisms/table/RecepcionTable'


function App() {
  

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
