import { 
  TableHead, 
  TableRow, 
  TableBody,
} from "@mui/material";

import EstadoChip from '../../molecules/chips/State'


import TableCellAtom from '../../atoms/table/TableCell'
import TableHeaderRow from '../../molecules/table/TableHeaderRow'
import TableContainerAtom from '../../atoms/table/TableContainer';
import TableAtom from '../../atoms/table/Table';

const SemaforizacionDmTable = ({headers = [], vencidos = [], menor_15_dias = [], de_15_dias_3_meses = [], entre_3_meses_1_ano = [] })=>{
    return(
        <>
            <TableContainerAtom>
                <TableAtom>
                    <TableHead>
                        <TableHeaderRow headers = {headers}/>
                    </TableHead>

                    <TableBody>
                        {vencidos.map((item, key)=>(
                            <TableRow key={key} sx={{backgroundColor: "#FF8569"}}>
                                <TableCellAtom ><EstadoChip estado="vencido" /></TableCellAtom>
                                <TableCellAtom>{item.idlote__numerolote}</TableCellAtom>
                                <TableCellAtom>{item.idlote__fechavencimiento}</TableCellAtom>
                                {/* <TableCellAtom ><EstadoChip estado="muy_proximo" /></TableCellAtom>
                                <TableCellAtom ><EstadoChip estado="proximos" /></TableCellAtom>
                                <TableCellAtom ><EstadoChip estado="normales" /></TableCellAtom> */}
                                <TableCellAtom>{item.id_clasificaciondm__id_dm__nombredm}</TableCellAtom>
                                <TableCellAtom>{item.idlote__fabricante__nombrelaboratorio}</TableCellAtom>
                                <TableCellAtom>{item.idlote__cantidadtotal}</TableCellAtom>
                                <TableCellAtom>{item.idlote__preciounitario}</TableCellAtom>
                                <TableCellAtom>{item.idlote__preciototal}</TableCellAtom>      
                                <TableCellAtom>{item.idlote__registroinvima}</TableCellAtom>
                                <TableCellAtom>{item.idlote__fechavencimietnoinvima}</TableCellAtom>
                                <TableCellAtom>{item.id_clasificaciondm__clasificacionriesgo}</TableCellAtom>
                                <TableCellAtom>{item.id_clasificaciondm__vidautil}</TableCellAtom>
                            </TableRow>
                        ))}
                        {menor_15_dias.map((item, key)=>(
                            <TableRow key={key} sx={{backgroundColor: "#FF8569"}}>
                                <TableCellAtom ><EstadoChip estado="muy_proximo" /></TableCellAtom>
                                <TableCellAtom>{item.idlote__numerolote}</TableCellAtom>
                                <TableCellAtom>{item.idlote__fechavencimiento}</TableCellAtom>
                                {/* <TableCellAtom ><EstadoChip estado="muy_proximo" /></TableCellAtom>
                                <TableCellAtom ><EstadoChip estado="proximos" /></TableCellAtom>
                                <TableCellAtom ><EstadoChip estado="normales" /></TableCellAtom> */}
                                <TableCellAtom>{item.id_clasificaciondm__id_dm__nombredm}</TableCellAtom>
                                <TableCellAtom>{item.idlote__fabricante__nombrelaboratorio}</TableCellAtom>
                                <TableCellAtom>{item.idlote__cantidadtotal}</TableCellAtom>
                                <TableCellAtom>{item.idlote__preciounitario}</TableCellAtom>
                                <TableCellAtom>{item.idlote__preciototal}</TableCellAtom>      
                                <TableCellAtom>{item.idlote__registroinvima}</TableCellAtom>
                                <TableCellAtom>{item.idlote__fechavencimietnoinvima}</TableCellAtom>
                                <TableCellAtom>{item.id_clasificaciondm__clasificacionriesgo}</TableCellAtom>
                                <TableCellAtom>{item.id_clasificaciondm__vidautil}</TableCellAtom>
                            </TableRow>
                        ))}
                        {de_15_dias_3_meses.map((item, key)=>(
                            <TableRow key={key} sx={{backgroundColor: "#FF8569"}}>
                                <TableCellAtom ><EstadoChip estado="proximos" /></TableCellAtom>
                                <TableCellAtom>{item.idlote__numerolote}</TableCellAtom>
                                <TableCellAtom>{item.idlote__fechavencimiento}</TableCellAtom>
                                {/* <TableCellAtom ><EstadoChip estado="muy_proximo" /></TableCellAtom>
                                <TableCellAtom ><EstadoChip estado="proximos" /></TableCellAtom>
                                <TableCellAtom ><EstadoChip estado="normales" /></TableCellAtom> */}
                                <TableCellAtom>{item.id_clasificaciondm__id_dm__nombredm}</TableCellAtom>
                                <TableCellAtom>{item.idlote__fabricante__nombrelaboratorio}</TableCellAtom>
                                <TableCellAtom>{item.idlote__cantidadtotal}</TableCellAtom>
                                <TableCellAtom>{item.idlote__preciounitario}</TableCellAtom>
                                <TableCellAtom>{item.idlote__preciototal}</TableCellAtom>      
                                <TableCellAtom>{item.idlote__registroinvima}</TableCellAtom>
                                <TableCellAtom>{item.idlote__fechavencimietnoinvima}</TableCellAtom>
                                <TableCellAtom>{item.id_clasificaciondm__clasificacionriesgo}</TableCellAtom>
                                <TableCellAtom>{item.id_clasificaciondm__vidautil}</TableCellAtom>
                            </TableRow>
                        ))}
                        {entre_3_meses_1_ano.map((item, key)=>(
                            <TableRow key={key} sx={{backgroundColor: "#FF8569"}}>
                                <TableCellAtom ><EstadoChip estado="normales" /></TableCellAtom>
                                <TableCellAtom>{item.idlote__numerolote}</TableCellAtom>
                                <TableCellAtom>{item.idlote__fechavencimiento}</TableCellAtom>
                                {/* <TableCellAtom ><EstadoChip estado="muy_proximo" /></TableCellAtom>
                                <TableCellAtom ><EstadoChip estado="proximos" /></TableCellAtom>
                                <TableCellAtom ><EstadoChip estado="normales" /></TableCellAtom> */}
                                <TableCellAtom>{item.id_clasificaciondm__id_dm__nombredm}</TableCellAtom>
                                <TableCellAtom>{item.idlote__fabricante__nombrelaboratorio}</TableCellAtom>
                                <TableCellAtom>{item.idlote__cantidadtotal}</TableCellAtom>
                                <TableCellAtom>{item.idlote__preciounitario}</TableCellAtom>
                                <TableCellAtom>{item.idlote__preciototal}</TableCellAtom>      
                                <TableCellAtom>{item.idlote__registroinvima}</TableCellAtom>
                                <TableCellAtom>{item.idlote__fechavencimietnoinvima}</TableCellAtom>
                                <TableCellAtom>{item.id_clasificaciondm__clasificacionriesgo}</TableCellAtom>
                                <TableCellAtom>{item.id_clasificaciondm__vidautil}</TableCellAtom>
                            </TableRow>
                        ))}

                    </TableBody>
                </TableAtom>
            </TableContainerAtom>
        </>
    )
};

export default SemaforizacionDmTable;