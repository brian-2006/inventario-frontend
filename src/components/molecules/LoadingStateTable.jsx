import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Skeleton,
  Paper
} from "@mui/material";

const GenericTableSkeleton = ({
  rows = 8,
  columns = 7,
  containerProps = {}
}) => {
  return (
    <TableContainer component={Paper} {...containerProps}>
      <Table>
        <TableBody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <TableCell key={colIndex}>
                  <Skeleton
                    width={`${60 + (colIndex * 7) % 30}%`}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GenericTableSkeleton;
