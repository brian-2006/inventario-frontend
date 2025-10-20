import TextInputAtom from '../../atoms/form/Input'
import SelectInputAtom from '../../atoms/form/SelectInputAtom'
import AutoCompleteAtom from '../../atoms/form/AutoCompleteAtom'
import {useState, useEffect} from 'react'
import { handleGet } from '../../../utils/api/apiClient'


const RecepcionDmForm = ({formData, handleChange, setter}) => {
    const [dms, setDms] = useState([])
    const [proveedores, setProveedores] = useState([])
    const [laboratorios, setLaboratorios] = useState([])

    useEffect(() => {
        
        handleGet('insumo/dm/', setDms)
        handleGet('insumo/proveedor/', setProveedores)
        handleGet('insumo/laboratorio/', setLaboratorios)
     }, [])

    const handleAutocompleteChange = (fieldName) => (event, newValue) => {
        setter(prevData => ({
          ...prevData,
          [fieldName]: newValue // Ya es solo el ID o null
        }));
    };

    console.log(formData)
    return (
        <>
            <AutoCompleteAtom
                name="dispositivo medico"
                label="Nombre del dispositivo medico"
                options={dms.map(dm => ({
                    value: dm.id,
                    label: dm.nombredm,
                }))}
                value={formData.id_insumo}
                onChange={(event, newValue) => {
                    // newValue ya es solo el ID o null
                    setter(prevData => ({
                        ...prevData,
                        id_insumo: newValue,
                        nombre_generico: dms.find(dm => dm.id === newValue)?.nombredm ?? ""
                    }));
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

            <AutoCompleteAtom
                name='fabricante'
                label='fabricante'
                options={laboratorios.map(laboratorio => ({
                    value: laboratorio.id,
                    label: laboratorio.nombrelaboratorio
                }))}
                value={formData.fabricante}
                onChange={handleAutocompleteChange('fabricante')}
                required
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
            options={[
                {value: 'vigente', label: 'vigente'},
                {value: 'no vigente', label: 'no vigente'}
                
            ]}
            onChange = {(e)=> handleChange('estado_registro_invima', e.target.value)}
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
                {value: 'III ', label: 'III '},
                {value: 'N/A ', label: 'N/A '},
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

            <AutoCompleteAtom
                name='proveedor'
                label='proveedor'
                options={proveedores.map(proveedor => ({
                    value: proveedor.id,
                    label: proveedor.nombreproveedor
                }))}
                value={formData.proveedor}
                onChange={handleAutocompleteChange('proveedor')}
                required
            />

            <SelectInputAtom
            name = 'estado embalaje'
            label = 'estado de embalaje'
            options = {[
                {value: 'NC', label: 'NC'},
                {value: 'C', label: 'C'},
            ]}
            value = {formData.estado_embalaje}
            onChange = {(e)=> handleChange('estado_embalaje', e.target.value)}
            required
            />

            <SelectInputAtom
            name = 'condicion de transporte'
            label = 'condicion de transporte'
            options = {[
                {value: 'Carro', label: 'Carro'},
                {value: 'Moto', label: 'Moto'},
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
                {value: "respiratorio", label: "respiratorio"},
                {value: "bioseguridad", label: "bioseguridad"},
                {value: "aseo", label: "aseo"},
                {value: "equipos biomedicos", label: "equipos biomedicos"},
                {value: "reactivo", label: "reactivo"}
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
