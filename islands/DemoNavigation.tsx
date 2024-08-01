import { Layout, Link, Navigation, Text } from "lunchbox/components.ts";

export default function () {
  return (
    <Navigation>
      <Layout whitespaceMode type="right">
        <Link href="/">Home</Link>
        <div>
          <Link href="/page">Page Components</Link>
        </div>
      </Layout>
    </Navigation>
  );
}
