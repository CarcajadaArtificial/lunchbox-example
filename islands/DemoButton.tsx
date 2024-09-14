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
import Menu from "./Menu.tsx";

export default function () {
  const [onPanel, setPanel] = useState<boolean>(true);
  const [buttonContent, setButtonContent] = useState<string>("Example Button");
  const [buttonType, setButtonType] = useState<ButtonTypes>("default");
  const [buttonPadding, setButtonPadding] = useState<ButtonPaddings>("default");

  return (
    <div class="flex flex-col gap-4">
      <Panel
        class="p-4 h-36 flex flex-col justify-center items-center w-full gap-2"
        nostyle={!onPanel}
      >
        <Button tabindex={0} type={buttonType} padding={buttonPadding}>
          {buttonContent}
        </Button>
        <Text noMargins>
          Press <Kbd>space</Kbd> key to ativate
        </Text>
      </Panel>
      <Menu button="Configuration" hardToggle>
        <div class="px-4 py-2 flex flex-col gap-2">
          <Input
            type="checkbox"
            label="On a panel"
            checked={onPanel}
            onChange={() => setPanel(!onPanel)}
          />
          <Fieldset legend="Button Type">
            {["default", ...BUTTON_TYPES].map((buttonType) => (
              <Input
                type="radio"
                label={buttonType}
                value={buttonType}
                name="button_types"
                selected={buttonType === "default"}
                data-label={buttonType}
                onchange={(ev: Event) =>
                  setButtonType(
                    (ev.target as HTMLInputElement)
                      .dataset["label"] as ButtonTypes,
                  )}
              />
            ))}
          </Fieldset>
          <Fieldset legend="Button Paddings">
            {["default", ...BUTTON_PADDINGS].map((buttonPadding) => (
              <Input
                type="radio"
                label={buttonPadding}
                value={buttonPadding}
                name="button_paddings"
                selected={buttonPadding === "default"}
                data-label={buttonPadding}
                onchange={(ev: Event) =>
                  setButtonPadding(
                    (ev.target as HTMLInputElement)
                      .dataset["label"] as ButtonPaddings,
                  )}
              />
            ))}
          </Fieldset>
          <Input
            label="Button value"
            value={buttonContent}
            maxWidth
            onkeyup={(ev: Event) =>
              setButtonContent((ev.target as HTMLInputElement).value)}
          />
        </div>
      </Menu>
    </div>
  );
}
