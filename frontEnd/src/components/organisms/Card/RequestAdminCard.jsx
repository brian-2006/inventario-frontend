// components/RequestCard.jsx
import React, { useState } from 'react';
import { 
  Card, CardContent, Typography, Button, Box, Stack 
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RequestResponseModal from '.././modal/RequestResponse';
import TypeActionChip from '../../molecules/chips/ActionType'
import RequestStateChip from '../../molecules/chips/ValidationState'

const RequestResponseCard = ({ request }) => {
  const [openModal, setOpenModal] = useState(false);

  // Configuraciones visuales basadas en props
  const status = RequestStateChip(request?.status?? "PENDIENTE")
  const action = TypeActionChip(request?.actiontype?? "DELETE")

  // Manejadores de lógica (Aquí conectarías con tu hook useRequest)
  const handleAccept = () => {
    console.log("Aceptando solicitud ID:", request.id);
    setOpenModal(false);
    // await executeRequest(...)
  };

  const handleDeny = () => {
    console.log("Negando solicitud ID:", request.id);
    setOpenModal(false);
  };

  return (
    <>
      <Card sx={{ 
        maxWidth: 400, 
        borderRadius: 4, 
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        position: 'relative',
        overflow: 'visible' // Para permitir efectos si los necesitas
      }}>
        <CardContent sx={{ p: 3 }}>
          {/* Header: Nombre y Status */}
          <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={1}>
            <Box>
              <Typography variant="h6" fontWeight="bold" sx={{ lineHeight: 1.2 }}>
                {request.requesteruser}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={0.5} mt={0.5}>
                <PersonOutlineIcon fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  {request.requesteruser}
                </Typography>
              </Stack>
            </Box>
            
            {/* Status Chip personalizado (fondo suave, texto fuerte) */}
            {status}
          </Box>

          {/* Metadata: Fecha e Iconos */}
          <Stack spacing={1} mt={2} mb={2}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <CalendarTodayIcon fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                {request.created_at}
              </Typography>
            </Stack>
            
            <Stack direction="row" alignItems="center" spacing={1}>
              <Inventory2OutlinedIcon fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
                respiratorio
              </Typography>
              {/* Tipo de Acción (Badge azul) */}
              {action}
            </Stack>
          </Stack>

          {/* Justificación (Texto truncado) */}
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2, // Muestra máximo 2 líneas
              mb: 2
            }}
          >
            {request.justification}
          </Typography>

          {/* Botón Ver Detalles */}
          <Button 
            variant="outlined" 
            fullWidth 
            startIcon={<VisibilityIcon />}
            onClick={() => setOpenModal(true)}
            sx={{ 
              borderRadius: 2, 
              textTransform: 'none',
              borderColor: '#e0e0e0',
              color: 'text.primary',
              '&:hover': {
                borderColor: 'primary.main',
                bgcolor: 'primary.50'
              }
            }}
          >
            Ver detalles
          </Button>
        </CardContent>
      </Card>

      {/* El Modal vive aquí pero solo se muestra cuando openModal es true */}
      <RequestResponseModal 
        open={openModal}
        onClose={() => setOpenModal(false)}
        request={request}
        onAccept={handleAccept}
        onDeny={handleDeny}
      />
    </>
  );
};

export default RequestResponseCard;