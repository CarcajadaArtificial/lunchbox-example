import { useState } from "preact/hooks";
import { Fieldset, Footer, Input, Text } from "lunchbox/components.ts";
import { LAYOUT_TYPES, type LayoutTypes } from "lunchbox/src/enums.ts";

export default function () {
  const [layoutType, setLayoutType] = useState<LayoutTypes>("thirds");
  const [isMadeWithFresh, setMadeWithFresh] = useState<boolean>(true);

  return (
    <Footer layout={layoutType} madeWithFresh={isMadeWithFresh}>
      <div class="w-56 mr-4 flex flex-col gap-4">
        <Text type="subheading" noMargins>Configure</Text>
        <Fieldset
          name="footer_layout_types"
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
        <Input
          type="checkbox"
          label="Has the fresh badge"
          checked={isMadeWithFresh}
          onChange={() => setMadeWithFresh(!isMadeWithFresh)}
        />
      </div>
      <div>
      </div>
    </Footer>
  );
}
