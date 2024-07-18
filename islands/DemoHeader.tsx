import { useState } from "preact/hooks";
import { Fieldset, Header, Input, Text } from "lunchbox/components.ts";
import { LAYOUT_TYPES, type LayoutTypes } from "lunchbox/src/enums.ts";

export default function () {
  const [layoutType, setLayoutType] = useState<LayoutTypes>("right");
  const [isBanner, setBanner] = useState<boolean>(false);
  return (
    <Header layout={layoutType} banner={isBanner}>
      <div class="w-56 mr-4 flex flex-col gap-4">
        <Text type="subheading" noMargins>Configure</Text>
        <Fieldset
          name="header_layout_types"
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
          label="Is banner"
          checked={isBanner}
          onChange={() => setBanner(!isBanner)}
        />
      </div>
      <div>
      </div>
    </Header>
  );
}
