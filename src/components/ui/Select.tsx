import { JSX, Show, splitProps } from "solid-js";
import { cn } from "../../lib/utils";

interface Props extends JSX.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  wrapperClass?: string;
}

export default function Select(props: Props) {
  const [local, selectProps] = splitProps(props, ["label", "wrapperClass", "children"]);

  return (
    <label class={cn(["form-control w-full", local.wrapperClass || ""])}>
      <Show when={local.label}>
        <div class="label">
          <span class="label-text">
            {local.label}{" "}
            <Show when={!!selectProps.required}>
              <span class="text-red-500">*</span>
            </Show>
          </span>
        </div>
      </Show>
      <select class="select select-bordered" {...selectProps}>
        <Show when={local.label}>
          <option disabled selected>
            Pilih {local.label?.toLowerCase()}
          </option>
        </Show>
        {local.children}
      </select>
    </label>
  );
}
