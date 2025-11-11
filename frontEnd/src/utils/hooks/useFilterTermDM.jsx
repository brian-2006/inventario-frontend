import { useState, useEffect } from 'react'

// Filtro para dispositivos médicos
// Crea un texto unificado con los campos más relevantes y filtra por prefijo
const useFilterTermDM = ({ SearchTerm, data }) => {
  const [filteredData, setFilteredData] = useState(data);

  const q = (SearchTerm || '').toLowerCase();

  useEffect(() => {
    const filtered = (data || []).filter((row) => {
      const nombre = (row.id_clasificaciondm__id_dm__nombredm || '').toLowerCase();
      //const laboratorio = (row.idlote__fabricante__nombrelaboratorio || '').toLowerCase();
      const clasificacion = (row.id_clasificaciondm__clasificacionriesgo || '').toLowerCase();
      const vidaUtil = (row.id_clasificaciondm__vidautil || '').toString().toLowerCase();

    //   const lote = (row.idlote__numerolote || '').toLowerCase();
    //   const invima = (row.idlote__registroinvima || '').toLowerCase();

      const nombreCompleto = `${nombre} ${clasificacion} ${vidaUtil}`;
      return nombreCompleto.startsWith(q);
    });

    setFilteredData(filtered);
  }, [data, SearchTerm]);

  return filteredData;
}

export default useFilterTermDM;
