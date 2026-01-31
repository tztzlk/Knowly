"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { getQuizQuestions, submitQuiz } from "@/lib/quiz";
import type { QuizQuestion, QuizRecommendation } from "@/lib/quiz";
import { getStoredProfileId } from "@/lib/profile";

const radioBase =
  "h-4 w-4 border-neutral-border text-primary-600 focus:ring-2 focus:ring-primary-100 focus:ring-offset-0";

export default function QuizPage() {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [recommendations, setRecommendations] = useState<QuizRecommendation[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getQuizQuestions()
      .then(setQuestions)
      .catch(() => setError("Could not load questions. Please try again."))
      .finally(() => setLoading(false));
  }, []);

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = questions.length > 0 && currentIndex === questions.length - 1;
  const progressPercent = questions.length ? ((currentIndex + 1) / questions.length) * 100 : 0;
  const showResults = recommendations.length > 0;

  const handleOptionSelect = (questionId: string, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    setError(null);
  };

  const handleNext = () => {
    if (!currentQuestion) return;
    if (!answers[currentQuestion.id]) {
      setError("Please select an answer.");
      return;
    }
    setError(null);
    if (isLastQuestion) {
      handleSubmit();
    } else {
      setCurrentIndex((i) => i + 1);
    }
  };

  const handleBack = () => {
    setError(null);
    setCurrentIndex((i) => Math.max(0, i - 1));
  };

  const handleSubmit = async () => {
    if (questions.length === 0) return;
    const allAnswered = questions.every((q) => answers[q.id]);
    if (!allAnswered) {
      setError("Please answer all questions.");
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const profileId = getStoredProfileId();
      const { recommendations: recs } = await submitQuiz(answers, profileId);
      setRecommendations(recs);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center py-section">
        <Container className="text-center">
          <p className="text-slate-600">Loading quiz…</p>
        </Container>
      </div>
    );
  }

  if (error && questions.length === 0) {
    return (
      <div className="min-h-[60vh] py-section md:py-sectionLg">
        <Container className="max-w-xl">
          <p className="text-red-600">{error}</p>
          <Link href="/" className="mt-4 inline-block text-sm font-medium text-primary-600 hover:text-primary-700">
            ← Back to home
          </Link>
        </Container>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="min-h-[60vh] py-section md:py-sectionLg">
        <Container className="max-w-2xl">
          <Link
            href="/"
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            ← Back to home
          </Link>
          <h1 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Your career directions
          </h1>
          <p className="mt-2 text-slate-600">
            Based on your answers, here are 2–3 paths that might suit you. These are starting points—you can explore more from here.
          </p>
          <div className="mt-10 space-y-6">
            {recommendations.map((rec, i) => (
              <div
                key={rec.directionId}
                className="rounded-card border border-neutral-border bg-white p-6 shadow-subtle"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-600">
                  Recommendation {i + 1}
                </span>
                <h2 className="mt-2 text-lg font-semibold text-slate-900">
                  {rec.label}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {rec.explanation}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/">Back to home</Button>
            <Button
              variant="secondary"
              onClick={() => {
                setRecommendations([]);
                setAnswers({});
                setCurrentIndex(0);
                setError(null);
              }}
            >
              Retake quiz
            </Button>
            <Link
              href="/students/profile"
              className="inline-flex items-center justify-center rounded-full border border-neutral-border bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-neutral-muted"
            >
              Edit profile
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] py-section md:py-sectionLg">
      <Container className="max-w-xl">
        <Link
          href="/"
          className="text-sm font-medium text-slate-600 hover:text-slate-900"
        >
          ← Back to home
        </Link>

        <div className="mt-6">
          <div className="flex items-center justify-between text-sm text-slate-600">
            <span>Question {currentIndex + 1} of {questions.length}</span>
          </div>
          <div
            className="mt-2 h-2 w-full overflow-hidden rounded-full bg-neutral-muted"
            role="progressbar"
            aria-valuenow={progressPercent}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-full rounded-full bg-primary-600 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {currentQuestion && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
              {currentQuestion.text}
            </h2>
            <fieldset className="mt-6 space-y-3">
              <legend className="sr-only">{currentQuestion.text}</legend>
              {currentQuestion.options.map((opt) => (
                <label
                  key={opt.id}
                  className="flex cursor-pointer items-center gap-3 rounded-input border border-neutral-border bg-white px-4 py-3 transition-colors hover:border-neutral-border hover:bg-neutral-muted/50 has-[:checked]:border-primary-500 has-[:checked]:bg-primary-50/50"
                >
                  <input
                    type="radio"
                    name={currentQuestion.id}
                    value={opt.id}
                    checked={answers[currentQuestion.id] === opt.id}
                    onChange={() => handleOptionSelect(currentQuestion.id, opt.id)}
                    disabled={submitting}
                    className={radioBase}
                  />
                  <span className="text-sm text-slate-800">{opt.label}</span>
                </label>
              ))}
            </fieldset>
          </div>
        )}

        {error && (
          <p className="mt-4 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        <div className="mt-10 flex flex-wrap gap-3">
          <Button
            type="button"
            onClick={handleNext}
            disabled={submitting || !currentQuestion || !answers[currentQuestion?.id]}
          >
            {submitting
              ? "Calculating…"
              : isLastQuestion
                ? "See my results"
                : "Next"}
          </Button>
          {currentIndex > 0 && (
            <Button type="button" variant="ghost" onClick={handleBack} disabled={submitting}>
              Back
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
}
