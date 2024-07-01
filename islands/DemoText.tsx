import { useState } from "preact/hooks";
import {
  Button,
  Code,
  Fieldset,
  Input,
  Kbd,
  Link,
  Panel,
  Text,
  Time,
} from "lunchbox/components.ts";
import { TEXT_TYPES } from "lunchbox/src/enums.ts";

export default function () {
  const [onPanel, setPanel] = useState<boolean>(false);
  const [hasCode, setCode] = useState<boolean>(false);
  const [hasTime, setTime] = useState<boolean>(false);
  const [hasKbd, setKbd] = useState<boolean>(false);
  const [hasLink, setLink] = useState<boolean>(false);
  const [showBuffer, setBuffer] = useState<boolean>(false);

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
          label="Show inline Code"
          checked={hasCode}
          onChange={() => setCode(!hasCode)}
        />
        <Input
          type="checkbox"
          label="Show Time"
          checked={hasTime}
          onChange={() => setTime(!hasTime)}
        />
        <Input
          type="checkbox"
          label="Show Kbd"
          checked={hasKbd}
          onChange={() => setKbd(!hasKbd)}
        />
        <Input
          type="checkbox"
          label="Show Link"
          checked={hasLink}
          onChange={() => setLink(!hasLink)}
        />
        <Input
          type="checkbox"
          label="Show Buffer Text"
          checked={showBuffer}
          onChange={() => setBuffer(!showBuffer)}
        />
      </div>
      <Panel
        class="flex-1 rounded gap-4 p-4"
        nostyle={!onPanel}
      >
        {TEXT_TYPES.map((TEXT_TYPE, index) => (
          <Text type={TEXT_TYPE}>
            {TEXT_TYPE} {hasCode ? <Code>Text</Code> : ""}{" "}
            {hasTime ? <Time /> : ""} {hasKbd ? <Kbd>⌘ Cmd + z</Kbd> : ""}{" "}
            {hasLink ? <Link>here</Link> : ""} {showBuffer
              ? (
                <>
                  {...new Array(index * index).fill("extra extra extra extra ")}
                </>
              )
              : ""}
          </Text>
        ))}
      </Panel>
    </div>
  );
}
