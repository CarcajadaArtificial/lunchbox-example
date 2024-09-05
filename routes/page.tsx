import { Layout, Main } from "lunchbox/components.ts";
import DemoHeader from "@/islands/DemoHeader.tsx";
import DemoLayout from "../islands/DemoLayout.tsx";
import DemoFooter from "@/islands/DemoFooter.tsx";
import DemoNavigation from "@/islands/DemoNavigation.tsx";
import DemoMarkdown from "@/islands/DemoMarkdown.tsx";

const mdFetch = async (url: string) =>
  (await fetch(new URL(url, import.meta.url))).text();

export default async function Page() {
  return (
    <>
      <DemoHeader />
      <DemoNavigation />
      <Main>
        <DemoLayout />
        <DemoMarkdown
          markdownFiles={{
            prose: await mdFetch("../content/page_md_prose.md"),
            typescript: await mdFetch("../content/page_md_typescript.md"),
            scss: await mdFetch("../content/page_md_scss.md"),
            html: await mdFetch("../content/page_md_html.md"),
          }}
        />
      </Main>
      <DemoFooter />
    </>
  );
}
