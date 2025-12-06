import { useEffect, useState } from 'react';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_PRODUCTION_URL

import SemaforizacionTable from '../../organisms/table/SemaforizacionTable'
import { SemaforizacionMedicamentosColumns } from '../../../json/TestData'
import useFilterTerm from '../../../utils/hooks/useFilterTerm'

const SemaforizacionControlEspecialPage = ({ searchTerm, onDownload }) => {
  const [info, setInfo] = useState(null);

  const id_inventory = 11;

  useEffect(() => {
    axios
      .get(`${BASE_URL}/inventarioPrincipal/semaforizacion/${id_inventory}/`)
      .then((response) => {
        setInfo(response.data);

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  // Derivados filtrados (sin estados extra)
  const vencidos = useFilterTerm({ SearchTerm: searchTerm, data: info?.vencidos || [] });
  const menos15 = useFilterTerm({ SearchTerm: searchTerm, data: info?.menos_15_dias || [] });
  const menos3 = useFilterTerm({ SearchTerm: searchTerm, data: info?.menos_3_meses || [] });
  const tresMesesUnAno = useFilterTerm({ SearchTerm: searchTerm, data: info?.tres_meses_un_año || [] });

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
        <SemaforizacionTable
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

export default SemaforizacionControlEspecialPage;