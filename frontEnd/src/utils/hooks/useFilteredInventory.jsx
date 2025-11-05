// 📁 src/utils/hooks/useInventoryFilter.js
import { useState, useEffect } from "react";

const useInventoryFilter = ({ rows = [], loteRows = [], searchTerm = "", startDate, endDate, onDownLoad }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [filteredLotRows, setFilteredLotRows] = useState([]);

  useEffect(() => {
    if (!rows.length) {
      setFilteredData([]);
      setFilteredLotRows([]);
      return;
    }

    const q = (searchTerm || "").toLowerCase();

    // 1️⃣ Filtrar filas principales por búsqueda, preservando índices
    const indices = [];
    const filtered = q
      ? rows.filter((row, idx) => {
          const match = (row?.[0] || "").toLowerCase().startsWith(q);
          if (match) indices.push(idx);
          return match;
        })
      : rows.map((row, idx) => {
          indices.push(idx);
          return row;
        });

    // 2️⃣ Obtener los lotes correspondientes a los índices filtrados
    let filteredLotes = indices.map(i => loteRows[i]).filter(v => Array.isArray(v));

    // 3️⃣ Aplicar filtro de fecha sobre los lotes
    filteredLotes = filteredLotes.map(grupo =>
      grupo.filter(lote => {
        const fecha = new Date(lote["fecha vencimiento"]);
        const start = startDate ? new Date(startDate) : null;
        const end = endDate ? new Date(endDate) : null;

        if (start && end) return fecha >= start && fecha <= end;
        if (start) return fecha >= start;
        if (end) return fecha <= end;
        return true;
      })
    );

    // 4️⃣ Actualizar estado
    setFilteredData(filtered);
    setFilteredLotRows(filteredLotes);
    onDownLoad(filteredLotes);
  }, [rows, loteRows, searchTerm, startDate, endDate]);

  return { filteredData, filteredLotRows };
};

export default useInventoryFilter;
