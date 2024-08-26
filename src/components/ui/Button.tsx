import { JSX, Show, splitProps } from "solid-js";
import { cn } from "../../lib/utils";
import Spinner from "./Spinner";

interface Props extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

function hasColorClass(className: string) {
  const regex = /btn-(secondary|accent|neutral|info|success|warning|error|default)/;
  return regex.test(className);
}

export default function Button(props: Props) {
  const [local, btnProps] = splitProps(props, ["class", "loading", "children"]);
  return (
    <button
      class={cn({
        btn: true,
        "btn-primary": !hasColorClass(local.class || ""),
        "btn-disabled": btnProps.disabled || local.loading,
        [local.class || ""]: true,
      })}
      {...btnProps}
    >
      <Show when={local.loading}>
        <Spinner />
      </Show>
      {local.children}
    </button>
  );
}
