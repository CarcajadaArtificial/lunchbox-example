import { useState } from "preact/hooks";
import { Fieldset, Layout, Markdown, Text } from "lunchbox/components.ts";
import "https://esm.sh/prismjs@1.29.0/components/prism-typescript?no-check&pin=v57";
import "https://esm.sh/prismjs@1.29.0/components/prism-scss?no-check&pin=v57";

type MarkdownFiles = {
  prose: string;
  typescript: string;
  scss: string;
  html: string;
};

export default function (props: { markdownFiles: MarkdownFiles }) {
  const [markdownFile, setMarkdownFile] = useState<keyof MarkdownFiles>(
    "prose",
  );

  return (
    <Layout whitespaceMode type="right">
      <div class="w-56 mr-4 flex flex-col gap-4">
        <Text type="subheading" noMargins>Configure</Text>
        <Fieldset
          name="main_layout_types"
          legend="Layout Type"
          values={Object.keys(props.markdownFiles)}
          selectedValues={[markdownFile]}
          fwd={{
            input: {
              onchange: (ev: Event) =>
                setMarkdownFile(
                  (ev.target as HTMLInputElement)
                    .dataset["label"] as keyof MarkdownFiles,
                ),
            },
          }}
        />
      </div>
      <div>
        <Markdown markdownContent={props.markdownFiles[markdownFile]} />
      </div>
    </Layout>
  );
}
