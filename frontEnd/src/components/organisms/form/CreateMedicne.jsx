import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CreateButton } from "../../atoms/Button";
import CloseIcon from "@mui/icons-material/Close";
import CreateMedicine from "../../molecules/form/CreateMedicine";
import ModalForm from '../modal/ModalForm'

const CreateMedicineForm = () => {
  // --- Estado principal del formulario ---
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    
    idinsumo: 1,
    nombregenerico: "",
    estadoregistroinvima: "",
  });

  // --- Control de apertura del modal ---
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate()

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
        "http://127.0.0.1:8000/insumo/medicamentos/",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response.data);
      handleClose(); // cerrar modal tras éxito
      navigate('/test/RecepcionMedicamentosForm')
    } catch (error) {
      console.error("Error al enviar formulario:", error);
    }
  };

  // --- Render principal ---
  return (
    <>
       <CreateButton
            text = 'Crear medicamento'
            sx={{ borderRadius: 2, fontWeight: "bold" }}
            onClick={handleOpen}
          >
            Guardar
        </CreateButton>
      <ModalForm
        open={open}
        onClose={handleClose}
        title="Crear medicamento"
        formId="createMedicineForm"
        onSubmit={handleSubmit}
      >
        <CreateMedicine
          formData={formData}
          handleChange={handleChange}
        />
      </ModalForm>
    </>
  );
};

export default CreateMedicineForm;
