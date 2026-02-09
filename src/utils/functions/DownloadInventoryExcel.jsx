import axios from 'axios';
import fileDownload from 'js-file-download';

const handleDownLoadInventory = async (endpoint, startDate, endDate, nombre_archivo, q, inventory) => {
  try {
    const params = {
      start: startDate, 
      end: endDate,
      searchTerm: q,
      inventory: inventory,
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

export default handleDownLoadInventory;