import Revealer from "lunchbox/islands/Revealer/index.tsx";
import Markdown from "lunchbox/components/Markdown/index.tsx";

export default function (props: { content: string }) {
  return (
    <Revealer>
      <Markdown markdownContent={props.content} />
    </Revealer>
  );
}
