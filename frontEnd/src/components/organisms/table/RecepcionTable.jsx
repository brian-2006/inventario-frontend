import React from 'react'
import { 
  TableHead, 
  TableRow, 
  Table, 
  TableContainer, 
  TableBody,
  Collapse
} from "@mui/material";
import Paper from '@mui/material/Paper';

import TableCellAtom from '../../atoms/table/TableCell'
import TableHeaderRow from '../../molecules/table/TableHeaderRow'
import TableContainerAtom from '../../atoms/table/TableContainer';
import TableAtom from '../../atoms/table/Table';

const RecepcionTable = ({headers, items}) => {

    //headers: array de encabezados
    //items: array de de objetos
    return(

        <>
            <TableContainerAtom>
                    <TableAtom stickyHeader aria-label="sticky table" >
                        <TableHead>
                            <TableHeaderRow headers={headers}/>
                        </TableHead>
                        <TableBody>
                            {items.map((data, index) => (
                                <TableRow key={index} hover>
                                    {Object.entries(data).map(([key, value])=>(
                                        <TableCellAtom key={key}>{value}</TableCellAtom>
                                    ))} 
                                </TableRow>
                            ))}
                        </TableBody>
                    </TableAtom>
                </TableContainerAtom> 
        </>
    )

}

export default RecepcionTable;