import { toast } from "react-toastify";

export const modalSuccess = () => {
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
};
