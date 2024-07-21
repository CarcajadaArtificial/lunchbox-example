import { useState } from "preact/hooks";
import { Header, Input, Text } from "lunchbox/components.ts";

export default function () {
  const [isBanner, setBanner] = useState<boolean>(false);
  return (
    <Header layout="right" banner={isBanner}>
      <div class="w-56 mr-4 flex flex-col gap-4">
        <Text type="subheading" noMargins>Configure</Text>
        <Input
          type="checkbox"
          label="Is banner"
          checked={isBanner}
          onChange={() => setBanner(!isBanner)}
        />
      </div>
      <div>
      </div>
    </Header>
  );
}
