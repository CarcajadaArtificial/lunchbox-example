import Button from "lunchbox/components/Button/index.tsx";
import Layout from "lunchbox/components/Layout/index.tsx";
import Link from "lunchbox/components/Link/index.tsx";
import Module from "lunchbox/components/Module/index.tsx";
import Navigation from "lunchbox/components/Navigation/index.tsx";

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
