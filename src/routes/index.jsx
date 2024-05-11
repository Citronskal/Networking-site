import { useRoutes } from "react-router-dom";
import { Home, Login } from "@/pages";


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
