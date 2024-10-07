import InterObs from "lunchbox/islands/InterObs/index.tsx";
import type { iInterObs } from "lunchbox/islands/InterObs/setup.ts";
import { animation } from "lunchbox/src/styles.ts";

export default function (props: Partial<iInterObs>) {
  return (
    <InterObs
      animation={animation.fadein}
      observerOptions={{ root: null, rootMargin: "0px", threshold: 0.1 }}
      {...props}
    />
  );
}
