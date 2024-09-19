import { useState } from "preact/hooks";
import Button from "lunchbox/components/Button/index.tsx";
import Input from "lunchbox/components/Input/index.tsx";
import Loader from "lunchbox/components/Loader/index.tsx";
import Panel from "lunchbox/components/Panel/index.tsx";
import Text from "lunchbox/components/Text/index.tsx";
import Menu from "./Menu.tsx";

export default function () {
  const [onPanel, setPanel] = useState<boolean>(true);
  const [isLoaded, setLoaded] = useState<boolean>(true);
  const [loadTime, setLoadTime] = useState<number>(500);

  return (
    <div class="flex flex-col gap-4">
      <div class="w-full">
        <Panel
          class="flex-1 flex flex-col items-center justify-center rounded gap-4 p-4"
          nostyle={!onPanel}
        >
          <Loader loaded={isLoaded}>
            <Text class="text-center mb-2">Loaded!</Text>
            <Button
              onClick={() => {
                setLoaded(false);
                setTimeout(() => setLoaded(true), loadTime);
              }}
            >
              Reload
            </Button>
          </Loader>
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
          <Input
            label="Loading Time (ms)"
            type="number"
            value={loadTime}
            onkeyup={(ev: Event) =>
              setLoadTime(parseInt((ev.target as HTMLInputElement).value))}
          />
        </div>
      </Menu>
    </div>
  );
}
