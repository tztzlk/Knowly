import { API_BASE } from "./api";

export type QuizQuestion = {
  id: string;
  text: string;
  options: { id: string; label: string }[];
};

export type QuizRecommendation = {
  directionId: string;
  label: string;
  explanation: string;
  score: number;
};

export async function getQuizQuestions(): Promise<QuizQuestion[]> {
  const res = await fetch(`${API_BASE}/api/quiz/questions`, { method: "GET" });
  if (!res.ok) throw new Error("Failed to load quiz questions");
  const data = await res.json();
  if (!Array.isArray(data)) throw new Error("Invalid quiz questions");
  return data as QuizQuestion[];
}

export async function submitQuiz(
  answers: Record<string, string>,
  profileId?: string | null
): Promise<{ recommendations: QuizRecommendation[]; saved: boolean }> {
  const res = await fetch(`${API_BASE}/api/quiz/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ answers, profileId: profileId ?? undefined }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error((data as { error?: string }).error ?? "Failed to submit quiz");
  return data as { recommendations: QuizRecommendation[]; saved: boolean };
}
