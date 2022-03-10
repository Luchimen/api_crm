import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export const Client = ({ client, handleDelete }) => {
  const navigate = useNavigate();

  const { nombre, empresa, email, telefono, notas, id } = client;

  // const handleDelete = async () => {
  //   console.log("Deleteando el registro", id);
  //   // Swal.fire({
  //   //   title: "Are you sure?",
  //   //   text: "You won't be able to revert this!",
  //   //   icon: "warning",
  //   //   showCancelButton: true,
  //   //   confirmButtonColor: "#3085d6",
  //   //   cancelButtonColor: "#d33",
  //   //   confirmButtonText: "Yes, delete it!",
  //   // }).then((result) => {
  //   //   if (result.isConfirmed) {
  //   //     Swal.fire("Deleted!", "Your file has been deleted.", "success");
  //   //   }
  //   // });

  // };

  return (
    <tr className="client__tr">
      <td className="client__td">{nombre}</td>
      <td className="client__td">
        <p>
          <span>Email:</span>
          {email}
        </p>
        <p>
          <span>Telefono:</span>
          {email}
        </p>
      </td>
      <td className="client__td">{empresa}</td>
      <td className="client__td container__btn">
        <button
          type="button"
          className="client__btn ver"
          onClick={() => navigate(`/clientes/${id}`)}
        >
          Ver
        </button>
        <button
          type="button"
          className="client__btn"
          onClick={() => navigate(`/clientes/editar/${id}`)}
        >
          Editar
        </button>
        <button
          type="button"
          className="client__btn eliminar"
          onClick={() => handleDelete(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};
