import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Alerta } from "./Alerta";
import { useInsertClient } from "../hooks/useGetClient";

const initialValue = {
  nombre: "",
  empresa: "",
  email: "",
  telefono: "",
  notas: "",
};

export const Formluario = ({ clientSelected = initialValue }) => {
  const navigate = useNavigate();
  const newClientSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(3, "El nombre es muy corto")
      .max(20, "El nombre es muy largo")
      .required("El nombre del cliente es obligatorio"),
    empresa: Yup.string().required("El nombre de la empresa es obligatoria"),
    email: Yup.string()
      .email("Email no valido chico!")
      .required("El email es obligatorio"),
    telefono: Yup.number()
      .positive("Numero no valido")
      .integer("Numero no valido")
      .typeError("El número no es válido"),
    notas: "",
  });

  const handleSubmit = async (values) => {
    clientSelected.id
      ? await useInsertClient("PUT", values, clientSelected.id)
      : await useInsertClient("POST", values);
    navigate("/clientes");
  };
  return (
    <div className="formContainer">
      {/* <h2>Agregar Cliente</h2> */}
      <Formik
        initialValues={clientSelected}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
        validationSchema={newClientSchema}
      >
        {({ errors, touched }) => {
          return (
            <Form className="form">
              <div>
                <label className="form__label" htmlFor="nombre">
                  Nombre:
                </label>
                <Field
                  id="nombre"
                  type="text"
                  className="form__input"
                  placeholder="Nombre del Cliente"
                  name="nombre"
                />
                {errors.nombre && touched.nombre ? (
                  <Alerta>{errors.nombre}</Alerta>
                ) : null}
              </div>
              <div>
                <label className="form__label" htmlFor="empresa">
                  Empresa:
                </label>
                <Field
                  id="empresa"
                  type="text"
                  className="form__input"
                  placeholder="Empresa del Cliente"
                  name="empresa"
                />
                {errors.empresa && touched.nombre ? (
                  <Alerta>{errors.empresa}</Alerta>
                ) : null}
              </div>
              <div>
                <label className="form__label" htmlFor="email">
                  Email:
                </label>
                <Field
                  id="email"
                  type="email"
                  className="form__input"
                  placeholder="Email del Cliente"
                  name="email"
                />
                {errors.email && touched.nombre ? (
                  <Alerta>{errors.email}</Alerta>
                ) : null}
              </div>
              <div>
                <label className="form__label" htmlFor="telefono">
                  Telefono:
                </label>
                <Field
                  id="telefono"
                  type="tel"
                  className="form__input"
                  placeholder="Email del Cliente"
                  name="telefono"
                />
                {errors.telefono && touched.nombre ? (
                  <Alerta>{errors.telefono}</Alerta>
                ) : null}
              </div>
              <div>
                <label className="form__label" htmlFor="notas">
                  Notas:
                </label>
                <Field
                  as="textarea"
                  id="notas"
                  type="text"
                  className="form__input"
                  placeholder="Notas del cliente"
                  name="notas"
                />
              </div>
              <input
                type="submit"
                value={clientSelected.id ? "Editar Cliente" : "Agregar Cliente"}
                className="form__button"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
