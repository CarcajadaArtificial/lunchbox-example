import { bring } from "lunchbox/src/utils.ts";
import { ReqAddChips, ResAddChips } from "@/routes/api/chips/add.ts";
import Autocomplete from "lunchbox/islands/Autocomplete/index.tsx";

export default function (props: { initialValues: string[] }) {
  return (
    <Autocomplete
      initialValues={props.initialValues}
    />
  );
}
