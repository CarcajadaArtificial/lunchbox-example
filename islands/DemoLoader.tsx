import { useState } from "preact/hooks";
import { Button, Input, Loader, Panel, Text } from "lunchbox/components.ts";

export default function () {
  const [onPanel, setPanel] = useState<boolean>(false);
  const [isLoaded, setLoaded] = useState<boolean>(true);
  const [loadTime, setLoadTime] = useState<number>(500);

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
          label="Loading Time (ms)"
          type="number"
          value={loadTime}
          onkeyup={(ev: Event) =>
            setLoadTime(parseInt((ev.target as HTMLInputElement).value))}
        />
      </div>
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
    </div>
  );
}
