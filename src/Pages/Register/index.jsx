import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../Services/axios";

import { modalSuccess } from "../../Components/modal/success";
import { modalError } from "../../Components/modal/error";

import { schemaRegister } from "../../Validations/registerUser";

import { ContainerRegister, FormRegister } from "./styles";

const RegisterPage = () => {
  const navegate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaRegister) });

  async function registerUser(data) {
    console.log(data);

    await api
      .post("users", data)
      .then((resp) => {
        console.log(resp.data);
        modalSuccess();
        navegate("/");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        modalError(err);
      });
  }

  const modulos = ["Primeiro módulo", "Segundo Módulo", "Terceiro Módulo"];

  return (
    <>
      <ContainerRegister>
        <div>
          <h1>Kenzie Hub</h1>
          <Link to={"/"}>Voltar</Link>
        </div>

        <FormRegister onSubmit={handleSubmit(registerUser)}>
          <h2>Crie sua conta agora</h2>

          <span>Rápido e grátis, vamos nessa</span>

          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" {...register("name")} />
          <p>{errors.name?.message}</p>

          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" {...register("email")} />
          <p>{errors.email?.message}</p>

          <label htmlFor="">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>

          <label htmlFor="confirmPassword">Confirmar senha</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            {...register("confirmPassword")}
          />
          <p>{errors.confirmPassword?.message}</p>

          <label htmlFor="bio">Bio</label>
          <input type="text" name="bio" id="bio" {...register("bio")} />
          <p>{errors.bio?.message}</p>

          <label htmlFor="contact">contato</label>
          <input
            type="text"
            name="contact"
            id="contact"
            {...register("contact")}
          />
          <p>{errors.contact?.message}</p>

          <label htmlFor="modulo">Selecionar módulo</label>
          <select name="modulo" id="modulo" {...register("course_module")}>
            {modulos.map((modulo, index) => (
              <option key={index} value={modulo}>
                {modulo}
              </option>
            ))}
          </select>

          <button type="submit">Cadastrar</button>
        </FormRegister>
      </ContainerRegister>
    </>
  );
};

export default RegisterPage;
