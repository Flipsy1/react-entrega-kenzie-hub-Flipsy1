import { toast } from "react-toastify";

export const modalError = (err: string) => {
  toast.error(`Ops, ${err}!`, {
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
