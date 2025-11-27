import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, Typography, Stack } from "@mui/material";
import React from "react";

const EmptyStatePage = ({  
  icon = <ErrorOutlineIcon />,     // Ícono por defecto
  title = "Sin información",
  description = "No se encontraron registros.",
  color = "primary.main",
  height = "70vh",
  iconSize = 90,                   // Tamaño por defecto
}) => {

  // Clonamos el ícono y le metemos tamaño si no trae uno
  const sizedIcon = React.cloneElement(icon, {
    sx: { fontSize: iconSize, opacity: 0.8, ...(icon.props.sx || {}) }
  });

  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      sx={{
        height,
        textAlign: "center",
        px: 2,
      }}
    >
      <Box sx={{ color }}>
        {sizedIcon}
      </Box>

      <Typography variant="h5" fontWeight={600} color="text.primary">
        {title}
      </Typography>

      {description && (
        <Typography variant="body1" color="text.secondary" maxWidth={380}>
          {description}
        </Typography>
      )}
    </Stack>
  );
};

export default EmptyStatePage;
