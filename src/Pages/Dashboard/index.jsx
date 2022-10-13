import { useNavigate } from "react-router-dom";
import { HeaderDashboard, SectionUser, SectionData } from "./styles";

const Dashboard = ({ authentication, setAuthentication }) => {
  function logout() {
    setAuthentication(false);
  }

  const navigate = useNavigate();

  if (!authentication) {
    navigate("/", { replace: true });
  } else {
    return (
      <>
        <HeaderDashboard>
          <h1>Kenzie Hub</h1>

          <button type="button" onClick={logout}>
            Sair
          </button>
        </HeaderDashboard>
        <main>
          <SectionUser>
            <h2>Olá, {window.localStorage.getItem("userName")}</h2>
            <span>{window.localStorage.getItem("userModule")}</span>
          </SectionUser>
          <SectionData>
            <h2>Que pena! Estamos em desenvolvimento :(</h2>
            <p>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </p>
          </SectionData>
        </main>
      </>
    );
  }
};

export default Dashboard;
