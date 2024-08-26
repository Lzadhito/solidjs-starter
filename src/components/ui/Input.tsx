import { JSX, Show, splitProps } from "solid-js";
import { cn } from "../../lib/utils";

export interface InputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  wrapperClass?: string;
}

export default function Input(props: InputProps) {
  const [local, inputProps] = splitProps(props, ["label", "wrapperClass", "class"]);

  return (
    <label class={cn([local.label ? "form-control w-full" : "", local.wrapperClass || ""])}>
      <Show when={local.label}>
        <div class="label">
          <span class="label-text">
            {local.label}{" "}
            <Show when={!!inputProps.required}>
              <span class="text-red-500">*</span>
            </Show>
          </span>
        </div>
      </Show>
      <input
        class={cn(["input input-bordered w-full", local.class || ""])}
        placeholder={local.label ? `Masukkan ${local.label?.toLowerCase()}` : ""}
        min={inputProps.type === "number" ? 0 : undefined}
        {...inputProps}
      />
    </label>
  );
}
