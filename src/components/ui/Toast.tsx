import { cn } from "@/lib/utils";
import { createSignal } from "solid-js";

type Toast = {
  show: boolean;
  type: "success" | "error" | "warning" | "info";
  message?: string;
};

export const [toastSignal, setToastSignal] = createSignal<Toast>({
  show: false,
  type: "success",
});

type ToastAction = (message: string) => void;
export type ToastActions = {
  success: ToastAction;
  error: ToastAction;
  warning: ToastAction;
  info: ToastAction;
};

const setToast = (type: Toast["type"], message: string) => {
  setToastSignal({ show: true, type, message });
  setTimeout(() => setToastSignal((prev) => ({ ...prev, show: false })), 3000);
};

export const toast: ToastActions = {
  success: (message = "") => setToast("success", message),
  error: (message = "") => setToast("error", message),
  warning: (message = "") => setToast("warning", message),
  info: (message = "") => setToast("info", message),
};

export default function Toast() {
  return (
    <div
      class={cn({
        "toast toast-center toast-top absolute z-[99999] -mt-60 font-medium transition-all duration-300": true,
        "mt-0": toastSignal().show,
      })}
    >
      <div
        class={cn({
          "alert min-w-64": true,
          "alert-success": toastSignal().type === "success",
          "alert-error": toastSignal().type === "error",
          "alert-warning": toastSignal().type === "warning",
          "alert-info": toastSignal().type === "info",
        })}
      >
        {toastSignal().message}
      </div>
    </div>
  );
}
