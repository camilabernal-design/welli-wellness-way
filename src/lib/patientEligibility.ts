export const PATIENT_ELIGIBILITY = {
  minAge: 18,
  maxAge: 70,
  minAmount: 300_000,
  maxAmount: 25_000_000,
} as const;

export const isEligibleAge = (age: number) =>
  Number.isFinite(age) && age >= PATIENT_ELIGIBILITY.minAge && age <= PATIENT_ELIGIBILITY.maxAge;

export const isEligibleAmount = (amount: number) =>
  Number.isFinite(amount) && amount >= PATIENT_ELIGIBILITY.minAmount && amount <= PATIENT_ELIGIBILITY.maxAmount;