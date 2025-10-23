import { useState } from "react";
import {InputBase, IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState("");
  // Bar optimizada con focus "azul" y shadow para énfasis
  return (
    <Paper
      component="form"
      onSubmit={e => {
        e.preventDefault();
        onSearch?.(value);
      }}
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
        onClick={() => onSearch?.(value)}
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
        onChange={e => setValue(e.target.value)}
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
            onSearch?.(value);
          }
        }}
      />
    </Paper>
  );
};

export default SearchBar;
