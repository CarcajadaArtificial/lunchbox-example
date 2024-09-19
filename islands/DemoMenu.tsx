import { useState } from "preact/hooks";
import Button from "lunchbox/components/Button/index.tsx";
import Input from "lunchbox/components/Input/index.tsx";
import MenuItem from "lunchbox/components/MenuItem/index.tsx";
import Panel from "lunchbox/components/Panel/index.tsx";
import Menu from "./Menu.tsx";

export default function () {
  const [onPanel, setPanel] = useState<boolean>(true);
  const [hardToggle, setHardToggle] = useState<boolean>(false);
  const [buttonContent, setButtonContent] = useState<string>("Example Menu");

  return (
    <div class="flex flex-col gap-4">
      <Panel
        class="p-4 h-36 flex flex-col justify-center items-center w-full gap-2"
        nostyle={!onPanel}
      >
        <Menu hardToggle={hardToggle} button={buttonContent}>
          <MenuItem>
            <Button type="transparent" class="min-w-full mb-2">
              Menu Item 1
            </Button>
          </MenuItem>
          <MenuItem>
            <Button type="transparent" class="min-w-full mb-2">
              Menu Item 2
            </Button>
          </MenuItem>
          <MenuItem>
            <Button type="transparent" class="min-w-full">
              Menu Item 3
            </Button>
          </MenuItem>
        </Menu>
      </Panel>
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
            label="Hard Toggle"
            checked={hardToggle}
            onChange={() => setHardToggle(!hardToggle)}
          />
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
