import { useState } from "preact/hooks";
import { Button, Fieldset, Input, Panel, Text } from "lunchbox/components.ts";

export default function () {
  const [onPanel, setPanel] = useState<boolean>(false);
  const [maxWidth, setMaxWidth] = useState<boolean>(false);
  const [inputLabel, setInputLabel] = useState<string>("Example label");
  const [inputError, setInputError] = useState<string>("");
  const [inputType, setInputType] = useState<string>("text");
  const [inputPlaceholder, setInputPlaceholder] = useState<string>(
    "Placeholder",
  );

  const onChangeInputType = (ev: Event) => {
    const x = (ev.target as HTMLInputElement).dataset["label"]!;
    console.log(x);
    setInputType(x);
  };

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
          onkeyup={(ev) => setInputLabel((ev.target as HTMLInputElement).value)}
        />
        <Input
          label="Input error"
          value={inputError}
          onkeyup={(ev) => setInputError((ev.target as HTMLInputElement).value)}
        />
        <Input
          label="Input placeholder"
          value={inputPlaceholder}
          onkeyup={(ev) =>
            setInputPlaceholder((ev.target as HTMLInputElement).value)}
        />
        <Text noMargins>Input types</Text>
        <Fieldset
          name="input_types"
          legend="Texts"
          selectedValues={[inputType]}
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
      </div>
      <Panel
        class="flex-1 flex flex-col items-center justify-center rounded gap-4 p-4"
        nostyle={!onPanel}
      >
        <Input
          label={inputLabel}
          error={inputError}
          maxWidth={maxWidth}
          placeholder={inputPlaceholder}
          type={inputType}
        />
      </Panel>
    </div>
  );
}
