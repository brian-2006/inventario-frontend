// src/components/atoms/date/DateRangePickerAtom.jsx
import { useState } from "react";
import { Box, TextField, Stack } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CalendarIcon } from "../../protons/Icon"
import dayjs from "dayjs";

/**
 * DateRangePickerAtom (versión gratuita)
 * Renderiza dos DatePicker estilizados: "Desde" y "Hasta".
 * Ideal para usar en toolbars o formularios de filtros.
 */
const DateRangePickerAtom = ({
  value,
  onChange,
  onDateStart,
  onDateEnd,
  sx = {},
  labelStart = "Desde",
  labelEnd = "Hasta",
}) => {
  const [internalValue, setInternalValue] = useState(value || [null, null]);

  const handleStartChange = (newDate) => {
    const updated = [newDate, internalValue[1]];
    setInternalValue(updated);
    //onChange?.(updated);
    onDateStart?.(newDate.toISOString().split('T')[0]);
    console.log(newDate.toISOString().split('T')[0])
  };

  const handleEndChange = (newDate) => {
    const updated = [internalValue[0], newDate];
    setInternalValue(updated);
    //onChange?.(updated);
    onDateEnd?.(newDate.toISOString().split('T')[0]);
    console.log(newDate.toISOString().split('T')[0])
  
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          width: "100%",
          alignItems: "center",
          ...sx,
        }}
      >
        <DatePicker
          label={labelStart}
          value={internalValue[0]}
          onChange={handleStartChange}
          slotProps={{
            textField: {
              size: "small",
              fullWidth: true,
              sx: {
                borderRadius: 3,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "50px",
                  height: 40,
                },
                "& input": {
                  fontSize: 14,
                  paddingY: 0.5,
                },
              },
            },
          }}
          slots = {{
            openPickerIcon: CalendarIcon,
          }}
        />

        <DatePicker
          label={labelEnd}
          value={internalValue[1]}
          onChange={handleEndChange}
          slots = {{
            openPickerIcon: CalendarIcon,
          }}
          slotProps={{
            textField: {
              size: "small",
              fullWidth: true,
              sx: {
                borderRadius: 3,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "50px",
                  height: 40,
                },
                "& input": {
                  fontSize: 14,
                  paddingY: 0.5,
                },
              },
            },
            openPickerIcon: {
                color: 'secondary',
            },
          }}
          
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default DateRangePickerAtom;
