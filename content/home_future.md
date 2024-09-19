I knew you'd be here, inspecting the page or something, welcome to the spoilers
for the following updates of Lunchbox. This section of content is almost
unedited, it's like a section of notes and thoughts mainly aimed to myself in
the future or anyone curious enough to read it through a little piece of CSS
obstacle. If the latter is the case, again, thank you very much for your
interest in this bizarre project.

## Autocomplete

This component is almost done, I need to rethink a few things about it because
it remained in a earlier stage of development. I think that the menu
functionality can be abstracted from the `<Menu/>` island no problem. Also, this
is the time (not only at the end, but even after the end, that late hahaha) to
update it to the new standard component build functions, (`forward()` and such).
This would be the last component/island to have the previous standard and the
forward function could be removed entirely.

This task must be done with outmost urgency and should carry with it a few
fixes. I'm thinking that finishing this component implies an upgrade to the
`<MenuItem/>` component that sees rather empty at the moment.

## ContentEditable

This is my next idea for a component. This is an interesting one because I feel
it is rarely used, but when it is, I wish it would be turned into an
understandable and predictable component so I wouldn't think about it ever
again. What is the initial case use I see for this components? They're two,
actually. To give more _pizazz_ to an input interaction, like adding styles to
the text being entered or even to alter the height of the input component solely
depending on the text content's height. Secondly, the obvious feature of
in-place editing that aren't directly rich text.

## Table and Pagination

This is an interesting component, it will be the second to be based on other
people's work. The first is the `<Markdown/>` component that takes from the
deno-gfm project. I haven't been able to convince them to add a feature that
allows to insert custom css classes to rendered markdown elements, but oh well,
I'm digressing. This components will be using the project
[DataTable](https://github.com/atmelino/DataTable) from the developer
[atmelino](https://github.com/atmelino). I believe that it has the required
features to be implemented and I'd love to involve other members of the Deno
Fresh community,

## Breadcrumbs

This component is still blurry in my mind. I don't know if I should make it so
that it can automatically take `/the/route/from/the/url` and render itself
accordingly. Additionally a feature could be to only display as links the steps
that are available pages. But I still don't know I I leave it manual and call it
a day.
