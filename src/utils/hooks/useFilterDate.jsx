const useFilterDate = ({startDate, endDate, data}) =>{
  // console.log('entrando')
  // console.log(`tipo de dato: ${typeof(startDate)}`)
  // console.log(`tipo de dato: ${typeof(endDate)}`)
  // console.log(`valor de fecha de inicio: ${startDate}`)
  // console.log(`valor de fecha de fin: ${endDate}`)

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