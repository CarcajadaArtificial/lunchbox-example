import { useState } from "preact/hooks";
import { Fieldset, Input, Panel, Pattern } from "lunchbox/components.ts";
import { PATTERN_TYPES, PatternTypes } from "lunchbox/src/enums.ts";
import Menu from "./Menu.tsx";

export default function () {
  const [onPanel, setPanel] = useState<boolean>(true);
  const [isFlipped, setFlipped] = useState<boolean>(false);
  const [patternType, setPatternType] = useState<PatternTypes>("cloud");

  return (
    <div class="flex flex-col gap-4">
      <div>
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
      <Menu button="Configuration" hardToggle>
        <div class="py-2 px-4 flex flex-col gap-2">
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
          <Fieldset legend="Patterm Type">
            {[...PATTERN_TYPES].map((currentPatternType) => (
              <Input
                type="radio"
                label={currentPatternType}
                value={currentPatternType}
                name="pattern_types"
                checked={currentPatternType === patternType}
                data-label={currentPatternType}
                onchange={(ev: Event) =>
                  setPatternType(
                    (ev.target as HTMLInputElement)
                      .dataset["label"] as PatternTypes,
                  )}
              />
            ))}
          </Fieldset>
        </div>
      </Menu>
    </div>
  );
}
