import {
  Code,
  Header,
  Kbd,
  Main,
  Markdown,
  Panel,
  Text,
} from "lunchbox/components.ts";
import DemoButton from "@/islands/DemoButton.tsx";

export default async function Home() {
  return (
    <>
      <Header banner layout_type="full">
        <div class="text-center">
          <Text type="title">Lunchbox 🍱 test site</Text>
          <Text>
            Press <Kbd>Tab</Kbd> and use the keyboard to move around.
          </Text>
        </div>
      </Header>
      <Main layout_type="focus">
        <div>
          <Text type="heading">Components</Text>
          <Markdown
            class="mb-8"
            markdownContent={await (await fetch(
              new URL("../content/home_1.md", import.meta.url),
            )).text()}
          />
          <Panel>
            <Text noMargins>
              This is a panel component.
            </Text>
          </Panel>
          <Markdown
            class="my-8"
            markdownContent={await (await fetch(
              new URL("../content/home_2.md", import.meta.url),
            )).text()}
          />
          <DemoButton />
        </div>
      </Main>
    </>
  );
}
