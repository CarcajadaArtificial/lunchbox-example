import { useRef, useState } from "preact/hooks";
import { Code } from "lunchbox/components.ts";

export default function () {
  const [onPanel, setPanel] = useState<boolean>(false);
  const codeRef = useRef<HTMLElement>(null);

  return (
    <div>
      <button onClick={() => console.log(codeRef)}>test</button>
      <Code ref={codeRef} fwd={{ wrapper: { nostyle: true, class: "test" } }}>
        Test
      </Code>
    </div>
  );
}
