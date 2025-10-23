// components/protons/icons/DeleteIcon.jsx
import React from 'react';
import 'primeicons/primeicons.css'

/**
 * Proton/Token: Icono de eliminar básico y reutilizable
 * Nivel más bajo en el atomic design - solo representa el icono visual
 */
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

export const EyeIcon = ({ className = '' }) => {
    return (
      <i
        className={`pi pi-eye ${className}`}
        aria-hidden="true"
      />
    );
};

export const UserIcon = ({ className = '' }) => {
    return (
      <i
        className={`pi pi-user ${className}`}
        aria-hidden="true"
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
