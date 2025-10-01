import React from "react"
import { useState } from "react"
import{
    TableRow,
  Collapse,
  Box,
  Typography,
  Table,
  TableBody,
  TableHead,
  TableContainer,
  Paper
} from "@mui/material"
import {IconToggleAtom} from '../../atoms/table/ToggleArrow'
//componentes reutilizables
import TableCellAtom from '../../atoms/table/TableCell'
import TableContainerAtom from '../../atoms/table/TableContainer'
import TableAtom from '../../atoms/table/Table'
import TableHeaderRow from './TableHeaderRow'
import {DeleteButton,UpdateButton} from '../../atoms/Button'



const CollapsibleRow  = ({rows, lote_rows, lote_rows_data}) => {
    const [open, setOpen] = useState(false);

    return(
        <>
            {/*fila principal*/ }
            <TableRow>
                
                <IconToggleAtom open = {open} onClick={()=> setOpen(!open)}/>
               
                {rows.map((row, index)=>(
                    <TableCellAtom key={index}>{row}</TableCellAtom>
                ))}
                <TableCellAtom>
                    <DeleteButton size="small"/>
                    <UpdateButton size="small"/>
                </TableCellAtom>
            </TableRow>
            {/*fila desplegable*/ }
            
            <TableRow>
                <TableCellAtom colSpan={6} align="left" style={{ paddingBottom: 0, paddingTop: 0 }}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box margin={1}>
                                <Typography variant="h6" gutterBottom>
                                    Lotes asociados
                                </Typography>
                                <TableContainerAtom component={Paper} sx={{maxHeight: 300}}>
                                    <TableAtom size="samall">
                                        <TableHead>
                                            <TableHeaderRow headers={lote_rows}/>
                                        </TableHead>
                                        <TableBody>
                                            {lote_rows_data.map((data, index)=>(
                                                <TableRow key={index}>
                                                {Object.entries(data).map(([key, value])=>(
                                                        <TableCellAtom key={key}>
                                                            {value}
                                                        </TableCellAtom>
                                                ))}
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </TableAtom>
                                </TableContainerAtom>
                            </Box>
                        </Collapse>
                </TableCellAtom>
            </TableRow>

        
        </>
    )
}

export default CollapsibleRow