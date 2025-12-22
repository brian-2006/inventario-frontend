import TypeActionChip from '../molecules/chips/ActionType'
import DiscountRequestButtom from '../organisms/modal/DiscountRequest'
import {useState} from 'react'

const Home = ()=>{

  const [open, setOpen] = useState(false)

  const handleOpen = ()=>{
    setOpen(!open)
  }

  return(
    <>
    <h1>Chip de prueba para descontar</h1>

    <TypeActionChip action = "DISCOUNT"/>
    <DiscountRequestButtom
    on
    />

    </>
  )
}

export default Home ;

