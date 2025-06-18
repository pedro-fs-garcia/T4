import { Routes, Route } from "react-router-dom";
import ClienteList from "../pages/clientes/ClienteList";
import ClienteForm from "../pages/clientes/ClienteForm";
import ClienteDetalhes from "../pages/clientes/ClienteDetalhes";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<ClienteList />} />
            {/* Rotas de Clientes */}
            <Route path="/clientes" element={<ClienteList />} />
            <Route path="/clientes/novo" element={<ClienteForm />} />
            <Route path="/clientes/:id" element={<ClienteDetalhes />} />
            <Route path="/clientes/:id/editar" element={<ClienteForm />} />
        </Routes >
    );
}