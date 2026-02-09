import axios from 'axios';
import fileDownload from 'js-file-download';

const handleDownLoad = async (endpoint, startDate, endDate, searchTerm = "", nombre_archivo) => {
  try {
    const params = {
      start: startDate, 
      end: endDate,
      q: searchTerm,
    };

    const response = await axios.get(`${endpoint}`, {
      params,
      responseType: 'blob', 
    });
    
    fileDownload(response.data, nombre_archivo);
  } catch (error) {
    console.error(error);
  }
};

export default handleDownLoad;

//TOCA HACER EL PROPIO DOWNLOAD EXCEL PARA QUE RECIBA SUS PROPIOS PARAMS DE EL INVENTARIO Y NO SOLO LA RECEPCION TECNICA