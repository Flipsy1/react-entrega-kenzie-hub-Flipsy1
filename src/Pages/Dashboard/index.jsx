import { useNavigate } from "react-router-dom";

import styles from "./style.module.css";

const Dashboard = ({ authentication, setAuthentication }) => {
  function logout() {
    setAuthentication(false);
  }

  const navigate = useNavigate();

  if (!authentication) {
    navigate("/");
  } else {
    return (
      <>
        <header className={styles.headerDash}>
          <h1>Kenzie Hub</h1>

          <button type="button" onClick={logout}>
            Sair
          </button>
        </header>
        <main className={styles.containerMain}>
          <section className={styles.sectionUser}>
            <h2>Olá, {window.localStorage.getItem("userName")}</h2>
            <span>{window.localStorage.getItem("userModule")}</span>
          </section>
          <section className={styles.sectionData}>
            <h2>Que pena! Estamos em desenvolvimento :(</h2>
            <p>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </p>
          </section>
        </main>
      </>
    );
  }
};

export default Dashboard;
