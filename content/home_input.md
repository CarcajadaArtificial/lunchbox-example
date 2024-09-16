## Input

The `<Input/>` component extends the HTML input element but wraps it inside a
label element. This approach eliminates the need to manage "for" and "id"
attributes while maintaining accessibility. You can control its width using the
"max width" attribute, allowing it to stretch to the container's maximum width
if needed. If there's an issue, just fill the "error" attribute with your error
message, and the input will automatically update its style to reflect the error
state. The "placeholder" attribute works just as you'd expect, and adding
"required" will display a little "*" next to the label text.

### Textarea

The `<Textarea/>` component follows the same principles as `<Input/>` but
extends the textarea HTML element. It inherits all the convenient features like
automatic error styling and accessible labeling.

### Select

The `<Select/>` component also mirrors `<Input/>` but extends the select HTML
element. You can conveniently add possible values using the "options" attribute,
which accepts an array of strings or option elements. This saves you from
manually looping over option elements. Need a placeholder? It works just like in
standard HTML—adding an "option value='' selected hidden" element to the top of
the list.

### Fieldset

Our `<Fieldset/>` component extends the fieldset HTML element for grouping
related inputs. It includes a "legend" attribute where you can provide a string
that adds a legend element for proper semantics. You can nest `<Input/>`
components inside, especially those of type "checkbox" or "radio", all connected
using the same "name" attribute to group them logically.
