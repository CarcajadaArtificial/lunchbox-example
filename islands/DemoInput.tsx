import { useState } from "preact/hooks";
import {
  Fieldset,
  Input,
  Panel,
  Select,
  Text,
  TextArea,
} from "lunchbox/components.ts";

export default function () {
  const [
    onPanel,
    setPanel,
  ] = useState<boolean>(true);

  const [
    maxWidth,
    setMaxWidth,
  ] = useState<boolean>(false);

  const [
    inputElement,
    setInputElement,
  ] = useState<string>("input");

  const [
    inputLabel,
    setInputLabel,
  ] = useState<string>("Example label");

  const [
    inputError,
    setInputError,
  ] = useState<string>("");

  const [
    inputType,
    setInputType,
  ] = useState<string>("text");

  const [
    inputTypeGroup,
    setInputTypeGroup,
  ] = useState<string>("text");

  const [
    inputPlaceholder,
    setInputPlaceholder,
  ] = useState<string>("Placeholder");

  const [
    options,
    setOptions,
  ] = useState<string>("Option 1, Option 2, Option 3");

  const [
    allowMultiple,
    setAllowMultiple,
  ] = useState<boolean>(false);

  const onChangeInputType = (ev: Event) =>
    setInputType((ev.target as HTMLInputElement).dataset["label"]!);

  return (
    <div class="flex">
      <div class="w-56 mr-4 flex flex-col gap-4">
        <Text type="subheading" noMargins>Configure</Text>
        <Input
          type="checkbox"
          label="On a panel"
          checked={onPanel}
          onChange={() => setPanel(!onPanel)}
        />
        <Input
          type="checkbox"
          label="Max width"
          checked={maxWidth}
          onChange={() => setMaxWidth(!maxWidth)}
        />
        <Input
          label="Input label"
          value={inputLabel}
          onkeyup={(ev: Event) =>
            setInputLabel((ev.target as HTMLInputElement).value)}
        />
        <Input
          label="Input error"
          value={inputError}
          onkeyup={(ev: Event) =>
            setInputError((ev.target as HTMLInputElement).value)}
        />
        <Input
          label="Input placeholder"
          value={inputPlaceholder}
          onkeyup={(ev: Event) =>
            setInputPlaceholder((ev.target as HTMLInputElement).value)}
        />
        <Fieldset
          name="input_elements"
          legend="Input Element"
          selectedValues={[inputElement]}
          values={[
            "input",
            "textarea",
            "select",
            "fieldset",
          ]}
          fwd={{
            input: {
              onchange: (ev: Event) =>
                setInputElement(
                  (ev.target as HTMLInputElement).dataset["label"]!,
                ),
            },
          }}
        />
        {inputElement === "input"
          ? (
            <>
              <Fieldset
                name="input_type_groups"
                legend="Input Type"
                selectedValues={[inputTypeGroup]}
                values={[
                  "text",
                  "dates",
                  "other",
                ]}
                fwd={{
                  input: {
                    onchange: (ev: Event) =>
                      setInputTypeGroup(
                        (ev.target as HTMLInputElement).dataset["label"]!,
                      ),
                  },
                }}
              />
              <Fieldset
                name="input_types"
                legend="Texts"
                selectedValues={[inputType]}
                hidden={inputTypeGroup !== "text"}
                values={[
                  "text",
                  "email",
                  "number",
                  "password",
                  "search",
                  "tel",
                  "url",
                ]}
                fwd={{ input: { onchange: onChangeInputType } }}
              />
              <Fieldset
                name="input_types"
                legend="Dates and times"
                selectedValues={[inputType]}
                hidden={inputTypeGroup !== "dates"}
                values={[
                  "date",
                  "datetime-local",
                  "month",
                  "time",
                  "week",
                ]}
                fwd={{ input: { onchange: onChangeInputType } }}
              />
              <Fieldset
                name="input_types"
                legend="Other"
                selectedValues={[inputType]}
                hidden={inputTypeGroup !== "other"}
                values={[
                  "checkbox",
                  "color",
                  "file",
                  "hidden",
                  "image",
                  "radio",
                  "range",
                  "reset",
                  "submit",
                ]}
                fwd={{ input: { onchange: onChangeInputType } }}
              />
            </>
          )
          : inputElement === "select"
          ? (
            <TextArea
              label="Options"
              value={options}
              onkeyup={(ev: Event) =>
                setOptions((ev.target as HTMLInputElement).value)}
            />
          )
          : inputElement === "fieldset"
          ? (
            <>
              <TextArea
                label="Options"
                value={options}
                onkeyup={(ev: Event) =>
                  setOptions((ev.target as HTMLInputElement).value)}
              />
              <Input
                type="checkbox"
                label="Allow Multiple"
                checked={allowMultiple}
                onChange={() => setAllowMultiple(!allowMultiple)}
              />
            </>
          )
          : null}
      </div>
      <Panel
        class="flex-1 flex flex-col items-center justify-center rounded gap-4 p-4"
        nostyle={!onPanel}
      >
        {inputElement === "input"
          ? (
            <Input
              label={inputLabel}
              error={inputError}
              maxWidth={maxWidth}
              placeholder={inputPlaceholder}
              type={inputType}
            />
          )
          : inputElement === "textarea"
          ? (
            <TextArea
              label={inputLabel}
              error={inputError}
              maxWidth={maxWidth}
              placeholder={inputPlaceholder}
            />
          )
          : inputElement === "select"
          ? (
            <Select
              label={inputLabel}
              error={inputError}
              maxWidth={maxWidth}
              placeholder={inputPlaceholder}
              options={options.split(",")}
            />
          )
          : inputElement === "fieldset"
          ? (
            <Fieldset
              legend={inputLabel}
              values={options.split(",")}
              maxWidth={maxWidth}
              allowMultiple={allowMultiple}
            />
          )
          : null}
      </Panel>
    </div>
  );
}
