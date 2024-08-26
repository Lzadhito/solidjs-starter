import { cn } from "@/lib/utils";

type Props = { className?: string };
export default function Spinner(props: Props) {
  return <div class={cn(["loading loading-spinner text-[#76be39]", props.className])} />;
}
