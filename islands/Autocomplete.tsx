import { useRef, useState } from "preact/hooks";
import Chip from "lunchbox/components/Chip/index.tsx";
import Input from "lunchbox/components/Input/index.tsx";
import Text from "lunchbox/components/Text/index.tsx";
import { handleKeyboard, Key } from "lunchbox/src/handlers.ts";

export interface iChipAutocomplete {
  initialValues: string[];
}

export default function (props: iChipAutocomplete) {
  const { initialValues } = props;
  const [options, setOptions] = useState<string[]>(initialValues);
  const [matchingOptions, setMatchingOptions] = useState<string[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const inputReference = useRef<HTMLInputElement>(null);

  /**
   * ---------------------------------------------------------------------------------------------------
   * handleSelectOption
   * ---------------------------------------------------------------------------------------------------
   * This function handles the event when a user selects an option from the suggestion's menu.
   */
  function handleSelectOption(ev: Event) {
    const inputElement = inputReference.current!;
    inputElement.value =
      (ev.currentTarget as HTMLDivElement).attributes.getNamedItem(
        "data-name",
      )!.value;
    inputElement.focus();
    setMatchingOptions([]);
  }

  /**
   * ---------------------------------------------------------------------------------------------------
   * inputKeyboardHandlers
   * ---------------------------------------------------------------------------------------------------
   * This constant stores all the keyboard events of the automcomplete's input element.
   */
  const inputKeyboardHandlers = handleKeyboard([
    {
      keys: [Key.Enter],
      except: [],
      cb: (ev) => {
        const inputElement = ev.currentTarget as HTMLInputElement;
        if (options.includes(inputElement.value)) {
          setOptions([inputElement.value, ...options]);
        }
        setMatchingOptions([]);
        setSelectedOptions([inputElement.value, ...selectedOptions]);
        inputElement.value = "";
      },
    },
    {
      keys: [Key.Escape],
      except: [],
      cb: () => setMatchingOptions([]),
    },
    {
      keys: [],
      except: [Key.Escape, Key.Enter],
      cb: (ev) =>
        setMatchingOptions(
          options.filter((option) =>
            RegExp((ev.currentTarget as HTMLInputElement).value)
              .test(option) && !selectedOptions.includes(option)
          ),
        ),
    },
  ]);

  /**
   * ---------------------------------------------------------------------------------------------------
   * optionKeyboardHandler
   * ---------------------------------------------------------------------------------------------------
   * This constant stores all the keyboard events of the automcomplete's input element.
   */
  const optionKeyboardHandler = handleKeyboard([
    {
      keys: [Key.Enter],
      except: [],
      cb: handleSelectOption,
    },
    {
      keys: [Key.Left],
      except: [],
      cb: () => inputReference.current!.focus(),
    },
  ]);

  return (
    <div>
      <Input
        onKeyUp={inputKeyboardHandlers}
        label={"Add tag"}
        type="text"
        fref={inputReference}
        autofocus
      />
      <div class="relative max-h-0">
        <div
          class="absolute rounded -left-2 -top-4 bg-black"
          style={{ width: "24.5rem" }}
        >
          {matchingOptions.map((option) => (
            <div
              tabindex={0}
              class="px-4 py-2 rounded"
              onKeyUp={optionKeyboardHandler}
              onClick={handleSelectOption}
              data-name={option}
            >
              <Text noMargins>{option}</Text>
            </div>
          ))}
        </div>
      </div>
      <div class="flex gap-4 mb-8">
        {selectedOptions.map((option) => <Chip content={option} />)}
      </div>
    </div>
  );
}
