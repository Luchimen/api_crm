import { useEffect, useState } from "react";
import { Client } from "../components/Client";

export const Inicio = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    const getClientsFromApi = async () => {
      try {
        const url = "http://localhost:4000/clientes";
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setClients(resultado);
        console.log("Estamos trayendo al cliente");

        return;
      } catch (error) {
        console.log(error);
      }
    };
    getClientsFromApi();
  }, []);
  const handleDelete = async (id) => {
    try {
      const url = `http://localhost:4000/clientes/${id}`;
      const respuesta = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      await respuesta.json();
      const newClients = clients.filter((client) => client.id !== id);
      setClients(newClients);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="newclient">
      <h2 className="newclient__title">Listado de clientes</h2>
      <p>Administra tus clientes</p>
      <table className="client__table">
        <thead className="client__thead">
          <tr>
            <th className="table__th">Nombre</th>
            <th className="table__th">Contactos</th>
            <th className="table__th">Empresa</th>
            <th className="table__th">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <Client
              key={client.id}
              client={client}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
