import { Chip } from "@mui/material";
import {DiscountChipIcon} from '../../protons/Icon'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CreateIcon from '@mui/icons-material/Create';
import MinimizeIcon from '@mui/icons-material/Minimize';

const actionType = {
    "DELETE": {
        label: "Eliminar",
        icon: <DeleteOutlineIcon color = "error"/>,
        style: {borderColor: "#FAC5C5", color: "#AD0202"}
    },
    "CREATE": {
        label: "Crear",
        icon: <AddCircleOutlineIcon color = "success"/>,
        style: {borderColor: "#A4F5C8", color: "#02701C"}
    },
    "UPDATE": {
        label: "Actualizar",
        icon: <CreateIcon color = "warning"/>,
        style: {borderColor: "#fff09dff", color: "#f2ff00ff"}
    },
    "DISCOUNT": {
        label: "Descontar",
        icon: <DiscountChipIcon color = "#5d5d5dff"/>,
        style: {borderColor: "#4c4c4cff", color: "#262626ff"}
    }
}

const TypeActionChip = ({action})=>{
    const tipo = actionType[action] || actionType["DELETE"];
    return (
        <Chip 
            label={tipo.label}
            icon={tipo.icon}
            size="small"
            variant="outlined"
            sx={{
                borderRadius: '12px',
                fontWeight: 'bold',
                padding: '2px 8px',
                ...tipo.style
            }}
        />
    )
}

export default TypeActionChip;