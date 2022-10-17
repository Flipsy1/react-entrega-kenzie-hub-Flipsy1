import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { shemaTech } from "../../../Validations/techRegister";
import { useContext } from "react";
import { TechContext } from "../../../Contexts/TechContext";
import { TechModel } from "./styles";

const TechRegister = () => {
  const { modal, closeModal, addTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(shemaTech) });

  async function registerTech(data) {
    //console.log(data);
    addTech(data);
  }

  const statusLevel = ["Iniciante", "Intermediário", "Avançado"];

  if (modal) {
    return (
      <TechModel>
        <div>
          <div>
            <h2>Cadastrar tecnologia </h2>
            <span onClick={closeModal}>X</span>
          </div>
          <form onSubmit={handleSubmit(registerTech)}>
            <label htmlFor="title">Nome da tecnologia</label>
            <input type="text" id="title" name="title" {...register("title")} />
            <p>{errors.title?.message}</p>

            <label htmlFor="status">Selecionar status</label>
            <select name="status" id="status" {...register("status")}>
              {statusLevel.map((level, index) => (
                <option key={index} value={level}>
                  {level}
                </option>
              ))}
            </select>
            <button type="submit">Cadastrar tecnologia</button>
          </form>
        </div>
      </TechModel>
    );
  } else {
    <></>;
  }
};

export default TechRegister;
