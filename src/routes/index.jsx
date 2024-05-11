import { useRoutes } from "react-router-dom";
import { Home } from "@/pages/Home/Home";
import { Login } from "@/pages/Login/Login";

export const SetRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return routes;
};
