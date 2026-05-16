'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CalendarDays, Search, Map } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: CalendarDays,
    title: 'Umów 15-minutową rozmowę',
    desc: 'Wybierz termin w Calendly, bez czekania na odpowiedź mailową.',
  },
  {
    num: '02',
    icon: Search,
    title: 'Analiza Twojego biznesu',
    desc: 'Przeanalizujemy Twoje procesy i wskażemy konkretne obszary do automatyzacji.',
  },
  {
    num: '03',
    icon: Map,
    title: 'Roadmapa wdrożenia',
    desc: 'Otrzymasz plan działania z priorytetami, harmonogramem i szacowanym ROI.',
  },
]

export function Process() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const scrollToContact = () => {
    document.querySelector('#kontakt')?.scrollIntoView?.({ behavior: 'smooth' })
  }

  return (
    <section className="py-24 lg:py-32 bg-[#0d1321]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-blue-400 mb-3 block">EKSPERCKI ZESPÓŁ WDROŻENIOWY</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Porozmawiajmy, jak osiągnąć<br />
            <span className="text-cyan-400">podobne rezultaty</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Nie obiecujemy cudów. Pokazujemy konkrety. Podczas 15-minutowej rozmowy przeanalizujemy Twój obecny proces, wskażemy potencjalne oszczędności i zaproponujemy możliwe kierunki automatyzacji.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((s: any, i: number) => {
            const IconComp = s.icon
            return (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-6 rounded-xl bg-[#111827]/60 border border-white/5 hover:border-blue-500/20 transition-all group"
              >
                <span className="text-5xl font-bold text-white/5 absolute top-4 right-4">{s.num}</span>
                <div className="p-3 rounded-lg bg-blue-500/10 w-fit mb-5">
                  <IconComp className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400">{s.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <button
            onClick={scrollToContact}
            className="px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-500/35 hover:scale-[1.02]"
          >
            Umów konsultację strategiczną
          </button>
          <p className="text-sm text-gray-500 mt-4">15 min · Bezpłatnie · Bez zobowiązań</p>
        </motion.div>
      </div>
    </section>
  )
}
