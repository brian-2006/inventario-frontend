import { Chip } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const estados = {
  vencido: {
    label: 'Vencido',
    icon: <ErrorIcon />,
    color: 'error',         
    style: { background: '#e5ba915e', color: 'rgba(114, 60, 10, 0.81)' }
  },
  muy_proximo: {
    label: 'A punto de vencer',
    icon: <WarningAmberIcon />,
    color: 'warning',       
    style: { background: '#ebb877ff', color: 'rgba(124, 78, 8, 1)' }
  },
  proximos: {
    label: 'Vence 15 días - 3 meses',
    icon: <HourglassBottomIcon />,
    color: 'info',          
    style: { background: '#ffcccc', color: '#900' }
  },
  normales: {
    label: 'Vence 3 a 12 meses',
    icon: <CheckCircleIcon />,
    color: 'success',       
    style: { background: '#fff8e1', color: '#b8860b' }
  }
};

// Recibe el estado como string
export default function EstadoChip({ estado }) {
  const config = estados[estado] || estados.normales;
  return (
    <Chip
      icon={config.icon}
      label={config.label}
      sx={{
        borderRadius: '12px',
        fontWeight: 'bold',
        padding: '2px 8px',
        ...config.style
      }}
      size="small"
    />
  );
}

