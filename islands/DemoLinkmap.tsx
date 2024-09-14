import { useState } from "preact/hooks";
import { Input, Linkmap, Panel, Text } from "lunchbox/components.ts";
import Menu from "./Menu.tsx";

export default function () {
  const [onPanel, setPanel] = useState<boolean>(true);

  return (
    <div class="flex flex-col gap-4">
      <div class="w-full">
        <Panel
          class="flex-1 rounded gap-4 p-4"
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
      <Menu button="Configuration" hardToggle>
        <div class="py-2 px-4 flex flex-col gap-2">
          <Input
            type="checkbox"
            label="On a panel"
            checked={onPanel}
            onChange={() => setPanel(!onPanel)}
          />
        </div>
      </Menu>
    </div>
  );
}
