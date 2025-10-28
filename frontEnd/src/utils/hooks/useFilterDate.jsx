import {useEffect, useState} from 'react'

const useFilterDate = ({startDate, endDate, data}) =>{

    if (!startDate || !endDate || !Array.isArray(data)) return data || [];

  const start = new Date(startDate);
  const end = new Date(endDate);

  const filtered = data.filter(item => {
    const itemDate = new Date(item.fecha);
    return itemDate >= start && itemDate <= end;
  });

  return filtered;
};



export default useFilterDate;