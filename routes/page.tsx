import { Header, Layout, Main, Markdown, Module } from "lunchbox/components.ts";
import DemoLayout from "../islands/DemoLayout.tsx";
import DemoNavigation from "@/islands/DemoNavigation.tsx";

const mdFetch = async (url: string) =>
  (await fetch(new URL(url, import.meta.url))).text();

export default async function Page() {
  return (
    <>
      <Header>
        <Layout whitespace>
          <Module size="lg">
            <Markdown
              markdownContent={await mdFetch("../content/layout_layout.md")}
            />
          </Module>
        </Layout>
      </Header>
      <DemoNavigation />
      <Main>
        <Layout whitespace>
          <Module size="lg">
            <Markdown
              class="mb-8"
              markdownContent={await mdFetch("../content/layout_module.md")}
            />
          </Module>
        </Layout>
        <DemoLayout />
      </Main>
    </>
  );
}
