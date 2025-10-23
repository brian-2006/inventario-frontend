import DateRangePickerAtom from "../molecules/search/DateRangePicker"
import {Container} from "@mui/material";
import SearchBar from "../molecules/search/SearchBar"
import {DownloadButton, CreateButton} from "../atoms/Button"


import {
    Typography,
    Paper,
    Stack
} from "@mui/material";

const Layout = () => {

  return (
    <>
      <Container fixed maxWidth="xl" sx ={{ border: 2, borderColor: "#DBD9D9", borderRadius: 4, p: 3}}>
        <Typography variant = "h4" >
            Filtros de busqueda
        </Typography>
        <Paper elevation = {3} 
            sx ={{
                display: "flex", 
                alignItems: "center", 
                justifyContent: "space-between", 
                borderRadius: 4,
                gap: 2,
                width: "100%",
                flexWrap: "wrap",
                //bgcolor: "#E9F2F1"
                
            }}>
            <Stack direction = "row" alignItems = "center" spacing = {2}  justifyContent="space-between"  sx={{p: 2, width: "100%"}}>

                <SearchBar onSearch={valor => alert("Buscar: " + valor)} />
                <DateRangePickerAtom
                    onChange={(range) => console.log("Rango seleccionado:", range)}
                    sx={{ maxWidth: 400 }}
                />
                <DownloadButton text = "Generar reporte"
                sx={{ minWidth: 140, maxWidth: 280 }}
                />
                    
                <CreateButton text = "Solicitar Insumo"
                sx={{ minWidth: 140, maxWidth: 280 }}
                />
                
            </Stack>
        </Paper>  
      </Container>

    </>
  );


}

export default Layout;