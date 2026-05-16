'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, Settings, Bot, CircleDot, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const tabs = [
  {
    id: 'audyt',
    icon: Search,
    label: 'Audyt Operacyjny & AI Roadmap',
    shortLabel: 'Audyt',
    tag: 'AUDYT OPERACYJNY & AI ROADMAP',
    title: 'Diagnoza wąskich gardeł',
    desc: 'Analizujemy Twoje procesy od środka i identyfikujemy, gdzie tracisz czas, pieniądze i szanse sprzedaży. Dostarczamy konkretną mapę drogową wdrożeń AI z priorytetami i szacowanym ROI.',
    badge: 'Klarowna roadmapa w ciągu 2 tygodni',
    image: '/images/solutions-audit.png',
  },
  {
    id: 'revops',
    icon: Settings,
    label: 'Wdrożenia RevOps',
    shortLabel: 'RevOps',
    tag: 'WDROŻENIA REVOPS',
    title: 'Scalenie sprzedaży, marketingu i operacji',
    desc: 'Budujemy zintegrowany system Revenue Operations — od CRM, przez automatyzacje pipeline, po dashboardy KPI. Eliminujemy silosy danych i tworzymy jeden źródło prawdy o Twoich przychodach.',
    badge: 'Pełna integracja w 4–8 tygodni',
    image: '/images/solutions-audit.png',
  },
  {
    id: 'agenci',
    icon: Bot,
    label: 'Autonomiczni Agenci AI',
    shortLabel: 'Agenci AI',
    tag: 'AUTONOMICZNI AGENCI AI',
    title: 'Pracownicy AI, którzy działają 24/7',
    desc: 'Projektujemy i wdrażamy agentów AI zintegrowanych z Twoimi narzędziami. Obsługują klientów, kwalifikują leady, generują dokumenty i eskalują złożone sprawy do człowieka.',
    badge: 'Pierwszy agent gotowy w 2 tygodnie',
    image: '/images/solutions-audit.png',
  },
  {
    id: 'care',
    icon: CircleDot,
    label: 'Strategic Care',
    shortLabel: 'Care',
    tag: 'STRATEGIC CARE',
    title: 'Ciągła optymalizacja i wsparcie',
    desc: 'Nie kończymy na wdrożeniu. Strategic Care to stały dostęp do naszego zespołu, miesięczne audyty efektywności, proaktywne optymalizacje i priorytetowe wdrażanie nowych funkcjonalności.',
    badge: 'Dedykowany zespół pod Twoją firmę',
    image: '/images/solutions-audit.png',
  },
]

export function Solutions() {
  const [activeTab, setActiveTab] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const current = tabs[activeTab] ?? tabs[0]

  return (
    <section id="uslugi" className="py-24 lg:py-32 relative bg-[#0d1321]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-widest text-blue-400 mb-3 block">NASZE ROZWIĄZANIA</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Cztery systemy, które<br />
            <span className="text-cyan-400">transformują Twój biznes</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Każde wdrożenie jest skrojone na miarę Twojej firmy. Nie szablony, a systemy, które naprawdę działają.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab: any, i: number) => {
            const TabIcon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all ${
                  activeTab === i
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'text-gray-400 bg-white/5 hover:bg-white/10 hover:text-white'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.shortLabel}</span>
              </button>
            )
          })}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current?.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            {/* Image */}
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10">
              <Image
                src={current?.image ?? '/images/solutions-audit.png'}
                alt={current?.title ?? 'Rozwiązanie'}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/60 to-transparent" />
            </div>

            {/* Text */}
            <div>
              <span className="text-xs font-semibold tracking-widest text-blue-400 mb-3 block">{current?.tag}</span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{current?.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">{current?.desc}</p>
              <div className="flex items-center gap-2 px-4 py-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg w-fit">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-300">{current?.badge}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
