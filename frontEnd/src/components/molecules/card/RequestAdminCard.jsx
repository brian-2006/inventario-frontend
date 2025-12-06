// components/RequestCard.jsx
import React, { useState } from 'react';
const BASE_URL = import.meta.env.VITE_PRODUCTION_URL
import { 
  Card, CardContent, Typography, Button, Box, Stack, Paper
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import RequestResponseModal from '../../organisms/modal/RequestResponse';
import TypeActionChip from '../chips/ActionType'
import RequestStateChip from '../chips/ValidationState'

import {EyeIcon} from '../../protons/Icon'
import axios from 'axios';
//se importan provider de autenticacion para traer dattos del usaruio
import { useAuth } from '../../../providers/AuthProvider'

//importamos custom hooks que traen los estados de los llamados https
import useRequestDeny from '../../../utils/CustomHooks/useRequestDeny'

const RequestResponseCard = ({ request }) => {
  const [openModal, setOpenModal] = useState(false);
  const [loadingValidate, setLoadingValidate] = useState(false)
  //obtenemos datos del usuario que valida la peticion
  const {user} = useAuth()

  //traemos los estados de el endpont para denegar peticion
  const {executeDeny, loadingDeny, error} = useRequestDeny()

  // Configuraciones visuales basadas en props
  const status = <RequestStateChip estado={request.status} />
  const action = <TypeActionChip action = {request.actiontype}/>

  console.log('Request data:', request);

  // Manejadores de lógica (Aquí conectarías con tu hook useRequest)
  const handleAccept = async() => {
    
    try {
      setLoadingValidate(true)
      const response = await axios.delete(`${BASE_URL}request/ValidateRequest/`, {
        data: {
          id_request: request.id,
          reviewed_by: user.userInformation.fullName,
          admin_response: request.adminresponse

        }
      });
      
      console.log("Eliminada:", response.data);
    } catch (error) {
      console.error("Error:", error.response?.data);
      setLoadingValidate(false)
    }finally{
      setLoadingValidate(false)
    }
    setOpenModal(false);

  };

  const handleDeny = async () => {
    await executeDeny(request.id, user.userInformation.fullName, request.adminresponse)
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
                {request.username}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={0.5} mt={0.5}>
                <PersonOutlineIcon fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  {request.rol}
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
                {request.module}
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
            startIcon={<EyeIcon fontSize = "medium" />}
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
            <strong> Ver detalles</strong>
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
        loadingValidate={loadingValidate}
        loadingDeny={loadingDeny}
      />
    </>
  );
};

export default RequestResponseCard;