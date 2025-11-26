//importar hooks
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useNotifications } from "@toolpad/core/useNotifications";
//importar libreria de peticiones
import axios from "axios";
//importar componentes
import { CreateButton } from "../../atoms/Button";
import RecepcionDmForm from "../../molecules/form/RecepcionDmForm";
import ModalForm from '../modal/ModalForm'
//importamos datos del usuario
import { useAuth } from '../../../providers/AuthProvider'

const FormRecepcionDm = () => {

  //estados del usuario
  const { user } = useAuth();
  // --- Estado principal del formulario ---

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    tipo_insumo: "dm",
    id_insumo: null,
    nombre_generico: "",
    estado_registro_invima: "",
    vida_util: "",
    numero_lote: "",
    cantidad: "",
    fecha_vencimiento: "",
    precio_unitario: "",
    fabricante: "",
    registro_invima: "",
    fecha_vencimiento_invima: "",
    numero_factura: "",
    proveedor: "",
    estado_embalaje: "",
    condicion_transporte: "",
    quien_realiza: 2,
    observaciones: "",
    nombre_inventario: "",
    clasificacion_riesgo: "",
  });

  const [loading, setLoading] = useState(false)
  const notifications = useNotifications()

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
      setLoading(true)
      console.log("payload:", formData);
      const response = await axios.post(
        "http://127.0.0.1:8000/recepcionTecnica/registrarInsumo/",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response.data);
      handleClose(); // cerrar modal tras éxito
      notifications.show(<strong>Dispositivo medico registrado exitosamente</strong>,{
        severity: 'success',
        autoHideDuration: 3000,
      })
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      notifications.show(error.response.data,{
        severity: 'error',
        autoHideDuration: 3000,
      })
    } finally {
      setLoading(false)
    }
  };

  // --- Render principal ---
  return (
    <>
       <CreateButton
            text = 'registrar dispositivo medico'
            sx={{ borderRadius: 2, fontWeight: "bold" }}
            onClick={handleOpen}
          >
            Guardar
        </CreateButton>
      <ModalForm
        open={open}
        onClose={handleClose}
        title="Registrar dispositivo medico"
        formId="formRecepcionDm"
        onSubmit={handleSubmit}
        loadingState={loading}
      >
        <RecepcionDmForm
          formData={formData}
          setter = {setFormData}
          handleChange={handleChange}
          
        />
      </ModalForm>
    </>
  );
};

export default FormRecepcionDm;
