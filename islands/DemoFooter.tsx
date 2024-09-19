import Footer from "lunchbox/components/Footer/index.tsx";
import Layout from "lunchbox/components/Layout/index.tsx";
import Link from "lunchbox/components/Link/index.tsx";
import Module from "lunchbox/components/Module/index.tsx";
import Text from "lunchbox/components/Text/index.tsx";

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
          <Text noMargins type="small" class="text-right">v0.0.40</Text>
        </Module>
      </Layout>
    </Footer>
  );
}
