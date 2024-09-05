import { useState } from "preact/hooks";
import {
  Header,
  Input,
  Kbd,
  Layout,
  Module,
  Text,
} from "lunchbox/components.ts";

export default function () {
  const [isBanner, setBanner] = useState<boolean>(false);

  return (
    <Header banner={isBanner}>
      <Layout>
        <Module size="full">
          <div class="text-center">
            <Text type="display">Lunchbox 🍱 test site</Text>
            <Text>
              Press <Kbd>Tab</Kbd> and use the keyboard to move around.
            </Text>
          </div>
          <div class="w-56 mr-4 flex flex-col gap-4">
            <Text type="subheading" noMargins>Configure</Text>
            <Input
              type="checkbox"
              label="Is banner"
              checked={isBanner}
              onChange={() => setBanner(!isBanner)}
            />
          </div>
        </Module>
      </Layout>
    </Header>
  );
}
