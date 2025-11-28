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
    const indices = [];

    // 1️⃣ Filtrar productos
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

    // 2️⃣ Obtener solo los lotes asociados
    let filteredLotes = indices.map(i => loteRows[i]).filter(v => Array.isArray(v));

    // 3️⃣ Filtrar por fechas
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

    // 🆕 4️⃣ ELIMINAR productos sin lotes luego del filtrado
    const filteredFinalData = [];
    const filteredFinalLotes = [];

    filteredLotes.forEach((lotes, idx) => {
      if (lotes.length > 0) {
        filteredFinalData.push(filtered[idx]);
        filteredFinalLotes.push(lotes);
      }
    });

    // 5️⃣ Actualizar estado final
    setFilteredData(filteredFinalData);
    setFilteredLotRows(filteredFinalLotes);

    // callback
    onDownLoad(filteredFinalLotes);
  }, [rows, loteRows, searchTerm, startDate, endDate]);

  return { filteredData, filteredLotRows };
};

export default useInventoryFilter;
