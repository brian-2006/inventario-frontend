// src/components/atoms/form/SelectInputAtom.jsx
import { TextField, MenuItem } from "@mui/material";

const SelectInputAtom = ({
  name,
  label,
  value,
  onChange,
  options = [],
  error = false,
  helperText = "",
  margin = "normal",
  sx = {},
  ...props
}) => {
  return (
    <TextField
      select
      fullWidth
      size="small"
      variant="outlined"
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      margin = {margin}
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
    >
      {options.map((opt) => (
        <MenuItem key={opt.value} value={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectInputAtom;
