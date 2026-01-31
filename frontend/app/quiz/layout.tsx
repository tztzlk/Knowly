import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Quiz",
  description:
    "Take a short quiz to discover 2–3 career directions that might suit you. Simple questions, clear results.",
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
