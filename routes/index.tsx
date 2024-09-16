import {
  Layout,
  Linkmap,
  Main,
  Markdown,
  Module,
  Panel,
  Separator,
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
import DemoMarkdown from "@/islands/DemoMarkdown.tsx";
import DemoHeader from "@/islands/DemoHeader.tsx";

const mdFetch = async (url: string) =>
  (await fetch(new URL(url, import.meta.url))).text();

export default async function Home() {
  return (
    <>
      <DemoHeader>
        <Markdown
          class="mb-8"
          markdownContent={await mdFetch("../content/home_welcome.md")}
        />
      </DemoHeader>
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
                      { name: "Separator", url: "#Separator" },
                      { name: "Markdown", url: "#Markdown" },
                    ],
                  },
                  { name: "Islands" },
                ]}
              />
            </Sidebar>
          </Module>
          <Module size="lg">
            <Markdown
              class="my-8"
              markdownContent={await mdFetch("../content/home_page.md")}
            />
            <Markdown
              class="my-8"
              markdownContent={await mdFetch("../content/home_panel.md")}
            />
            <Panel class="test">
              <Text noMargins>
                This is a panel component.
              </Text>
            </Panel>
            <Markdown
              class="my-8"
              markdownContent={await mdFetch("../content/home_button.md")}
            />
            <DemoButton />
            <Markdown
              class="my-8"
              markdownContent={await mdFetch("../content/home_input.md")}
            />
            <DemoInput />
            <Markdown
              class="my-8"
              markdownContent={await mdFetch("../content/home_text.md")}
            />
            <DemoText />
            <Markdown
              class="my-8"
              markdownContent={await mdFetch("../content/home_pattern.md")}
            />
            <DemoPattern />
            <Markdown
              class="my-8"
              markdownContent={await mdFetch("../content/home_linkmap.md")}
            />
            <DemoLinkmap />
            <Markdown
              class="my-8"
              markdownContent={await mdFetch("../content/home_loader.md")}
            />
            <DemoLoader />
            <Markdown
              class="my-8"
              markdownContent={await mdFetch("../content/home_card.md")}
            />
            <DemoCard />
            <Markdown
              class="my-8"
              markdownContent={await mdFetch("../content/home_separator.md")}
            />
            <Separator />
            <Markdown
              class="my-8"
              markdownContent={await mdFetch("../content/home_markdown.md")}
            />
            <DemoMarkdown
              markdownFiles={{
                prose: await mdFetch("../content/page_md_prose.md"),
                typescript: await mdFetch("../content/page_md_typescript.md"),
                scss: await mdFetch("../content/page_md_scss.md"),
                html: await mdFetch("../content/page_md_html.md"),
              }}
            />
          </Module>
        </Layout>
      </Main>
    </>
  );
}
