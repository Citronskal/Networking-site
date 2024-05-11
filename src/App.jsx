import { BrowserRouter } from "react-router-dom";
import { SetRoutes } from "./routes";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <SetRoutes />
    </BrowserRouter>
  );
}

export default App;
