export type PricingInputs = {
  areaM2: number;
  bags: number;
  bagCost: number;
  materialMarkup: number;
  labourCost: number;
  vehicleCost: number;
  equipmentCost: number;
  consumablesCost: number;
  disposalCost: number;
  overheadCost: number;
  targetMargin: number;
};

export function calculatePricing(input: PricingInputs) {
  const materialCost = input.bags * input.bagCost;
  const materialSell = materialCost * (1 + input.materialMarkup / 100);
  const directCost =
    materialCost +
    input.labourCost +
    input.vehicleCost +
    input.equipmentCost +
    input.consumablesCost +
    input.disposalCost +
    input.overheadCost;

  const minimum = directCost;
  const recommended = directCost / Math.max(0.01, 1 - input.targetMargin / 100);
  const premium = recommended * 1.12;

  return {
    materialCost,
    materialSell,
    directCost,
    minimum,
    recommended,
    premium,
  };
}

export function bagsFromCoverage(areaM2: number, coverageM2PerBag: number, wastagePercent = 5) {
  const base = areaM2 / Math.max(0.01, coverageM2PerBag);
  return Math.ceil(base * (1 + wastagePercent / 100));
}
