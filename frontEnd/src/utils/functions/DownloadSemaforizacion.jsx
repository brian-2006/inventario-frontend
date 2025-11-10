import axios from 'axios';
import fileDownload from 'js-file-download';

const handleDownLoadSemaforizacion = async (endpoint, data, nombre_archivo) => {
  try {
    const params = {
      data: JSON.stringify(data),
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

export default handleDownLoadSemaforizacion;

//TOCA HACER EL PROPIO DOWNLOAD EXCEL PARA QUE RECIBA SUS PROPIOS PARAMS DE EL INVENTARIO Y NO SOLO LA RECEPCION TECNICA