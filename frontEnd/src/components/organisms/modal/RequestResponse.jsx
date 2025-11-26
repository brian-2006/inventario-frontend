// components/RequestDetailModal.jsx
import { 
  Dialog, DialogTitle, DialogContent, DialogActions, 
  Typography, Grid, Button, Box, IconButton, Chip 
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import RequestStateChip from '../../molecules/chips/ValidationState'
import TypeActionChip from '../../molecules/chips/ActionType'

const RequestResponseModal = ({ open, onClose, request, onAccept, onDeny, rol }) => {
  if (!request) return null;

  // No need to store in a variable, we'll use it directly in the JSX

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
            <Typography variant="subtitle1">{request.requesteruser}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption" color="text.secondary" display="block">Rol:</Typography>
            <Typography variant="subtitle1">{rol}</Typography>
          </Grid>

          {/* Fila 2 */}
          <Grid item xs={6}>
            <Typography variant="caption" color="text.secondary" display="block">Fecha:</Typography>
            <Typography variant="body1">{request.created_at}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption" color="text.secondary" display="block">Tipo:</Typography>
            
            <TypeActionChip action={request.actionType} />
          </Grid>

          {/* Fila 3 */}
          <Grid item xs={12}>
            <Typography variant="caption" color="text.secondary" display="block">Inventario de origen:</Typography>
            <Typography variant="body1">Medicamentos</Typography>
          </Grid>
        </Grid>

        <Typography variant="subtitle2" gutterBottom>Observaciones:</Typography>
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

      <DialogActions sx={{ p: 2, justifyContent: 'space-between' }}>
        <Button 
          variant="contained" 
          color="success" 
          startIcon={<CheckIcon />}
          fullWidth
          onClick={onAccept}
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
          sx={{ ml: 1, textTransform: 'none', fontWeight: 'bold' }}
        >
          Negar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RequestResponseModal;