import { Layout, Link, Module, Navigation } from "lunchbox/components.ts";

export default function () {
  return (
    <Navigation>
      <Layout whitespace>
        <Module size="sm">
          <Link href="/">Home</Link>
        </Module>
        <Module size="lg" class="flex gap-4">
          <Link href="/page">Page Components</Link>
          <Link href="/test">Test</Link>
        </Module>
      </Layout>
    </Navigation>
  );
}
