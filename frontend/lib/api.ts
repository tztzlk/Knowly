/**
 * API base URL. Set NEXT_PUBLIC_API_URL in .env.local (e.g. http://localhost:8000).
 * Must be a full origin (protocol + host + optional port); values like ":8000" are invalid.
 */
const DEFAULT_API_BASE = "http://localhost:8000";

function getApiBase(): string {
  const raw = process.env.NEXT_PUBLIC_API_URL?.trim();
  // Require a full URL (starts with http:// or https://) to avoid malformed values like ":8000"
  if (raw && (raw.startsWith("http://") || raw.startsWith("https://"))) {
    return raw.replace(/\/+$/, "");
  }
  return DEFAULT_API_BASE;
}

const API_BASE = getApiBase();

export { API_BASE };
