import { useEffect, useState } from 'react';
import axios from 'axios';

import SemaforizacionDmTable from '../../organisms/table/SemaforizacionTableDM'
import { SemaforizacionMedicamentosColumns } from '../../../json/TestData'
import useFilterTermDM from '../../../utils/hooks/useFilterTermDM'

const SemaforizacionEquiposBiomedicosPage = ({ searchTerm, onDownload }) => {
  const [info, setInfo] = useState(null);

  const id_inventory = 16;

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/inventarioPrincipal/semaforizacion/${id_inventory}/`)
      .then((response) => {
        setInfo(response.data);

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  // Derivados filtrados (sin estados extra)
  const vencidos = useFilterTermDM({ SearchTerm: searchTerm, data: info?.vencidos || [] });
  const menos15 = useFilterTermDM({ SearchTerm: searchTerm, data: info?.menos_15_dias || [] });
  const menos3 = useFilterTermDM({ SearchTerm: searchTerm, data: info?.menos_3_meses || [] });
  const tresMesesUnAno = useFilterTermDM({ SearchTerm: searchTerm, data: info?.tres_meses_un_año || [] });

  // Actualiza el payload para descarga cada vez que cambie el filtro o la data base
  useEffect(() => {
    if (!info) return;
    onDownload({
      vencidos,
      menos_15_dias: menos15,
      menos_3_meses: menos3,
      tres_meses_un_año: tresMesesUnAno,
    });
  }, [info, searchTerm, vencidos, menos15, menos3, tresMesesUnAno]);

  

  return (
    <>
      {info && (
        <SemaforizacionDmTable
          headers={SemaforizacionMedicamentosColumns}
          vencidos={vencidos}
          menor_15_dias={menos15}
          de_15_dias_3_meses={menos3}
          entre_3_meses_1_ano={tresMesesUnAno}
        />
      )}
    </>
  );
};

export default SemaforizacionEquiposBiomedicosPage;