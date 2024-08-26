import { JSX } from "solid-js";
import { cn } from "../../lib/utils";

export interface ModalProps {
  id?: string;
  show?: boolean;
  onClose?: () => void;
  children: JSX.Element;
  class?: string;
}

export default function Modal(props: ModalProps) {
  const id = props.id || `$modal-${Math.random()}`;

  return (
    <dialog id={id} class="modal" open={props.show}>
      <div class={cn(["modal-box w-1/2 max-w-7xl", props.class || ""])}>
        <form method="dialog" onSubmit={props.onClose}>
          <button class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">✕</button>
        </form>
        {props.children}
      </div>
      <form method="dialog" class="modal-backdrop" onSubmit={props.onClose}>
        <button>close</button>
      </form>
    </dialog>
  );
}
