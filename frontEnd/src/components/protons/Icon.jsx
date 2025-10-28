// components/protons/icons/DeleteIcon.jsx
import React from 'react';
import 'primeicons/primeicons.css'
//importacion de iconoc 3d
import medicineBoxUrl from '../../assets/icons/medicine-box.png';
import BotiquinUrl from '../../assets/icons/Maleta.png'
import Ambulance from '../../assets/icons/ambulancia.png'
import TAM from '../../assets/icons/TAM.png'
import CarroConsulta from '../../assets/icons/carro consulta.png'
import Botiquin from '../../assets/icons/botiquin.png'
import Respiratorio from '../../assets/icons/respiratorio.png'
import medicamentos from '../../assets/icons/medicamentos.png'
import Aseo from '../../assets/icons/aseo.png'
import Bioseguridad from '../../assets/icons/bioseguridad.png'
import ControlEspecial from '../../assets/icons/control especial.png'
import Dm from '../../assets/icons/dm.png'
import Sangre from '../../assets/icons/sangre.png'
import BioMedico from '../../assets/icons/biomedico.png'
import User3D from '../../assets/icons/user.png'
import Folder from '../../assets/icons/folder.png'
import Document from '../../assets/icons/recepcion tecnica.png'

/**
 * Proton/Token: Icono de eliminar básico y reutilizable
 * Nivel más bajo en el atomic design - solo representa el icono visual
 */

//Iconos 3D

export const FolderIcon = ({ className = '', size = 20 }) => {
  return (
    <img
      src={Folder}
      alt="carpetas"
      className={className}
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  );
};
export const DocIcon = ({ className = '', size = 20 }) => {
  return (
    <img
      src={Document}
      alt="carpetas"
      className={className}
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  );
};

export const User3DIcon = ({ className = '', size = 30 }) => {
  return (
    <img
      src={User3D}
      alt="Usuario"
      className={className}
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  );
};

export const DmIcon = ({ className = '', size = 20 }) => {
  return (
    <img
      src={Dm}
      alt="Medicine Box"
      className={className}
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  );
};

export const ControlEspecialIcon = ({ className = '', size = 20 }) => {
  return (
    <img
      src={ControlEspecial}
      alt="Medicine Box"
      className={className}
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  );
};

export const BioMedicoIcon = ({ className = '', size = 20 }) => {
  return (
    <img
      src={BioMedico}
      alt="Medicine Box"
      className={className}
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  );
};

export const BioseguridadIcon = ({ className = '', size = 20 }) => {
  return (
    <img
      src={Bioseguridad}
      alt="Medicine Box"
      className={className}
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  );
};

export const AseoIcon = ({ className = '', size = 20 }) => {
  return (
    <img
      src={Aseo}
      alt="Medicine Box"
      className={className}
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  );
};

export const ReactivoIcon = ({ className = '', size = 20 }) => {
  return (
    <img
      src={Sangre}
      alt="Medicine Box"
      className={className}
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  );
};



export const RespiratorioIcon = ({ className = '', size = 20 }) => {
  return (
    <img
      src={Respiratorio}
      alt="respiratorio"
      className={className}
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  );
};

export const MedicamentosIcon = ({ className = '', size = 20 }) => {
  return (
    <img
      src={medicamentos}
      alt="medicamentos"
      className={className}
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  );
};



export const MaletaIcon = ({ className = '', size = 20 }) => {
  return (
    <img
      src={BotiquinUrl}
      alt="Maleta"
      className={className}
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  );
};

export const AmbulanceIcon = ({ className = '', size = 20 }) => {
  return (
    <img
      src={Ambulance}
      alt="ambulancia"
      className={className}
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  );
};

export const TAMIcon = ({className = "", size = 20}) =>{
  return(
    <img
    src = {TAM}
    alt = "TAM"
    className = {className}
    style = {{width: size, heigth: size, objectFit: 'contain'}}
    />
  );
};

export const Botiquin3DIcon = ({className = "", size = 20}) =>{
  return(
    <img
    src = {Botiquin}
    alt = "Botiquin"
    className = {className}
    style = {{width: size, heigth: size, objectFit: 'contain'}}
    />
  );
};

export const CarroConsultaIcon = ({className = "", size = 20}) =>{
  return(
    <img
    src = {CarroConsulta}
    alt = "carro de consulta"
    className = {className}
    style = {{width: size, heigth: size, objectFit: 'contain'}}
    />
  );
};

export const DeleteIcon = ({ className = '' }) => {
  return (
    <i
      className={`pi pi-trash ${className}`}
      aria-hidden="true"
    />
  );
};

export const UpdateIcon = ({ className = '' }) => {
  return (
    <i
      className={`pi pi-pen-to-square ${className}`}
      aria-hidden="true"
    />
  );
};

export const DangerIcon = ({ className = '' }) => {
    return (
      <i
        className={`pi pi-exclamation-triangle ${className}`}
        aria-hidden="true"
      />
    );
  };

export const DownloadIcon = ({ className = '' }) => {
    return (
      <i
        className={`pi pi-download ${className}`}
        aria-hidden="true"
      />
    );
};

export const SearchIcon = ({ className = '' }) => {
    return (
      <i
        className={`pi pi-search ${className}`}
        aria-hidden="true"
      />
    );
};

export const PlusIcon = ({ className = '' }) => {
    return (
      <i
        className={`pi pi-plus ${className}`}
        aria-hidden="true"
      />
    );
};

export const MovilIcon = ({ className = '' }) => {
    return (
      <i
        className={`pi pi-truck ${className}`}
        aria-hidden="true"
      />
    );
};

export const BotiquinIcon = ({ className = '' }) => {
    return (
      <i
        className={`pi pi-shield ${className}`}
        aria-hidden="true"
      />
    );
};

export const ShopCarIcon = ({ className = '' }) => {
    return (
      <i
        className={`pi pi-cart-plus ${className}`}
        aria-hidden="true"
      />
    );
};

export const CloseIcon = ({ className = '' }) => {
    return (
      <i
        className={`pi pi-times ${className}`}
        aria-hidden="true"
      />
    );
};

export const OpenIcon = ({ className = '' }) => {
    return (
      <i
        className={`pi pi-arrow-up-right-and-arrow-down-left-from-center ${className}`}
        aria-hidden="true"
      />
    );
};

export const EyeIcon = ({ className = '', color, fontSize }) => {
    return (
      <i
        className={`pi pi-eye ${className}`}
        aria-hidden="true"
        style={{ color: color, fontSize: fontSize }}
      />
    );
};

export const UserIcon = ({ className = '', color, fontSize }) => {
    return (
      <i
        className={`pi pi-user ${className}`}
        aria-hidden="true"
        style={{ color: color, fontSize: fontSize }}
      />
    );
};

export const BoxIcon = ({ className = '', color, fontSize }) => {
    return (
      <i
        className={`pi pi-inbox ${className}`}
        aria-hidden="true"
        style={{ color: color, fontSize: fontSize }}
      />
    );
};


export const CalendarIcon = ({className = '', color, fontSize}) =>{
  return(
    <i
        className={`pi pi-calendar ${className}`}
        aria-hidden="true"
        style={{ color: color, fontSize: fontSize }}
      />
  )
}

export const MenuIcon = ({className = '', color, fontSize = "2rem"}) =>{
  return(
    <i
        className={`pi pi-bars ${className}`}
        aria-hidden="true"
        style={{ color: color, fontSize: fontSize }}
      />
  )
}

export const CarIcon = ({className = "", color, fontSize }) =>{
  return(
    <i
        className={`pi pi-car ${className}`}
        aria-hidden="true"
        style={{ color: color, fontSize: fontSize }}
      />
  )
}

export const HealthIcon = ({className = "", color, fontSize }) =>{
  return(
    <i
        className={`pi pi-heart ${className}`}
        aria-hidden="true"
        style={{ color: color, fontSize: fontSize }}
      />
  )
}