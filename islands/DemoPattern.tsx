import { useState } from "preact/hooks";
import { Fieldset, Input, Panel, Pattern, Text } from "lunchbox/components.ts";
import { PATTERN_TYPES, PatternTypes } from "lunchbox/src/enums.ts";

export default function () {
  const [onPanel, setPanel] = useState<boolean>(false);
  const [isFlipped, setFlipped] = useState<boolean>(false);
  const [patternType, setPatternType] = useState<PatternTypes>("cloud");

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
          label="Flipped"
          checked={isFlipped}
          onChange={() => setFlipped(!isFlipped)}
        />
        <Fieldset
          name="pattern_types"
          legend="Patterm Type"
          values={[...PATTERN_TYPES]}
          selectedValues={[patternType]}
          fwd={{
            input: {
              onchange: (ev: Event) =>
                setPatternType(
                  (ev.target as HTMLInputElement)
                    .dataset["label"] as PatternTypes,
                ),
            },
          }}
        />
      </div>
      <div class="w-full">
        <Pattern flip hidden={!isFlipped} type={patternType} />
        <Panel
          class={`block rounded-${isFlipped ? "b" : "t"}-lg h-36`}
          nostyle={!onPanel}
          style={{
            borderTopLeftRadius: isFlipped ? "0" : "var(--s-quarter)",
            borderTopRightRadius: isFlipped ? "0" : "var(--s-quarter)",
            borderBottomLeftRadius: !isFlipped ? "0" : "var(--s-quarter)",
            borderBottomRightRadius: !isFlipped ? "0" : "var(--s-quarter)",
          }}
        >
        </Panel>
        <Pattern hidden={isFlipped} type={patternType} />
      </div>
    </div>
  );
}
