import React from 'react';
import { Grid, Box, Typography, Card, CardContent } from '@mui/material';
import RequestResponseCard from '../card/RequestAdminCard'

const RequestGrid = ({Card = []}) =>{
    return(
    <Box sx={{ flexGrow: 1, p: 2 }}>
        {/* Grid container: Define el contenedor de la rejilla.
            spacing={3}: Crea un espacio de 24px entre cada tarjeta.
        */}
      <Grid container spacing={3}>
        {Card.map((request, index) => (

            <Grid item xs={12} sm={6} md={4} lg={3} key={request.id || index}>
                {/* Renderizamos la tarjeta molecular dentro de la celda */}
                <RequestResponseCard request={request} key ={request.id}/>
            </Grid>
        ))}
      </Grid>
    </Box>
    );
}

export default RequestGrid;