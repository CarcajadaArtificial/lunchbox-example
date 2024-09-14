import { useReducer } from "preact/hooks";
import {
  Code,
  Input,
  Kbd,
  Link,
  Panel,
  Separator,
  Text,
} from "lunchbox/components.ts";
import { TEXT_TYPES } from "lunchbox/src/enums.ts";
import Menu from "./Menu.tsx";

export default function () {
  const initialState = {
    onPanel: true,
    isProse: false,
    baseText: "Text",
    hasCode: false,
    textCode: "Code",
    hasKbd: false,
    textKbd: "⌘ Cmd + z",
    hasLink: false,
    textLink: "Link",
    showBuffer: false,
  };

  type Action = {
    type: "SET_FIELD";
    field: keyof typeof initialState;
    value: typeof initialState[keyof typeof initialState];
  };

  function reducer(
    state: typeof initialState,
    action: Action,
  ): typeof initialState {
    switch (action.type) {
      case "SET_FIELD":
        return {
          ...state,
          [action.field]: action.value,
        };
      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div class="flex flex-col gap-4">
      <Panel class="flex-1 rounded gap-4 p-4" nostyle={!state.onPanel}>
        {state.isProse
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
          : (
            TEXT_TYPES.map((TEXT_TYPE, index) => (
              <Text type={TEXT_TYPE}>
                {state.baseText}{" "}
                {state.hasCode ? <Code>{state.textCode}</Code> : ""}{" "}
                {state.hasKbd ? <Kbd>{state.textKbd}</Kbd> : ""}{" "}
                {state.hasLink ? <Link>{state.textLink}</Link> : ""}{" "}
                {state.showBuffer
                  ? (
                    <>
                      {...new Array(index * index + 1).fill(
                        "extra extra extra extra ",
                      )}
                    </>
                  )
                  : (
                    ""
                  )}
              </Text>
            ))
          )}
      </Panel>
      <Menu button="Configuration" hardToggle>
        <div class="py-2 px-4 flex flex-col gap-2">
          <Input
            type="checkbox"
            label="On a panel"
            checked={state.onPanel}
            onChange={() =>
              dispatch({
                type: "SET_FIELD",
                field: "onPanel",
                value: !state.onPanel,
              })}
          />
          <Input
            type="checkbox"
            label="Show Prose"
            checked={state.isProse}
            onChange={() =>
              dispatch({
                type: "SET_FIELD",
                field: "isProse",
                value: !state.isProse,
              })}
          />
          <div hidden={state.isProse}>
            <div class="flex flex-col gap-4">
              <Input
                label="Base text"
                value={state.baseText}
                onkeyup={(ev: Event) =>
                  dispatch({
                    type: "SET_FIELD",
                    field: "baseText",
                    value: (ev.target as HTMLInputElement).value,
                  })}
              />
              <Input
                type="checkbox"
                label="Show inline Code"
                checked={state.hasCode}
                onChange={() =>
                  dispatch({
                    type: "SET_FIELD",
                    field: "hasCode",
                    value: !state.hasCode,
                  })}
              />
              <div hidden={!state.hasCode}>
                <Input
                  label="Code text"
                  value={state.textCode}
                  onkeyup={(ev: Event) =>
                    dispatch({
                      type: "SET_FIELD",
                      field: "textCode",
                      value: (ev.target as HTMLInputElement).value,
                    })}
                />
              </div>
              <Input
                type="checkbox"
                label="Show Kbd"
                checked={state.hasKbd}
                onChange={() =>
                  dispatch({
                    type: "SET_FIELD",
                    field: "hasKbd",
                    value: !state.hasKbd,
                  })}
              />
              <div hidden={!state.hasKbd}>
                <Input
                  label="Kbd text"
                  value={state.textKbd}
                  onkeyup={(ev: Event) =>
                    dispatch({
                      type: "SET_FIELD",
                      field: "textKbd",
                      value: (ev.target as HTMLInputElement).value,
                    })}
                />
              </div>
              <Input
                type="checkbox"
                label="Show Link"
                checked={state.hasLink}
                onChange={() =>
                  dispatch({
                    type: "SET_FIELD",
                    field: "hasLink",
                    value: !state.hasLink,
                  })}
              />
              <div hidden={!state.hasLink}>
                <Input
                  label="Link text"
                  value={state.textLink}
                  onkeyup={(ev: Event) =>
                    dispatch({
                      type: "SET_FIELD",
                      field: "textLink",
                      value: (ev.target as HTMLInputElement).value,
                    })}
                />
              </div>
              <Input
                type="checkbox"
                label="Show Buffer Text"
                checked={state.showBuffer}
                onChange={() =>
                  dispatch({
                    type: "SET_FIELD",
                    field: "showBuffer",
                    value: !state.showBuffer,
                  })}
              />
            </div>
          </div>
        </div>
      </Menu>
    </div>
  );
}
