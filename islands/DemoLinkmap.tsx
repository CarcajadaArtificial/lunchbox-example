import { useState } from "preact/hooks";
import Input from "lunchbox/components/Input/index.tsx";
import Linkmap from "lunchbox/components/Linkmap/index.tsx";
import Panel from "lunchbox/components/Panel/index.tsx";
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
              { name: "Test Link", href: "#" },
              { name: "Test Empty Link" },
              {
                name: "Test Parent Link",
                href: "#",
                children: [
                  { name: "Test Child Link", href: "#" },
                  { name: "Test Empty Child Link" },
                  {
                    name: "Test Parent Link",
                    href: "#",
                    children: [
                      { name: "Test Child Link", href: "#" },
                      { name: "Test Empty Child Link" },
                      { name: "Test Child Link", href: "#" },
                    ],
                  },
                  { name: "Test Child Link", href: "#" },
                ],
              },
              { name: "Test Link", href: "#" },
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
