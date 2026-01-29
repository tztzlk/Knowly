/** Must match backend VALID_INTERESTS and VALID_GOALS. */

export const INTEREST_OPTIONS = [
  { value: "technology", label: "Technology" },
  { value: "healthcare", label: "Healthcare" },
  { value: "arts", label: "Arts" },
  { value: "business", label: "Business" },
  { value: "science", label: "Science" },
  { value: "education", label: "Education" },
  { value: "engineering", label: "Engineering" },
  { value: "creative", label: "Creative" },
] as const;

export const GOAL_OPTIONS = [
  { value: "choosing_profession", label: "Choosing a profession" },
  { value: "changing_career", label: "Changing career direction" },
] as const;

export type GoalValue = (typeof GOAL_OPTIONS)[number]["value"];
export type InterestValue = (typeof INTEREST_OPTIONS)[number]["value"];
