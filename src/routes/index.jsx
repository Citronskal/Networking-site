import { useRoutes } from "react-router-dom";
import { Home, LoginPage } from "@/pages";


export const SetRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);
  return routes;
};
