import { createContext, useContext, useState } from "react";
import { modalError } from "../Components/modal/error";
import { modalSuccess } from "../Components/modal/success";
import { api } from "../Services/axios";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { techs, setTechs } = useContext(UserContext);

  const [modal, setModal] = useState(false);

  //console.log(techs);

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  const addTech = async (data) => {
    try {
      const token = localStorage.getItem("authToken");

      const resp = await api.post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const newlist = [...techs, resp.data];

      modalSuccess("Tecnologia cadastrada!");
      setTechs(newlist);
      //console.log(resp);
    } catch (error) {
      console.log(error);
      modalError(error);
    }
  };

  const removeTech = async (deleteTech) => {
    try {
      const token = localStorage.getItem("authToken");

      await api.delete(`/users/techs/${deleteTech.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const newList = techs.filter((tech) => tech.id !== deleteTech.id);
      modalSuccess("Tecnologia deletada com sucesso");
      setTechs(newList);
    } catch (error) {
      console.log(error);
      modalError(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        modal,
        setModal,
        closeModal,
        openModal,
        addTech,
        techs,
        removeTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
