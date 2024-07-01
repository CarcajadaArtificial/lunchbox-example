import { useState } from "preact/hooks";
import {
  Button,
  Fieldset,
  Input,
  Kbd,
  Panel,
  Text,
} from "lunchbox/components.ts";
import {
  BUTTON_PADDINGS,
  BUTTON_TYPES,
  ButtonPaddings,
  ButtonTypes,
} from "lunchbox/src/enums.ts";

export default function () {
  const [onPanel, setPanel] = useState<boolean>(false);
  const [buttonContent, setButtonContent] = useState<string>("Example Button");
  const [buttonType, setButtonType] = useState<ButtonTypes>("default");
  const [buttonPadding, setButtonPadding] = useState<ButtonPaddings>("default");

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
        <Fieldset
          name="button_types"
          legend="Button Type"
          values={["default", ...BUTTON_TYPES]}
          selectedValues={[buttonType]}
          fwd={{
            input: {
              onchange: (ev) =>
                setButtonType(
                  (ev.target as HTMLInputElement)
                    .dataset["label"] as ButtonTypes,
                ),
            },
          }}
        />
        <Fieldset
          name="button_paddings"
          legend="Button Padding"
          values={["default", ...BUTTON_PADDINGS]}
          selectedValues={[buttonPadding]}
          fwd={{
            input: {
              onchange: (ev) =>
                setButtonPadding(
                  (ev.target as HTMLInputElement)
                    .dataset["label"] as ButtonPaddings,
                ),
            },
          }}
        />
        <Input
          label="Button value"
          value={buttonContent}
          onkeyup={(ev) =>
            setButtonContent((ev.target as HTMLInputElement).value)}
        />
      </div>
      <Panel
        class="flex-1 flex flex-col items-center justify-center rounded gap-4 p-4"
        nostyle={!onPanel}
      >
        <Button tabindex={0} type={buttonType} padding={buttonPadding}>
          {buttonContent}
        </Button>
        <Text noMargins>
          Press <Kbd>space</Kbd> key to ativate
        </Text>
      </Panel>
    </div>
  );
}
