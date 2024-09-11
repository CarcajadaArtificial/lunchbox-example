import { useRef, useState } from "preact/hooks";
import { Button } from "lunchbox/components.ts";
import Menu from "./Menu.tsx";

export default function () {
  const [onPanel, setPanel] = useState<boolean>(false);
  const codeRef = useRef<HTMLElement>(null);

  return (
    <div>
      <Menu>
        <Button type="invisible">
          Test
        </Button>
      </Menu>
    </div>
  );
}
