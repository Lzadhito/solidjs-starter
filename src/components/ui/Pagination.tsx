import { useSearchParams } from "@solidjs/router";
import { For } from "solid-js";
import { cn } from "../../lib/utils";

interface Props {
  total?: number;
}

export default function Pagination(props: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const onChangePage = (page: number) => setSearchParams({ page });

  const iterator = () => new Array(props.total || 1).fill(1);
  return (
    <div class="join justify-end">
      <For each={iterator()}>
        {(_, i) => (
          <button
            onClick={() => onChangePage(i() + 1)}
            class={cn({ "btn join-item": true, "btn-active": (searchParams.page || "1") === String(i() + 1) })}
          >
            {i() + 1}
          </button>
        )}
      </For>
    </div>
  );
}
