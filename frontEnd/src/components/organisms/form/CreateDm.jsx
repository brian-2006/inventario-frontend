//importar hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNotifications } from '@toolpad/core/useNotifications';
//libreria para llamados http
import axios from "axios";
const BASE_URL = import.meta.env.VITE_PRODUCTION_URL
//Botones
import { CreateButton } from "../../atoms/Button";
//Importacion de otros modulos que se usaran
import ModalForm from '../modal/ModalForm'
import CreateDm from '../../molecules/form/CreateDmform'

const FormCreateDm = () => {
  // --- Estado principal del formulario ---
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    idinsumo: 2,
    nombredm: "",
  });

  const navigate = useNavigate()
  const notifications = useNotifications();

  // --- Control de apertura del modal ---
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // --- Manejador de cambios de inputs ---
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // --- Envío del formulario ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("payload:", formData);
      const response = await axios.post(
        `${BASE_URL}/insumo/dm/`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response.data)
      console.log(response);
      handleClose(); // cerrar modal tras éxito
      notifications.show(<strong>Dispositivo medico creado exitosamente</strong>,{
        severity: 'success',
        autoHideDuration: 3000,
      })
      navigate('/test/RecepcionDmForm')
    } catch (error) {
      notifications.show(error.response?.data.nombredm,{ 
        severity: 'error',
        autoHideDuration: 3000,
      })
      console.error("Error al enviar formulario:", error);
    }
  };

  // --- Render principal ---
  return (
    <>
       <CreateButton
            text = 'crear dispositivo medico'
            sx={{ borderRadius: 2, fontWeight: "bold" }}
            onClick={handleOpen}
          >
            Guardar
        </CreateButton>
      <ModalForm
        open={open}
        onClose={handleClose}
        title="crear dispositivo medico"
        formId="formCreateDm"
        onSubmit={handleSubmit}
      >
        <CreateDm
          formData={formData}
          handleChange={handleChange}
        />
      </ModalForm>
    </>
  );
};

export default FormCreateDm;
