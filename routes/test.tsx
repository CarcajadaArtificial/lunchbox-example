import DemoLinkmap from "@/islands/DemoLinkmap.tsx";

const mdFetch = async (url: string) =>
  (await fetch(new URL(url, import.meta.url))).text();

export default async function Page() {
  return (
    <>
      <DemoLinkmap />
    </>
  );
}
