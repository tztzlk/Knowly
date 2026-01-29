import { pool } from '../db.js'

const VALID_GOALS = ['choosing_profession', 'changing_career']
const VALID_INTERESTS = [
  'technology',
  'healthcare',
  'arts',
  'business',
  'science',
  'education',
  'engineering',
  'creative',
]

// In-memory fallback when PostgreSQL is unavailable
let useMemory = false
const memoryProfiles = []

export async function initProfileDb() {
  try {
    const client = await pool.connect()
    try {
      await client.query(`
        CREATE TABLE IF NOT EXISTS student_profiles (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          full_name VARCHAR(100) NOT NULL,
          age_or_grade VARCHAR(50) NOT NULL,
          place_of_study VARCHAR(200) NOT NULL,
          interests TEXT[] NOT NULL DEFAULT '{}',
          goal VARCHAR(50) NOT NULL,
          created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
        )
      `)
      await client.query(`ALTER TABLE student_profiles ADD COLUMN full_name VARCHAR(100)`).catch(() => {})
      await client.query(`ALTER TABLE student_profiles ADD COLUMN place_of_study VARCHAR(200)`).catch(() => {})
    } finally {
      client.release()
    }
  } catch (e) {
    console.warn('Profile: PostgreSQL unavailable, using in-memory storage:', e.message)
    useMemory = true
  }
}

export function getValidGoals() {
  return [...VALID_GOALS]
}

export function getValidInterests() {
  return [...VALID_INTERESTS]
}

export function validateGoal(goal) {
  return typeof goal === 'string' && VALID_GOALS.includes(goal)
}

export function validateInterests(interests) {
  if (!Array.isArray(interests) || interests.length === 0) return false
  return interests.every((i) => typeof i === 'string' && VALID_INTERESTS.includes(i))
}

export async function createProfile({ fullName, ageOrGrade, placeOfStudy, interests, goal }) {
  if (useMemory) {
    const record = {
      id: crypto.randomUUID(),
      full_name: fullName,
      age_or_grade: ageOrGrade,
      place_of_study: placeOfStudy,
      interests,
      goal,
      created_at: new Date().toISOString(),
    }
    memoryProfiles.push(record)
    return { id: record.id, created_at: record.created_at }
  }

  const client = await pool.connect()
  try {
    const r = await client.query(
      `INSERT INTO student_profiles (full_name, age_or_grade, place_of_study, interests, goal)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, created_at`,
      [fullName, ageOrGrade, placeOfStudy, interests, goal]
    )
    const row = r.rows[0]
    return { id: row.id, created_at: row.created_at }
  } finally {
    client.release()
  }
}

export async function updateProfile(id, { fullName, ageOrGrade, placeOfStudy, interests, goal }) {
  if (useMemory) {
    const idx = memoryProfiles.findIndex((p) => p.id === id)
    if (idx === -1) return null
    memoryProfiles[idx] = {
      ...memoryProfiles[idx],
      full_name: fullName,
      age_or_grade: ageOrGrade,
      place_of_study: placeOfStudy,
      interests,
      goal,
    }
    return { id, updated: true }
  }

  const client = await pool.connect()
  try {
    const r = await client.query(
      `UPDATE student_profiles
       SET full_name = $1, age_or_grade = $2, place_of_study = $3, interests = $4, goal = $5
       WHERE id = $6
       RETURNING id`,
      [fullName, ageOrGrade, placeOfStudy, interests, goal, id]
    )
    if (r.rows.length === 0) return null
    return { id: r.rows[0].id, updated: true }
  } finally {
    client.release()
  }
}
