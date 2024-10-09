import Layout from "lunchbox/components/Layout/index.tsx";
import Linkmap from "lunchbox/components/Linkmap/index.tsx";
import Main from "lunchbox/components/Main/index.tsx";
import Markdown from "lunchbox/components/Markdown/index.tsx";
import Module from "lunchbox/components/Module/index.tsx";
import Panel from "lunchbox/components/Panel/index.tsx";
import Separator from "lunchbox/components/Separator/index.tsx";
import Sidebar from "lunchbox/components/Sidebar/index.tsx";
import Text from "lunchbox/components/Text/index.tsx";
import { effects } from "lunchbox/src/styles.ts";
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
import DemoFooter from "@/islands/DemoFooter.tsx";
import DemoRevealer from "@/islands/DemoRevealer.tsx";
import InterObs from "@/islands/InterObs.tsx";
import InstanceDemo from "@/islands/InstanceDemo.tsx";

const mdFetch = async (url: string) =>
  (await fetch(new URL(url, import.meta.url))).text();

const md = {
  welcome: await mdFetch("../content/home_welcome.md"),
  page: await mdFetch("../content/home_page.md"),
  panel: await mdFetch("../content/home_panel.md"),
  button: await mdFetch("../content/home_button.md"),
  input: await mdFetch("../content/home_input.md"),
  text: await mdFetch("../content/home_text.md"),
  pattern: await mdFetch("../content/home_pattern.md"),
  linkmap: await mdFetch("../content/home_linkmap.md"),
  loader: await mdFetch("../content/home_loader.md"),
  card: await mdFetch("../content/home_card.md"),
  separator: await mdFetch("../content/home_separator.md"),
  markdown: await mdFetch("../content/home_markdown.md"),
  menu: await mdFetch("../content/home_menu.md"),
  interobs: await mdFetch("../content/home_interobs.md"),
  revealer: await mdFetch("../content/home_revealer.md"),
  revelation: await mdFetch("../content/revelation.md"),
  future: await mdFetch("../content/home_future.md"),
};

const DemoPanel = () => (
  <Panel class="test">
    <Text noMargins>
      This is a panel component.
    </Text>
  </Panel>
);

export default async function () {
  return (
    <>
      <DemoHeader>
        <Markdown
          class="mb-8"
          markdownContent={md.welcome}
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
                      { name: "Page Components", href: "/#page-components" },
                      { name: "Panel", href: "#panel" },
                      { name: "Button", href: "#button" },
                      { name: "Input", href: "#input" },
                      { name: "Text", href: "#text" },
                      { name: "Pattern", href: "#pattern" },
                      { name: "Linkmap", href: "#linkmap" },
                      { name: "Loader", href: "#loader" },
                      { name: "Card", href: "#card" },
                      { name: "Separator", href: "#separator" },
                      { name: "Markdown", href: "#markdown" },
                    ],
                  },
                  {
                    name: "Islands",
                    children: [
                      { name: "Menu", href: "#menu" },
                      { name: "InterObs", href: "#interobs" },
                      // { name: "Revealer", href: "#revealer" },
                    ],
                  },
                  { name: "Future Components?", href: "#future-components" },
                ]}
              />
            </Sidebar>
          </Module>
          <Module size="lg">
            <InstanceDemo content={md.page} />
            <InstanceDemo content={md.panel}>
              <DemoPanel />
            </InstanceDemo>
            <InstanceDemo content={md.button}>
              <DemoButton />
            </InstanceDemo>
            <InstanceDemo content={md.input}>
              <DemoInput />
            </InstanceDemo>
            <InstanceDemo content={md.text}>
              <DemoText />
            </InstanceDemo>
            <InstanceDemo content={md.pattern}>
              <DemoPattern />
            </InstanceDemo>
            <InstanceDemo content={md.linkmap}>
              <DemoLinkmap />
            </InstanceDemo>
            <InstanceDemo content={md.loader}>
              <DemoLoader />
            </InstanceDemo>
            <InstanceDemo content={md.card}>
              <DemoCard />
            </InstanceDemo>
            <InstanceDemo content={md.separator}>
              <Separator />
            </InstanceDemo>
            <InstanceDemo content={md.markdown}>
              <DemoMarkdown
                markdownFiles={{
                  prose: await mdFetch("../content/page_md_prose.md"),
                  typescript: await mdFetch("../content/page_md_typescript.md"),
                  scss: await mdFetch("../content/page_md_scss.md"),
                  html: await mdFetch("../content/page_md_html.md"),
                }}
              />
            </InstanceDemo>
            <InstanceDemo content={md.menu}>
              <DemoMenu />
            </InstanceDemo>
            <InstanceDemo content={md.interobs} />
            <InstanceDemo content={md.revealer}>
              <DemoRevealer content={md.revelation} />
            </InstanceDemo>
            <InterObs>
              <Text id="future-components" type="title" class="mt-8">
                Future Components?
              </Text>
              <Markdown
                class={`my-8 ${effects.blur} select-none`}
                markdownContent={md.future}
              />
            </InterObs>
          </Module>
        </Layout>
      </Main>
      <DemoFooter />
    </>
  );
}
