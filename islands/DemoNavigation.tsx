import {
  Button,
  Layout,
  Link,
  Module,
  Navigation,
} from "lunchbox/components.ts";

export default function () {
  return (
    <Navigation>
      <Layout whitespace>
        <Module size="sm" half="sm">
          <a tabindex={-1} href="/">
            <Button padding="compact" type="transparent">
              <span class="mr-2">🍱</span>Lunchbox
            </Button>
          </a>
        </Module>
        <Module size="lg" half="lg" class="flex gap-4">
          <Link href="/page">Layout</Link>
        </Module>
      </Layout>
    </Navigation>
  );
}
