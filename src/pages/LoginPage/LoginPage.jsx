import { LoginForm } from "../../components/LoginForm/LoginForm";
import { NaviBar } from "@/";

export const LoginPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <NaviBar />
      <LoginForm />
    </>
  );
};
