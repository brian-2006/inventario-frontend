import { useMemo } from 'react';

const useFilterTerm = ({ SearchTerm, data }) => {
  const q = (SearchTerm || '').toLowerCase();

  const filteredData = useMemo(() => {
    return data.filter((row) => {
      const nombre = (row.id_presentacion__id_medicamento__nombregenerico || '').toLowerCase();
      const presentacion = (row.id_presentacion__presentacioncomercial || '').toLowerCase();
      const concentracion = (row.id_presentacion__concentracion || '').toLowerCase();
      const formaFarmaceutica = (row.id_presentacion__formulafarmaceutica || '').toLowerCase();

      const nombreCompleto = `${nombre} ${presentacion} ${concentracion} ${formaFarmaceutica}`;

      return nombreCompleto.startsWith(q);
    });
  }, [data, q]);

  return filteredData;
};

export default useFilterTerm;
