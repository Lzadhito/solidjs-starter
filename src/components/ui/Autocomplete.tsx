import { createEffect, createSignal, For, splitProps } from "solid-js";
import Input, { InputProps } from "./Input";

interface Props extends Omit<InputProps, "onChange"> {
  options: { label: string; value: string }[];
  onChange?: (prop: { target: { name: string; value: string } }) => void;
}

export default function Autocomplete(baseProps: Props) {
  let ref: any;
  const [props, inputProps] = splitProps(baseProps, ["options", "onChange"]);
  const [filteredOptions, setFilteredOptions] = createSignal(props.options || []);
  const [selectedOption, setSelectedOption] = createSignal("");

  createEffect(() => {
    if (inputProps.value) {
      const selectedOptionLabel = props.options.find((option) => option.value === inputProps.value)?.label;
      setSelectedOption(selectedOptionLabel || "");
    }
  });

  createEffect(() => {
    if (props.options) setFilteredOptions(props.options);
  });

  const onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const newOptions = props.options.filter((option) => option.label.includes(target.value));
    setFilteredOptions(newOptions);
  };

  const onSelectOption = (event: Event, option: { label: string; value: string }) => {
    setSelectedOption(option.label);
    props.onChange?.({ target: { name: inputProps.name || "", value: option.value } });
    (ref as HTMLUListElement).blur();
    (event.target as HTMLInputElement).blur();
  };

  const onBlur = (event: Event) => {
    (event.target as HTMLInputElement).value = selectedOption();
  };

  return (
    <div class="dropdown w-full">
      <div tabindex="0">
        <Input {...inputProps} onInput={onInput} value={selectedOption()} onBlur={onBlur} />
      </div>
      <ul ref={ref} tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow mt-1 w-full">
        <For
          each={filteredOptions()}
          fallback={<li class="text-gray-400">Tidak ada {inputProps.label?.toLowerCase() || "pilihan"}</li>}
        >
          {(option) => (
            <li class="relative">
              <a>
                <input
                  type="button"
                  onClick={(event) => onSelectOption(event, option)}
                  class="absolute top-0 left-0 w-full h-full z-10 opacity-0"
                  value={option.value}
                  name={inputProps.name}
                />
                <span>{option.label}</span>
              </a>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}
