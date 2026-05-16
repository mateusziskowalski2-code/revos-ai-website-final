'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    text: '\u201eREVOS AI podesz\u0142o do projektu z rzadk\u0105 kombinacj\u0105. Rozumiej\u0105 zar\u00f3wno procesy biznesowe, jak i technologi\u0119. Automatyzacja obiegu um\u00f3w i onboardingu to konkretna oszcz\u0119dno\u015b\u0107 czasu i eliminacja b\u0142\u0119d\u00f3w. Profesjonalizm na ka\u017cdym etapie.\u201d',
    author: 'Decydent',
    role: 'C-level, Smartpoints',
  },
  {
    text: '\u201eWreszcie partner, kt\u00f3ry nie sprzedaje \u201eAI w og\u00f3le\u201d, ale rozumie, gdzie w moim biznesie AI naprawd\u0119 ma sens. Roadmapa, kt\u00f3r\u0105 dostali\u015bmy, by\u0142a konkretna, priorytetyzowana i od razu gotowa do wdro\u017cenia.\u201d',
    author: 'CEO',
    role: 'Founder, Agencja B2B',
  },
  {
    text: '\u201ePodej\u015bcie \u201enajpierw biznes, potem technologia\u201d to nie slogan, to rzeczywisto\u015b\u0107. Zanim zaproponowali jakiekolwiek rozwi\u0105zanie, sp\u0119dzili czas na zrozumieniu naszych proces\u00f3w. Efekt? System, kt\u00f3ry naprawd\u0119 rozwi\u0105zuje nasze problemy.\u201d',
    author: 'COO',
    role: 'Operations Director, Software House',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const item = testimonials[current] ?? testimonials[0]

  const next = () => setCurrent((p) => (p + 1) % testimonials.length)
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 lg:py-32" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-widest text-blue-400 mb-3 block">OPINIE KLIENTÓW</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Co mówią <span className="text-cyan-400">partnerzy</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-4 text-lg">
            Nasi klienci doceniają konkretne efekty wdrożeń, nie marketingowe obietnice.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-8 lg:p-12 rounded-2xl bg-[#111827]/60 border border-white/5">
            <Quote className="w-8 h-8 text-blue-400/30 mb-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg lg:text-xl text-gray-200 italic leading-relaxed mb-8">
                  {item?.text}
                </p>
                <div>
                  <p className="text-white font-semibold">{item?.author}</p>
                  <p className="text-sm text-gray-500">{item?.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_: any, i: number) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === current ? 'bg-blue-400 w-6' : 'bg-white/20 hover:bg-white/30'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                  aria-label="Poprzednia opinia"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                  aria-label="Następna opinia"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
