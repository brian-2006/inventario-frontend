import {useState} from 'react'
import DeleteRequestButton from '../organisms/modal/Request'

const Home = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () =>{
    setOpen(!open)
  }

  const data = 
    {
      id: 1,
      lote: "L00040",
      cantidadTotal: 12,
      fechaVencimiento: "2026-05-01",
      precioUnitario: 150.5,
      precioTotal: 1806.00,
      fabricante: "None",
      registroInvima: "INVIMA-2025-12345",
      fechaVencimientoInvima: "2027-12-31"
    };


  return(
    <>
    <h1>Nada por mostrar</h1>
    <DeleteRequestButton
     tittle = "peticion de eliminar"
     estado = {open}
     onclose={handleOpen}
     data = {data}
     />
    </>
  )
}


export default Home;