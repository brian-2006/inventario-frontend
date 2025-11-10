import { TableRow } from "@mui/material";
import TableCellAtom from "../../atoms/table/TableCell";

const TableHeaderRow = ({ headers }) => {
  // recibe como prop un array con todos los encabezados
  return (
    <TableRow>
      {headers.map((head, index) => (
        <TableCellAtom
          key={index}
          align="center"
          variant="head"
          sx={{
            backgroundColor: "#064BE1", // azul como en la imagen
            color: "white",
            fontSize: "0.9rem",
            fontWeight: 500,
            padding: "8px 12px",
            whiteSpace: "nowrap",
            ...(index === 0 && { borderTopLeftRadius: "10px" }),
            ...(index === headers.length - 1 && { borderTopRightRadius: "10px" }),
          }}
        >
          <strong>{head}</strong>
        </TableCellAtom>
      ))}
    </TableRow>
  );
};

export default TableHeaderRow;
