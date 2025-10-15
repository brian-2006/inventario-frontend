//importa hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNotifications
  //importa librerias de peticiones
 } from "@toolpad/core/useNotifications";
import axios from "axios";
//importa componentes
import { CreateButton } from "../../atoms/Button";
import RecepcionMedicamentoForm from "../../molecules/form/RecepcionMedicamentoForm";
import ModalForm from '../modal/ModalForm'

const FormRecepcionMedicamentos = () => {
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
    quien_realiza: 2,
    observaciones: "",
    nombre_inventario: "",
  });

  const navigate = useNavigate()
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
      console.log("payload:", formData);
      const response = await axios.post(
        "http://127.0.0.1:8000/recepcionTecnica/registrarInsumo/",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response.data);
      handleClose(); // cerrar modal tras éxito
      navigate('/test/RecepcionMedicamentoTest')
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
      >
        <RecepcionMedicamentoForm
          formData={formData}
          handleChange={handleChange}
        />
      </ModalForm>
    </>
  );
};

export default FormRecepcionMedicamentos;
