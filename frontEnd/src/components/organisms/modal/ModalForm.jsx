import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box } from "@mui/material";

const ModalForm = ({
  open,
  onClose,
  title,
  formId,
  onSubmit,
  children,
  submitText = "Guardar",
  cancelText = "Cancelar",
  maxWidth = "md",
  fullWidth = true,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      PaperProps={{
        sx: { borderRadius: 4, p: 1.5 }
      }}
    >
      {/* título */}
      <DialogTitle
        sx={{
          fontWeight: 600,
          textAlign: "center",
          borderBottom: "1px solid #eee"
        }}
      >
        {title}
      </DialogTitle>

      {/* contenido con children */}
      <DialogContent>
        <form id={formId} onSubmit={onSubmit}>
          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
            gap={2}
            mt={2}
          >
            {children}
          </Box>
        </form>
      </DialogContent>

      {/* acciones */}
      <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
        <Button onClick={onClose} color="inherit" variant="outlined">
          {cancelText}
        </Button>
        <Button
          type="submit"
          form={formId}
          variant="contained"
          color="primary"
          sx={{ px: 3 }}
        >
          {submitText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalForm;
