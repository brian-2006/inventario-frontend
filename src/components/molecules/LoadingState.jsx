import {
  Card,
  CardContent,
  Stack,
  Skeleton,
  Box,
  Button,
} from "@mui/material";

const RequestCardSkeleton = () => {
  return (
    <Card
      elevation={1}
      sx={{
        p: 2,
        borderRadius: 3,
        width: "100%",
        maxWidth: 320,
      }}
    >
      <CardContent>
        <Stack spacing={2}>
          {/* Título + estado */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Skeleton variant="text" width={100} height={28} />
            <Skeleton variant="rounded" width={80} height={24} />
          </Stack>

          {/* Usuario */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Skeleton variant="circular" width={18} height={18} />
            <Skeleton variant="text" width={120} height={20} />
          </Stack>

          {/* Fecha */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Skeleton variant="rounded" width={18} height={18} />
            <Skeleton variant="text" width={150} height={20} />
          </Stack>

          {/* Categoría + botón eliminar */}
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack direction="row" spacing={1} alignItems="center">
              <Skeleton variant="rounded" width={18} height={18} />
              <Skeleton variant="text" width={100} height={20} />
            </Stack>

            <Skeleton variant="rounded" width={80} height={30} />
          </Stack>

          {/* Descripción */}
          <Skeleton variant="text" width="100%" height={20} />
          <Skeleton variant="text" width="80%" height={20} />

          {/* Botón “Ver detalles” */}
          <Box mt={1}>
            <Skeleton variant="rounded" width="100%" height={40} />
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default RequestCardSkeleton;
