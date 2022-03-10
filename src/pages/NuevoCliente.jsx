import React from "react";
import { Formluario } from "../components/Formluario";

export const NuevoCliente = () => {
  return (
    <div className="newclient">
      <h2 className="newclient__title">Nuevo Cliente</h2>
      <p>Llena los siguientes campos para registrar un cliente</p>
      <Formluario />
    </div>
  );
};
