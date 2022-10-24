import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { shemaTech } from "../../../Validations/techRegister";
import { useContext } from "react";
import { TechContext } from "../../../Contexts/TechContext";
import { TechModel } from "./styles";

export interface iRegiterTechData {
  title: string;
  status: string;
}

const TechRegister = (): any => {
  const { modal, closeModal, addTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegiterTechData>({ resolver: yupResolver(shemaTech) });

  async function registerTech(data: iRegiterTechData) {
    //console.log(data);
    addTech(data);
  }

  const statusLevel = ["Iniciante", "Intermediário", "Avançado"];

  if (modal) {
    return (
      <>
        <TechModel>
          <div>
            <div>
              <h2>Cadastrar tecnologia </h2>
              <span onClick={closeModal}>X</span>
            </div>
            <form onSubmit={handleSubmit(registerTech)}>
              <label htmlFor="title">Nome da tecnologia</label>
              <input type="text" id="title" {...register("title")} />
              <p>{errors.title?.message}</p>

              <label htmlFor="status">Selecionar status</label>
              <select id="status" {...register("status")}>
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
      </>
    );
  } else {
    <></>;
  }
};

export default TechRegister;
