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
import { ComponentChildren } from "preact";

export default function (props: { children: ComponentChildren }) {
  const [isBanner, setBanner] = useState<boolean>(true);

  return (
    <Header banner={isBanner}>
      <Layout whitespace>
        <Module size="full">
          <div class="flex flex-col items-center text-center mb-24">
            <Text type="display">Lunchbox 🍱 test site</Text>
            <Text class="mb-8">
              Press <Kbd>Tab</Kbd> and use the keyboard to move around.
            </Text>
          </div>
        </Module>
        <Module size="sm" />
        <Module size="lg">
          {props.children}
          <Menu button="Configuration" hardToggle style={{ zIndex: 33 }}>
            <div class="p-2 flex flex-col gap-2 text-left">
              <Input
                type="checkbox"
                label="Is banner"
                checked={isBanner}
                onChange={() => setBanner(!isBanner)}
              />
            </div>
          </Menu>
        </Module>
      </Layout>
    </Header>
  );
}
