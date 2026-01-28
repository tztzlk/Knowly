export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 to-violet-500" />
            <div>
              <p className="text-base font-semibold tracking-tight">Knowly</p>
              <p className="text-xs text-slate-500">Career-first learning</p>
            </div>
          </div>
          <div className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a className="hover:text-slate-900" href="#product">Product</a>
            <a className="hover:text-slate-900" href="#schools">Schools</a>
            <a className="hover:text-slate-900" href="#students">Students</a>
            <a className="hover:text-slate-900" href="#about">About</a>
            <a className="hover:text-slate-900" href="#contact">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 transition hover:border-slate-300 hover:text-slate-900 md:inline-flex">
              For Schools
            </button>
            <button className="rounded-full bg-slate-900 px-4 py-2 text-sm text-white transition hover:bg-slate-800">
              Get Early Access
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="mx-auto w-full max-w-6xl px-6 pb-20 pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
                AI-powered EdTech platform
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Learn skills that lead to real careers
              </h1>
              <p className="mt-5 max-w-xl text-lg text-slate-600">
                Knowly is an AI-powered education platform that helps students explore careers, gain practical skills, and prepare for the job market with localized guidance.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                  Get Early Access
                </button>
                <button className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300">
                  For Schools
                </button>
              </div>
              <div className="mt-10 flex flex-wrap gap-8 text-xs text-slate-500">
                <div>
                  <p className="text-base font-semibold text-slate-900">120+</p>
                  <p>Career paths mapped</p>
                </div>
                <div>
                  <p className="text-base font-semibold text-slate-900">24</p>
                  <p>Localized regions</p>
                </div>
                <div>
                  <p className="text-base font-semibold text-slate-900">94%</p>
                  <p>Learner confidence lift</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="space-y-6">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <p>Student dashboard</p>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">Live preview</span>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">Career Explorer</p>
                    <p className="mt-2 text-base font-semibold text-slate-900">Discover roles that match your strengths</p>
                    <div className="mt-3 flex gap-2">
                      <span className="rounded-full bg-white px-3 py-1 text-xs text-slate-600">Product</span>
                      <span className="rounded-full bg-white px-3 py-1 text-xs text-slate-600">Design</span>
                      <span className="rounded-full bg-white px-3 py-1 text-xs text-slate-600">Data</span>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-white p-4">
                    <p className="text-xs text-slate-500">Next lesson</p>
                    <p className="mt-2 text-base font-semibold text-slate-900">Solve a real business case</p>
                    <p className="mt-1 text-sm text-slate-500">AI coach gives feedback as you work.</p>
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">Progress</p>
                    <div className="mt-3 h-2 rounded-full bg-slate-200">
                      <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-sky-500 to-violet-500" />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500">Minimal UI to keep students focused and motivated.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200/70 bg-white">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold text-sky-600">The problem</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">Education is fragmented and disconnected from careers</h2>
              <p className="mt-4 text-slate-600">
                Students juggle too many platforms, outdated content, and little guidance on what skills actually lead to real jobs.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                'Learning platforms are scattered and inconsistent',
                'Curriculum moves slower than the job market',
                'Career guidance is limited or absent',
                'Content lacks local context and language',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-slate-700">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-sky-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-semibold text-sky-600">The solution</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">Knowly unifies career exploration, skills, and guidance</h2>
              <p className="mt-4 text-slate-600">
                A single platform that maps careers, builds practical skills, and delivers AI guidance tailored to each student’s goals and location.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: 'Career exploration', text: 'Interactive role maps with real market data.' },
                { title: 'Practical courses', text: 'Project-based lessons focused on employable skills.' },
                { title: 'AI guidance', text: 'Personalized next steps and coaching.' },
                { title: 'Localized content', text: 'Multilingual lessons tied to local industries.' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mb-3 h-9 w-9 rounded-lg bg-sky-50">
                    <div className="h-full w-full rounded-lg bg-gradient-to-br from-sky-500/70 to-violet-500/70" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold text-sky-300">How it works</p>
              <h2 className="mt-3 text-3xl font-semibold">From exploration to job-ready skills</h2>
              <p className="mt-4 text-slate-300">
                Knowly guides learners through a clear journey that connects interests with practical outcomes.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                { step: '01', title: 'Explore career paths', text: 'Discover roles aligned with strengths, interests, and local demand.' },
                { step: '02', title: 'Complete practical courses', text: 'Hands-on projects that mirror real workplace tasks.' },
                { step: '03', title: 'Solve real-world tasks', text: 'Build portfolios with feedback from AI coaching.' },
                { step: '04', title: 'Build job-ready skills', text: 'Track readiness and plan next learning steps.' },
              ].map((item) => (
                <div key={item.step} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs text-slate-400">Step {item.step}</p>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <p className="text-sm font-semibold text-sky-600">Who it’s for</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">Made for every learning journey</h2>
              <p className="mt-4 text-slate-600">
                Knowly adapts to students, schools, and emerging professionals with tailored pathways.
              </p>
            </div>
            {[
              { title: 'Students', text: 'Discover their future and build confidence through real projects.' },
              { title: 'Schools & institutions', text: 'Offer career-ready education at scale with measurable outcomes.' },
              { title: 'Young professionals', text: 'Upskill quickly with focused, role-based learning paths.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200/70 bg-white">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold text-sky-600">Why now</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">The moment for career-first education</h2>
              <p className="mt-4 text-slate-600">
                Demand for digital skills and career clarity is growing globally, especially in younger demographics.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                'Exploding demand for digital and hybrid jobs',
                'Growing trust in online and blended learning',
                'Youth population growth in emerging markets',
                'Schools seeking measurable career outcomes',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="product" className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-semibold text-sky-600">Product</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">A unified ecosystem for career-oriented learning</h2>
              <p className="mt-4 text-slate-600">
                Knowly blends interactive exploration, skills practice, and AI guidance into one streamlined platform for schools and students.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: 'Interactive career paths', text: 'Role maps with skills, tasks, and salary insights.' },
                { title: 'Practice-based courses', text: 'Real-world projects with checkpoints and feedback.' },
                { title: 'AI guidance', text: 'Personalized recommendations and next-step planning.' },
                { title: 'Localized content', text: 'Multilingual lessons aligned to regional needs.' },
                { title: 'Student analytics', text: 'Track confidence, progress, and readiness.' },
                { title: 'School dashboards', text: 'Measure engagement and outcomes at scale.' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm font-semibold text-sky-600">AI assistance</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">Personalized guidance at every step</h3>
              <p className="mt-4 text-sm text-slate-600">
                The AI coach adapts content, suggests projects, and helps students build a career plan based on their progress.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                <li>Adaptive content paths based on learner confidence</li>
                <li>Career suggestions aligned with local demand</li>
                <li>Feedback on portfolio work and skills gaps</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-sky-600">User flow</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">Exploration → skills → career readiness</h3>
              <div className="mt-6 space-y-4 text-sm text-slate-600">
                <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                  <span>Explore roles</span>
                  <span className="text-xs text-slate-400">Interests + market data</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                  <span>Build skills</span>
                  <span className="text-xs text-slate-400">Projects + coaching</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                  <span>Track readiness</span>
                  <span className="text-xs text-slate-400">Portfolio + signals</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                  <span>Launch career</span>
                  <span className="text-xs text-slate-400">Guided next steps</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="schools" className="border-y border-slate-200/70 bg-white">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold text-sky-600">For schools</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900">Career-oriented education for modern schools</h2>
                <p className="mt-4 text-slate-600">
                  Integrate Knowly into existing programs to deliver measurable career outcomes for every student.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: 'Easy integration', text: 'Plug into current curricula with minimal setup.' },
                  { title: 'Guidance at scale', text: 'AI-powered mentoring for every learner.' },
                  { title: 'Job-relevant skills', text: 'Curriculum aligned with industry demand.' },
                  { title: 'Actionable analytics', text: 'Track engagement and outcomes in real time.' },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {[
                { title: 'Student engagement', text: 'Boosted participation through personalized pathways.' },
                { title: 'Measurable outcomes', text: 'Track readiness, skills, and project completion.' },
                { title: 'Affordable pricing', text: 'Simple per-student subscription model.' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">Pricing model</p>
                <p className="text-sm text-slate-600">Per student / per month. Transparent and scalable.</p>
              </div>
              <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Request a Demo
              </button>
            </div>
          </div>
        </section>

        <section id="students" className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-semibold text-sky-600">For students</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">Turn learning into a career path</h2>
              <p className="mt-4 text-slate-600">
                Choose a direction, build skills, and prepare for real jobs with personalized guidance.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-600">
                <p>Understand which career fits you</p>
                <p>Learn practical, job-ready skills</p>
                <p>Build a portfolio that proves your talent</p>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-sky-600">Freemium model</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">Start free, upgrade when you’re ready</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-xs font-semibold text-slate-500">Free</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    <li>Career discovery basics</li>
                    <li>Starter courses</li>
                    <li>Limited AI tips</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold text-slate-500">Premium</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    <li>Advanced courses</li>
                    <li>Personalized AI guidance</li>
                    <li>Career consulting</li>
                  </ul>
                </div>
              </div>
              <button className="mt-6 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Start Learning
              </button>
            </div>
          </div>
        </section>

        <section id="business" className="border-y border-slate-200/70 bg-white">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-sky-600">Business model</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">Sustainable revenue with scalable impact</h2>
              <p className="mt-4 text-slate-600">
                Knowly balances affordability with long-term growth through a diversified revenue model.
              </p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {[
                { title: 'B2B subscriptions', text: 'Schools adopt per-student monthly licenses.' },
                { title: 'Course marketplace', text: 'Commission on premium content creators.' },
                { title: 'Student upgrades', text: 'Premium AI guidance and consulting.' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold text-sky-600">About Knowly</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">Education that is career-first and globally relevant</h2>
              <p className="mt-4 text-slate-600">
                Our mission is to make high-quality, career-oriented education accessible to every student.
              </p>
              <p className="mt-4 text-slate-600">Vision: global education with local relevance.</p>
            </div>
            <div className="grid gap-4">
              {[
                { title: 'Career-focused approach', text: 'Every learning path ends with employable skills.' },
                { title: 'Deep localization', text: 'Content tailored to regional context and language.' },
                { title: 'AI-driven personalization', text: 'Adaptive journeys that keep students engaged.' },
                { title: 'Early partnerships', text: 'Working with schools to validate impact early.' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-slate-200 bg-white">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold text-sky-600">Early access</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900">Join the waitlist</h2>
                <p className="mt-4 text-slate-600">
                  Get product updates, pilot invitations, and launch news. Schools can request tailored demos.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-full border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-slate-400 focus:outline-none"
                  />
                  <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                    Join the waitlist
                  </button>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <h3 className="text-xl font-semibold text-slate-900">Contact for schools & partners</h3>
                <p className="mt-3 text-sm text-slate-600">Tell us about your institution or partnership idea.</p>
                <div className="mt-6 space-y-4">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-slate-400 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Institution / Company"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-slate-400 focus:outline-none"
                  />
                  <textarea
                    rows="4"
                    placeholder="How can we help?"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-slate-400 focus:outline-none"
                  />
                  <button className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                    Request a Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 to-violet-500" />
            <div>
              <p className="text-base font-semibold tracking-tight">Knowly</p>
              <p className="text-xs text-slate-500">AI-powered, career-first education</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-600">
            <a className="hover:text-slate-900" href="#product">Product</a>
            <a className="hover:text-slate-900" href="#schools">Schools</a>
            <a className="hover:text-slate-900" href="#students">Students</a>
            <a className="hover:text-slate-900" href="#about">About</a>
            <a className="hover:text-slate-900" href="#contact">Contact</a>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <a className="hover:text-slate-900" href="https://www.linkedin.com">LinkedIn</a>
            <a className="hover:text-slate-900" href="https://www.instagram.com">Instagram</a>
            <a className="hover:text-slate-900" href="https://www.x.com">X</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
