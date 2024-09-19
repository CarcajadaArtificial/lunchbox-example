import { Footer, Layout, Link, Module, Text } from "lunchbox/components.ts";

export default function () {
  return (
    <Footer>
      <Layout whitespace>
        <Module size="sm">
          <Link href="https://github.com/CarcajadaArtificial/lunchbox">
            GitHub Repository
          </Link>
        </Module>
        <Module size="lg">
          <Text noMargins>
            This was born of late nights by{" "}
            <Link href="https://github.com/CarcajadaArtificial">
              Poncho Guerrero
            </Link>
          </Text>
        </Module>
        <Module size="full">
          <Text noMargins type="small" class="text-right">v0.0.38</Text>
        </Module>
      </Layout>
    </Footer>
  );
}
