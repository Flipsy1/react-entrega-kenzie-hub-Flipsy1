import "./Css/App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Routes from "./Routes";
import { UserProvider } from "./Contexts/UserContext";
import { TechProvider } from "./Contexts/TechContext";

function App() {
  return (
    <div className="App">
      <ToastContainer toastStyle={{ backgroundColor: "var(--grey-2)" }} />

      <UserProvider>
        <TechProvider>
          <Routes />
        </TechProvider>
      </UserProvider>
    </div>
  );
}

export default App;
