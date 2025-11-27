
//solictud al endpoint para traer los datos
import useRequestList from '../../../utils/CustomHooks/useRequestList'
//interfaz de carga y de solicitud vacia
import EmptyStatePage from '../../molecules/EmptyState'
import RequestCardSkeleton from '../../molecules/LoadingState'
//hooks
import {useState, useEffect} from 'react';
//estado de solicitud para realizar solicutud
import { TypeState } from '../../../json/TestData';

//layout para organizar cards
import RequestGrid from '../../molecules/screen/ScreenCard'

import { Grid } from '@mui/material';
import SignalWifiBadIcon from '@mui/icons-material/SignalWifiBad';
import PortableWifiOffIcon from '@mui/icons-material/PortableWifiOff';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const RequestAdmin = ()=>{

  const {GetList, loading, error} = useRequestList()
  const [data, setData] = useState([])
  let response = null

  useEffect(()=>{
    const RequestList= async ()=>{
      const response = await GetList(TypeState.pendiente)
      setData(response)
      console.log(data)
      console.log(data.requester)
    }
    RequestList()
  },[])

  console.log(error? `error: ${error}` : "no hay error" )
  console.log(response?? "esperando respuesta")

  return(
    <>
      {loading?(
        
        <Grid container spacing={2}>
          {Array.from({ length: 10 }).map((_, i) => (
            <Grid key={i} item xs={12} sm={6} md={4}>
              <RequestCardSkeleton />
            </Grid>
          ))}
        </Grid>

      ): error?(
        <EmptyStatePage
          icon = {<PortableWifiOffIcon/>}
          color = "#F8FA64"
          title = "Error"
          description = "Error al conectarse al servidor" 
        />
      ) :data.length > 0?(
            <RequestGrid Card={data} />
      ):(
        <EmptyStatePage
          icon = {<ErrorOutlineIcon sx ={{fontSzie : "inherent"}}/>}
          color = "#F8FA64"
          description = "no hay peticiones aún" 
        />
      )
      
    }

    </>
  )
}

export default RequestAdmin ;