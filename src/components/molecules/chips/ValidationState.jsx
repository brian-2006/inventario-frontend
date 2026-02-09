import Chip from '@mui/material/Chip';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; //icono de validado
import AccessTime from '@mui/icons-material/AccessTime'; // icono de en espera
import DoDisturb from '@mui/icons-material/DoDisturb'// icono para negado


const estados = {
    "PENDIENTE": {
        label: "En espera",
        icon: <AccessTime color = "info"/>,
        style: {background: "#D1E6FF", color: "#0056B8"}
    },
    "VALIDADO": {
        label: "Validado",
        icon: <CheckCircleOutlineIcon color = "success"/>,
        style: {background: "#A4F5C8", color: "#02701C"}
    },
    "NEGADO": {
        label: "Negado",
        icon: <DoDisturb color = "error"/>,
        style: {background: "#FAC5C5", color: "#AD0202"}
    }
}


const RequestStateChip = ({estado})=>{
    const tipo = estados[estado] || estados["PENDIENTE"];
    return (
        <>
            <Chip 
                label = {tipo.label} 
                icon = {tipo.icon} 
                sx = {{
                    borderRadius: '12px',
                    fontWeight: 'bold',
                    padding: '2px 8px',
                    ...tipo.style
                }}
                size = "small"
                
            />
        </>
    )
}

export default RequestStateChip;