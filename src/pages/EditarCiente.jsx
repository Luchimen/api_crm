import { Formluario } from "../components/Formluario";
import { useParams } from "react-router-dom";
import { useGetClient } from "../hooks/useGetClient";
import { useEffect, useState } from "react";
import { Spinner } from "../components/Spinner";
export const EditarCiente = () => {
  const { id } = useParams();
  const [clientSelected, setClientSelected] = useState({});
  const [cargando, setCargando] = useState(false);
  // useEffect(() => {
  //   const clientSelected = useGetClient(id);
  //   console.log(clientSelected);
  // }, []);
  useEffect(async () => {
    setCargando(!cargando);
    const resultado = await useGetClient(id);
    setClientSelected(resultado);
    setCargando(false);
  }, []);

  return cargando ? (
    <Spinner />
  ) : Object.keys(clientSelected).length === 0 ? (
    <p>No hay nada para mostrar</p>
  ) : (
    <div className="editclient">
      <h2 className="newclient__title">Edicion de cliente</h2>
      <p>Llena los siguientes campos para editar un cliente</p>
      <Formluario clientSelected={clientSelected} />
    </div>
  );
};
