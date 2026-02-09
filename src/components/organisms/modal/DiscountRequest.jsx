import {
    Dialog,
    DialogActions,
    DialogTitle,
    Button,
    DialogContent,
    Typography,
    Grid,
    TextField,
    Box,
    Paper,
  } from '@mui/material'
  
  import { useState } from 'react'
  import { DeleteButton, DiscountButton } from '../../atoms/Button'

  import useCreateRequest from '../../../utils/CustomHooks/useRequest'
  import {TyptRequest, TableRequested} from '../../../json/TestData'

  //importamos provider para obtener datos del usuario
  import { useAuth } from '../../../providers/AuthProvider'
  
  const DiscountRequestButtom = ({ onclose, estado, tittle, data, module}) => {
    //obtenemos los datos necesarios
    const {user} = useAuth()

    console.log(`nombre de usuario que esta entrando: ${user.userInformation.idUser??"no tiene nombre"}`)
    const {executeCreate, loading, error} = useCreateRequest()
    
    const [razon, setRazon] = useState("")
    const [cantidadDescontar, setCantidadDescontar] = useState("")

    console.log(data)
    console.log(error?? "no hay error")

    const handleClick = async () => {
      await executeCreate(
        {...data, "cantidad descontar": cantidadDescontar}, 
        TyptRequest.descontar, 
        TableRequested.Lote, 
        data["id"], 
        user.userInformation.idUser, 
        razon,
        user.userInformation.fullName,
        user.userInformation.cargo,
        module
    )
      onclose()
    }
  
    return (
      <>
        <DiscountButton size = "small" onClick={onclose} />
        {/* <UpdateButton size = "small" onClick={setIsAuthenticated}/> */}
  
        <Dialog
          onClose={onclose}
          open={estado}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle sx={{ fontWeight: 700, fontSize: "1.4rem", mb: -1 }}>
            {tittle}
          </DialogTitle>
  
          <DialogContent sx={{ mt: 1 }}>
            <Typography sx={{ mb: 3 }}>
              <strong>Ingresa la cantidad a descontar</strong>
            </Typography>
  
            <Paper
              elevation={0}
              sx={{
                p: 2,
                borderRadius: 2,
                border: "1px solid #e0e0e0",
                mb: 3
              }}
            >
              <Grid container spacing={3}>
                {/* COLUMNA IZQUIERDA */}
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Lote
                  </Typography>
                  <Typography sx={{ fontWeight: 600 }}>{data["numero lote"]}</Typography>
  
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      Cantidad total
                    </Typography>
                    <Typography sx={{ fontWeight: 600 }}>{data["cantidad total"]}</Typography>
                  </Box>
  
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      Fecha vencimiento
                    </Typography>
                    <Typography sx={{ fontWeight: 600 }}>{data["fecha vencimiento"]}</Typography>
                  </Box>
  
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      Precio unitario
                    </Typography>
                    <Typography sx={{ fontWeight: 600 }}>{data["precio unitario"]}</Typography>
                  </Box>
                </Grid>
  
                {/* COLUMNA DERECHA */}
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Precio total
                  </Typography>
                  <Typography sx={{ fontWeight: 600 }}>{data["precio total"]}</Typography>
  
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      Fabricante
                    </Typography>
                    <Typography sx={{ fontWeight: 600 }}>{data["fabricante"]}</Typography>
                  </Box>
  
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      Registro Invima
                    </Typography>
                    <Typography sx={{ fontWeight: 600 }}>{data["registro invima"]}</Typography>
                  </Box>
  
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      Fecha vencimiento Invima
                    </Typography>
                    <Typography sx={{ fontWeight: 600 }}>{data["fecha vencimiento invima"]}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>

            <TextField
              label="Cantidad a descontar"
              type="number"
              fullWidth
              value={cantidadDescontar}
              onChange={(e) => setCantidadDescontar(e.target.value)}
              inputProps={{ min: 0, max: data["cantidad total"] }}
              sx={{
                mt: 1,
                mb: 2,
              }}
            />

            {/* OBSERVACIÓN */}
            <TextField
              label="Observación / Razón de descuento"
              placeholder="Escribe aquí la razón de la solicitud"
              required
              multiline
              fullWidth
              minRows={4}
              value={razon}
              onChange={(e) => setRazon(e.target.value)}
              sx={{
                mt: 1,
                mb: 1,
              }}
            />
          </DialogContent>
  
          <DialogActions sx={{ px: 3, pb: 2 }}>
            <Button variant='contained' 
              color='primary' 
              onClick={handleClick}
              loading = {loading}
            >
              ACEPTAR
            </Button>
            <Button variant='contained' color='error' onClick={onclose} >
              CANCELAR
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }
  
  export default DiscountRequestButtom;
  