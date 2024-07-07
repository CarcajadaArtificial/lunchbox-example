import { useState } from "preact/hooks";
import { Fieldset, Input, Panel, Pattern, Text } from "lunchbox/components.ts";
import { PATTERN_TYPES, PatternTypes } from "lunchbox/src/enums.ts";

export default function () {
  const [onPanel, setPanel] = useState<boolean>(false);
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
        <Panel
          class="block rounded-t h-36"
          nostyle={!onPanel}
        >
        </Panel>
        <Pattern type={patternType} />
      </div>
    </div>
  );
}
