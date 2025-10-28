import axios from 'axios';
import fileDownload from 'js-file-download';

const handleDownLoad = async (endpoint, startDate, endDate, searchTerm, nombre_archivo) => {
  try {
    const params = {
      start: startDate, // ✅ corregido
      end: endDate,
      q: searchTerm,
    };

    const response = await axios.get(`${endpoint}`, {
      params,
      responseType: 'blob', // ✅ recibe binario
    });
    
    fileDownload(response.data, nombre_archivo);
  } catch (error) {
    console.error(error);
  }
};

export default handleDownLoad;