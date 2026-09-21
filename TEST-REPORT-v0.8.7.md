# GardenCare Business OS v0.8.7 — Test Report

## Static/package validation

- `index.html` present and version label updated to v0.8.7.
- `flyer.html` present.
- Approved `GardenCare-Flyer-Selected.png` present.
- `GardenCare-QR.png` present.
- `GardenCare-QR-Print-Card.png` present.
- `GardenCare-Flyer-With-QR.png` present.
- JavaScript syntax check passed with `node --check`.
- HTML parsed successfully with BeautifulSoup.
- Standalone QR payload decoded successfully using OpenCV and exactly matches:
  `https://nyanisokhoza-code.github.io/GardenCare-Business-OS-foundation/flyer.html`
- The QR area extracted from `GardenCare-Flyer-With-QR.png` also decoded to the same URL.
- Marketing / QR route is present in the Business OS navigation and view map.
- Copy-link and copy-WhatsApp-message actions are wired into the delegated action handler.

## Public flyer workflow

`flyer.html` contains:
- mobile viewport metadata;
- the approved GardenCare flyer image;
- once-off lawn restoration section;
- monthly garden maintenance section;
- GardenCare recommendation section;
- WhatsApp request-a-quote action;
- telephone call action;
- mobile sticky WhatsApp / Call actions.

## Deployment boundary

The QR code points to the final GitHub Pages location. Until `flyer.html` and `GardenCare-Flyer-Selected.png` are published at the target repository, scanning the QR cannot display the new page publicly.

## Browser rendering note

Automated Chromium screenshot rendering was attempted in the container but the headless browser process did not terminate reliably in this environment. Static HTML/JS/asset/QR validation passed; final live GitHub Pages verification should be performed from a phone after deployment.
