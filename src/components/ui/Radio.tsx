import { JSX, Show, splitProps } from "solid-js";

interface Props extends JSX.InputHTMLAttributes<HTMLInputElement> {
  children?: JSX.Element;
}

export default function Radio(props: Props) {
  const [local, inputProps] = splitProps(props, ["children"]);
  return (
    <div class="form-control">
      <label class="flex gap-4 cursor-pointer">
        <input type="radio" class="radio bg-base-300" {...inputProps} />
        <Show when={local.children}>
          <span>{local.children}</span>
        </Show>
      </label>
    </div>
  );
}
