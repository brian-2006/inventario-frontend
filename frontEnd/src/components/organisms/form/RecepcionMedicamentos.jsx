//importa hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNotifications
  //importa librerias de peticiones
 } from "@toolpad/core/useNotifications";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_PRODUCTION_URL
//importa componentes
import { CreateButton } from "../../atoms/Button";
import RecepcionMedicamentoForm from "../../molecules/form/RecepcionMedicamentoForm";
import ModalForm from '../modal/ModalForm'
import { useAuth } from '../../../providers/AuthProvider'

const FormRecepcionMedicamentos = () => {
  //se cargan datos del usuario
  const { user } = useAuth();
  
  //estado de carga
  const [loading, setLoading] = useState(false)
  // --- Estado principal del formulario ---
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    tipo_insumo: "medicamento",
    id_insumo: null,
    nombre_generico: "",
    estado_registro_invima: "",
    concentracion: "",
    formula_farmaceutica: "",
    presentacion_comercial: "",
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
    quien_realiza: user.userInformation.idUser,
    observaciones: "",
    nombre_inventario: "",
  });

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
        `${BASE_URL}/recepcionTecnica/registrarInsumo/`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response.data);
      handleClose(); // cerrar modal tras éxito
      notifications.show(<strong>Medicamento registrado exitosamente</strong>,{
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
            text = 'registrar medicamento'
            sx={{ borderRadius: 2, fontWeight: "bold" }}
            onClick={handleOpen}
          >
            Guardar
        </CreateButton>
      <ModalForm
        open={open}
        onClose={handleClose}
        title="Registrar medicamento"
        formId="formRecepcionMedicamentos"
        onSubmit={handleSubmit}
        loadingState={loading}
      >
        <RecepcionMedicamentoForm
          formData={formData}
          handleChange={handleChange}
          setter = {setFormData}
        />
      </ModalForm>
    </>
  );
};

export default FormRecepcionMedicamentos;
