import { useState } from "preact/hooks";
import {
  Code,
  Input,
  Kbd,
  Link,
  Panel,
  Separator,
  Text,
  Time,
} from "lunchbox/components.ts";
import { TEXT_TYPES } from "lunchbox/src/enums.ts";

export default function () {
  const [
    onPanel,
    setPanel,
  ] = useState<boolean>(false);

  const [
    isProse,
    setProse,
  ] = useState<boolean>(false);

  const [
    baseText,
    setBaseText,
  ] = useState<string>("Text");

  const [
    hasCode,
    setCode,
  ] = useState<boolean>(false);

  const [
    textCode,
    setTextCode,
  ] = useState<string>("Code");

  const [
    hasTime,
    setTime,
  ] = useState<boolean>(false);

  const [
    textTime,
    setTextTime,
  ] = useState<string>(new Date().toISOString());

  const [
    textTimeFormat,
    setTextTimeFormat,
  ] = useState<string>("www, d MMM YYYY - h:mm a");

  const [
    hasKbd,
    setKbd,
  ] = useState<boolean>(false);

  const [
    textKbd,
    setTextKbd,
  ] = useState<string>("⌘ Cmd + z");

  const [
    hasLink,
    setLink,
  ] = useState<boolean>(false);

  const [
    textLink,
    setTextLink,
  ] = useState<string>("Link");

  const [
    showBuffer,
    setBuffer,
  ] = useState<boolean>(false);

  return (
    <div class="flex">
      <div class="w-56 mr-4 flex flex-col gap-4">
        <Text type="subheading" noMargins>Configure</Text>
        <Input
          type="checkbox"
          label="On a panel"
          checked={onPanel}
          onChange={() => setPanel(!onPanel)}
        />
        <Input
          type="checkbox"
          label="Show Prose"
          checked={isProse}
          onChange={() => setProse(!isProse)}
        />
        <div hidden={isProse}>
          <div class="flex flex-col gap-4">
            <Input
              label="Base text"
              value={baseText}
              onkeyup={(ev: Event) =>
                setBaseText((ev.target as HTMLInputElement).value)}
            />
            <Input
              type="checkbox"
              label="Show inline Code"
              checked={hasCode}
              onChange={() => setCode(!hasCode)}
            />
            <div hidden={!hasCode}>
              <Input
                label="Code text"
                value={textCode}
                onkeyup={(ev: Event) =>
                  setTextCode((ev.target as HTMLInputElement).value)}
              />
            </div>
            <Input
              type="checkbox"
              label="Show Time"
              checked={hasTime}
              onChange={() => setTime(!hasTime)}
            />
            <div hidden={!hasTime}>
              <Input
                label="Time text"
                type="datetime-local"
                onchange={(ev: Event) =>
                  setTextTime((ev.target as HTMLInputElement).value)}
              />
              <Input
                label="Time format"
                value={textTimeFormat}
                onkeyup={(ev: Event) =>
                  setTextTimeFormat((ev.target as HTMLInputElement).value)}
              />
            </div>
            <Input
              type="checkbox"
              label="Show Kbd"
              checked={hasKbd}
              onChange={() => setKbd(!hasKbd)}
            />
            <div hidden={!hasKbd}>
              <Input
                label="Kbd text"
                value={textKbd}
                onkeyup={(ev: Event) =>
                  setTextKbd((ev.target as HTMLInputElement).value)}
              />
            </div>
            <Input
              type="checkbox"
              label="Show Link"
              checked={hasLink}
              onChange={() => setLink(!hasLink)}
            />
            <div hidden={!hasLink}>
              <Input
                label="Link text"
                value={textLink}
                onkeyup={(ev: Event) =>
                  setTextLink((ev.target as HTMLInputElement).value)}
              />
            </div>
            <Input
              type="checkbox"
              label="Show Buffer Text"
              checked={showBuffer}
              onChange={() => setBuffer(!showBuffer)}
            />
          </div>
        </div>
      </div>
      <Panel
        class="flex-1 rounded gap-4 p-4"
        nostyle={!onPanel}
      >
        {isProse
          ? (
            <div class="prose">
              <Text type="display">Prose</Text>
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam vel sapiente assumenda ratione totam delectus soluta
                eveniet obcaecati cum suscipit libero quae placeat, possimus at
                magni quidem cupiditate quas minus!
              </Text>
              <Separator />
              <Text type="title">Crime and Punishment</Text>
              <Text>By Herman Melville</Text>
              <Text type="heading">Part 1</Text>
              <Text type="subheading">Chapter 1</Text>
              <Text>
                On an exceptionally hot evening early in July a young man came
                out of the garret in which he lodged in S. Place and walked
                slowly, as though in hesitation, towards K. bridge.
              </Text>
              <Text>
                He had successfully avoided meeting his landlady on the
                staircase. His garret was under the roof of a high, five-storied
                house and was more like a cupboard than a room. The landlady who
                provided him with garret, dinners, and attendance, lived on the
                floor below, and every time he went out he was obliged to pass
                her kitchen, the door of which invariably stood open. And each
                time he passed, the young man had a sick, frightened feeling,
                which made him scowl and feel ashamed. He was hopelessly in debt
                to his landlady, and was afraid of meeting her.
              </Text>
            </div>
          )
          : TEXT_TYPES.map((TEXT_TYPE, index) => (
            <Text type={TEXT_TYPE}>
              {baseText} {hasCode ? <Code>{textCode}</Code> : ""} {hasTime
                ? <Time format={textTimeFormat} timestamp={textTime} />
                : ""} {hasKbd ? <Kbd>{textKbd}</Kbd> : ""}{" "}
              {hasLink ? <Link>{textLink}</Link> : ""} {showBuffer
                ? (
                  <>
                    {...new Array(index * index + 1).fill(
                      "extra extra extra extra ",
                    )}
                  </>
                )
                : ""}
            </Text>
          ))}
      </Panel>
    </div>
  );
}
