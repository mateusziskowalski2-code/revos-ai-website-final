'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'

const services = [
  { name: 'Audyt Operacyjny & AI Roadmap', href: '#uslugi' },
  { name: 'Wdrożenia RevOps', href: '#uslugi' },
  { name: 'Autonomiczni Agenci AI', href: '#uslugi' },
  { name: 'Strategic Care', href: '#uslugi' },
]

const areas = [
  { name: 'Logistyka', href: '#hero' },
  { name: 'Agencje', href: '#hero' },
  { name: 'Software Houses', href: '#hero' },
  { name: 'Rekrutacja & HR', href: '#hero' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    setOpenDropdown(null)
    const el = document.querySelector(id)
    el?.scrollIntoView?.({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a0f1a]/90 backdrop-blur-xl border-b border-white/5 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button onClick={() => scrollTo('#hero')} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">REVOS AI</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Usługi dropdown */}
            <div className="relative" onMouseEnter={() => setOpenDropdown('uslugi')} onMouseLeave={() => setOpenDropdown(null)}>
              <button onClick={() => scrollTo('#uslugi')} className="flex items-center gap-1 px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                Usługi <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {openDropdown === 'uslugi' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-64 bg-[#111827] border border-white/10 rounded-xl shadow-xl overflow-hidden"
                  >
                    {services.map((s: any) => (
                      <button key={s.name} onClick={() => scrollTo(s.href)} className="block w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                        {s.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Obszary dropdown */}
            <div className="relative" onMouseEnter={() => setOpenDropdown('obszary')} onMouseLeave={() => setOpenDropdown(null)}>
              <button onClick={() => scrollTo('#hero')} className="flex items-center gap-1 px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                Obszary <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {openDropdown === 'obszary' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-52 bg-[#111827] border border-white/10 rounded-xl shadow-xl overflow-hidden"
                  >
                    {areas.map((a: any) => (
                      <button key={a.name} onClick={() => scrollTo(a.href)} className="block w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                        {a.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button onClick={() => scrollTo('#case-studies')} className="px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">Case Studies</button>
            <button onClick={() => scrollTo('#dlaczego')} className="px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">O nas</button>
            <button onClick={() => scrollTo('#kontakt')} className="px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">Kontakt</button>
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo('#kontakt')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30"
            >
              Bezpłatna konsultacja <span aria-hidden>→</span>
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-gray-300 hover:text-white">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0a0f1a]/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="max-w-[1200px] mx-auto px-4 py-4 space-y-1">
              {services.map((s: any) => (
                <button key={s.name} onClick={() => scrollTo(s.href)} className="block w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5">
                  {s.name}
                </button>
              ))}
              <div className="border-t border-white/5 my-2" />
              <button onClick={() => scrollTo('#case-studies')} className="block w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5">Case Studies</button>
              <button onClick={() => scrollTo('#dlaczego')} className="block w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5">O nas</button>
              <button onClick={() => scrollTo('#kontakt')} className="block w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5">Kontakt</button>
              <button
                onClick={() => scrollTo('#kontakt')}
                className="block w-full text-center px-5 py-3 mt-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg"
              >
                Bezpłatna konsultacja →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
