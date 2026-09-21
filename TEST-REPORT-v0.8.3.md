# GardenCare Business OS v0.8.3 — Scroll Reliability Test

## Scope
Tested the shared modal/side-panel layout used by long editors and previews.

## Desktop — 1365 × 768
- Edit Quote: modal body client height 687 px, content height 1,929 px, scrolled to 1,242 px.
- Edit Invoice: client height 620 px, content height 1,398 px, scrolled to 778 px.
- Invoice Preview: client height 687 px, content height 986 px, scrolled to 299 px.
- Invoice editor action footer remained visible.

## Mobile — 390 × 844
- Edit Quote: modal body client height 779 px, content height 3,431 px, scrolled to 2,652 px.
- Edit Invoice: client height 666 px, content height 2,887 px, scrolled to 2,221 px.
- Invoice Preview: client height 779 px, content height 1,197 px, scrolled to 418 px.
- Invoice editor action footer remained visible and wraps on narrow screens.

## Runtime
No JavaScript page errors were reported during the tested flows.

## Environment note
The execution environment blocks direct `file://` and localhost browser navigation, so the same application HTML was loaded directly into headless Chromium for the UI-layout test. Final physical mouse-wheel, trackpad and finger testing should still be confirmed in the user's Chrome browser after extraction.
