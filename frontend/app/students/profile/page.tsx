"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import {
  submitStudentProfile,
  updateStudentProfile,
  getStudentProfile,
  getStoredProfile,
  getStoredProfileId,
  setStoredProfile,
} from "@/lib/profile";
import type { GoalValue, InterestValue } from "@/lib/profile-constants";
import { INTEREST_OPTIONS, GOAL_OPTIONS } from "@/lib/profile-constants";

const VALID_INTEREST_VALUES = new Set(INTEREST_OPTIONS.map((o) => o.value));
const VALID_GOAL_VALUES = new Set(GOAL_OPTIONS.map((o) => o.value));

const inputBase =
  "rounded-input border border-neutral-border bg-white px-4 py-2.5 text-sm text-slate-800 transition-colors placeholder:text-slate-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100";
const checkboxBase =
  "h-4 w-4 rounded border-neutral-border text-primary-600 focus:ring-2 focus:ring-primary-100 focus:ring-offset-0";
const radioBase =
  "h-4 w-4 border-neutral-border text-primary-600 focus:ring-2 focus:ring-primary-100 focus:ring-offset-0";

export default function StudentProfilePage() {
  const router = useRouter();
  const [profileId, setProfileId] = useState<string | null>(null);
  const [fullName, setFullName] = useState("");
  const [ageOrGradeType, setAgeOrGradeType] = useState<"age" | "grade">("age");
  const [ageOrGradeValue, setAgeOrGradeValue] = useState("");
  const [placeOfStudy, setPlaceOfStudy] = useState("");
  const [interests, setInterests] = useState<InterestValue[]>([]);
  const [goal, setGoal] = useState<GoalValue | "">("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    function applyProfile(stored: {
      id: string;
      fullName?: string;
      ageOrGrade?: string;
      placeOfStudy?: string;
      interests?: string[];
      goal?: string;
    }) {
      setProfileId(stored.id);
      setFullName(stored.fullName ?? "");
      const aog = stored.ageOrGrade?.trim() ?? "";
      const asNum = aog ? parseInt(aog, 10) : NaN;
      if (aog && !Number.isNaN(asNum) && String(asNum) === aog) {
        setAgeOrGradeType("age");
        setAgeOrGradeValue(aog);
      } else {
        setAgeOrGradeType("grade");
        setAgeOrGradeValue(aog);
      }
      setPlaceOfStudy(stored.placeOfStudy ?? "");
      setInterests(
        (stored.interests ?? []).filter((i): i is InterestValue =>
          VALID_INTEREST_VALUES.has(i as InterestValue)
        )
      );
      setGoal(
        VALID_GOAL_VALUES.has(stored.goal as GoalValue) ? (stored.goal as GoalValue) : ""
      );
    }

    const stored = getStoredProfile();
    if (stored) {
      applyProfile(stored);
      setHydrated(true);
      return;
    }
    const id = getStoredProfileId();
    if (id) {
      getStudentProfile(id)
        .then((profile) => {
          if (profile) {
            setStoredProfile(profile);
            applyProfile(profile);
          }
          setHydrated(true);
        })
        .catch(() => setHydrated(true));
      return;
    }
    setHydrated(true);
  }, []);

  const toggleInterest = (value: InterestValue) => {
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value]
    );
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }
    const ageOrGrade =
      ageOrGradeType === "age" ? ageOrGradeValue.trim() : ageOrGradeValue.trim();
    if (!ageOrGrade) {
      setError(
        ageOrGradeType === "age"
          ? "Please enter your age."
          : "Please enter or select your school grade."
      );
      return;
    }
    if (!placeOfStudy.trim()) {
      setError("Please enter your place of study.");
      return;
    }
    if (interests.length === 0) {
      setError("Please select at least one interest.");
      return;
    }
    if (!goal) {
      setError("Please select a goal.");
      return;
    }

    const payload = {
      fullName: fullName.trim(),
      ageOrGrade,
      placeOfStudy: placeOfStudy.trim(),
      interests,
      goal,
    };

    setLoading(true);
    try {
      if (profileId) {
        await updateStudentProfile(profileId, payload);
        setStoredProfile({ id: profileId, ...payload });
      } else {
        const res = await submitStudentProfile(payload);
        setStoredProfile({ id: res.id, ...payload });
      }
      router.push("/students/next");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[60vh] py-section md:py-sectionLg">
      <Container className="max-w-xl">
        <div className="mb-8">
          <Link
            href="/students"
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            ← Back to Students
          </Link>
        </div>

        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          {profileId ? "Edit your profile" : "Student profile"}
        </h1>
        <p className="mt-2 text-slate-600">
          {profileId
            ? "Update your information below."
            : "Tell us a bit about yourself. No account needed."}
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-10">
          {/* Personal information */}
          <fieldset className="space-y-5 rounded-card border border-neutral-border bg-white p-5 shadow-subtle">
            <legend className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Personal information
            </legend>
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-slate-700"
              >
                Full name <span className="text-red-500">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  setError(null);
                }}
                placeholder="e.g. Alex Johnson"
                className={`mt-2 w-full ${inputBase}`}
                disabled={loading}
                maxLength={100}
                autoComplete="name"
              />
            </div>
            <div>
              <span className="block text-sm font-medium text-slate-700">
                Age or school grade <span className="text-red-500">*</span>
              </span>
              <p className="mt-1 text-xs text-slate-500">Choose one</p>
              <div className="mt-3 flex flex-wrap gap-4">
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="ageOrGradeType"
                    checked={ageOrGradeType === "age"}
                    onChange={() => {
                      setAgeOrGradeType("age");
                      setAgeOrGradeValue("");
                      setError(null);
                    }}
                    disabled={loading}
                    className={radioBase}
                  />
                  <span className="text-sm text-slate-800">Age</span>
                </label>
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="ageOrGradeType"
                    checked={ageOrGradeType === "grade"}
                    onChange={() => {
                      setAgeOrGradeType("grade");
                      setAgeOrGradeValue("");
                      setError(null);
                    }}
                    disabled={loading}
                    className={radioBase}
                  />
                  <span className="text-sm text-slate-800">School grade</span>
                </label>
              </div>
              {ageOrGradeType === "age" ? (
                <input
                  id="ageOrGrade"
                  type="number"
                  min={14}
                  max={99}
                  value={ageOrGradeValue}
                  onChange={(e) => {
                    setAgeOrGradeValue(e.target.value.replace(/\D/g, "").slice(0, 2));
                    setError(null);
                  }}
                  placeholder="e.g. 16"
                  className={`mt-2 w-full ${inputBase}`}
                  disabled={loading}
                  autoComplete="off"
                />
              ) : (
                <input
                  id="ageOrGrade"
                  type="text"
                  value={ageOrGradeValue}
                  onChange={(e) => {
                    setAgeOrGradeValue(e.target.value.slice(0, 50));
                    setError(null);
                  }}
                  placeholder="e.g. Grade 10"
                  className={`mt-2 w-full ${inputBase}`}
                  disabled={loading}
                  maxLength={50}
                  autoComplete="off"
                />
              )}
            </div>
            <div>
              <label
                htmlFor="placeOfStudy"
                className="block text-sm font-medium text-slate-700"
              >
                Place of study <span className="text-red-500">*</span>
              </label>
              <input
                id="placeOfStudy"
                type="text"
                value={placeOfStudy}
                onChange={(e) => {
                  setPlaceOfStudy(e.target.value);
                  setError(null);
                }}
                placeholder="e.g. Lincoln High School"
                className={`mt-2 w-full ${inputBase}`}
                disabled={loading}
                maxLength={200}
                autoComplete="organization"
              />
            </div>
          </fieldset>

          {/* Interests */}
          <fieldset className="space-y-5 rounded-card border border-neutral-border bg-white p-5 shadow-subtle">
            <legend className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Interests
            </legend>
            <span className="block text-sm font-medium text-slate-700">
              Select all that apply <span className="text-red-500">*</span>
            </span>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {INTEREST_OPTIONS.map((opt) => (
                <label
                  key={opt.value}
                  className="flex cursor-pointer items-center gap-3 rounded-input border border-neutral-border bg-white px-4 py-3 transition-colors hover:border-neutral-border hover:bg-neutral-muted/50 has-[:checked]:border-primary-500 has-[:checked]:bg-primary-50/50"
                >
                  <input
                    type="checkbox"
                    checked={interests.includes(opt.value)}
                    onChange={() => toggleInterest(opt.value)}
                    disabled={loading}
                    className={checkboxBase}
                  />
                  <span className="text-sm text-slate-800">{opt.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* Goal */}
          <fieldset className="space-y-5 rounded-card border border-neutral-border bg-white p-5 shadow-subtle">
            <legend className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Goal
            </legend>
            <span className="block text-sm font-medium text-slate-700">
              Choose one <span className="text-red-500">*</span>
            </span>
            <div className="space-y-3">
              {GOAL_OPTIONS.map((opt) => (
                <label
                  key={opt.value}
                  className="flex cursor-pointer items-center gap-3 rounded-input border border-neutral-border bg-white px-4 py-3 transition-colors hover:border-neutral-border hover:bg-neutral-muted/50 has-[:checked]:border-primary-500 has-[:checked]:bg-primary-50/50"
                >
                  <input
                    type="radio"
                    name="goal"
                    value={opt.value}
                    checked={goal === opt.value}
                    onChange={() => {
                      setGoal(opt.value);
                      setError(null);
                    }}
                    disabled={loading}
                    className={radioBase}
                  />
                  <span className="text-sm text-slate-800">{opt.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {error && (
            <div
              className="rounded-input border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              role="alert"
            >
              {error}
            </div>
          )}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              type="submit"
              disabled={loading || !hydrated}
              className="min-w-[140px]"
            >
              {loading ? "Saving…" : profileId ? "Save changes" : "Save and continue"}
            </Button>
            {loading && (
              <span className="text-sm text-slate-500">
                {profileId ? "Updating…" : "Saving your profile…"}
              </span>
            )}
          </div>
        </form>
      </Container>
    </div>
  );
}
