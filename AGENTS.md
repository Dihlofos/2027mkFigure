# Project instructions

- For Figma/design requests, read `.docs/figma-reference.md` first. It is gitignored project-local context with Figma file keys, frame/node IDs, page sections, colors, and typography notes.
- For repository layout and component responsibilities, read `.docs/project-structure.md`.
- Use Figma MCP to inspect the current target frame before making design decisions; treat the reference file as an index, not as a substitute for checking the live design.
- Font files have been supplied and connected; check `.docs/figma-reference.md` before changing the typography setup.
- Write CSS lengths and font sizes in `rem`, never `px`; use `1px = 0.1rem` for design values. Keep media-query thresholds in `rem` while preserving the intended viewport widths; see `.docs/project-structure.md` for the breakpoint conversion rule.
- When adjusting a component's layout, keep its styles inside that component where possible. Avoid overriding child component styles from a parent; do so only when it is absolutely necessary.
- Name page-section components whose root element is `<section>` with the `*Section.vue` suffix (for example, `AboutSection.vue`).
- For horizontal carousels, make the scroll track full-bleed to the viewport edge; put horizontal padding on the heading and slides, not the outer container. Hide the native scrollbar while keeping native touch scrolling.
- Always render project images through the `<Image />` component; do not use raw `<img>` tags in feature/component templates.
- Keep media queries inside the rules for the elements they change. Do not gather selectors into a breakpoint-wide block at the end of a component stylesheet.
- Declare each selector only once per component stylesheet. Put its base declarations and all media queries in that one rule; merge repeated media queries for the same selector.
- Limit SCSS selector nesting that uses `&` to one level. Do not nest BEM child selectors inside another `&` selector.
- Do not run `npx nuxi build`, `npx nuxi prepare`, or `npx nuxi generate` unless explicitly requested. Use `npm run dev` for a functional check when needed.
- Use `rem` for CSS dimensions and font sizes. `border-radius` is the sole unit exception and may follow the source design's unit.
