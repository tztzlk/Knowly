import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { initDb, getCounter, incrementCounter, decrementCounter } from './db.js'
import profileRoutes from './profile/routes.js'
import quizRoutes from './quiz/routes.js'
import { initProfileDb } from './profile/db.js'

const app = express()
const allowedOrigins = ['http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:3000', 'http://127.0.0.1:3000']
const frontendUrl = process.env.FRONTEND_URL?.trim()
if (frontendUrl && !allowedOrigins.includes(frontendUrl)) allowedOrigins.push(frontendUrl)
app.use(cors({ origin: allowedOrigins }))
app.use(express.json())

await initDb()
await initProfileDb()

app.get('/api/counter', async (req, res) => {
  try {
    const data = await getCounter()
    res.json(data)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

app.post('/api/counter/increment', async (req, res) => {
  try {
    const data = await incrementCounter()
    res.json(data)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

app.post('/api/counter/decrement', async (req, res) => {
  try {
    const data = await decrementCounter()
    res.json(data)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

app.use('/api/profile', profileRoutes)
app.use('/api/quiz', quizRoutes)

app.get('/health', (req, res) => res.json({ status: 'ok' }))

const port = Number(process.env.PORT) || 8000
app.listen(port, '0.0.0.0', () => {
  console.log(`Backend http://localhost:${port}`)
})
