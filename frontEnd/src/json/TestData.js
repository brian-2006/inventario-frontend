export const MedicineMainInventoryColumns = ['','Nombre del medicamento', 'Cantidad disponible', 'Número de lotes', 'Valor total'] //desde el endpoint debe venir un array para iterar sobre ellos
export const DmMainInventoryColumns = ['','Nombre dispositivo', 'Cantidad disponible', 'Número de lotes', 'Valor total', 'vida util', 'clasificacion riesgo'] //desde el endpoint debe venir un array para iterar sobre ellos

export const TableRequested = {
  Lote: "Lote",
  Medicamentos: "Medicamento",
  Dm: "Dispositivo medico",
}

export const TyptRequest = {
  eliminar: "DELETE",
  actualizar: "UPDATE",
  crear: "CREATE"
}

export const TypeState = {
  pendiente: "PENDIENTE",
  validado: "VALIDADO",
  negado: "NEGADO"
}

export const TypeInventory = {
    Medicamentos: 'medicamentos',
    Dm: 'dispositivos medicos',
    ControlEspecial: 'control especial',
    Aseo: 'aseo',
    Bioseguridad: 'bioseguridad',
    Varios: 'varios',
    Respiratorio: 'respiratorio',
    Reactivo: 'reactivo',
    EquiposBiomedicos: 'equipos biomedicos'
}

export const LoteRowsColums = ["lote", "cantidad total", "Fecha vencimiento", "Precio unitario", "Precio total", "Fabricante", "Registro Invima", "Fecha vencimiento invima", "acciones" ];

export const RecepcionTencinaRows = {
    Medicamento: ['Fecha', 'Hora', 'Número de factura', 'Proveedor','Nombre generico', 
        'Presentacion comercial', 'concentracion', 'Forma Farmaceutica', 'Laboratorio', 'Lote', 'Fecha de vencimiento',
        'Registro Invima', 'Fecha vencimiento registro invima', 'Estado de registro invima', 'Cantidad', 
        'Precio unitario', 'Estado de embalaje', 'Condiciones de transporte', 'Quien realiza', 'Observaciones', 'inventario', 'Tipo acta'],
    
    Dm: ['Fecha', 'Hora', 'Número de factura', 'Proveedor', 'Laboratorio', 'Nombre dm', 'vida util', 'Clasificacion riesgo',
        'Lote', 'Fecha de vencimiento','Registro Invima', 'Fecha vencimiento de registro invima', 
        'Cantidad', 'Precio unitario', 'Estado de embalaje', 
        'Condiciones de transporte', 'Quien realiza', 'Observaciones', 'inventario', 'Tipo acta']
}

export const SemaforizacionMedicamentosColumns = ["Estado", "Lote", "Fecha vencimiento", "Nombre","Presentacion", "Concentracion",  "Forma Farmaceutica",  "Laboratorio", "Cantidad total", "Precio unitario", "Precio total", "Invima", "Vencimiento invima" ]
export const SemaforizacionDmColumns = ["Estado", "Lote", "Fecha vencimiento", "Nombre Dm", "Laboratorio", "Cantidad total", "Precio unitario", "Precio total", "Invima", "Vencimiento invima", "clasificacion", "vida util"]

export const ReposicionMedicamentosColumns = ["fecha","Nombre medicamento", "lote", "fecha de vencimiento", "precio unitario", "cantidad total", "precio total","registro Invima", "fecha vencimiento invima", "fabricante"]
export const ReposicionDmColumns = ["Nombre dm", "lote","fecha", "fecha de vencimiento", "precio unitario", "cantidad total", "precio total","registro Invima", "fecha vencimiento invima", "fabricante", "vida util", "clasificaion riesgo" ]




