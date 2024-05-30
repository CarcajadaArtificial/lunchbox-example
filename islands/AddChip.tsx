import { useState } from "preact/hooks";
import Text from "lunchbox/components/Text/index.tsx";
import Input from "lunchbox/components/Input/index.tsx";
import { handleKeyboard, Key } from "lunchbox/src/handlers.ts";
import { bring } from "lunchbox/src/utils.ts";
import { modChip } from "@/db.ts";
import { ReqAddChips, ResAddChips } from "@/routes/api/chips/add.ts";
import { ReqListChips, ResListChips } from "@/routes/api/chips/list.ts";

export interface iChipAutocomplete<T> {
  initialValues: T[];
}

export default function async<T>(props: iChipAutocomplete<T>) {
  const [matchingChips, setMatchingChips] = useState<Deno.KvEntry<modChip>[]>(
    [],
  );

  const inputKeyboardHandlers = handleKeyboard([
    {
      keys: [Key.Enter],
      cb: async (ev) => {
        const inputTarget = ev.currentTarget as HTMLInputElement;
        /**
         * @todo If response.ok is false, handle error display.
         */
        await bring<ReqAddChips, ResAddChips>(
          "/api/chips/add",
          "POST",
          {
            chip: { name: inputTarget.value },
          },
        );
        inputTarget.value = "";
      },
    },
    {
      cb: async (ev) => {
        const inputValue = (ev.currentTarget as HTMLInputElement).value;
        const res = await bring<ReqListChips, ResListChips>(
          "api/chips/list",
          "POST",
          {},
        );
        if (
          res &&
          res.chips &&
          inputValue.length > 0
        ) {
          setMatchingChips(
            res.chips.filter((chip) =>
              RegExp(inputValue).test(chip.value.name)
            ),
          );
        } else {
          setMatchingChips([]);
        }
      },
    },
  ]);

  return (
    <div>
      <Input
        onkeyup={inputKeyboardHandlers}
        label={"Add tag"}
        type="text"
        autofocus
      />
      <div class="relative max-h-0">
        <div
          class="absolute rounded -left-2 -top-2 bg-black"
          style={{ width: "24.5rem" }}
        >
          {matchingChips.map((matchingChip) => (
            <div tabindex={0} class="px-4 py-2 rounded">
              <Text noMargins>{matchingChip.value.name}</Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
