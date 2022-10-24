import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../Services/axios";

import { modalSuccess } from "../Components/modal/success";
import { modalError } from "../Components/modal/error";
import { iLoginData } from "../Pages/Login";
import { AxiosError } from "axios";
import { iRegisterData } from "../Pages/Register";

interface iUserProvider {
  children: React.ReactNode;
}

interface iUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  created_at: string;
  updated_at: string;
  techs: iTechs[];
}

export interface iTechs {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface iApiError {
  message: string;
}

interface iUserContextValue {
  user: iUser | null;
  currentRoute: string | null;
  setCurrentRoute: React.Dispatch<React.SetStateAction<string | null>>;
  userLogin: (data: iLoginData) => void;
  userLogout: () => void;
  userRegister: (data: iRegisterData) => void;
  techs: iTechs[];
  setTechs: React.Dispatch<React.SetStateAction<iTechs[]>>;
}

export const UserContext = createContext({} as iUserContextValue);

export const UserProvider = ({ children }: iUserProvider) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [currentRoute, setCurrentRoute] = useState<string | null>(null);
  const [techs, setTechs] = useState([] as iTechs[]);
  //console.log(user);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          //console.log(response);
          setUser(response.data);
          setTechs(response.data.techs);
          navigate(currentRoute ? currentRoute : "dashboard");
        } catch (error) {
          localStorage.removeItem("authToken");
          navigate("/");
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userLogin = async (data: iLoginData) => {
    try {
      await api.post("sessions", data).then((resp) => {
        //console.log(resp);

        setUser(resp.data.user);
        localStorage.removeItem("authToken");
        window.localStorage.setItem("authToken", resp.data.token);

        //setAuthentication(true);

        navigate("/dashboard");
      });
    } catch (error) {
      console.log(error);
      const requestError = error as AxiosError<iApiError>;
      modalError(requestError.response?.data.message);
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const userRegister = async (data: iRegisterData) => {
    try {
      await api.post("users", data).then((resp) => {
        //console.log(resp.data);
        modalSuccess("Conta cadastrada!");
        navigate("/");
      });
    } catch (error) {
      console.log(error);
      const requestError = error as AxiosError<iApiError>;
      modalError(requestError.response?.data.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        currentRoute,
        setCurrentRoute,
        userLogin,
        userLogout,
        userRegister,
        techs,
        setTechs,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
