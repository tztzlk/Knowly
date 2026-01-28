import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { initDb, getCounter, incrementCounter, decrementCounter } from './db.js'

const app = express()
app.use(cors({ origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], credentials: true }))
app.use(express.json())

await initDb()

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

app.get('/health', (req, res) => res.json({ status: 'ok' }))

const port = Number(process.env.PORT) || 8000
app.listen(port, '0.0.0.0', () => console.log(`Backend http://localhost:${port}`))
