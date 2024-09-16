## Text

The `<Text/>` component is as simple as it gets—extending the span element to
handle text without imposing any specific semantic HTML elements like h1 or p.
This gives you the flexibility to style your text as you see fit. It comes with
a "type" attribute where you can choose from "display", "title", "heading",
"subheading", "paragraph", or "small". The larger types ("display", "title",
"heading") feature a contrasting, colorful tone and a serif typeface (defaults
to LibreCaslonText). The smaller types ("subheading", "paragraph", "small") use
more neutral colors like whitish or blackish and a sans-serif typeface (defaults
to Figtree).

### Link

The `<Link/>` component extends the anchor element but is designed specifically
for textual links composed using the `<Text/>` component. It enforces underline
and hover styles to ensure consistency. However, if you need more flexibility or
functionality, you're absolutely free to use the standard HTML anchor tag. It's
straightforward and sometimes that's all you need!

### Kbd

Our `<Kbd/>` component extends the kbd HTML element, adding standard styles to
represent keyboard input. It uses a monospace font (defaults to Fira Code) and
defaults to the "small" text type, differentiating it from the `<Code/>`
component.

### Code

Similarly, the `<Code/>` component extends the code HTML element for displaying
inline code snippets. It also uses a monospace font (defaults to Fira Code) but
defaults to the "paragraph" text type, making it suitable for larger blocks of
code.
