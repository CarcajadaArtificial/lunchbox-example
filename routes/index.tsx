import {
  Layout,
  Linkmap,
  Main,
  Markdown,
  Module,
  Panel,
  Sidebar,
  Text,
} from "lunchbox/components.ts";
import DemoButton from "@/islands/DemoButton.tsx";
import DemoInput from "@/islands/DemoInput.tsx";
import DemoText from "@/islands/DemoText.tsx";
import DemoPattern from "@/islands/DemoPattern.tsx";
import DemoLinkmap from "@/islands/DemoLinkmap.tsx";
import DemoLoader from "@/islands/DemoLoader.tsx";
import DemoCard from "@/islands/DemoCard.tsx";
import DemoNavigation from "@/islands/DemoNavigation.tsx";
import DemoMenu from "@/islands/DemoMenu.tsx";
import DemoHeader from "@/islands/DemoHeader.tsx";

const mdFetch = async (url: string) =>
  (await fetch(new URL(url, import.meta.url))).text();

export default async function Home() {
  return (
    <>
      <DemoHeader />
      <DemoNavigation />
      <Main>
        <Layout whitespace>
          <Module size="sm">
            <Sidebar sticky fwd={{ container: { class: "mt-20" } }}>
              <Linkmap
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
            </Sidebar>
          </Module>
          <Module size="lg">
            <DemoMenu />
            <Markdown
              class="mb-8"
              markdownContent={await mdFetch("../content/home_1.md")}
            />
            <Panel class="test">
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
          </Module>
        </Layout>
      </Main>
    </>
  );
}
