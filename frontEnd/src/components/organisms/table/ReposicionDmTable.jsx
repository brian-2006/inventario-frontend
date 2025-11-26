import {ReposicionDmColumns} from '../../../json/TestData'

import {TableHead, TableBody, TableRow} from '@mui/material'

import TableCellAtom from '../../atoms/table/TableCell'
import TableHeaderRow from '../../molecules/table/TableHeaderRow'
import TableContainerAtom from '../../atoms/table/TableContainer';
import TableAtom from '../../atoms/table/Table';

const ReposicionDmTable = ({data}) =>{
    return(
      
        <TableContainerAtom>
            <TableAtom stickyHeader aria-label="sticky table" >
                <TableHead>
                    <TableHeaderRow headers={ReposicionDmColumns}/>
                </TableHead>
                    <TableBody>
                            {data.map((item, index)=>(
                                <TableRow key= {index}>
                                    <TableCellAtom>
                                        {item["Nombre dm"]}
                                    </TableCellAtom>
                                    <TableCellAtom>
                                        {item.lote}
                                    </TableCellAtom>
                                    <TableCellAtom>
                                        {item["fecha de vencimiento"]}
                                    </TableCellAtom>
                                    <TableCellAtom>
                                        {item["precio unitario"]}
                                    </TableCellAtom>
                                    <TableCellAtom>
                                        {item["cantidad total"]}
                                    </TableCellAtom>
                                    <TableCellAtom>
                                        {item["precio unitario"] * item["cantidad total"]}
                                    </TableCellAtom>
                                    <TableCellAtom>
                                        {item["registro Invima"]}
                                    </TableCellAtom>
                                    <TableCellAtom>
                                        {item["fecha vencimiento invima"]}
                                    </TableCellAtom>
                                    <TableCellAtom>
                                        {item.fabricante}
                                    </TableCellAtom>
                                    <TableCellAtom>
                                        {item["vida util"]}
                                    </TableCellAtom>
                                    <TableCellAtom>
                                        {item["clasificaion riesgo"]}
                                    </TableCellAtom>
                                </TableRow>
                            ))}
                    </TableBody>
            </TableAtom>
        </TableContainerAtom>
        
    )
}

export default ReposicionDmTable;