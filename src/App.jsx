import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrincipalLayout } from "./layout/PrincipalLayout";
import { Inicio } from "./pages/Inicio";
import { NuevoCliente } from "./pages/NuevoCliente";
import { EditarCiente } from "./pages/EditarCiente";
import { VerCliente } from "./pages/VerCliente";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clientes" element={<PrincipalLayout />}>
          <Route index element={<Inicio />} />
          <Route path="nuevo" element={<NuevoCliente />} />
          <Route path="editar/:id" element={<EditarCiente />} />
          <Route path=":id" element={<VerCliente />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
