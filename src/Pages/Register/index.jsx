import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../Libs/axios";
import { toast } from "react-toastify";
import styles from "./style.module.css";

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup
    .string()
    .required("Email é obrigatória")
    .email("Deve ser um email válido"),
  password: yup
    .string()
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "Deve ter no mínimo 8 dígitos")
    .required("Senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Deve ser igual a senha"),
  bio: yup.string().required("Deve colocar um descrição"),
  contact: yup.string().required("Opção de contato obrigatória"),
  course_module: yup.string().required("Selecione um módulo"),
});

const RegisterPage = () => {
  const navegate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  async function registerUser(data) {
    console.log(data);

    await api
      .post("users", data)
      .then((resp) => {
        console.log(resp.data);
        toast.success("Conta criada com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navegate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops, algo deu errado!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  }

  const modulos = ["Primeiro módulo", "Segundo Módulo", "Terceiro Módulo"];

  return (
    <>
      <main className={styles.containerRegister}>
        <div>
          <h1>Kenzie Hub</h1>
          <Link to={"/"}>Voltar</Link>
        </div>

        <form
          className={styles.formRegister}
          onSubmit={handleSubmit(registerUser)}
        >
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
        </form>
      </main>
    </>
  );
};

export default RegisterPage;
