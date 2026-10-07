import { describe, expect, it } from "vitest";
import { PATIENT_ELIGIBILITY, isEligibleAge, isEligibleAmount } from "@/lib/patientEligibility";

describe("Patient eligibility", () => {
  it("includes ages 18 through 70 and excludes ages outside that range", () => {
    expect([PATIENT_ELIGIBILITY.minAge, PATIENT_ELIGIBILITY.maxAge]).toEqual([18, 70]);
    expect([17, 18, 65, 70, 71, 75].map(isEligibleAge)).toEqual([false, true, true, true, false, false]);
  });

  it("includes requested amounts from COP 300,000 through 25,000,000", () => {
    expect([PATIENT_ELIGIBILITY.minAmount, PATIENT_ELIGIBILITY.maxAmount]).toEqual([300_000, 25_000_000]);
    expect([299_999, 300_000, 25_000_000, 25_000_001, 30_000_000].map(isEligibleAmount)).toEqual([false, true, true, false, false]);
  });
});