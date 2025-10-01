import { TableCell } from "@mui/material";

const TableCellAtom = ({ children, variant = "body", align = "center", ...props }) => {
  return (
    <TableCell
      align={align}
      variant={variant}
      sx={{
        // Estilos generales
        fontSize: variant === "head" ? "0.9rem" : "0.85rem",
        fontWeight: variant === "head" ? 600 : 400,
        color: variant === "head" ? "white" : "rgba(0,0,0,0.87)",
        backgroundColor: variant === "head" ? "#1565c0" : "white",
        padding: "8px 12px",
        whiteSpace: "nowrap",
        borderBottom: "1px solid #e0e0e0",
        

        // Bordes redondeados para el header
        ...(variant === "head" && {
          "&:first-of-type": { borderTopLeftRadius: "10px" },
          "&:last-of-type": { borderTopRightRadius: "10px" },
        }),

        // Hover sutil en celdas de datos
        ...(variant === "body" && {
          "&:hover": {
            backgroundColor: "#DEF1F5",
          },
        }),
      }}
      {...props}
    >
      {children}
    </TableCell>
  );
};

export default TableCellAtom;
