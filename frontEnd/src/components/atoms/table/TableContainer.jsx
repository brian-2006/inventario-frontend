import { TableContainer, Paper } from "@mui/material";

/**
 * TableContainerAtom:
 * Contenedor base para todas las tablas.
 * - Aplica estilos comunes (fondo blanco, bordes redondeados, sombra, etc).
 * - Permite pasarle props extra que sobrescriben o extienden esos estilos.
 */
const TableContainerAtom = ({ children, sx = {}, ...props }) => {
  return (
    <TableContainer
      component={Paper}
      elevation={2} // sombra suave
      sx={{
        borderRadius: "12px",  // bordes redondeados
        overflow: "auto",    // evitar desbordes feos
        backgroundColor: "#fff",
        maxHeight: 450,
        maxWidth: 'auto',
        ...sx,                 // estilos adicionales que vengan como prop
      }}
      {...props} // pasar también cualquier otra prop que reciba
    >
      {children}
    </TableContainer>
  );
};

export default TableContainerAtom;
