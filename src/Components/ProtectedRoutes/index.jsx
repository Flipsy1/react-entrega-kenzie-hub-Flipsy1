import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";

const ProtectedRoutes = () => {
  const { user, setCurrentRoute } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      const pathName = window.location.pathname;
      if (pathName !== "/") {
        setCurrentRoute(pathName);
      }
      navigate("/");
    }
  }, []);

  return <>{user && <Outlet />}</>;
};

export default ProtectedRoutes;
