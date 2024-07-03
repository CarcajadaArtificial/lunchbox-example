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
import DemoInput from "@/islands/DemoInput.tsx";
import DemoText from "@/islands/DemoText.tsx";
import Sidebar from "@/islands/Sidebar.tsx";

const mdFetch = async (url: string) =>
  (await fetch(new URL(url, import.meta.url))).text();

export default async function Home() {
  return (
    <>
      <Header banner layout_type="full">
        <div class="text-center">
          <Text type="display">Lunchbox 🍱 test site</Text>
          <Text>
            Press <Kbd>Tab</Kbd> and use the keyboard to move around.
          </Text>
        </div>
      </Header>
      <Main layout_type="right" fwd={{ layout: { whitespaceMode: true } }}>
        <Sidebar
          fwd={{ container: { class: "mt-20" } }}
          links={[
            { name: "Page Components", url: "#page-components" },
            { name: "Panel", url: "#panel" },
            { name: "Button", url: "#button" },
            { name: "Input", url: "#input" },
            { name: "Text", url: "#text" },
          ]}
        />
        <div>
          <Markdown
            class="mb-8"
            markdownContent={await mdFetch("../content/home_1.md")}
          />
          <Panel>
            <Text noMargins>
              This is a panel component.
            </Text>
          </Panel>
          <Markdown
            class="my-8"
            markdownContent={await mdFetch("../content/home_2.md")}
          />
          <DemoButton />
          <Markdown
            class="my-8"
            markdownContent={await mdFetch("../content/home_3.md")}
          />
          <DemoInput />
          <Markdown
            class="my-8"
            markdownContent={await mdFetch("../content/home_4.md")}
          />
          <DemoText />
        </div>
      </Main>
    </>
  );
}
