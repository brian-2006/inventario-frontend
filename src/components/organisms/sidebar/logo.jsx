import logo from '../../../assets/AngelesLogo.jpeg'
import {Box} from '@mui/material'

const LogoFoto = ({
  width = '100%',
  maxWidth,
  sx = {},
  imgStyle = {}
}) =>{
    return(
        <Box
          sx={{
            width,                    // por defecto, llena el ancho del contenedor
            maxWidth,                 // opcional para limitar tamaño máximo
            height: 'auto',           // altura proporcional
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ...sx,
          }}
        >
            <img 
                src={logo} 
                alt="Logo"
                style={{
                    width: '100%',      // llena el ancho del Box
                    height: 'auto',     // mantiene proporción
                    objectFit: 'contain',// evita deformaciones
                    display: 'block',
                    ...imgStyle,
                }}
            />
        </Box>
    )
}

export default LogoFoto;