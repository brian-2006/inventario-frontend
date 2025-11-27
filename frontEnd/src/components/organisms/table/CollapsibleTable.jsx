
import{
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableBody,
} from '@mui/material'

{/*rows_main_items, lote_columns, Lote_items*/}

import TableContainerAtom from '../../atoms/table/TableContainer'
import CollapsibleRow from '../../molecules/table/CollapsibleRow'
import TableAtom from '../../atoms/table/Table'

import TableHeaderRow from '../../molecules/table/TableHeaderRow'

const CollapsibleTable = ({mainHeaders, mainRows, lotHeaders, lotRows, module = "no asignado" } ) =>{

    {/*
        mainHeaders: encabezados de la tabla principal: array 
        mainRows: items de la tabla principal: array de arrays
        lote_columns: encabezados de la tabla desplegable de lotes: array
        Lote_items: items de la tabla de lotes: array de array de objetos
    */ }

    return(
        <>
            <TableContainerAtom sx={{maxHeight: 600}}>
                <TableAtom>
                    <TableHead>
                        <TableHeaderRow headers={mainHeaders}/>
                    </TableHead>
                    <TableBody>
                        {mainRows.map((row, index)=>(
                                
                            <CollapsibleRow 
                                key={index} 
                                rows={row} 
                                lote_rows={lotHeaders} 
                                lote_rows_data ={lotRows[index]}
                                module = {module}
                            />
                        ))}
                            
                    </TableBody>
                </TableAtom>
            </TableContainerAtom>
        </>
    )
}

export default CollapsibleTable;