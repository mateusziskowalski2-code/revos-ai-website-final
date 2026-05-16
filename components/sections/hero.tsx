'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Zap, ArrowDown } from 'lucide-react'
import Image from 'next/image'

const rotatingWords = ['Sprzedaży', 'Przychodów', 'Wzrostu', 'Sukcesu']
const pillTags = ['Logistyka', 'Agencje', 'Software Houses', 'Rekrutacja']

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = rotatingWords[wordIndex] ?? ''
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => setDisplayText(currentWord.slice(0, displayText.length + 1)), 100)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 60)
      } else {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % rotatingWords.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, wordIndex])

  const scrollToContact = () => {
    document.querySelector('#kontakt')?.scrollIntoView?.({ behavior: 'smooth' })
  }
  const scrollToCaseStudies = () => {
    document.querySelector('#case-studies')?.scrollIntoView?.({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-500/5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left column - text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">REVENUE OPERATIONS & AI</span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Twój System Operacyjny{' '}
              <br />
              <span className="text-blue-400">{displayText}</span>
              <span className="text-blue-400 animate-blink">|</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
              Skalujemy firmy B2B przez automatyzację procesów i AI. Eliminujemy wąskie gardła, budujemy autonomiczne systemy i dostarczamy mierzalny wzrost przychodów.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {pillTags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={scrollToContact}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-500/35 hover:scale-[1.02]"
              >
                Bezpłatna konsultacja (15 min) →
              </button>
              <button
                onClick={scrollToCaseStudies}
                className="px-6 py-3.5 text-sm font-semibold text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all"
              >
                Zobacz case study
              </button>
            </div>

            {/* Social proof */}
            <p className="text-sm text-gray-500">
              Wyselekcjonowane wdrożenia · 10+ lat doświadczenia · Firmy B2B 10–50 osób
            </p>
          </motion.div>

          {/* Right column - image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/hero-dashboard.png"
                alt="REVOS AI Dashboard - centrum kontroli operacji biznesowych"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/40 to-transparent" />
            </div>

            {/* Floating badges */}
            <div className="absolute -left-4 top-8 animate-float">
              <div className="px-4 py-2 bg-[#111827]/90 backdrop-blur-md border border-white/10 rounded-lg shadow-xl">
                <p className="text-xs text-gray-400">AUTOMATYZACJA</p>
                <p className="text-sm font-semibold text-white">100% kluczowych procesów</p>
              </div>
            </div>

            <div className="absolute -right-2 top-1/3 animate-float-delayed">
              <div className="px-4 py-2 bg-[#111827]/90 backdrop-blur-md border border-blue-500/20 rounded-lg shadow-xl">
                <p className="text-xs text-gray-400">ROI</p>
                <p className="text-sm font-semibold text-blue-400">Q1 Zwrot z inwestycji</p>
              </div>
            </div>

            <div className="absolute -bottom-3 left-8 animate-float">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#111827]/90 backdrop-blur-md border border-emerald-500/20 rounded-lg shadow-xl">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <p className="text-sm font-medium text-white">10+ lat doświadczenia</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="hidden lg:flex flex-col items-center mt-16"
        >
          <span className="text-xs text-gray-500 tracking-widest mb-2">SCROLL</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowDown className="w-4 h-4 text-gray-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
