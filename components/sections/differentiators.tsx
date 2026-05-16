'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, Target, Clock } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

const cards = [
  {
    icon: Building2,
    title: 'Najpierw biznes, potem technologia',
    desc: 'Nie wdrażamy AI dla samego AI. Każdy projekt startuje od dogłębnej analizy Twoich procesów, celów i wąskich gardeł. Dopiero pełne zrozumienie Twojego biznesu pozwala nam zaprojektować rozwiązanie, które naprawdę przyniesie ROI, a nie tylko efekt \u201ewow\u201d.',
  },
  {
    icon: Target,
    title: 'Wyselekcjonowane wdrożenia, nie masowa produkcja',
    desc: 'Celowo pracujemy z ograniczoną liczbą klientów jednocześnie. Każde wdrożenie traktujemy jak własny projekt. Z pełnym zaangażowaniem, bez szablonów i kompromisów jakościowych. Twój sukces to nasz sukces.',
  },
  {
    icon: Clock,
    title: '10+ lat doświadczenia biznesowego i technologicznego',
    desc: 'Łączymy głębokie rozumienie procesów B2B z kompetencjami technologicznymi w AI, automatyzacji i integracji systemów. Rozumiemy zarówno język biznesu, jak i kod. To rzadka kombinacja, która przekłada się na skuteczne wdrożenia.',
  },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries?.[0]?.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let frame: number
    const duration = 1500
    const startTime = performance.now()
    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [started, target])

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold text-white">
      {count}{suffix}
    </div>
  )
}

export function Differentiators() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="dlaczego" className="py-24 lg:py-32 bg-[#0d1321]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-blue-400 mb-3 block">NASZE WYRÓŻNIKI</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Co stoi za skutecznymi<br />wdrożeniami REVOS AI?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Rezultaty, które dowozimy, to efekt połączenia zrozumienia Twojego biznesu, kompetencji zespołu i celowego użycia technologii.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {cards.map((c: any, i: number) => {
            const IconComp = c.icon
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-[#111827]/60 border border-white/5 hover:border-white/10 transition-all group"
              >
                <div className="p-3 rounded-lg bg-blue-500/10 w-fit mb-5">
                  <IconComp className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{c.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{c.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid sm:grid-cols-3 gap-8 p-8 rounded-2xl bg-[#111827]/40 border border-white/5"
        >
          <div className="text-center">
            <AnimatedCounter target={100} suffix="+" />
            <p className="text-sm text-gray-400 mt-2">procesów zautomatyzowanych u partnerów</p>
          </div>
          <div className="text-center">
            <AnimatedCounter target={10} suffix="+" />
            <p className="text-sm text-gray-400 mt-2">lat doświadczenia biznesowego</p>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-white">B2B</div>
            <p className="text-sm text-gray-400 mt-2">wyłącznie firmy 10–50 osób</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
