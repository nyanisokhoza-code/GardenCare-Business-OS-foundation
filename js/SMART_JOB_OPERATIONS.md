# GardenCare v0.7 — Smart Job Operations

The GUI now exposes a local-first operations engine through `window.GardenCareOps`.

Available helpers:
- `calcDiesel(distanceKm, options)`
- `recommendLabour(m2, serviceType)`
- `recommendMaterials(m2, coverage)`
- `createJob(payload)`
- `updateJob(id, patch)`
- `addActivity(jobId, type, text)`
- `generateCallOutWhatsApp(customerName, fee)`
- `addVariation(jobId, variation)`
- `completeJob(jobId, checklist, options)`
- `saveSettings(patch)`

Important business controls are stored in Settings/localStorage for now and are designed to move to the database later.
