import { Menu } from "lunchbox/islands.ts";
import { MenuItem, Panel } from "lunchbox/components.ts";
import type { iMenu } from "lunchbox/islands/Menu/setup.ts";

export default function (props: Partial<iMenu>) {
  const { children, ...p } = props;
  return (
    <Menu {...p}>
      <Panel class="rounded p-1">
        {Array.isArray(children)
          ? children.map((child) => <MenuItem>{child}</MenuItem>)
          : children}
      </Panel>
    </Menu>
  );
}
