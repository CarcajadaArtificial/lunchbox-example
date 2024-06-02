import { bring } from "lunchbox/src/utils.ts";
import { ReqAddChips, ResAddChips } from "@/routes/api/chips/add.ts";
import Autocomplete from "./Autocomplete.tsx";

export default function (props: { initialValues: string[] }) {
  return (
    <Autocomplete
      initialValues={props.initialValues}
      onSubmit={async (inputValue: string) => {
        await bring<ReqAddChips, ResAddChips>(
          "/api/chips/add",
          "POST",
          {
            chip: { name: inputValue },
          },
        );
      }}
    />
  );
}
