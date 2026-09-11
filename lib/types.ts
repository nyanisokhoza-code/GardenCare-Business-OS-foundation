export type MeasurementMethod = "known_measurement" | "phone_ar" | "gps_boundary" | "ai_photo_video";

export type MeasurementEvidence = {
  method: MeasurementMethod;
  areaM2?: number;
  confidence?: number;
  notes?: string;
};

export type GardenScanResult = {
  totalAreaM2: number;
  confidence: number;
  methodsUsed: MeasurementMethod[];
  sections: { name: string; areaM2: number; confidence: number }[];
  needsHumanConfirmation: boolean;
  warning?: string;
};
