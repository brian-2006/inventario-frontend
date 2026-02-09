// src/components/atoms/form/TextInputAtom.jsx
import { TextField } from "@mui/material";

const TextInputAtom = ({
  name,
  label,
  value,
  onChange,
  type = "text",
  error = false,
  helperText = "",
  margin = "normal",
  sx = {},
  ...props
}) => {
  return (
    <TextField
      fullWidth
      size="small"
      variant="outlined"
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      error={error}
      helperText={helperText}
      margin ={margin}
      sx={{
        bgcolor: "background.paper",
        borderRadius: 2,
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "divider",
          },
          "&:hover fieldset": {
            borderColor: "primary.main",
          },
          "&.Mui-focused fieldset": {
            borderColor: "primary.main",
            boxShadow: (theme) => `0 0 0 2px ${theme.palette.primary.main}30`,
          },
        },
        ...sx,
      }}
      {...props}
    />
  );
};

export default TextInputAtom;
