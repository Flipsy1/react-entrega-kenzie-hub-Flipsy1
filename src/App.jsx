import "./Css/App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <ToastContainer toastStyle={{ backgroundColor: "var(--grey-2)" }} />

      <Routes />
    </div>
  );
}

export default App;
