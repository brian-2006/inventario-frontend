import React from 'react';
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Grid,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: 600, md: 700 }, // Ancho adaptable
  maxHeight: '80vh', // Altura máxima visible, deja espacio para scroll
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  display: 'flex', // Para controlar el layout interno del Box
  flexDirection: 'column', // Los elementos se apilarán verticalmente
};

const contentScrollStyle = {
  overflowY: 'auto', // Habilita el scroll vertical si el contenido excede maxHeight
  flexGrow: 1, // Permite que esta sección crezca y empuje el resto
  pr: 1, // Padding a la derecha para que el scrollbar no esté pegado al texto
};

const InfoModal = ({ open, onClose, title, data }) => {
  const theme = useTheme();
  // Determina si es pantalla pequeña para ajustar el número de columnas de la grid
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const columns = isSmallScreen ? 1 : 2; // 1 columna en móvil, 2 en escritorio

  // Función para renderizar el valor, maneja objetos anidados simples
  const renderValue = (value) => {
    if (typeof value === 'object' && value !== null) {
      // Si es un objeto, intenta mostrarlo como JSON formateado si no es muy complejo
      try {
        return JSON.stringify(value, null, 2); // Indentado para mejor lectura
      } catch (e) {
        return String(value); // Fallback si no se puede serializar
      }
    }
    return String(value); // Convierte cualquier cosa a string para mostrar
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="info-modal-title"
      aria-describedby="info-modal-description"
    >
      <Box sx={style}>
        {/* Encabezado de la Modal */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography id="info-modal-title" variant="h5" component="h2" color="primary.main">
            {title || "Detalles de la Información"}
          </Typography>
          <IconButton onClick={onClose} aria-label="cerrar">
            <CloseIcon />
          </IconButton>
        </Box>
        
        <Divider sx={{ mb: 2 }} />

        {/* Contenido con Scroll */}
        <Box sx={contentScrollStyle}>
          <Grid container spacing={2}>
            {data && Object.entries(data).map(([key, value], index) => (
              <Grid item xs={12} sm={columns === 2 ? 6 : 12} key={index}>
                <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                  {/* Formato de la clave: capitalizar primera letra y reemplazar guiones bajos */}
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ')}:
                </Typography>
                <Typography variant="body1" sx={{ wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}>
                  {renderValue(value)}
                </Typography>
              </Grid>
            ))}
            {/* Si no hay datos, mostrar un mensaje */}
            {!data || Object.keys(data).length === 0 && (
                <Grid item xs={12}>
                    <Typography variant="body1" color="text.secondary" align="center" sx={{ mt: 2 }}>
                        No hay información disponible.
                    </Typography>
                </Grid>
            )}
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
};

export default InfoModal;