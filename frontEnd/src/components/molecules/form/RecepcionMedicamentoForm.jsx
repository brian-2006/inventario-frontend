import TextInputAtom from '../../atoms/form/Input'
import SelectInputAtom from '../../atoms/form/SelectInputAtom'
import AutoCompleteAtom from '../../atoms/form/AutoCompleteAtom'
import {useState, useEffect} from 'react'
import {handleGet} from '../../../utils/api/apiClient'

const RecepcionMedicamentoForm = ({formData, handleChange, setter}) => {
    const [medicamentos, setMedicamentos] = useState([])
    const [proveedores, setProveedores] = useState([])
    const [laboratorios, setLaboratorios] = useState([])
    const [concentraciones, setConcentracion] = useState([])
    const [presentacionesComerciales, setPresentacionesComerciales] = useState([])
    const [formasFarmaceuticas, setFormaFarmaceutica] = useState([])
    
    //se traen todas las opciones estandar para registrar medicamento
    useEffect(() => {
        handleGet('insumo/medicamentos/', setMedicamentos)
        handleGet('insumo/proveedor/', setProveedores)
        handleGet('insumo/laboratorio/', setLaboratorios)
        handleGet('insumo/concentracion/', setConcentracion)
        handleGet('insumo/presentacioncomercial/', setPresentacionesComerciales)
        handleGet('insumo/formafarmaceutica/', setFormaFarmaceutica)
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
                name="medicamento"
                label="Nombre medicamento"
                options={medicamentos.map(m => ({
                    value: m.id,
                    label: m.nombregenerico,
                }))}
                // El Select debe estar controlado por el id seleccionado
                value={formData.id_insumo ?? ""}
                // onChange actualiza id_insumo y nombregenerico
                onChange={(event, newValue)=>{
                    setter(prevData=>({
                        ...prevData,
                        id_insumo: newValue,
                        nombre_generico: medicamentos.find(m=> m.id === newValue)?.nombregenerico ?? ""
                    }))
                }}
            />

            <AutoCompleteAtom
            name='concentracion'
            label='Concentracion'
            options = {
                concentraciones.map(concentracion=>(
                    {
                        value: concentracion.concentracion,
                        label: concentracion.concentracion
                    }
                ))
            }
            value={formData.concentracion}
            onChange={(event, newValue)=>{
                setter(prevData=>({
                    ...prevData,
                    concentracion: newValue,
                }))
            }}
            />

            <AutoCompleteAtom
            name='presentacion'
            label='Presentacion'
            options = {
                presentacionesComerciales.map(presentacion=>(
                    { 
                        value: presentacion.nombrepresentacion,
                        label: presentacion.nombrepresentacion
                    }
                ))
            }
            value={formData.presentacion_comercial}
            onChange={(handleAutocompleteChange('presentacion_comercial'))}
            />

            <AutoCompleteAtom
            name = 'formula farmaceutica'
            label = 'Forma farmaceutica'
            options = {
                formasFarmaceuticas.map(forma =>(
                    {
                        value: forma.nombreforma,
                        label: forma.nombreforma
                    }
                ))
            }
            value = {formData.formula_farmaceutica}
            onChange = {handleAutocompleteChange('formula_farmaceutica')}
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

            <AutoCompleteAtom
            name = 'fabricante'
            label = 'fabricante'
            options = {
                laboratorios.map(laboratorio =>({
                    value: laboratorio.id,
                    label: laboratorio.nombrelaboratorio
                }))
            }
            required
            value = {formData.fabricante}
            onChange = {handleAutocompleteChange('fabricante')}
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
            options={[
                {value: 'vigente', label: 'vigente'},
                {value: 'no vigente', label: 'no vigente'}
            ]}
            value ={formData.estado_registro_invima}
            onChange = {(e)=> handleChange('estado_registro_invima', e.target.value)}
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
            name = 'proveedor'
            label = 'proveedor'
            options ={
                proveedores.map(proveedor =>({
                    value: proveedor.id,
                    label: proveedor.nombreproveedor
                }))
            }
            value = {formData.proveedor}
            onChange = {handleAutocompleteChange('proveedor')}
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
