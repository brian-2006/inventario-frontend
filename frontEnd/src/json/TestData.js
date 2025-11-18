export const MedicineMainInventoryColumns = ['','Nombre del medicamento', 'Cantidad disponible', 'Número de lotes', 'Valor total'] //desde el endpoint debe venir un array para iterar sobre ellos
export const DmMainInventoryColumns = ['','Nombre dispositivo', 'Cantidad disponible', 'Número de lotes', 'Valor total', 'vida util', 'clasificacion riesgo'] //desde el endpoint debe venir un array para iterar sobre ellos


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
export const SemaforizacionDmColumns = ["Estado", "Lote", "Fecha vencimiento", "Nombre", "Laboratorio", "Cantidad total", "Precio unitario", "Precio total", "Invima", "Vencimiento invima", "clasificacion", "vida util"]

export const ReposicionMedicamentosColumns = ["fecha","Nombre medicamento", "lote", "fecha de vencimiento", "precio unitario", "cantidad total", "precio total","registro Invima", "fecha vencimiento invima", "fabricante"]
export const ReposicionDmColumns = ["fecha","Nombre dm", "lote", "fecha de vencimiento", "precio unitario", "cantidad total", "precio total","registro Invima", "fecha vencimiento invima", "fabricante", "vida util", "clasificaion riesgo" ]

export const ReposicionMedicamentosData = [
  {
    nombreMedicamento: "Paracetamol 500mg",
    lote: "L00123",
    fechaVencimiento: "2026-04-15",
    precioUnitario: 1200,
    cantidadTotal: 250,
    registroInvima: "INVIMA-2023M-0012345",
    fechaVencimientoInvima: "2028-12-31",
    fabricante: "Laboratorios Genfar S.A."
  },
  {
    nombreMedicamento: "Amoxicilina 500mg",
    lote: "A09876",
    fechaVencimiento: "2025-09-10",
    precioUnitario: 1800,
    cantidadTotal: 180,
    registroInvima: "INVIMA-2022M-0098765",
    fechaVencimientoInvima: "2027-06-30",
    fabricante: "Laboratorios Lafrancol"
  },
  {
    nombreMedicamento: "Ibuprofeno 400mg",
    lote: "IB4578",
    fechaVencimiento: "2027-01-20",
    precioUnitario: 1500,
    cantidadTotal: 300,
    registroInvima: "INVIMA-2021M-0045789",
    fechaVencimientoInvima: "2026-11-15",
    fabricante: "Tecnoquímicas S.A."
  }
]


export const ReposicionDmData = [
  {
    nombreDm: "Guantes de látex talla M",
    lote: "GLT-M-2024",
    fechaVencimiento: "2027-08-15",
    precioUnitario: 350,
    cantidadTotal: 5000,
    registroInvima: "INVIMA-2023DM-0001122",
    fechaVencimientoInvima: "2028-12-31",
    fabricante: "Medline Industries Inc.",
    vidaUtil: "3 años",
    clasificacionRiesgo: "Clase I"
  },
  {
    nombreDm: "Jeringa 5ml con aguja",
    lote: "JRNG-5-2023",
    fechaVencimiento: "2026-05-20",
    precioUnitario: 250,
    cantidadTotal: 8000,
    registroInvima: "INVIMA-2022DM-0045632",
    fechaVencimientoInvima: "2027-10-10",
    fabricante: "Becton Dickinson S.A.",
    vidaUtil: "2 años",
    clasificacionRiesgo: "Clase IIa"
  },
  {
    nombreDm: "Catéter intravenoso 20G",
    lote: "CAT20G-9987",
    fechaVencimiento: "2028-02-01",
    precioUnitario: 1200,
    cantidadTotal: 2000,
    registroInvima: "INVIMA-2021DM-0078901",
    fechaVencimientoInvima: "2029-05-31",
    fabricante: "Terumo Corporation",
    vidaUtil: "4 años",
    clasificacionRiesgo: "Clase IIb"
  }
]
