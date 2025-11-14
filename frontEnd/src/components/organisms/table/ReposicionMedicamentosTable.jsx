import {ReposicionMedicamentosColumns, ReposicionMedicamentosData} from '../../../json/TestData'

import {TableHead, TableBody, TableRow} from '@mui/material'

import TableCellAtom from '../../atoms/table/TableCell'
import TableHeaderRow from '../../molecules/table/TableHeaderRow'
import TableContainerAtom from '../../atoms/table/TableContainer';
import TableAtom from '../../atoms/table/Table';

const ReposicionMedicamentosTable = ({data}) =>{

    return(
      
        <TableContainerAtom>
            <TableAtom stickyHeader aria-label="sticky table" >
                <TableHead>
                    <TableHeaderRow headers={ReposicionMedicamentosColumns}/>
                </TableHead>
                    <TableBody>
                            {data.map((item, index)=>(
                                <TableRow key= {index}>
                                    <TableCellAtom>
                                        {item["fecha"]?? "no definido"}
                                    </TableCellAtom>
                                    <TableCellAtom>
                                        {item["Nombre medicamento"]?? "no definido"}
                                    </TableCellAtom>
                                    <TableCellAtom>
                                        {item.lote?? "no definido"}
                                    </TableCellAtom>
                                    <TableCellAtom>
                                        {item["fecha de vencimiento"]?? "no definido"}
                                    </TableCellAtom>
                                    <TableCellAtom>
                                        {item["precio unitario"]?? "no definido"}
                                    </TableCellAtom>
                                    <TableCellAtom>
                                        {item["cantidad total"]?? "no definido"}
                                    </TableCellAtom>
                                    <TableCellAtom>
                                        {item["precio unitario"] * item["cantidad total"]?? "no definido"}
                                    </TableCellAtom>
                                    <TableCellAtom>
                                        {item["registro Invima"]?? "no definido"}
                                    </TableCellAtom>
                                    <TableCellAtom>
                                        {item["fecha vencimiento invima"]?? "no definido"}
                                    </TableCellAtom>
                                    <TableCellAtom>
                                        {item["fabricante"]?? "no definido"}
                                    </TableCellAtom>
                                </TableRow>
                            ))}
                    </TableBody>
            </TableAtom>
        </TableContainerAtom>
        
    )
}

export default ReposicionMedicamentosTable;