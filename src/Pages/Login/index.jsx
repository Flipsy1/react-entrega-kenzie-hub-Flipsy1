import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../Services/axios";

import { schemaLogin } from "../../Validations/loginUser";

import { ContainerLogin, Login } from "./styles";

const LoginPage = ({ setAuthentication }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaLogin) });

  async function login(data) {
    console.log(data);

    await api
      .post("sessions", data)
      .then((resp) => {
        console.log(resp);

        window.localStorage.clear();
        window.localStorage.setItem("authToken", resp.data.token);
        window.localStorage.setItem("userName", resp.data.user.name);
        window.localStorage.setItem("userModule", resp.data.user.course_module);

        setAuthentication(true);

        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <ContainerLogin>
        <h1>Kenzie Hub</h1>

        <Login>
          <form onSubmit={handleSubmit(login)}>
            <h2>Login</h2>

            <label htmlFor="emailLogin">Email</label>

            <input
              type="email"
              name="email"
              id="emailLogin"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>

            <label htmlFor="passwordLogin">Senha</label>

            <input
              type="password"
              name="password"
              id="passwordLogin"
              {...register("password")}
            />
            <p>{errors.password?.message}</p>

            <button type="submit">Entrar</button>
          </form>
          <div>
            <span>Ainda não possui uma conta ?</span>

            <Link to={"/register"}>Cadastre-se</Link>
          </div>
        </Login>
      </ContainerLogin>
    </>
  );
};

export default LoginPage;
