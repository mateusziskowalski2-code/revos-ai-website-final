'use client'

import { Zap, Linkedin, Mail } from 'lucide-react'

const serviceLinks = [
  'Audyt Operacyjny & AI Roadmap',
  'Wdrożenia RevOps',
  'Autonomiczni Agenci AI',
  'Strategic Care',
]

const areaLinks = ['Logistyka', 'Agencje', 'Software Houses', 'Rekrutacja & HR']

const companyLinks = [
  { name: 'O nas', href: '#dlaczego' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Kontakt', href: '#kontakt' },
]

export function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView?.({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/5 bg-[#070b14]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">REVOS AI</span>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Twój System Operacyjny Przychodów. Skalujemy firmy B2B przez automatyzację procesów i AI.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:kontakt@revos-ai.pl"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Usługi */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Usługi</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((name: string) => (
                <li key={name}>
                  <button onClick={() => scrollTo('#uslugi')} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Obszary */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Obszary</h4>
            <ul className="space-y-2.5">
              {areaLinks.map((name: string) => (
                <li key={name}>
                  <span className="text-sm text-gray-400">{name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Firma */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Firma</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link: any) => (
                <li key={link.name}>
                  <button onClick={() => scrollTo(link.href)} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>© 2025 REVOS AI. Wszelkie prawa zastrzeżone. Polska · Remote-first.</p>
            <p>revos-ai.pl · kontakt@revos-ai.pl</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
