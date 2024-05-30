import Card from "lunchbox/components/Card/index.tsx";
import Chip from "lunchbox/components/Chip/index.tsx";
import Header from "lunchbox/components/Header/index.tsx";
import Main from "lunchbox/components/Main/index.tsx";
import Separator from "lunchbox/components/Separator/index.tsx";
import Text from "lunchbox/components/Text/index.tsx";
import Code from "lunchbox/components/Code/index.tsx";
import AddChip from "../../islands/AddChip.tsx";
import { dbChip, type modChip } from "@/db.ts";

export default function ChipTest() {
  return (
    <>
      <Header layout_type="focus">
        <Text type="title">Chip tests</Text>
      </Header>
      <Main layout_type="focus">
        <>
          <Text type="subheading" noMargins>
            Adding chips to <Code>DenoKv</Code>
          </Text>
          <AddChip<modChip> initialValues={[]} />
        </>
      </Main>
    </>
  );
}
