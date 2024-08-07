import { useState } from "preact/hooks";
import { Fieldset, Input, Layout, Main, Text } from "lunchbox/components.ts";
import { LAYOUT_TYPES, type LayoutTypes } from "lunchbox/src/enums.ts";

export default function () {
  const [layoutType, setLayoutType] = useState<LayoutTypes>("right");
  const [whitespaceMode, setWhitespaceMode] = useState<boolean>(true);

  const layoutModulesArray = new Array(12).fill(0);

  return (
    <>
      <div class="mb-8">
        <Layout whitespaceMode type="left">
          <div class="w-56 mr-4 flex flex-col gap-4">
            <Text type="subheading" noMargins>Configure</Text>
            <Input
              type="checkbox"
              label="Whitespace Mode"
              checked={whitespaceMode}
              onChange={() => setWhitespaceMode(!whitespaceMode)}
            />
            <Fieldset
              name="main_layout_types"
              legend="Layout Type"
              values={["default", ...LAYOUT_TYPES]}
              selectedValues={[layoutType]}
              fwd={{
                input: {
                  onchange: (ev: Event) =>
                    setLayoutType(
                      (ev.target as HTMLInputElement)
                        .dataset["label"] as LayoutTypes,
                    ),
                },
              }}
            />
          </div>
          <div>
          </div>
        </Layout>
      </div>
      <Layout type={layoutType} whitespaceMode={whitespaceMode}>
        {layoutModulesArray.map(() => (
          <div
            class="w-full p-8 mb-4 rounded"
            style={{ backgroundColor: "var(--clr-txt-base-10" }}
          />
        ))}
      </Layout>
    </>
  );
}
