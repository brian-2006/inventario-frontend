import { IconButton } from "@mui/material";
import TableCellAtom from "./TableCell";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

//open: boolean que indica si la fila está expandida o colapsada

export const IconToggleAtom = ({ open, onClick }) => (
  <TableCellAtom
    sx={{
      width: "40px",            // ancho mínimo
      padding: "0px",           // sin padding
      textAlign: "center",      // centrar el icono
    }}
  >
    <IconButton
      aria-label="expandir columna"
      size="small"
      onClick={onClick}
      sx={{
        padding: "2px",         // quitar margen interno
      }}
    >
      {open ? (
        <KeyboardArrowUpIcon color="secondary" fontSize="small" />
      ) : (
        <KeyboardArrowDownIcon color="secondary" fontSize="small" />
      )}
    </IconButton>
  </TableCellAtom>
);
