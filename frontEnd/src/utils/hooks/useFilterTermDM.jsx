import { useMemo } from 'react';

// Filtro para dispositivos médicos
// Crea un texto unificado con los campos más relevantes y filtra por prefijo
const useFilterTermDM = ({ SearchTerm, data }) => {
  const q = (SearchTerm || '').toLowerCase();

  const filteredData = useMemo(() => {
    return (data || []).filter((row) => {
      const nombre = (row.id_clasificaciondm__id_dm__nombredm || '').toLowerCase();
      const clasificacion = (row.id_clasificaciondm__clasificacionriesgo || '').toLowerCase();
      const vidaUtil = (row.id_clasificaciondm__vidautil || '').toString().toLowerCase();

      const nombreCompleto = `${nombre} ${clasificacion} ${vidaUtil}`;

      return nombreCompleto.startsWith(q);
    });
  }, [data, q]);

  return filteredData;
};

export default useFilterTermDM;
