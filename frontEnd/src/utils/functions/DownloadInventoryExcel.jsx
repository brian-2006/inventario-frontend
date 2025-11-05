import axios from 'axios';
import fileDownload from 'js-file-download';

const handleDownLoadInventory = async (endpoint, startDate, endDate, nombre_archivo, lotNumbers) => {
  try {
    const params = {
      start: startDate, 
      end: endDate,
      lotNumbers: JSON.stringify(lotNumbers),
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