import { useState } from "preact/hooks";
import { Footer, Input, Text } from "lunchbox/components.ts";

export default function () {
  const [isMadeWithFresh, setMadeWithFresh] = useState<boolean>(true);

  return (
    <Footer layout="thirds" madeWithFresh={isMadeWithFresh}>
      <div class="w-56 mr-4 flex flex-col gap-4">
        <Text type="subheading" noMargins>Configure</Text>
        <Input
          type="checkbox"
          label="Has the fresh badge"
          checked={isMadeWithFresh}
          onChange={() => setMadeWithFresh(!isMadeWithFresh)}
        />
      </div>
      <div>
      </div>
    </Footer>
  );
}
