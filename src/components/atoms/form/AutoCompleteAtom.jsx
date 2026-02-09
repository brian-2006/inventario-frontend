import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';
import {useState} from 'react'

const AutoCompleteAtom = ({
    options = [],
    name,
    label,
    value,
    onChange,
    size = 'small',
    margin = "normal",
    sx = {},
    ...props
  }) => {
    // Encuentra el objeto completo basado en el ID
    const selectedOption = options.find(opt => opt.value === value) || null;
  
    // Maneja el cambio y devuelve solo el ID
    const handleChange = (event, newValue) => {
      onChange(event, newValue?.value ?? null);
    };
  
    return (
      <Autocomplete
        options={options}
        value={selectedOption}
        onChange={handleChange}
        getOptionLabel={(option) => option.label ?? ""}
        isOptionEqualToValue={(option, value) => 
          option.value === value?.value
        }
        sx={sx}
        renderInput={(params) => (
          <TextField
            {...params}
            name={name}
            label={label}
            margin={margin}
            size={size}
          />
        )}
        {...props}
      />
    );
  };
  
  export default AutoCompleteAtom;
  