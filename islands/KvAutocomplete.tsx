import { useRef, useState } from "preact/hooks";
import Text from "lunchbox/components/Text/index.tsx";
import Input from "lunchbox/components/Input/index.tsx";
import { handleKeyboard, Key } from "lunchbox/src/handlers.ts";
import { bring } from "lunchbox/src/utils.ts";
import { modChip } from "@/db.ts";
import { ReqAddChips, ResAddChips } from "@/routes/api/chips/add.ts";
import { ReqListChips, ResListChips } from "@/routes/api/chips/list.ts";
import Autocomplete from "./Autocomplete.tsx";

export interface iChipAutocomplete {
  initialValues: string[];
}

export default function async<T>(props: iChipAutocomplete) {
  const [matchingChips, setMatchingChips] = useState<Deno.KvEntry<modChip>[]>(
    [],
  );
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
    setMatchingChips([]);
  }

  /**
   * ---------------------------------------------------------------------------------------------------
   * handleInputValueSubmit
   * ---------------------------------------------------------------------------------------------------
   * This function handles the event when a user submits the value typed in the input element.
   */
  async function handleInputValueSubmit(ev: Event) {
    const inputTarget = ev.currentTarget as HTMLInputElement;
    /**
     * @todo If response.ok is false, handle error display.
     */
    // await bring<ReqAddChips, ResAddChips>(
    //   "/api/chips/add",
    //   "POST",
    //   {
    //     chip: { name: inputTarget.value },
    //   },
    // );
    inputTarget.value = "";
  }

  /**
   * ---------------------------------------------------------------------------------------------------
   * handleAnyKeyPressed
   * ---------------------------------------------------------------------------------------------------
   * This function handles the event when the user presses any key while focusing on the autocomplete
   * input element.
   */
  async function handleAnyKeyPress(ev: KeyboardEvent) {
    const inputValue = (ev.currentTarget as HTMLInputElement).value;
    // const res = await bring<ReqListChips, ResListChips>(
    //   "api/chips/list",
    //   "POST",
    //   {},
    // );
    // if (
    //   res &&
    //   res.chips &&
    //   inputValue.length > 0 &&
    //   ev.key !== "Escape"
    // ) {
    //   setMatchingChips(
    //     res.chips.filter((chip) => RegExp(inputValue).test(chip.value.name)),
    //   );
    // } else {
    //   setMatchingChips([]);
    // }
  }

  /**
   * ---------------------------------------------------------------------------------------------------
   * inputKeyboardHandlers
   * ---------------------------------------------------------------------------------------------------
   * This constant stores all the keyboard events of the automcomplete's input element.
   */
  // const inputKeyboardHandlers = handleKeyboard([
  //   {
  //     keys: [Key.Enter],
  //     cb: handleInputValueSubmit,
  //   },
  //   {
  //     keys: [Key.Escape],
  //     cb: () => setMatchingChips([]),
  //   },
  //   {
  //     cb: handleAnyKeyPress,
  //   },
  // ]);

  /**
   * ---------------------------------------------------------------------------------------------------
   * optionKeyboardHandler
   * ---------------------------------------------------------------------------------------------------
   * This constant stores all the keyboard events of the automcomplete's input element.
   */
  // const optionKeyboardHandler = handleKeyboard([
  //   {
  //     keys: [Key.Enter],
  //     cb: handleSelectOption,
  //   },
  //   {
  //     keys: [Key.Left],
  //     cb: () => inputReference.current!.focus(),
  //   },
  // ]);

  return <Autocomplete initialValues={props.initialValues} />;
}
