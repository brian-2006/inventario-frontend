import TextInputAtom from "../../atoms/form/Input";
import SelectInputAtom from '../../atoms/form/SelectInputAtom';

const CreateMedicine = ({formData, handleChange}) => {

    return(
        <>
        
        <TextInputAtom
        name = "nombre"
        label = "Nombre del medicamento"
        type = "text"
        value = {formData.nombregenerico}
        onChange = { (e) =>{handleChange('nombregenerico', e.target.value);}}
        />

        <SelectInputAtom
        name = 'Estado registro invima'
        label = 'Estado registro invima'
        options={[
            {value: 'Vigente', label: 'Vigente'},
            {value: 'No vigente', label: 'No vigente'}
        ]}
        value = {formData.estadoregistroinvima}
        onChange ={(e) => {handleChange('estadoregistroinvima', e.target.value)}}
        />
        </>
    )
}

export default CreateMedicine;