import React from "react";
import { useState } from "react";

export const useGetClient = async (id) => {
  //const [clientSelected, setClientSelected] = useState({});
  try {
    const url = `http://localhost:4000/clientes/${id}`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    return resultado;
  } catch (error) {
    return console.log(error);
  }
};

export const useInsertClient = async (method, values, id = 0) => {
  try {
    const url = `http://localhost:4000/clientes/${method === "PUT" ? id : ""}`;
    const respuesta = await fetch(url, {
      method,
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resultado = await respuesta.json();
    return resultado;
  } catch (error) {
    console.log(error);
  }
};
