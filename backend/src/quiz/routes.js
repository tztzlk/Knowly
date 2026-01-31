import { Router } from 'express'
import { scoreQuiz, validateQuizAnswers, getQuizQuestions } from './scoring.js'
import { updateQuizAnswers, getProfile } from '../profile/db.js'

const router = Router()

router.get('/questions', (req, res) => {
  res.json(getQuizQuestions())
})

/**
 * POST /api/quiz/submit
 * Body: { answers: { q1: "yes", q2: "people", ... }, profileId?: string }
 * If profileId is provided and valid, saves answers to that profile.
 * Returns: { recommendations: [...], saved: boolean }
 */
router.post('/submit', async (req, res) => {
  const { answers, profileId } = req.body || {}

  const validation = validateQuizAnswers(answers)
  if (!validation.valid) {
    return res.status(400).json({ error: validation.error })
  }

  let saved = false
  if (profileId && typeof profileId === 'string') {
    const profile = await getProfile(profileId.trim())
    if (profile) {
      await updateQuizAnswers(profileId.trim(), answers)
      saved = true
    }
  }

  const { recommendations } = scoreQuiz(answers)
  return res.json({ recommendations, saved })
})

export default router
