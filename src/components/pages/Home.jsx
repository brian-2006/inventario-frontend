import EmptyStatePage from '../molecules/EmptyState'

import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

const Home = ()=>{

  
  return(
    <>
      <h1>NO HAY PRODUCTOS AÚN </h1>
      <EmptyStatePage 
          icon = {<RemoveShoppingCartIcon/>}
          title = "Inventario vació"
          description='Aún no se han agregado insumos a este inventario'
          color= "#27BBF5"
          height = "70vh"
      />
    </>
  
  )

}

export default Home ;

