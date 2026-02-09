import { useState } from "react";
import {InputBase, IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ConnectingAirportsOutlined } from "@mui/icons-material";

const SearchBar = ({onSearch}) => {
  const [value, setValue] = useState("");
  // Bar optimizada con focus "azul" y shadow para énfasis

  const handleSearch = (e) => {
    e.preventDefault()
    const newValue = e.target.value
    setValue(newValue)
    onSearch?.(newValue.trim())
    console.log(newValue.trim())
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  onSearch?.(value);
};


  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: 6,
        boxShadow: 2,
        p: 0.5,
        maxHeight: 40,
        width: "100%",
        maxWidth: 400,
        border: "2px solid transparent",
        transition: "border-color 0.2s",
        "&:focus-within": {
          borderColor: "#1976d2",
          boxShadow: 3,
        }
      }}
    >
      <IconButton
        onClick={handleSearch}
        sx={{
          color: "#1976d2",
          borderRadius: 3,
          ml: 0.5,
        }}
        aria-label="buscar"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        value={value}
        onChange={handleSearch}
        placeholder="Buscar..."
        inputProps={{ "aria-label": "buscar" }}
        sx={{
          ml: 1,
          flex: 1,
          fontSize: 17,
          borderRadius: 4,
          px: 1,
        }}
        onKeyDown={e => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSubmit(e);
          }
        }}
      />
    </Paper>
  );
};

export default SearchBar;
