/**
 * Career Quiz — rules-based scoring (MVP, no AI).
 * Each answer adds points to one or more career directions.
 * Results: top 2–3 directions with short, human-readable explanations.
 */

const CAREER_DIRECTIONS = {
  technology: {
    label: 'Technology & Software',
    explanation: 'You like solving problems, working with systems, and learning by doing. Roles in tech often combine creativity with logic and offer flexible ways of working.',
  },
  healthcare: {
    label: 'Healthcare & Helping People',
    explanation: 'You prefer working with people, care about wellbeing, and like a clear sense of purpose. Careers here focus on supporting others and often involve hands-on or in-person work.',
  },
  creative: {
    label: 'Creative & Design',
    explanation: 'You value creativity, flexibility, and expressing ideas. These paths suit people who enjoy building things that look and feel right, from design to content and arts.',
  },
  business: {
    label: 'Business & Management',
    explanation: 'You like a mix of people and systems, theory and practice. Business roles often involve organizing, leading, and making decisions that affect how teams and companies work.',
  },
  science: {
    label: 'Science & Research',
    explanation: 'You enjoy deep thinking, analysis, and understanding how things work. Science and research careers focus on asking questions, running experiments, and turning ideas into knowledge.',
  },
  education: {
    label: 'Education & Teaching',
    explanation: 'You prefer working with people and find meaning in helping others learn. Education careers are about sharing what you know and supporting growth in a steady, structured way.',
  },
  trades: {
    label: 'Trades & Hands-on Work',
    explanation: 'You prefer learning by doing and working with your hands in a practical way. Trades and skilled practical work offer clear outcomes and often in-person or on-site roles.',
  },
}

const DIRECTION_IDS = Object.keys(CAREER_DIRECTIONS)

// Each question: id, text, options. Each option: id, label, scores { directionId: points }
const QUESTIONS = [
  {
    id: 'q1',
    text: 'Do you enjoy solving problems?',
    options: [
      { id: 'yes', label: 'Yes, a lot', scores: { technology: 2, science: 2 } },
      { id: 'sometimes', label: 'Sometimes', scores: { business: 2 } },
      { id: 'not_really', label: 'Not really', scores: { creative: 2, education: 1 } },
    ],
  },
  {
    id: 'q2',
    text: 'Do you prefer working with people or systems?',
    options: [
      { id: 'people', label: 'With people', scores: { healthcare: 2, education: 2 } },
      { id: 'both', label: 'A mix of both', scores: { business: 2 } },
      { id: 'systems', label: 'With systems and tools', scores: { technology: 2, science: 1 } },
    ],
  },
  {
    id: 'q3',
    text: 'Theory or practice?',
    options: [
      { id: 'theory', label: 'More theory and ideas', scores: { science: 2, education: 1 } },
      { id: 'both', label: 'Both', scores: { business: 1, education: 1, technology: 1 } },
      { id: 'practice', label: 'More hands-on practice', scores: { technology: 1, trades: 2 } },
    ],
  },
  {
    id: 'q4',
    text: 'Do you prefer working online or in person?',
    options: [
      { id: 'online', label: 'Mostly online', scores: { technology: 2, creative: 1 } },
      { id: 'mix', label: 'A mix', scores: { business: 2, creative: 1 } },
      { id: 'in_person', label: 'Mostly in person', scores: { healthcare: 1, education: 1, trades: 2 } },
    ],
  },
  {
    id: 'q5',
    text: 'Do you like building things or analyzing information?',
    options: [
      { id: 'building', label: 'Building things', scores: { technology: 2, creative: 1, trades: 1 } },
      { id: 'both', label: 'Both', scores: { business: 2 } },
      { id: 'analyzing', label: 'Analyzing information', scores: { science: 2, business: 1 } },
    ],
  },
  {
    id: 'q6',
    text: 'Do you prefer working in a team or on your own?',
    options: [
      { id: 'team', label: 'In a team', scores: { healthcare: 1, education: 2, business: 1 } },
      { id: 'both', label: 'Both, depending on the task', scores: { creative: 2 } },
      { id: 'alone', label: 'On my own', scores: { technology: 1, science: 2 } },
    ],
  },
  {
    id: 'q7',
    text: 'Fast-paced or steady rhythm?',
    options: [
      { id: 'fast', label: 'Fast-paced', scores: { technology: 1, business: 2 } },
      { id: 'flexible', label: 'Flexible', scores: { creative: 2 } },
      { id: 'steady', label: 'Steady and predictable', scores: { healthcare: 1, education: 1, trades: 1 } },
    ],
  },
  {
    id: 'q8',
    text: 'Do you prefer creativity or structure?',
    options: [
      { id: 'creativity', label: 'More creativity', scores: { creative: 2 } },
      { id: 'balance', label: 'A balance', scores: { business: 1, education: 1 } },
      { id: 'structure', label: 'More structure', scores: { technology: 1, science: 1, trades: 1 } },
    ],
  },
  {
    id: 'q9',
    text: 'Do you like helping others directly or in a behind-the-scenes way?',
    options: [
      { id: 'directly', label: 'Directly', scores: { healthcare: 2, education: 2 } },
      { id: 'both', label: 'Both', scores: { business: 2 } },
      { id: 'indirectly', label: 'Behind the scenes', scores: { technology: 1, science: 2 } },
    ],
  },
  {
    id: 'q10',
    text: 'Do you learn best by doing or by reading and studying?',
    options: [
      { id: 'doing', label: 'By doing', scores: { trades: 2, technology: 1, creative: 1 } },
      { id: 'both', label: 'Both', scores: { business: 1, education: 1 } },
      { id: 'reading', label: 'By reading and studying', scores: { science: 2, education: 1 } },
    ],
  },
  {
    id: 'q11',
    text: 'How do you feel about numbers and data?',
    options: [
      { id: 'love', label: 'I like working with them', scores: { technology: 1, science: 1, business: 2 } },
      { id: 'okay', label: 'I’m okay with them', scores: { education: 1, healthcare: 1 } },
      { id: 'words', label: 'I prefer words and ideas', scores: { creative: 2, education: 1 } },
    ],
  },
  {
    id: 'q12',
    text: 'Are you interested in health and wellbeing?',
    options: [
      { id: 'yes', label: 'Yes, a lot', scores: { healthcare: 2 } },
      { id: 'somewhat', label: 'Somewhat', scores: { education: 1 } },
      { id: 'not_really', label: 'Not really my focus', scores: { technology: 1, creative: 1 } },
    ],
  },
]

function getOption(questionId, optionId) {
  const q = QUESTIONS.find((x) => x.id === questionId)
  if (!q) return null
  return q.options.find((o) => o.id === optionId) || null
}

/**
 * Score quiz answers. answers = { questionId: optionId }.
 * Returns { recommendations: [{ directionId, label, explanation, score }], scores: { directionId: number } }.
 */
export function scoreQuiz(answers) {
  const scores = {}
  DIRECTION_IDS.forEach((d) => { scores[d] = 0 })

  if (answers && typeof answers === 'object') {
    for (const [questionId, optionId] of Object.entries(answers)) {
      const option = getOption(questionId, optionId)
      if (option && option.scores) {
        for (const [dir, points] of Object.entries(option.scores)) {
          if (DIRECTION_IDS.includes(dir) && typeof points === 'number') {
            scores[dir] = (scores[dir] || 0) + points
          }
        }
      }
    }
  }

  const sorted = DIRECTION_IDS
    .map((id) => ({ directionId: id, score: scores[id] }))
    .sort((a, b) => b.score - a.score)

  const top = sorted.slice(0, 3)
  const recommendations = top.map(({ directionId, score }) => ({
    directionId,
    label: CAREER_DIRECTIONS[directionId].label,
    explanation: CAREER_DIRECTIONS[directionId].explanation,
    score,
  }))

  return { recommendations, scores }
}

/**
 * Validate answers shape: { questionId: optionId }. All question IDs must exist and option must be valid.
 */
export function validateQuizAnswers(answers) {
  if (!answers || typeof answers !== 'object') return { valid: false, error: 'Answers must be an object' }
  for (const q of QUESTIONS) {
    const optionId = answers[q.id]
    if (optionId == null || typeof optionId !== 'string') return { valid: false, error: `Missing or invalid answer for question ${q.id}` }
    const option = getOption(q.id, optionId.trim())
    if (!option) return { valid: false, error: `Invalid option for question ${q.id}` }
  }
  return { valid: true }
}

export function getQuizQuestions() {
  return QUESTIONS.map((q) => ({
    id: q.id,
    text: q.text,
    options: q.options.map((o) => ({ id: o.id, label: o.label })),
  }))
}
