import { AxiosError } from "axios";
import { createContext, useContext, useState } from "react";
import { modalError } from "../Components/modal/error";
import { modalSuccess } from "../Components/modal/success";
import { iRegiterTechData } from "../Components/modal/tech/techRegister";
import { api } from "../Services/axios";
import { iApiError, iTechs, UserContext } from "./UserContext";

interface iTechProvider {
  children: React.ReactNode;
}

interface iTechContextValue {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  closeModal: () => void;
  openModal: () => void;
  addTech: (data: iRegiterTechData) => void;
  removeTech: (deleteTech: iTechs) => void;
}

export const TechContext = createContext({} as iTechContextValue);

export const TechProvider = ({ children }: iTechProvider) => {
  const { techs, setTechs } = useContext(UserContext);

  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  const addTech = async (data: iRegiterTechData) => {
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
      const requestError = error as AxiosError<iApiError>;
      modalError(requestError.response?.data.message);
    }
  };

  const removeTech = async (deleteTech: iTechs) => {
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
      const requestError = error as AxiosError<iApiError>;
      modalError(requestError.response?.data.message);
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
        removeTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
