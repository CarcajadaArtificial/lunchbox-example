import { useState } from "preact/hooks";
import { Button, Fieldset, Input, Panel, Text } from "lunchbox/components.ts";
import { BUTTON_TYPES, ButtonTypes } from "lunchbox/src/enums.ts";

export default function () {
  const [onPanel, setPanel] = useState<boolean>(false);
  const [isCompact, setCompact] = useState<boolean>(false);
  const [isLarge, setLarge] = useState<boolean>(false);
  const [buttonContent, setButtonContent] = useState<string>("Example Button");
  const [buttonType, setButtonType] = useState<ButtonTypes>("default");

  return (
    <div class="flex">
      <div class="w-56 mr-4">
        <Text type="subheading" noMargins>Props</Text>
        <Input
          type="checkbox"
          label="On a panel"
          checked={onPanel}
          onChange={() => setPanel(!onPanel)}
        />
        <Input
          type="checkbox"
          label="Is compact (TO-DO)"
          checked={isCompact}
          onChange={() => setCompact(!isCompact)}
        />
        <Input
          type="checkbox"
          label="Is large (TO-DO)"
          checked={isLarge}
          onChange={() => setLarge(!isLarge)}
        />
        <Fieldset
          class="mt-4"
          legend="Button Type"
          values={["default", ...BUTTON_TYPES]}
          selectedValues={[buttonType]}
          fwd={{
            input: {
              onclick: (ev) =>
                setButtonType(
                  (ev.target as HTMLInputElement)
                    .dataset["label"] as ButtonTypes,
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
        class="flex-1 flex items-center justify-center rounded"
        nostyle={!onPanel}
      >
        <Button tabindex={0} type={buttonType}>{buttonContent}</Button>
      </Panel>
    </div>
  );
}
