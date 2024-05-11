import { useRoutes } from "react-router-dom";
import { Home } from "@/pages/Home";
import { LoginPage } from "@/pages/LoginPage";

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
