import { BrowserRouter } from "react-router-dom";
import { SetRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <SetRoutes />
    </BrowserRouter>
  );
}

export default App;
