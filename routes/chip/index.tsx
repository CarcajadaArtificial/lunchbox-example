import Chip from "lunchbox/components/Chip/index.tsx";
import Header from "lunchbox/components/Header/index.tsx";
import Main from "lunchbox/components/Main/index.tsx";
import Text from "lunchbox/components/Text/index.tsx";
import Code from "lunchbox/components/Code/index.tsx";
import KvAutocomplete from "../../islands/KvAutocomplete.tsx";
import { dbChip } from "@/db.ts";

export default async function ChipTest() {
  const chipListNames = (await dbChip.list()).map((chip) => chip.value.name);

  return (
    <>
      <Header layout_type="focus">
        <Text type="title">Chip tests</Text>
      </Header>
      <Main layout_type="focus">
        <>
          <Text type="subheading" noMargins>
            List of existing chips:
          </Text>
          <div class="flex gap-4 mb-8">
            {chipListNames.map((chipName) => <Chip content={chipName} />)}
          </div>
        </>
        <>
          <Text type="subheading" noMargins>
            Adding chips to <Code>DenoKv</Code>:
          </Text>
          <KvAutocomplete initialValues={chipListNames} />
        </>
      </Main>
    </>
  );
}
