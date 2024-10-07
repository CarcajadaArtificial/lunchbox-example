import { ComponentChildren } from "preact";
import InterObs from "@/islands/InterObs.tsx";
import Markdown from "lunchbox/components/Markdown/index.tsx";

export default function (
  props: { children?: ComponentChildren; content: string },
) {
  return (
    <InterObs>
      <Markdown class="my-8" markdownContent={props.content} />
      {props.children}
    </InterObs>
  );
}
