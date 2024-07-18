import DemoHeader from "@/islands/DemoHeader.tsx";
import DemoMain from "@/islands/DemoMain.tsx";
import DemoFooter from "@/islands/DemoFooter.tsx";

const mdFetch = async (url: string) =>
  (await fetch(new URL(url, import.meta.url))).text();

export default function Page() {
  return (
    <>
      <DemoHeader />
      <DemoMain />
      <DemoFooter />
    </>
  );
}
