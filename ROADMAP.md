# OUR Engine — Public Roadmap

**Status:** experimental early-stage project  
**Primary communication language:** English  
**Implementation language:** Rust

This roadmap describes intended areas of work. It is not a delivery schedule, a promise of compatibility or a statement that planned features already exist. Priorities may change as implementation and testing uncover new requirements.

## Current focus — layout and typography

- [x] Establish an initial Rust application with a window and framebuffer.
- [x] Fetch HTTP/HTTPS resources in the prototype.
- [x] Parse HTML using `html5ever`.
- [x] Build a simplified DOM representation.
- [x] Introduce an experimental CSS parser and basic block/inline layout.
- [x] Add initial CSS box-model calculations and unit tests for selected width calculations.
- [ ] Verify the latest prototype build and expand regression coverage.
- [ ] Improve text measurement using font metrics.
- [ ] Improve line wrapping and whitespace handling.
- [ ] Implement and test `text-align: left | center | right`.
- [ ] Expand tests for nested boxes, margins, padding, borders and height calculations.

## Next — images and viewport behavior

- [ ] Decode and render common raster image formats.
- [ ] Implement a document viewport and vertical scrolling.
- [ ] Handle content taller than the visible window.
- [ ] Improve clipping and drawing boundaries.

## Interaction and navigation

- [ ] Add hit testing for rendered elements.
- [ ] Implement clickable links and basic navigation.
- [ ] Add back/forward navigation and reload behavior.
- [ ] Implement basic form controls and keyboard input.

## JavaScript research

- [ ] Evaluate JavaScript runtime options and their licensing and embedding requirements.
- [ ] Define a DOM binding and event model.
- [ ] Prototype script execution only after rendering and interaction foundations are reliable.

## Standards and compatibility

- [ ] Create a repeatable HTML/CSS test corpus.
- [ ] Add regression tests and screenshot comparisons.
- [ ] Track supported CSS properties and known limitations publicly.
- [ ] Expand standards support incrementally based on test results.

## Longer-term direction

The long-term goal is a capable independent rendering engine. Broad compatibility with modern websites is a research and engineering objective, not a current capability. The project does not currently claim full HTML, CSS or JavaScript standards compliance.

## How to follow progress

Follow this repository for public project information and roadmap changes. Implementation details and public test resources will be published selectively as the project structure and licensing are finalized.
