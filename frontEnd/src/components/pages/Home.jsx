import useCreateRequest from '../../utils/CustomHooks/useRequestList' 
import {useState, useEffect} from 'react';
import { TypeState } from '../../json/TestData';

import RequestGrid from '../molecules/screen/ScreenCard'

import EmptyStatePage from '../molecules/EmptyState'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Home = ()=>{

  const {GetList, loading, error} = useCreateRequest()
  const [data, setData] = useState([])
  let response = null

  useEffect(()=>{
    const RequestList= async ()=>{
      const response = await GetList(TypeState.pendiente)
      setData(response)
      console.log(data)
    }
    RequestList()
  },[])

  console.log(error? `error: ${error}` : "no hay error" )
  console.log(response?? "esperando respuesta")

  return(
    <>
    <h1>datos de prueba</h1>

      {loading?(
  
        `cargando lista de peticiones de ${TypeState.pendiente}`
      ):data.length > 0?(
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

export default Home ;

