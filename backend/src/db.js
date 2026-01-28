import pg from 'pg'

const { Pool } = pg

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/unismart',
})

// In-memory fallback when PostgreSQL is unavailable (e.g. Docker not running)
let useMemory = false
const memory = { value: 0 }

export async function initDb() {
  try {
    const client = await pool.connect()
    try {
      await client.query(`
        CREATE TABLE IF NOT EXISTS counter (
          id INTEGER PRIMARY KEY DEFAULT 1,
          value INTEGER NOT NULL DEFAULT 0,
          updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
        )
      `)
      const r = await client.query('SELECT 1 FROM counter WHERE id = 1')
      if (r.rows.length === 0) {
        await client.query('INSERT INTO counter (id, value) VALUES (1, 0)')
      }
    } finally {
      client.release()
    }
  } catch (e) {
    console.warn('PostgreSQL unavailable, using in-memory counter:', e.message)
    useMemory = true
  }
}

export async function getCounter() {
  if (useMemory) return { value: memory.value }
  const r = await pool.query('SELECT value FROM counter WHERE id = 1')
  if (r.rows.length === 0) {
    await pool.query('INSERT INTO counter (id, value) VALUES (1, 0)')
    return { value: 0 }
  }
  return { value: r.rows[0].value }
}

export async function incrementCounter() {
  if (useMemory) {
    memory.value += 1
    return { value: memory.value }
  }
  await pool.query(`
    INSERT INTO counter (id, value) VALUES (1, 1)
    ON CONFLICT (id) DO UPDATE SET value = counter.value + 1, updated_at = CURRENT_TIMESTAMP
  `)
  return getCounter()
}

export async function decrementCounter() {
  if (useMemory) {
    memory.value -= 1
    return { value: memory.value }
  }
  await pool.query(`
    INSERT INTO counter (id, value) VALUES (1, -1)
    ON CONFLICT (id) DO UPDATE SET value = counter.value - 1, updated_at = CURRENT_TIMESTAMP
  `)
  return getCounter()
}

export { pool }
