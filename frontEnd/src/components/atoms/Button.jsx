import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {DeleteIcon, UpdateIcon} from '../protons/Icon.jsx'

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

//botones de texto con iconos
export const DownloadButton = ({ text, onClick, size }) => {
  return (
    <Button
      aria-label="Descargar"
      variant="outlined"
      color="success" // verde
      size = {size}
      endIcon={<FileDownloadOutlinedIcon/>}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export const CreateButton = ({ text, onClick, size}) => {

    return(
        <Button
        variant='contained' 
        color='primary' 
        size={size} 
        onClick={onClick}
        endIcon={<AddOutlinedIcon/>}
        >
            {text}
        </Button>
    )

}