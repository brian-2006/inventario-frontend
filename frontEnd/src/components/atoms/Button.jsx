import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {DeleteIcon, UpdateIcon, MenuIcon, UserIcon, ShopCarIcon, Notification, EyeIcon} from '../protons/Icon.jsx'
import CircularProgress from '@mui/material/CircularProgress';


//iconos de MUI
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

//botonoes de iconos
export const UserButton = ({size, onClick}) => {
    return (
        <IconButton
          aria-label="usuario" color="#F5F5F5" size={size} onClick={onClick}>
          <UserIcon sx ={{bgcolor: "#F5F5F5"}}/>
        </IconButton>
    );
};
export const NotificationButton = ({size, onClick = {}}) => {
  return (
      <IconButton
        aria-label="usuario" color="#F5F5F5" size={size} onClick={onClick}>
        <Notification sx ={{bgcolor: "#F5F5F5"}}/>
      </IconButton>
  );
};  

export const ViewButton = ({size, onClick}) => {
    return (
        <IconButton
          aria-label="ver" color="#20a2d5ff" size={size} onClick={onClick}>
          <EyeIcon sx ={{bgcolor: "#11c8f1ff"}}/>
        </IconButton>
    );
};


export const DeleteButton = ({size, onClick, ...props}) => {
    return (
        <IconButton
          aria-label="Eliminar" color="error" size={size} onClick={onClick} {...props}>
          <DeleteIcon/>
        </IconButton>
    );
};


export const UpdateButton = ({size, onClick, ...props}) =>{

    return(
        <IconButton
            aria-label="actualizar" color="primary" size={size} onClick={onClick} {...props}>
            <UpdateIcon/>
        </IconButton>
    )
}

export const AssignButton = ({size, onClick, ...props}) => {
    return(
        <IconButton
            aria-label="asignar" color="primary" size={size} onClick={onClick} {...props}>
            <ShopCarIcon/>
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

export const CreateButton = ({ text, onClick, size, loading = false, sx = {}, ...props}) => {

    return(
        <Button
        variant='contained' 
        //color='#6FE0F2' 
        size={size} 
        onClick={onClick}
        endIcon={loading ? <CircularProgress size={20} /> : undefined}
        loading = {loading}
        //disabled={loading}
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



