import { useContext } from "react";
import TechRegister from "../../Components/modal/tech/techRegister";
import TechList from "../../Components/TechList";
import { TechContext } from "../../Contexts/TechContext";
import { UserContext } from "../../Contexts/UserContext";
import {
  HeaderDashboard,
  SectionUser,
  SectionData,
  DataHeader,
} from "./styles";

const Dashboard = () => {
  const { user, userLogout } = useContext(UserContext);
  const { openModal } = useContext(TechContext);

  return (
    <>
      <HeaderDashboard>
        <h1>Kenzie Hub</h1>

        <button type="button" onClick={userLogout}>
          Sair
        </button>
      </HeaderDashboard>
      <main>
        <SectionUser>
          <h2>Olá, {user.name}</h2>
          <span>{user.course_module}</span>
        </SectionUser>
        <SectionData>
          <DataHeader>
            <h2>Tecnologias</h2>
            <button onClick={openModal}>+</button>
          </DataHeader>
          <TechList />
        </SectionData>
      </main>

      <TechRegister />
    </>
  );
};
//};

export default Dashboard;
