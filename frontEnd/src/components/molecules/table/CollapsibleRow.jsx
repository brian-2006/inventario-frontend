import { useState } from "react"
import { useAuth } from "../../../providers/AuthProvider"
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
//botonos de accion con funcionalidad
import { AssignButton, DiscountButton} from '../../atoms/Button'
import DeleteRequestButton from '../../organisms/modal/Request'
import DiscountRequestButtom from '../../organisms/modal/DiscountRequest'

const CollapsibleRow  = ({rows, lote_rows, lote_rows_data, module}) => {
    //estado para desplegar lotes asociados boton de eliminación
    const [open, setOpen] = useState(false);
    //estado para abrir 
    const [openDeleteIndex, setOpenDeleteIndex] = useState(null)
    const [openDiscountIndex, setOpenDiscountIndex] = useState(null)
    //estado de prueba para validar el usuario
    const [Authenticated, setAuthenticated] =useState(false)

    //variables donde se guardara la informacion del usuario
    const { user, isAuthenticated, token } = useAuth();

    // Muestra información del usuario si está autenticado
    console.log('Usuario autenticado:', user);
    // console.log('Token:', token);
    // console.log('¿Está autenticado?', isAuthenticated);
    console.log(`permisos del usuario: ${user.permissions}`)
    console.log(`nombre de usuario: ${user.userInformation.fullName??"no tiene nombre"}`)

    //funcion para activar o desactivar el boton de asignar 
    const isExpired = (date) => {
        const quince_dias = new Date(new Date().setDate(new Date().getDate() + 15))
        const fehca_vencimiento = new Date(date)
        return fehca_vencimiento <= quince_dias
    }
    //funcio para menejar cambio de autenticacion
    const handleChangeAuthenticated = () =>{
        setAuthenticated(!Authenticated)
    }

    const handleDelte =(index) =>{
        setOpenDeleteIndex((prev) => (prev === index ? null : index))
    }

    const handleDiscount = (index) =>{
        setOpenDiscountIndex((prev)=>(prev === index? null: index))
    }
    //console.log(Authenticated)
    return(
        <>
            {/*fila principal*/ }
            <TableRow>
                
                <IconToggleAtom open = {open} onClick={()=> setOpen(!open)}/>
               
                {rows.map((row, index)=>(
                    <TableCellAtom key={index}>{row}</TableCellAtom>
                ))}

            </TableRow>
            {/*fila desplegable*/ }
            
            <TableRow>
                <TableCellAtom colSpan={rows.length + 2} align="left" style={{ paddingBottom: 0, paddingTop: 0 }}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box margin={1}>
                                <Typography variant="h6" gutterBottom>
                                    <strong> Lotes asociados </strong>
                                </Typography>
                                <TableContainerAtom component={Paper} sx={{maxHeight: 300}}>
                                    <TableAtom size="small" >
                                        <TableHead>
                                            <TableHeaderRow headers={lote_rows}/>
                                        </TableHead>
                                        <TableBody>
                                            {lote_rows_data.map((data, index)=>(
                                                
                                                <TableRow key={index}>
                                                {Object.entries(data).map(([key, value]) => 
                                                    (key !== "id") ? (
                                                        <TableCellAtom key={key}>
                                                            {value}
                                                        </TableCellAtom>
                                                    ) : null
                                                )}
                                                <TableCellAtom>
                                                    <DiscountRequestButtom
                                                        onclose={()=> handleDiscount(index)}
                                                        estado = {openDiscountIndex === index}
                                                        tittle= "peticion de descontar"
                                                        data = {data}
                                                        module = {module}
                                                    />
                                                    <AssignButton size="small" disabled = {isExpired(data["fecha vencimiento"])}/>
                                                    {user.permissions == 2 || user.permissions == 1?(
                                                        <DeleteRequestButton 
                                                            onclose={() => handleDelte(index)} 
                                                            estado = {openDeleteIndex === index} 
                                                            tittle = "peticion de eliminar" 
                                                            data = {data}
                                                            module = {module}
                                                        />
                                                    ): <DeleteRequestButton
                                                            onclose={() => handleDelte(index)} 
                                                            estado = {openDeleteIndex === index} 
                                                            tittle = "peticion de eliminar" 
                                                            data = {data}
                                                            module = {module}
                                                        />}                                              
                                                
                                                </TableCellAtom>
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