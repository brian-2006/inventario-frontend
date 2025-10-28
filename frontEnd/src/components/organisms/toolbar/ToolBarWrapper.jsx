// src/organisms/ToolBarWrapper.jsx
import { Container, Typography, Paper, Stack, Box } from "@mui/material";

const ToolBarWrapper = ({ title = "filtros busqueda", children, maxWidth = "xl" }) => {
  return (
    <Container
      maxWidth={maxWidth}
      disableGutters
      sx={{
        p: 2,
        borderRadius: 4,
        border: "1px solid #ccc",
      }}
    >
      {/* Encabezado */}
      {title && (
        <Typography
          variant="h5"
          component="h2"
          fontWeight={500}
          sx={{
            mb: 2,
            color: "text.primary",
            
          }}
        >
          {title}
        </Typography>
      )}

      {/* Contenedor principal */}
      <Paper
        elevation={2}
        sx={{
          p: 2,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          backgroundColor: "#fff",
          overflow: "hidden",
        }}
      >
        {/* Stack flexible para los filtros */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          sx={{
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          {children}
        </Stack>
      </Paper>
    </Container>
  );
};

export default ToolBarWrapper;
