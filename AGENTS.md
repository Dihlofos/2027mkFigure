# Project instructions

- For Figma/design requests, read `.docs/figma-reference.md` first. It is gitignored project-local context with Figma file keys, frame/node IDs, page sections, colors, and typography notes.
- For repository layout and component responsibilities, read `.docs/project-structure.md`.
- Use Figma MCP to inspect the current target frame before making design decisions; treat the reference file as an index, not as a substitute for checking the live design.
- Font files have been supplied and connected; check `.docs/figma-reference.md` before changing the typography setup.
- Write CSS lengths and font sizes in `rem`, never `px`; use `1px = 0.1rem` for design values. Keep media-query thresholds in `rem` while preserving the intended viewport widths; see `.docs/project-structure.md` for the breakpoint conversion rule.
- When adjusting a component's layout, keep its styles inside that component where possible. Avoid overriding child component styles from a parent; do so only when it is absolutely necessary.
- Name page-section components whose root element is `<section>` with the `*Section.vue` suffix (for example, `AboutSection.vue`).
- For horizontal carousels, make the scroll track full-bleed to the viewport edge; put horizontal padding on the heading and slides, not the outer container. Hide the native scrollbar while keeping native touch scrolling.
