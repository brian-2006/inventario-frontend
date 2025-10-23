// src/organisms/LayoutWrapper.jsx
import { Container, Typography, Paper, Stack } from "@mui/material";


const ToolBarWrapper = ({ title, children, maxWidth = "xl" }) => {
  return (
    <Container
      fixed
      maxWidth={maxWidth}
      sx={{
        border: 2,
        borderColor: "#DBD9D9",
        borderRadius: 4,
        p: 3,
      }}
    >
      {title && (
        <Typography variant="h4" sx={{ mb: 2 }}>
          {title}
        </Typography>
      )}

      <Paper
        elevation={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 4,
          gap: 2,
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          justifyContent="space-between"
          sx={{ p: 2, width: "100%" }}
        >
          {children}
        </Stack>
      </Paper>
    </Container>
  );
};

export default ToolBarWrapper;
