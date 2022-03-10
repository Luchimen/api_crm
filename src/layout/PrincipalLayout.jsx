import { Outlet, Link, useLocation, NavLink } from "react-router-dom";

export const PrincipalLayout = () => {
  const location = useLocation();
  const urlActual = location.pathname;
  return (
    <div className="layout">
      <div className="left">
        <h2>CRM - Clientes</h2>
        <nav className="navbar">
          <Link
            to="/clientes"
            className={`${
              urlActual === "/clientes" ? "navbarLink isActive" : "navbarLink"
            }`}
          >
            Clientes
          </Link>
          <Link
            className={`${
              urlActual === "/clientes/nuevo"
                ? "navbarLink isActive"
                : "navbarLink"
            }`}
            to="/clientes/nuevo"
          >
            Nuevo Cliente
          </Link>
        </nav>
      </div>
      <div className="right">
        <Outlet />
      </div>
    </div>
  );
};
