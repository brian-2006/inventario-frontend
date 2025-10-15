import TextInputAtom from '../../atoms/form/Input'
import SelectInputAtom from '../../atoms/form/SelectInputAtom'
import {useState, useEffect} from 'react'
import axios from 'axios'

const RecepcionMedicamentoForm = ({formData, handleChange}) => {
    const [medicamentos, setMedicamentos] = useState([])

    useEffect(() => {
        const fetchMedicamentos = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/insumo/medicamentos/')
                setMedicamentos(response.data)
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
                name="medicamento"
                label="Nombre medicamento"
                // Mantén options como {value, label}
                options={medicamentos.map(m => ({
                    value: m.id,
                    label: m.nombregenerico,
                }))}
                // El Select debe estar controlado por el id seleccionado
                value={formData.id_insumo ?? ""}
                // onChange actualiza id_insumo y nombregenerico
                onChange={(e) => {
                    const id = e.target.value;
                    const found = medicamentos.find(m => m.id === parseInt(id));
                    handleChange('id_insumo', id);
                    handleChange('nombre_generico', found?.nombregenerico ?? "");
                }}
            />

            <TextInputAtom
            name='concentracion'
            label='Concentracion'
            type='text'
            value={formData.concentracion}
            onChange={(e)=> handleChange('concentracion', e.target.value)}
            />

            <TextInputAtom
            name='presentacion'
            label='Presentacion'
            type='text'
            value={formData.presentacion_comercial}
            onChange={(e)=> handleChange('presentacion_comercial', e.target.value)}
            />

            <TextInputAtom
            name = 'formula farmaceutica'
            label = 'Formula farmaceutica'
            type = 'text'
            value = {formData.formula_farmaceutica}
            onChange = {(e)=> handleChange('formula_farmaceutica', e.target.value)}
            />

            {/* <SelectInputAtom
            name = 'vida util'
            label= 'Vida util'
            options = {[
                {value: '1', label: '1 año'},
                {value: '2', label: '2 años'},
                {value: '3', label: '3 años'},
            ]}
            value = {formData.vidaUtil}
            onChange = {(e)=> handleChange('vidaUtil', e.target.value)}
            /> */}

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
            />

            <TextInputAtom
            name = 'factura'
            label = 'factura'
            type = 'text'
            required
            value = {formData.numero_factura}
            onChange = {(e) => handleChange('numero_factura', e.target.value)}
            />

            <TextInputAtom
            name = 'proveedor'
            label = 'proveedor'
            type = 'text'
            value = {formData.proveedor}
            onChange = {(e)=> handleChange('proveedor', e.target.value)}
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
            />

            <SelectInputAtom
            name = 'tipo inventario'
            label = 'tipo inventario'
            options = {[
                {value: "medicamentos", label: "medicamentos"},
                {value: "control especial", label: "control especial"},
                
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

export default RecepcionMedicamentoForm
