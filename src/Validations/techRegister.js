import * as yup from "yup";

export const shemaTech = yup.object({
  title: yup.string().required("Nome é obrigatório"),
  status: yup.string().required("Selecione uma opção de status"),
});
