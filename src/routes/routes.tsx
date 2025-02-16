import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Users from "../pages/Users";
import Layout from "../layouts/Layout";
import ControlSidebar from "../components/ControlSidebar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Dashboard /> },
            { path: "dashboard", element: <Dashboard /> },
            { path: "controlSidebar", element: <ControlSidebar /> },
            { path: "users", element: <Users /> },
        ],
    },
    { path: "/login", element: <Login /> },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
