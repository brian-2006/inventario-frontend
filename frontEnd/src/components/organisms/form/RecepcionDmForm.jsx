import { useState } from "react";
import axios from "axios";
import { CreateButton } from "../../atoms/Button";
import CloseIcon from "@mui/icons-material/Close";
import RecepcionDmForm from "../../molecules/form/RecepcionDmForm";
import ModalForm from '../modal/ModalForm'

const FormRecepcionDm = () => {
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
    } catch (error) {
      console.error("Error al enviar formulario:", error);
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
      >
        <RecepcionDmForm
          formData={formData}
          handleChange={handleChange}
        />
      </ModalForm>
    </>
  );
};

export default FormRecepcionDm;
