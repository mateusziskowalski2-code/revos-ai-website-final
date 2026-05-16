'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, ArrowRight, Quote } from 'lucide-react'

const caseStudies = [
  {
    badge: 'SP',
    badgeColor: 'bg-blue-500',
    tag: 'AUTOMATYZACJA OPERACJI',
    company: 'Smartpoints',
    industry: 'Logistyka',
    title: 'Automatyzacja obiegu umów i onboardingu klienta',
    problem: 'Smartpoints, firma z sektora logistyki i programów lojalnościowych, traciła dziesiątki godzin tygodniowo na ręczne przygotowywanie umów, zbieranie podpisów i onboarding nowych partnerów. Każdy nowy klient wymagał 3-5 dni pracy administracyjnej.',
    solution: 'Zbudowaliśmy zautomatyzowany system generowania umów na podstawie danych z CRM, integrację z platformą e-podpisu oraz automatyczny workflow onboardingowy z powiadomieniami i checklistami.',
    mainResult: 'Oszczędność 20+ godzin tygodniowo',
    metrics: [
      { label: 'Czas onboardingu', before: '3–5 dni', after: '4 godziny' },
      { label: 'Ręczna praca', before: '100%', after: '5%' },
    ],
    testimonial: '\u201eREVOS AI podesz\u0142o do projektu z rzadk\u0105 kombinacj\u0105. Rozumiej\u0105 zar\u00f3wno procesy biznesowe, jak i technologi\u0119. Automatyzacja obiegu um\u00f3w i onboardingu to konkretna oszcz\u0119dno\u015b\u0107 czasu i eliminacja b\u0142\u0119d\u00f3w. Profesjonalizm na ka\u017cdym etapie.\u201d',
    author: 'Decydent',
    authorRole: 'C-level, Smartpoints',
  },
  {
    badge: 'AB',
    badgeColor: 'bg-emerald-500',
    tag: 'WDROŻENIE REVOPS',
    company: 'Agencja B2B',
    industry: 'Marketing',
    title: "Automatyzacja pipeline'u sprzedaży i follow-upów",
    problem: "Agencja marketingowa B2B traciła potencjalnych klientów przez brak systematycznych follow-upów. Handlowcy zarządzali kontaktami w arkuszach, a szanse sprzedaży ginęły w skrzynce mailowej.",
    solution: "Wdrożyliśmy zautomatyzowany CRM z sekwencjami follow-up, automatycznym scoringiem leadów i dashboardem pipeline'u w czasie rzeczywistym. Integracja z LinkedIn i systemem mailowym.",
    mainResult: 'Wzrost konwersji leadów o 35%',
    metrics: [
      { label: 'Czas odpowiedzi na lead', before: '2–3 dni', after: '< 2 godziny' },
      { label: 'Konwersja pipeline', before: '12%', after: '19%' },
    ],
    testimonial: '\u201eWreszcie partner, kt\u00f3ry nie sprzedaje \u201eAI w og\u00f3le\u201d, ale rozumie, gdzie w moim biznesie AI naprawd\u0119 ma sens. Roadmapa, kt\u00f3r\u0105 dostali\u015bmy, by\u0142a konkretna, priorytetyzowana i od razu gotowa do wdro\u017cenia.\u201d',
    author: 'CEO',
    authorRole: 'Founder, Agencja B2B',
  },
  {
    badge: 'SH',
    badgeColor: 'bg-purple-500',
    tag: 'AGENT AI',
    company: 'Software House',
    industry: 'IT',
    title: 'Autonomiczny agent AI do obsługi zapytań klientów',
    problem: 'Software house obsługujący 50+ klientów enterprise nie nadążał z odpowiadaniem na zapytania techniczne i statusowe. Dział supportu był przeciążony, a czas odpowiedzi rósł.',
    solution: 'Wdrożyliśmy agenta AI zintegrowanego z bazą wiedzy firmy, systemem ticketowym i CRM. Agent obsługuje 80% standardowych zapytań, eskaluje złożone sprawy i automatycznie aktualizuje statusy.',
    mainResult: '80% zapytań obsługiwanych autonomicznie',
    metrics: [
      { label: 'Czas odpowiedzi', before: '8–24h', after: '< 5 minut' },
      { label: 'Obciążenie supportu', before: '100%', after: '20%' },
    ],
    testimonial: '\u201ePodej\u015bcie \u201enajpierw biznes, potem technologia\u201d to nie slogan, to rzeczywisto\u015b\u0107. Zanim zaproponowali jakiekolwiek rozwi\u0105zanie, sp\u0119dzili czas na zrozumieniu naszych proces\u00f3w. Efekt? System, kt\u00f3ry naprawd\u0119 rozwi\u0105zuje nasze problemy.\u201d',
    author: 'COO',
    authorRole: 'Operations Director, Software House',
  },
]

export function CaseStudies() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="case-studies" className="py-24 lg:py-32" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-blue-400 mb-3 block">CASE STUDIES</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Wyselekcjonowane wdrożenia</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Wyselekcjonowane wdrożenia o wysokim ROI. Każde case study to mierzalne oszczędności i wzrost, nie marketingowe hasła.
          </p>
        </motion.div>

        {/* Case study cards */}
        <div className="space-y-8">
          {caseStudies.map((cs: any, i: number) => (
            <motion.div
              key={cs.company}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-6 lg:p-8 rounded-2xl bg-[#111827]/60 border border-white/5 hover:border-white/10 transition-all"
            >
              {/* Top badge row */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg ${cs.badgeColor} flex items-center justify-center text-white font-bold text-sm`}>
                  {cs.badge}
                </div>
                <span className="text-xs font-semibold tracking-wider text-blue-400">{cs.tag}</span>
                <span className="text-xs text-gray-500">|</span>
                <span className="text-sm text-gray-400">{cs.company}</span>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">{cs.title}</h3>

              <div className="grid lg:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-xs font-semibold text-gray-500 mb-2 tracking-wider">PROBLEM</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{cs.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 mb-2 tracking-wider">ROZWIĄZANIE</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{cs.solution}</p>
                </div>
              </div>

              {/* Main result */}
              <div className="flex items-center gap-3 mb-6 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                <TrendingUp className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-lg font-bold text-emerald-400">{cs.mainResult}</span>
              </div>

              {/* Metrics */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {cs.metrics?.map?.((m: any) => (
                  <div key={m.label} className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
                    <p className="text-xs text-gray-500 mb-2">{m.label}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500 line-through">Przed: {m.before}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                      <span className="text-sm font-semibold text-white">Po: {m.after}</span>
                    </div>
                  </div>
                )) ?? []}
              </div>

              {/* Testimonial */}
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                <Quote className="w-5 h-5 text-blue-400/50 mb-3" />
                <p className="text-gray-300 italic text-sm leading-relaxed mb-3">{cs.testimonial}</p>
                <p className="text-sm">
                  <span className="text-white font-semibold">{cs.author}</span>
                  <span className="text-gray-500"> — {cs.authorRole}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
