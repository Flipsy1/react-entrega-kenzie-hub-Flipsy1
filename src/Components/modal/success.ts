import { toast } from "react-toastify";

export const modalSuccess = (mensage: string) => {
  toast.success(`${mensage}`, {
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
