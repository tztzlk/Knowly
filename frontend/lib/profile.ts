import { API_BASE } from "./api";

export const PROFILE_STORAGE_KEY = "knowly_profile";
export const PROFILE_ID_KEY = "knowly_profile_id";

export type StudentProfilePayload = {
  fullName: string;
  ageOrGrade: string;
  placeOfStudy: string;
  interests: string[];
  goal: "choosing_profession" | "changing_career";
};

export type StoredProfile = StudentProfilePayload & {
  id: string;
};

export type ProfileResponse = {
  id: string;
  created_at?: string;
  message: string;
};

export type ProfileErrorResponse = {
  error: string;
  fields?: Record<string, string>;
};

export function getStoredProfile(): StoredProfile | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as unknown;
    if (
      data &&
      typeof data === "object" &&
      "id" in data &&
      typeof (data as StoredProfile).id === "string" &&
      "ageOrGrade" in data &&
      "interests" in data &&
      "goal" in data
    ) {
      const p = data as Record<string, unknown>;
      return {
        id: p.id as string,
        fullName: typeof p.fullName === "string" ? p.fullName : "",
        ageOrGrade: p.ageOrGrade as string,
        placeOfStudy: typeof p.placeOfStudy === "string" ? p.placeOfStudy : "",
        interests: p.interests as string[],
        goal: p.goal as "choosing_profession" | "changing_career",
      };
    }
    return null;
  } catch {
    return null;
  }
}

export function setStoredProfile(profile: StoredProfile): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
    localStorage.setItem(PROFILE_ID_KEY, profile.id);
  } catch {
    // ignore
  }
}

export function getStoredProfileId(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(PROFILE_ID_KEY);
  } catch {
    return null;
  }
}

export async function getStudentProfile(id: string): Promise<StoredProfile | null> {
  const res = await fetch(`${API_BASE}/api/profile/${id}`, { method: "GET" });
  if (res.status === 404) return null;
  const data = await res.json();
  if (!res.ok) {
    const err = data as ProfileErrorResponse;
    throw new Error(err.error ?? "Failed to load profile");
  }
  const p = data as {
    id: string;
    fullName?: string;
    ageOrGrade?: string;
    placeOfStudy?: string;
    interests?: string[];
    goal?: string;
  };
  return {
    id: p.id,
    fullName: p.fullName ?? "",
    ageOrGrade: p.ageOrGrade ?? "",
    placeOfStudy: p.placeOfStudy ?? "",
    interests: Array.isArray(p.interests) ? p.interests : [],
    goal: (p.goal === "choosing_profession" || p.goal === "changing_career" ? p.goal : "choosing_profession") as StoredProfile["goal"],
  };
}

export async function submitStudentProfile(
  payload: StudentProfilePayload
): Promise<ProfileResponse> {
  const res = await fetch(`${API_BASE}/api/profile`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    const err = data as ProfileErrorResponse;
    throw new Error(err.fields ? Object.values(err.fields).join(" ") : err.error ?? "Failed to save profile");
  }

  return data as ProfileResponse;
}

export async function updateStudentProfile(
  id: string,
  payload: StudentProfilePayload
): Promise<ProfileResponse> {
  const res = await fetch(`${API_BASE}/api/profile/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    const err = data as ProfileErrorResponse;
    throw new Error(err.fields ? Object.values(err.fields).join(" ") : err.error ?? "Failed to update profile");
  }

  return data as ProfileResponse;
}
