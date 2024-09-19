import { useReducer } from "preact/hooks";
import Fieldset from "lunchbox/components/Fieldset/index.tsx";
import Input from "lunchbox/components/Input/index.tsx";
import Panel from "lunchbox/components/Panel/index.tsx";
import Select from "lunchbox/components/Select/index.tsx";
import TextArea from "lunchbox/components/TextArea/index.tsx";
import Menu from "./Menu.tsx";

export default function () {
  const initialState = {
    onPanel: true,
    maxWidth: false,
    inputElement: "input",
    inputLabel: "Example label",
    inputError: "",
    inputType: "text",
    inputTypeGroup: "text",
    inputPlaceholder: "Placeholder",
    options: "Option 1, Option 2, Option 3",
    allowMultiple: false,
  };

  type Action = {
    type: "UPDATE_FIELD" | "TOGGLE_FIELD";
    field: keyof typeof initialState;
    value?: typeof initialState[keyof typeof initialState];
  };

  function reducer(state: typeof initialState, action: Action) {
    switch (action.type) {
      case "UPDATE_FIELD":
        return {
          ...state,
          [action.field]: action.value,
        };
      case "TOGGLE_FIELD":
        return {
          ...state,
          [action.field]: !state[action.field],
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const onChangeInputType = (ev: Event) =>
    dispatch({
      type: "UPDATE_FIELD",
      field: "inputType",
      value: (ev.target as HTMLInputElement).value,
    });

  return (
    <div class="flex flex-col gap-4">
      <Panel
        class="flex-1 flex flex-col items-center justify-center rounded gap-4 p-4"
        nostyle={!state.onPanel}
      >
        {state.inputElement === "input"
          ? (
            <Input
              label={state.inputLabel}
              error={state.inputError}
              maxWidth={state.maxWidth}
              placeholder={state.inputPlaceholder}
              type={state.inputType}
            />
          )
          : state.inputElement === "textarea"
          ? (
            <TextArea
              label={state.inputLabel}
              error={state.inputError}
              maxWidth={state.maxWidth}
              placeholder={state.inputPlaceholder}
            />
          )
          : state.inputElement === "select"
          ? (
            <Select
              label={state.inputLabel}
              error={state.inputError}
              maxWidth={state.maxWidth}
              placeholder={state.inputPlaceholder}
              options={state.options.split(",")}
            />
          )
          : state.inputElement === "fieldset"
          ? (
            <Fieldset legend={state.inputLabel} maxWidth={state.maxWidth}>
              {state.options.split(",").map((currentOption) => (
                <Input
                  type={state.allowMultiple ? "checkbox" : "radio"}
                  label={currentOption}
                  value={currentOption}
                  name="fieldset-example"
                />
              ))}
            </Fieldset>
          )
          : null}
      </Panel>
      <Menu button="Configuration" hardToggle>
        <div class="py-2 px-4 flex flex-col gap-2">
          <Input
            type="checkbox"
            label="On a panel"
            checked={state.onPanel}
            onChange={() =>
              dispatch({ type: "TOGGLE_FIELD", field: "onPanel" })}
          />
          <Input
            type="checkbox"
            label="Max width"
            checked={state.maxWidth}
            onChange={() =>
              dispatch({ type: "TOGGLE_FIELD", field: "maxWidth" })}
          />
          <Input
            label="Input label"
            value={state.inputLabel}
            onkeyup={(ev: Event) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "inputLabel",
                value: (ev.target as HTMLInputElement).value,
              })}
          />
          <Input
            label="Input error"
            value={state.inputError}
            onkeyup={(ev: Event) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "inputError",
                value: (ev.target as HTMLInputElement).value,
              })}
          />
          <Input
            label="Input placeholder"
            value={state.inputPlaceholder}
            onkeyup={(ev: Event) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "inputPlaceholder",
                value: (ev.target as HTMLInputElement).value,
              })}
          />
          <Fieldset legend="Input Element">
            {["input", "textarea", "select", "fieldset"].map(
              (currentInputElement) => (
                <Input
                  type="radio"
                  label={currentInputElement}
                  value={currentInputElement}
                  name="input_elements"
                  checked={currentInputElement === state.inputElement}
                  data-label={currentInputElement}
                  onchange={(ev: Event) =>
                    dispatch({
                      type: "UPDATE_FIELD",
                      field: "inputElement",
                      value: (ev.target as HTMLInputElement).dataset[
                        "label"
                      ] as string,
                    })}
                />
              ),
            )}
          </Fieldset>
          {state.inputElement === "input"
            ? (
              <div>
                <Fieldset legend="Input Type">
                  {["text", "dates", "other"].map((currentInputTypeGroup) => (
                    <Input
                      type="radio"
                      label={currentInputTypeGroup}
                      value={currentInputTypeGroup}
                      name="input_type_groups"
                      checked={currentInputTypeGroup === state.inputTypeGroup}
                      data-label={currentInputTypeGroup}
                      onchange={(ev: Event) =>
                        dispatch({
                          type: "UPDATE_FIELD",
                          field: "inputTypeGroup",
                          value: (ev.target as HTMLInputElement).dataset[
                            "label"
                          ] as string,
                        })}
                    />
                  ))}
                </Fieldset>
                {state.inputTypeGroup === "text"
                  ? (
                    <Select
                      label="Texts"
                      placeholder="Select Input Type"
                      value={state.inputType}
                      options={[
                        "text",
                        "email",
                        "number",
                        "password",
                        "search",
                        "tel",
                        "url",
                      ]}
                      onchange={onChangeInputType}
                    />
                  )
                  : state.inputTypeGroup === "dates"
                  ? (
                    <Select
                      label="Dates"
                      value={state.inputType}
                      placeholder="Select Input Type"
                      options={[
                        "date",
                        "datetime-local",
                        "month",
                        "time",
                        "week",
                      ]}
                      onchange={onChangeInputType}
                    />
                  )
                  : state.inputTypeGroup === "other"
                  ? (
                    <Select
                      label="Others"
                      value={state.inputType}
                      placeholder="Select Input Type"
                      options={[
                        "checkbox",
                        "color",
                        "file",
                        "hidden",
                        "image",
                        "radio",
                        "range",
                        "reset",
                        "submit",
                      ]}
                      onchange={onChangeInputType}
                    />
                  )
                  : null}
              </div>
            )
            : state.inputElement === "select"
            ? (
              <TextArea
                label="Options"
                value={state.options}
                onkeyup={(ev: Event) =>
                  dispatch({
                    type: "UPDATE_FIELD",
                    field: "options",
                    value: (ev.target as HTMLInputElement).value,
                  })}
              />
            )
            : state.inputElement === "fieldset"
            ? (
              <>
                <TextArea
                  label="Options"
                  value={state.options}
                  onkeyup={(ev: Event) =>
                    dispatch({
                      type: "UPDATE_FIELD",
                      field: "options",
                      value: (ev.target as HTMLInputElement).value,
                    })}
                />
                <Input
                  type="checkbox"
                  label="Allow Multiple"
                  checked={state.allowMultiple}
                  onChange={() =>
                    dispatch({ type: "TOGGLE_FIELD", field: "allowMultiple" })}
                />
              </>
            )
            : null}
        </div>
      </Menu>
    </div>
  );
}
