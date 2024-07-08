import { useState } from "preact/hooks";
import { Fieldset, Input, Linkmap, Panel, Text } from "lunchbox/components.ts";

export default function () {
  const [onPanel, setPanel] = useState<boolean>(false);

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
      </div>
      <div class="w-full">
        <Panel
          class="flex-1 flex flex-col items-center justify-center rounded gap-4 p-4"
          nostyle={!onPanel}
        >
          <Linkmap
            links={[
              { name: "Test Link", url: "#" },
              { name: "Test Empty Link" },
              {
                name: "Test Parent Link",
                url: "#",
                children: [
                  { name: "Test Child Link", url: "#" },
                  { name: "Test Empty Child Link" },
                  {
                    name: "Test Parent Link",
                    url: "#",
                    children: [
                      { name: "Test Child Link", url: "#" },
                      { name: "Test Empty Child Link" },
                      { name: "Test Child Link", url: "#" },
                    ],
                  },
                  { name: "Test Child Link", url: "#" },
                ],
              },
              { name: "Test Link", url: "#" },
            ]}
          />
        </Panel>
      </div>
    </div>
  );
}
