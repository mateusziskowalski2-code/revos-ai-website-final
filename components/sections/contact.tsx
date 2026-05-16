'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CalendarDays, Search, Map, Mail, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react'

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

export function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '', consent: false })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.consent) return
    setStatus('loading')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          from_name: 'REVOS AI Website',
          subject: `Nowe zgłoszenie od ${formData?.name ?? 'Anonimowy'}`,
        }),
      })
      if (res?.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', company: '', message: '', consent: false })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="kontakt" className="py-24 lg:py-32" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-blue-400 mb-3 block">KONTAKT</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Zacznij skalować<br />
            <span className="text-cyan-400">swój biznes z AI</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            15-minutowa rozmowa strategiczna. Bezpłatnie, bez zobowiązań. Pokażemy Ci, gdzie AI może przynieść największy zwrot w Twojej firmie.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Steps */}
            <div className="space-y-6 mb-10">
              {steps.map((s: any) => {
                const IconComp = s.icon
                return (
                  <div key={s.num} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <IconComp className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-blue-400 font-semibold mb-1">{s.num}</p>
                      <h4 className="text-white font-semibold mb-1">{s.title}</h4>
                      <p className="text-sm text-gray-400">{s.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Calendly CTA */}
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-500/35 mb-8"
            >
              <CalendarDays className="w-4 h-4" />
              Zarezerwuj bezpłatną konsultację (15 min) →
            </a>

            {/* Contact info */}
            <div className="space-y-3">
              <a href="mailto:kontakt@revos-ai.pl" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">kontakt@revos-ai.pl</span>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn / REVOS AI</span>
              </a>
            </div>
          </motion.div>

          {/* Right column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-6 lg:p-8 rounded-2xl bg-[#111827]/60 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6">Napisz do nas</h3>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">Wiadomość wysłana!</h4>
                  <p className="text-gray-400 text-sm">Odezwiemy się w ciągu 24 godzin.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Wyślij kolejną wiadomość
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Jan Kowalski"
                      required
                      value={formData.name}
                      onChange={(e: any) => setFormData({ ...formData, name: e?.target?.value ?? '' })}
                      className="w-full px-4 py-3 text-sm text-white bg-white/5 border border-white/10 rounded-lg placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="jan@firma.pl"
                      required
                      value={formData.email}
                      onChange={(e: any) => setFormData({ ...formData, email: e?.target?.value ?? '' })}
                      className="w-full px-4 py-3 text-sm text-white bg-white/5 border border-white/10 rounded-lg placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Nazwa Twojej firmy"
                      value={formData.company}
                      onChange={(e: any) => setFormData({ ...formData, company: e?.target?.value ?? '' })}
                      className="w-full px-4 py-3 text-sm text-white bg-white/5 border border-white/10 rounded-lg placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Np. Ręczne wystawianie faktur zajmuje nam 2 dni miesięcznie..."
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e: any) => setFormData({ ...formData, message: e?.target?.value ?? '' })}
                      className="w-full px-4 py-3 text-sm text-white bg-white/5 border border-white/10 rounded-lg placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors resize-none"
                    />
                  </div>

                  {/* Consent */}
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e: any) => setFormData({ ...formData, consent: e?.target?.checked ?? false })}
                      className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-blue-500 focus:ring-blue-500/50"
                    />
                    <span className="text-xs text-gray-400">
                      Wyrażam zgodę na przetwarzanie moich danych osobowych przez REVOS AI w celu obsługi zgłoszenia.
                    </span>
                  </label>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>Wystąpił błąd. Spróbuj ponownie lub napisz na kontakt@revos-ai.pl</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={!formData.consent || status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all shadow-lg shadow-blue-600/25"
                  >
                    <Send className="w-4 h-4" />
                    {status === 'loading' ? 'Wysyłanie...' : 'Wyślij wiadomość →'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
