// components/RequestDetailModal.jsx
import { 
  Dialog, DialogTitle, DialogContent, DialogActions, 
  Typography, Grid, Button, Box, IconButton 
} from '@mui/material';
//iconos 
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
//se importan botones
import { ViewButton } from '../../atoms/Button'
//chips de estilo para estado de solicitud y tipode solicitud
import RequestStateChip from '../../molecules/chips/ValidationState'
import TypeActionChip from '../../molecules/chips/ActionType'
//hooks
import {useState} from 'react'
//importamos modal que amplia la informacion
import InfoModal from './Info';
//se importan provider para acceder a datos delusuario
import {useAuth} from '../../../providers/AuthProvider'

const RequestResponseModal = ({ open, onClose, request, onAccept, onDeny, loadingValidate, loadingDeny}) => {
  if (!request) return null;

  // console.log("informacion que llega" + JSON.stringify(request))
  // console.log(`el estado de solicitud que esta llegando es este: ${request.status}`)
  // console.log(`datos del item: ${JSON.stringify(request.requestpayload)}`)


  const [infoOpen, setInfoOpen] = useState(false);

  const handleInfoOpen = () => setInfoOpen(true);
  const handleInfoClose = () => setInfoOpen(false);

  const {user} = useAuth()


  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" fontWeight="bold">Detalles de la Solicitud</Typography>
        <IconButton onClick={onClose} size="small"><CloseIcon /></IconButton>
      </DialogTitle>
      
      <DialogContent dividers>
        <Typography variant="body2" color="text.secondary" paragraph>
          Revise los detalles de la solicitud y tome una decisión.
        </Typography>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          {/* Fila 1 */}
          <Grid item xs={6}>
            <Typography variant="caption" color="text.secondary" display="block">Solicitante:</Typography>
            <Typography variant="subtitle1">{request.username}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption" color="text.secondary" display="block">Rol:</Typography>
            <Typography variant="subtitle1">{request.rol}</Typography>
          </Grid>

          {/* Fila 2 */}
          <Grid item xs={6}>
            <Typography variant="caption" color="text.secondary" display="block">Fecha:</Typography>
            <Typography variant="body1">{request.created_at}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption" color="text.secondary" display="block">Tipo solicitud:</Typography>

            <TypeActionChip action={request.actionType} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption" color="text.secondary" display="block">Estado solicitud:</Typography>
            <RequestStateChip estado={request.status} />
          </Grid>


          {/* Fila 3 */}
          <Grid item xs={12}>
            <Typography variant="caption" color="text.secondary" display="block">Modulo de origen:</Typography>
            <Typography variant="body1">{request.module}</Typography>
            
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1" color="text.secondary" display="block">informacion:</Typography>
            <ViewButton size = "small" onClick={handleInfoOpen}/>
          </Grid>
        </Grid>

        {request.status !== "PENDIENTE" &&(
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Typography variant="caption" color="text.secondary" display="block">revisado por:</Typography>
              <Typography variant="subtitle1">{request.reviewedby}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="caption" color="text.secondary" display="block">fecha de revision:</Typography>
              <Typography variant="subtitle1">{request.updated_at}</Typography>
            </Grid>
          </Grid>
        )}

        <Typography variant="subtitle2" gutterBottom>Comentario auxiliar:</Typography>
          <Box sx={{ 
            bgcolor: '#f5f5f5', 
            p: 2, 
            borderRadius: 2, 
            border: '1px solid #e0e0e0',
            color: 'text.secondary'
          }}>
            <Typography variant="body2">{request.justification}</Typography>
          </Box>
      </DialogContent>

      {request.status == "PENDIENTE" && user.permissions == 2?(
        <DialogActions sx={{ p: 2, justifyContent: 'space-between' }}>
        <Button 
          variant="contained" 
          color="success" 
          startIcon={<CheckIcon />}
          fullWidth
          onClick={onAccept}
          loading = {loadingValidate}
          sx={{ mr: 1, textTransform: 'none', fontWeight: 'bold' }}
        >
          Aceptar
        </Button>
        <Button 
          variant="contained" 
          color="error" 
          startIcon={<CloseIcon />}
          fullWidth
          onClick={onDeny}
          loading = {loadingDeny}
          sx={{ ml: 1, textTransform: 'none', fontWeight: 'bold' }}
        >
          Negar
        </Button>
      </DialogActions>
      ): (
        <DialogContent sx={{ p: 2, justifyContent: 'space-between' }}>
        <Typography variant="subtitle2" gutterBottom>Comentario administrador:</Typography>
          <Box sx={{ 
            bgcolor: '#f5f5f5', 
            p: 2, 
            borderRadius: 2, 
            border: '1px solid #e0e0e0',
            color: 'text.secondary'
          }}>
            <Typography variant="body2">{request.adminresponse?? "no hay comentario"}</Typography>
          </Box>
        </DialogContent>
      )}
      <InfoModal
        open = {infoOpen}
        onClose={handleInfoClose}
        title = "informacion de peticion"
        data = {request.requestpayload} 
      />
    </Dialog>
  
  );
};

export default RequestResponseModal;