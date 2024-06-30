import Autocomplete from "lunchbox/islands/Autocomplete/index.tsx";

export default function (props: { initialValues: string[] }) {
  return (
    <Autocomplete
      initialValues={props.initialValues}
    />
  );
}
