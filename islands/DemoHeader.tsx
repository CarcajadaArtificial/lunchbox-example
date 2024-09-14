import { useState } from "preact/hooks";
import {
  Header,
  Input,
  Kbd,
  Layout,
  Module,
  Text,
} from "lunchbox/components.ts";
import Menu from "./Menu.tsx";

export default function () {
  const [isBanner, setBanner] = useState<boolean>(true);

  return (
    <Header banner={isBanner}>
      <Layout>
        <Module size="full">
          <div class="flex flex-col items-center text-center">
            <Text type="display">Lunchbox 🍱 test site</Text>
            <Text class="mb-8">
              Press <Kbd>Tab</Kbd> and use the keyboard to move around.
            </Text>
            <Menu button="Configuration" hardToggle>
              <div class="p-2 flex flex-col gap-2 text-left">
                <Input
                  type="checkbox"
                  label="Is banner"
                  checked={isBanner}
                  onChange={() => setBanner(!isBanner)}
                />
              </div>
            </Menu>
          </div>
        </Module>
      </Layout>
    </Header>
  );
}
