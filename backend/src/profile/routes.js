import { Router } from 'express'
import {
  createProfile,
  getProfile,
  updateProfile,
  validateGoal,
  validateInterests,
} from './db.js'

const router = Router()

function validateProfileBody(req, res, next) {
  const { fullName, ageOrGrade, placeOfStudy, interests, goal } = req.body

  const fullNameTrimmed = typeof fullName === 'string' ? fullName.trim() : ''
  const ageOrGradeTrimmed = typeof ageOrGrade === 'string' ? ageOrGrade.trim() : ''
  const placeOfStudyTrimmed = typeof placeOfStudy === 'string' ? placeOfStudy.trim() : ''

  if (!fullNameTrimmed) {
    return res.status(400).json({
      error: 'Validation failed',
      fields: { fullName: 'Full name is required' },
    })
  }
  if (fullNameTrimmed.length > 100) {
    return res.status(400).json({
      error: 'Validation failed',
      fields: { fullName: 'Full name must be at most 100 characters' },
    })
  }

  if (!ageOrGradeTrimmed) {
    return res.status(400).json({
      error: 'Validation failed',
      fields: { ageOrGrade: 'Age or school grade is required' },
    })
  }
  if (ageOrGradeTrimmed.length > 50) {
    return res.status(400).json({
      error: 'Validation failed',
      fields: { ageOrGrade: 'Must be at most 50 characters' },
    })
  }

  if (!placeOfStudyTrimmed) {
    return res.status(400).json({
      error: 'Validation failed',
      fields: { placeOfStudy: 'Place of study is required' },
    })
  }
  if (placeOfStudyTrimmed.length > 200) {
    return res.status(400).json({
      error: 'Validation failed',
      fields: { placeOfStudy: 'Place of study must be at most 200 characters' },
    })
  }

  if (!validateInterests(interests)) {
    return res.status(400).json({
      error: 'Validation failed',
      fields: {
        interests:
          'At least one interest is required; each must be from the allowed list',
      },
    })
  }

  if (!validateGoal(goal)) {
    return res.status(400).json({
      error: 'Validation failed',
      fields: { goal: 'Goal must be choosing_profession or changing_career' },
    })
  }

  req.validated = {
    fullName: fullNameTrimmed,
    ageOrGrade: ageOrGradeTrimmed,
    placeOfStudy: placeOfStudyTrimmed,
    interests: Array.isArray(interests) ? interests : [interests],
    goal,
  }
  next()
}

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const profile = await getProfile(id)
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' })
    }
    res.json(profile)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

router.post('/', validateProfileBody, async (req, res) => {
  try {
    const result = await createProfile(req.validated)
    res.status(201).json({
      id: result.id,
      created_at: result.created_at,
      message: 'Profile saved',
    })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

router.patch('/:id', validateProfileBody, async (req, res) => {
  const { id } = req.params
  try {
    const result = await updateProfile(id, req.validated)
    if (!result) {
      return res.status(404).json({ error: 'Profile not found' })
    }
    res.json({
      id: result.id,
      message: 'Profile updated',
    })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

export default router
