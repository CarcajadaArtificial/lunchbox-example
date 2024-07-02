import Sidebar from "lunchbox/islands/Sidebar/index.tsx";
import type { iSidebar } from "lunchbox/islands/Sidebar/setup.ts";

export default function (props: Partial<iSidebar>) {
  return <Sidebar {...props} />;
}
