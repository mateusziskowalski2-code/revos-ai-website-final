'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingDown, ClipboardList, BarChart3, DollarSign, Settings, Users } from 'lucide-react'

const problems = [
  {
    category: 'SPRZEDAŻ',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20',
    icon: TrendingDown,
    iconColor: 'text-red-400',
    title: "Pipeline pełen dziur, a szanse sprzedaży giną w Excelu",
    desc: 'Oferty wychodzą za późno, follow-upy są zapomniane, a zarząd nie wie, co dzieje się w lejku. Sprzedaż zależy od pamięci handlowca, nie od systemu.',
  },
  {
    category: 'OPERACJE',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    icon: ClipboardList,
    iconColor: 'text-emerald-400',
    title: 'Procesy operacyjne oparte na arkuszach i mailach',
    desc: 'Kluczowe dane firmy uwięzione w labiryncie powiązanych plików. Onboarding klienta trwa tygodniami, bo każdy krok wymaga ręcznej pracy.',
  },
  {
    category: 'DANE',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    icon: BarChart3,
    iconColor: 'text-blue-400',
    title: 'Decyzje podejmowane na wyczucie, bez dashboardów i realnych KPI',
    desc: 'Dane rozrzucone po systemach, mailach i plikach. Raport miesięczny zajmuje 2 dni pracy i tak jest przestarzały w chwili gotowości.',
  },
  {
    category: 'KOSZTY',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/20',
    icon: DollarSign,
    iconColor: 'text-yellow-400',
    title: 'Rosnące koszty operacyjne przy stagnacji przychodów',
    desc: 'Firma rośnie, ale koszty rosną szybciej. Każdy nowy klient wymaga proporcjonalnie więcej pracy, a model nie skaluje się bez dodatkowych etatów.',
  },
  {
    category: 'NARZĘDZIA',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    icon: Settings,
    iconColor: 'text-purple-400',
    title: 'Stos narzędzi, które nie rozmawiają ze sobą',
    desc: 'CRM, system fakturowania, komunikator, platforma projektowa. Każde narzędzie działa w silosie. Dane przepisuje się ręcznie między systemami.',
  },
  {
    category: 'ZESPÓŁ',
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/20',
    icon: Users,
    iconColor: 'text-pink-400',
    title: 'Najlepsi ludzie zajęci kopiuj-wklej zamiast wzrostem',
    desc: 'Eksperci marnują 30–40% czasu na powtarzalne, manualne zadania. Potencjał zespołu jest blokowany przez brak automatyzacji.',
  },
]

export function Problems() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="problemy" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Problemy, które <span className="text-red-400">hamują</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Widzieliśmy to dziesiątki razy w firmach B2B 10–50 osób. Te same wąskie gardła, te same frustracje, te same straty.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p: any, i: number) => {
            const IconComp = p.icon
            return (
              <motion.div
                key={p.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 rounded-xl bg-[#111827]/60 border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-black/20 hover:bg-[#111827]/80"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${p.bgColor}`}>
                    <IconComp className={`w-5 h-5 ${p.iconColor}`} />
                  </div>
                  <span className={`text-xs font-semibold tracking-wider ${p.color}`}>{p.category}</span>
                </div>
                <h3 className="text-white font-semibold mb-3 leading-snug">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
