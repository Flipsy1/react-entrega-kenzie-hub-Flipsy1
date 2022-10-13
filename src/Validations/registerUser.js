import * as yup from "yup";

export const schemaRegister = yup.object({
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
