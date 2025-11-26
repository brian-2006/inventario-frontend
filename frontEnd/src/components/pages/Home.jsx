import useCreateRequest from '../../utils/CustomHooks/useRequestList' 
import {useState, useEffect} from 'react';
import { TypeState } from '../../json/TestData';
import { Grid } from '@mui/material';
import RequestResponseCard from '../organisms/Card/RequestAdminCard';



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
      ):(
        <Grid container spacing={2} sx={{ p: 4, bgcolor: '#f4f6f8', minHeight: '100vh'}}>
          <Grid item xs={12} sx ={{display: "flex", flexDirection: "row"}}>
            {data.map((dato)=>
              <RequestResponseCard key={dato.id} request={dato} />
            )} 
          </Grid>
        </Grid>
      )
      
    }

    </>
  )
}

export default Home ;




// const Home = () =>{

  // const data = {
  //       id: 6,
  //       requesteruser: "Bpuerta",
  //       justification: "Lote vencido",
  //       targettable: "Lote",
  //       target_id: 10000,
  //       actiontype: "DELETE",
  //       requestpayload: {
  //           "fabricante": "ALFA SAFE",
  //           "numero lote": "10000",
  //           "precio total": "5000.00",
  //           "cantidad total": 5,
  //           "precio unitario": 1000,
  //           "registro invima": "2020M-0002104-R2",
  //           "fecha vencimiento": "2025-10-30",
  //           "fecha vencimiento invima": "2025-10-12"
  //       },
  //       status: "PENDIENTE",
  //       reviewedby: null,
  //       adminresponse: null
  // }


//   return(
//     <Grid container spacing={2} sx={{ p: 4, bgcolor: '#f4f6f8', minHeight: '100vh' }}>
//       <Grid item xs={12}>
//         {
//           <RequestResponseCard request={data} />
//         }
//       </Grid>
//     </Grid>
//   )
// }

// export default Home;