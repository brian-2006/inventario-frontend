import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {DeleteIcon, UpdateIcon, MenuIcon} from '../protons/Icon.jsx'

//iconos de MUI
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

//botonoes de iconos
export const DeleteButton = ({size, onClick}) => {
    return (
        <IconButton
          aria-label="Eliminar" color="error" size={size} onClick={onClick}>
          <DeleteIcon/>
        </IconButton>
    );
};


export const UpdateButton = ({size, onClick}) =>{

    return(
        <IconButton
            aria-label="actualizar" color="primary" size={size} onClick={onClick}>
            <UpdateIcon/>
        </IconButton>
    )
}

export const MenuButton = ({size, onClick = {}}) => {

  return(
    <IconButton aria-label='Menu' onClick = {onClick} size = {size}>
      <MenuIcon color = "white"/>
    </IconButton>
  )
       
    
}

//botones de texto con iconos
export const DownloadButton = ({ text, onClick, size, sx = {}, ...props }) => {
  return (
    <Button
      aria-label="Descargar"
      variant="contained"
      color="success" // verde
      size = {size}
      endIcon={<FileDownloadOutlinedIcon/>}
      onClick={onClick}
      sx={{
        borderRadius: "50px",
        height: 40,
        px: 2.5,
        fontWeight: 'bold',
        fontSize: 15,
        textTransform: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...sx,
      }}
      {...props}
    >
      {text}
    </Button>
  );
};

export const CreateButton = ({ text, onClick, size, sx = {}, ...props}) => {

    return(
        <Button
        variant='contained' 
        //color='#6FE0F2' 
        size={size} 
        onClick={onClick}
        endIcon={<AddOutlinedIcon/>}
        sx={{
          borderRadius: "50px",
          height: 40,
          px: 2.5,
          fontWeight: 'bold',
          fontSize: 15,
          textTransform: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
  
          ...sx,
        }}
        {...props}
        >
            {text}
        </Button>
    )

}



