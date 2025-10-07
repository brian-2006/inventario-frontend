import TextInputAtom from '../../atoms/form/Input'
import SelectInputAtom from '../../atoms/form/SelectInputAtom'
import {useState, useEffect} from 'react'
import axios from 'axios'

const RecepcionDmForm = ({formData, handleChange}) => {
    const [dms, setDms] = useState([])

    useEffect(() => {
        const fetchMedicamentos = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/insumo/dm/')
                setDms(response.data)
            } catch (error) {
                console.error('Error al obtener medicamentos:', error)
            }
        }
        fetchMedicamentos()
    }, [])

    
    console.log(formData)
    return (
        <>
            <SelectInputAtom
                name="dispositivo medico"
                label="Nombre del dispositivo medico"
                // Mantén options como {value, label}
                options={dms.map(dm => ({
                    value: dm.id,
                    label: dm.nombredm,
                }))}
                // El Select debe estar controlado por el id seleccionado
                value={formData.id_insumo ?? ""}
                // onChange actualiza id_insumo y nombregenerico
                onChange={(e) => {
                    const id = e.target.value;
                    const found = dms.find(dm => dm.id === parseInt(id));
                    handleChange('id_insumo', id);
                    handleChange('nombre_generico', found?.nombredm ?? "");
                }}
            />

            <TextInputAtom
            name = 'vida util'
            label= 'Vida util'
            type = 'text'
            required
            value = {formData.vida_util}
            onChange = {(e)=> handleChange('vida_util', e.target.value)}
            />

            <TextInputAtom
            name = 'lote'
            label = 'numero de lote'
            type='text'
            required
            value = {formData.numero_lote}
            onChange = {(e)=> handleChange('numero_lote', e.target.value)}
            />

            <TextInputAtom
            name = 'cantidad'
            label = 'cantidad'
            type='number'
            required
            value = {formData.cantidad}
            onChange = {(e)=> handleChange('cantidad', e.target.value)}
            />
            
            <TextInputAtom
            name = 'fecha vencimiento'
            label = 'fecha vencimiento'
            type='date'
            required
            value = {formData.fecha_vencimiento}
            onChange = {(e)=> handleChange('fecha_vencimiento', e.target.value)}
            />

            <TextInputAtom
            name = 'precio unitario'
            label = 'precio unitario'
            type='number'
            required
            value = {formData.precio_unitario}
            onChange = {(e)=> handleChange('precio_unitario', e.target.value)}
            />

            <TextInputAtom
            name = 'fabricante'
            label = 'fabricante'
            type = 'text'
            required
            value = {formData.fabricante}
            onChange = {(e) => handleChange('fabricante', e.target.value)}
            />

            <TextInputAtom
            name = 'registro invima'
            label = 'codigo registro invima'
            type = 'text'
            required
            value = {formData.registro_invima}
            onChange = {(e) => handleChange('registro_invima', e.target.value)}
            />

            <TextInputAtom
            name = 'fecha vecimiento invima'
            label = 'fecha vecimiento invima'
            type = 'date'
            required
            value = {formData.fecha_vencimiento_invima}
            onChange = {(e) => handleChange('fecha_vencimiento_invima', e.target.value)}
            />

            <SelectInputAtom
            name = 'estado invima'
            label = 'estado registro invima'
            value ={formData.estado_registro_invima}
            onChange = {(e)=> handleChange('estado_registro_invima', e.target.value)}
            options={[
                {value: 'vigente', label: 'vigente'},
                {value: 'no vigente', label: 'no vigente'}
                
            ]}
            required
            />

            <SelectInputAtom
            name = 'clasificacion riesgo'
            label = 'clasificacion riesgo'
            value = {formData.clasificacion_riesgo}
            onChange = {(e)=> handleChange('clasificacion_riesgo', e.target.value)}
            options = {[
                {value: 'I', label: 'I'},
                {value: 'IIA', label: 'IIA'},
                {value: 'IIB ', label: 'IIB '},
                {value: 'III ', label: 'III '}
            ]}
            required
            />

            <TextInputAtom
            name = 'factura'
            label = 'factura'
            type = 'text'
            required
            value = {formData.numero_factura}
            onChange = {(e) => handleChange('numero_factura', e.target.value)}
            />

            <SelectInputAtom
            name = 'proveedor'
            label = 'proveedor'
            options = {[
                {value: 'Proveedor1', label: 'Proveedor1'},
                {value: 'Proveedor2', label: 'Proveedor2'},
                {value: 'Proveedor3', label: 'Proveedor3'},
            ]}
            value = {formData.proveedor}
            onChange = {(e)=> handleChange('proveedor', e.target.value)}
            required
            />

            <SelectInputAtom
            name = 'estado embalaje'
            label = 'estado de embalaje'
            options = {[
                {value: 'Bueno', label: 'Bueno'},
                {value: 'Malo', label: 'Malo'},
                {value: 'Regular', label: 'Regular'}
            ]}
            value = {formData.estado_embalaje}
            onChange = {(e)=> handleChange('estado_embalaje', e.target.value)}
            required
            />

            <SelectInputAtom
            name = 'condicion de transporte'
            label = 'condicion de transporte'
            options = {[
                {value: 'NC', label: 'NC'},
                {value: 'C', label: 'C'},
            ]}
            value = {formData.condicion_transporte}
            onChange = {(e)=> handleChange('condicion_transporte', e.target.value)}
            required
            />

            <SelectInputAtom
            name = 'tipo inventario'
            label = 'tipo inventario'
            options = {[
                {value: "dispositivos medicos", label: "dispositivos medicos"},
                {value: "control especial", label: "control especial"},
                {value: "respiratorio", label: "respiratorio"},
                {value: "bioseguridad", label: "bioseguridad"},
                {value: "aseo", label: "aseo"}
            ]}
            value = {formData.nombre_inventario}
            onChange={(e)=> handleChange('nombre_inventario', e.target.value)}
            required
            />

            <TextInputAtom
            name = 'observaciones'
            label = 'observaciones'
            type = 'text'
            multiline
            value = {formData.observaciones}
            onChange = {(e) => handleChange('observaciones', e.target.value)}
            />
        </>

    )
   
}

export default RecepcionDmForm
