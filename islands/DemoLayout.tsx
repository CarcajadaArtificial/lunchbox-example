import { useState } from "preact/hooks";
import {
  Button,
  Input,
  Layout,
  Module,
  Panel,
  Select,
  Text,
} from "lunchbox/components.ts";
import type { iModule } from "lunchbox/components/Module/setup.ts";
import { MODULE_SIZES, type ModuleSizes } from "lunchbox/src/enums.ts";

export default function () {
  const [whitespace, setWhitespace] = useState<boolean>(true);
  const [modules, setModules] = useState<Partial<iModule>[]>([]);

  return (
    <>
      <div class="mb-8">
        <Layout whitespace>
          <Module>
            <div class="flex flex-col gap-4">
              <Input
                type="checkbox"
                label="Whitespace Mode"
                checked={whitespace}
                onChange={() => setWhitespace(!whitespace)}
              />
              <Button
                onClick={() =>
                  setModules([...modules, { size: "md", half: "md" }])}
              >
                Add Module
              </Button>
            </div>
          </Module>
        </Layout>
      </div>
      <Layout whitespace={whitespace}>
        {modules.map((module, index) => (
          <Module {...module}>
            <Panel class="p-4 mb-4">
              <Text noMargins type="subheading">Module #{index}</Text>
              <Select
                options={[...MODULE_SIZES]}
                label="Size"
                value={module.size}
                onchange={(ev) => {
                  const newModules = [...modules];
                  newModules[index] = {
                    ...modules[index],
                    size: (ev.target as HTMLSelectElement).value as ModuleSizes,
                  };
                  setModules(newModules);
                }}
              />
              <Select
                options={[...MODULE_SIZES]}
                label="Half Size"
                value={module.half}
                onchange={(ev) => {
                  const newModules = [...modules];
                  newModules[index] = {
                    ...modules[index],
                    half: (ev.target as HTMLSelectElement).value as ModuleSizes,
                  };
                  setModules(newModules);
                }}
              />
            </Panel>
          </Module>
        ))}
      </Layout>
    </>
  );
}
