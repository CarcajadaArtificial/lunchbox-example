import {
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
import DemoPattern from "@/islands/DemoPattern.tsx";
import DemoLinkmap from "@/islands/DemoLinkmap.tsx";
import DemoLoader from "@/islands/DemoLoader.tsx";
import DemoCard from "@/islands/DemoCard.tsx";
import Sidebar from "@/islands/Sidebar.tsx";

const mdFetch = async (url: string) =>
  (await fetch(new URL(url, import.meta.url))).text();

export default async function Home() {
  return (
    <>
      <Header banner>
        <div class="text-center">
          <Text type="display">Lunchbox 🍱 test site</Text>
          <Text>
            Press <Kbd>Tab</Kbd> and use the keyboard to move around.
          </Text>
        </div>
      </Header>
      <Main layout="right" fwd={{ layout: { whitespaceMode: true } }}>
        <Sidebar
          fwd={{ container: { class: "mt-20" } }}
          links={[
            {
              name: "Components",
              children: [
                { name: "Page Components", url: "#page-components" },
                { name: "Panel", url: "#panel" },
                { name: "Button", url: "#button" },
                { name: "Input", url: "#input" },
                { name: "Text", url: "#text" },
                { name: "Pattern", url: "#pattern" },
                { name: "Linkmap", url: "#linkmap" },
                { name: "Loader", url: "#loader" },
                { name: "Card", url: "#Card" },
              ],
            },
            { name: "Islands" },
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
          <Markdown
            class="my-8"
            markdownContent={await mdFetch("../content/home_5.md")}
          />
          <DemoPattern />
          <Markdown
            class="my-8"
            markdownContent={await mdFetch("../content/home_6.md")}
          />
          <DemoLinkmap />
          <Markdown
            class="my-8"
            markdownContent={await mdFetch("../content/home_7.md")}
          />
          <DemoLoader />
          <Markdown
            class="my-8"
            markdownContent={await mdFetch("../content/home_8.md")}
          />
          <DemoCard />
        </div>
      </Main>
    </>
  );
}
