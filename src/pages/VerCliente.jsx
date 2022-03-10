import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { useGetClient } from "../hooks/useGetClient";
export const VerCliente = () => {
  const [clientSelected, setClientSelected] = useState({});
  const [cargando, setCargando] = useState(false);

  const { id } = useParams();

  useEffect(async () => {
    setCargando(!cargando);
    const resultado = await useGetClient(id);
    setClientSelected(resultado);
    setCargando(false);
  }, []);
  const { nombre, empresa, email, telefono, notas } = clientSelected;

  return cargando ? (
    <Spinner />
  ) : Object.keys(clientSelected).length === 0 ? (
    <p> No hay nada gaaa</p>
  ) : (
    <div className="verCliente">
      <h2 className="verCliente__title">Ver Cliente: {nombre}</h2>
      <p>Datos personales de cada cliente</p>
      <div className="verCliente__textcontainer">
        <p>
          Cliente : <span>{nombre}</span>
        </p>
        <p>
          Email : <span>{email}</span>
        </p>
        <p>
          Telefono : <span>{telefono}</span>
        </p>
        <p>
          Empresa : <span>{empresa}</span>
        </p>
        {notas && (
          <p>
            Notas : <span>{notas}</span>
          </p>
        )}
      </div>
    </div>
  );
};
