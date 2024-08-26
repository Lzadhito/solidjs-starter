import { cn } from "@/lib/utils";
import { JSX, ValidComponent } from "solid-js";
import { Dynamic } from "solid-js/web";

type DropdownProps = {
  disabled?: boolean;
  trigger: ValidComponent;
  children: JSX.Element;
  class?: string;
};
export default function Dropdown(props: DropdownProps) {
  let ref: any;
  return (
    <div class={cn(["dropdown", props.class || ""])}>
      <div tabindex="0" class={props.disabled ? "pointer-events-none" : "cursor-pointer"}>
        <Dynamic component={props.trigger} disabled={props.disabled} />
      </div>
      <div ref={ref} tabindex="0" class="dropdown-content bg-base-100 rounded-box z-[1] p-2 shadow mt-1">
        {props.children}
      </div>
    </div>
  );
}
