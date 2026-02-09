import TextInputAtom from '../../atoms/form/Input'
import SelectInputAtom from '../../atoms/form/SelectInputAtom'
import AutoCompleteAtom from '../../atoms/form/AutoCompleteAtom'
import {useState, useEffect} from 'react'
import { handleGet } from '../../../utils/api/apiClient'


const RecepcionDmForm = ({formData, handleChange, setter}) => {
    const [dms, setDms] = useState([])
    const [proveedores, setProveedores] = useState([])
    const [laboratorios, setLaboratorios] = useState([])
    const [presentacionDm, setPresentacionDm] = useState([])


    const [vidaUtilCantidad, setVidaUtilCantidad] = useState('')
    const [vidaUtilUnidad, setVidaUtilUnidad] = useState('MESES')

    useEffect(() => {
        
        handleGet('insumo/dm/', setDms)
        handleGet('insumo/proveedor/', setProveedores)
        handleGet('insumo/laboratorio/', setLaboratorios)
        handleGet('insumo/presentaciondm/', setPresentacionDm)
     }, [])

    useEffect(() => {
        if (formData.vida_util) {
            const partes = formData.vida_util.split(' '); // Divide por el espacio
            if (partes.length >= 2) {
                setVidaUtilCantidad(partes[0]); // "5"
                setVidaUtilUnidad(partes[1]);   // "AÑOS"
            }
        }
    }, [formData.vida_util]);

    const handleAutocompleteChange = (fieldName) => (event, newValue) => {
        setter(prevData => ({
          ...prevData,
          [fieldName]: newValue // Ya es solo el ID o null
        }));
    };


// 3. FUNCIÓN CLAVE: Une los valores y manda el string completo
    const handleVidaUtilChange = (tipo, valorNuevo) => {
        // Calculamos cuáles serán los nuevos valores ANTES de actualizar el estado
        // (porque el estado de React es asíncrono y no se actualiza de inmediato)
        const nuevaCantidad = tipo === 'cantidad' ? valorNuevo : vidaUtilCantidad;
        const nuevaUnidad = tipo === 'unidad' ? valorNuevo : vidaUtilUnidad;

        // Actualizamos los estados visuales
        if (tipo === 'cantidad') setVidaUtilCantidad(valorNuevo);
        if (tipo === 'unidad') setVidaUtilUnidad(valorNuevo);

        // 4. Construimos el string compuesto
        // Si el usuario borró el número, mandamos vacío para que salte el "required"
        if (!nuevaCantidad) {
            handleChange('vida_util', ''); 
            return;
        }

        // Creamos el valor final: Ej. "10 MESES"
        const valorCompuesto = `${nuevaCantidad} ${nuevaUnidad}`;

        // 5. Enviamos AHORA MISMO el valor compuesto al formulario principal
        handleChange('vida_util', valorCompuesto);
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

            {/* SECCIÓN DE VIDA ÚTIL COMPUESTA */}
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                
                {/* Campo Numérico */}
                <div style={{ flex: 1 }}>
                    <TextInputAtom
                        name='vida util cantidad' // Nombre visual, no afecta el submit
                        label='Vida Útil (Cantidad)'
                        type='number'
                        required
                        inputProps={{ min: 0 }}
                        // El valor viene del estado local
                        value={vidaUtilCantidad}
                        // Al cambiar, llamamos a nuestra función lógica
                        onChange={(e) => handleVidaUtilChange('cantidad', e.target.value)}
                    />
                </div>

                {/* Campo Selector de Unidad */}
                <div style={{ flex: 1 }}>
                    <SelectInputAtom
                        name='vida util unidad' // Nombre visual
                        label='Unidad'
                        required
                        // El valor viene del estado local
                        value={vidaUtilUnidad} 
                        options={[
                            { value: 'MESES', label: 'MESES' },
                            { value: 'AÑOS', label: 'AÑOS' },
                            { value: 'DIAS', label: 'DÍAS' },
                            { value: 'N/A', label: 'N/A' }
                        ]}
                        // Al cambiar, llamamos a la misma función lógica pero con tipo 'unidad'
                        onChange={(e) => handleVidaUtilChange('unidad', e.target.value)}
                    />
                </div>
            </div>

            <TextInputAtom
            name = 'serie'
            label= 'Serie'
            type = 'text'
            required
            value = {formData.serie}
            onChange = {(e)=> handleChange('serie', e.target.value)}
            />
            <AutoCompleteAtom
                name='presentacion comercial'
                label='Presentación comercial'
                options={presentacionDm.map(presentacion => ({
                    value: presentacion.nombrepresentaciondm,
                    label: presentacion.nombrepresentaciondm
                }))}
                value={formData.presentacion_comercial_dm}
                onChange={handleAutocompleteChange('presentacion_comercial_dm')}
                required
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
                {value: 'no vigente', label: 'no vigente'},
                {value: 'N/A', label: 'N/A'}
                
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
                {value: 'Cumple', label: 'Cumple'},
                {value: 'No cumple', label: 'No cumple'},
                {value: 'N/A', label: 'N/A'}
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
                {value: 'N/A', label: 'N/A'}
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
