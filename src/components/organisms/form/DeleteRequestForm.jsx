import {DeleteButton} from '../../atoms/Button'
import DeleteRequestForm from '../../molecules/form/DeleteRequestForm'

const DeleteRequestFormOrganism = () => {

    const [open, setOpne] = useState(false)

    const handleOpen = () =>{
        setOpne(!open)
    }


    const data = {

        id: 7,
        lote: "lote prueba",
        cantidad: "7",
        fecha_vencimiento: "2025-11-18",
        precio_unitario: "100",
        precio_total: "700",
        fabricante: "fabricante prueba",
        registro_invima: "invima prueba",
        numero_factura: "factura prueba",
        proveedor: "proveedor prueba",

        
    }
    return(
        <>
        <DeleteButton data = {data}/>
        </>
    )
}

export default DeleteRequestFormOrganism;