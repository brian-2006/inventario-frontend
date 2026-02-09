import TextInputAtom from "../../atoms/form/Input";

const CreateDm = ({formData, handleChange}) => {

    return(
        <>
        
        <TextInputAtom
        name = "nombre"
        label = "Nombre del dispositivo medico"
        type = "text"
        value = {formData.nombregenerico}
        onChange = { (e) =>{handleChange('nombredm', e.target.value);}}
        />
        </>
    )
}

export default CreateDm;