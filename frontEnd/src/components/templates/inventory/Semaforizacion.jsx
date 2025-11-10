import { Box, Container, Paper, Typography } from "@mui/material";
import Header from '../../organisms/header/Header'
import TabsInventory from '../../organisms/tab/TabSection'




const SemaforizacionLayout = ({title, toolbar, table, tabsData = []  }) => {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/*  Header superior */}
      <Header />

      {/*  Contenido principal */}
      <Container
        maxWidth="xl"
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        {/*  Título de la página */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            color: "#212121",
            fontFamily: "Quicksand, sans-serif",
          }}
        >
          {title}
        </Typography>

        {tabsData.length > 0 &&(
          <TabsInventory tabsData={tabsData}/>
        )}
        
        
         {/* Toolbar (ya con sus propios controles internos)
        {toolbar}

        {/*  Tabla de resultados */}
        {/* <Box
          sx={{
            p: 3,
            mx: 1,
            my: 1
          }}
        >
          {table}
        </Box> */} 
      </Container>
    </Box>
  );
};

export default SemaforizacionLayout;
