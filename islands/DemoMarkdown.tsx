import { useState } from "preact/hooks";
import {
  Fieldset,
  Input,
  Layout,
  Markdown,
  Panel,
} from "lunchbox/components.ts";
import Menu from "./Menu.tsx";
import "https://esm.sh/prismjs@1.29.0/components/prism-typescript?no-check&pin=v57";
import "https://esm.sh/prismjs@1.29.0/components/prism-scss?no-check&pin=v57";

type MarkdownFiles = {
  prose: string;
  typescript: string;
  scss: string;
  html: string;
};

export default function (props: { markdownFiles: MarkdownFiles }) {
  const [onPanel, setPanel] = useState<boolean>(true);
  const [markdownFile, setMarkdownFile] = useState<keyof MarkdownFiles>(
    "prose",
  );

  return (
    <div class="flex flex-col gap-4">
      <Panel
        class="flex-1 rounded gap-4 p-4"
        nostyle={!onPanel}
      >
        <Markdown markdownContent={props.markdownFiles[markdownFile]} />
      </Panel>
      <Menu button="Configuration" hardToggle>
        <div class="py-2 px-4 flex flex-col gap-2">
          <Input
            type="checkbox"
            label="On a panel"
            checked={onPanel}
            onChange={() => setPanel(!onPanel)}
          />
          <Fieldset legend="Markdown Content">
            {Object.keys(props.markdownFiles).map(
              (currentMarkdownFile) => (
                <Input
                  type="radio"
                  label={currentMarkdownFile}
                  value={currentMarkdownFile}
                  name="main_layout_types"
                  checked={currentMarkdownFile === markdownFile}
                  data-label={currentMarkdownFile}
                  onchange={(ev: Event) =>
                    setMarkdownFile(
                      (ev.target as HTMLInputElement)
                        .dataset["label"] as keyof MarkdownFiles,
                    )}
                />
              ),
            )}
          </Fieldset>
        </div>
      </Menu>
    </div>
  );
}
