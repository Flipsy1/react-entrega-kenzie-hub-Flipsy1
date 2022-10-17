import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../Services/axios";

import { modalSuccess } from "../Components/modal/success";
import { modalError } from "../Components/modal/error";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [currentRoute, setCurrentRoute] = useState(null);
  const [techs, setTechs] = useState();
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
          navigate(currentRoute);
        } catch (error) {
          localStorage.removeItem("authToken");
          navigate("/");
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userLogin = async (data) => {
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
      modalError(error);
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const userRegister = async (data) => {
    try {
      await api.post("users", data).then((resp) => {
        //console.log(resp.data);
        modalSuccess("Conta cadastrada!");
        navigate("/");
      });
    } catch (error) {
      console.log(error.response.data.message);
      modalError(error);
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
