import { Menu } from "lunchbox/islands.ts";
import MenuItem from "lunchbox/components/MenuItem/index.tsx";
import Panel from "lunchbox/components/Panel/index.tsx";
import type { iMenu } from "lunchbox/islands/Menu/setup.ts";

export default function (props: Partial<iMenu>) {
  const { children, ...p } = props;
  return (
    <Menu {...p}>
      <Panel class="rounded">
        {Array.isArray(children)
          ? children.map((child) => <MenuItem>{child}</MenuItem>)
          : children}
      </Panel>
    </Menu>
  );
}
