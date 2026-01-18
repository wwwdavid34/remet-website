'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-navy-900">Remet</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#features"
              className="text-navy-600 hover:text-coral-500 transition-colors font-medium"
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              className="text-navy-600 hover:text-coral-500 transition-colors font-medium"
            >
              How It Works
            </Link>
            <Link
              href="/#pricing"
              className="text-navy-600 hover:text-coral-500 transition-colors font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/privacy"
              className="text-navy-600 hover:text-coral-500 transition-colors font-medium"
            >
              Privacy
            </Link>
            <Link
              href="/support"
              className="text-navy-600 hover:text-coral-500 transition-colors font-medium"
            >
              Support
            </Link>
            <a
              href="#"
              className="px-5 py-2.5 bg-navy-900 text-white rounded-full font-semibold hover:bg-navy-800 transition-colors"
            >
              Download
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-navy-900"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <Link
                href="/#features"
                className="text-navy-600 hover:text-coral-500 transition-colors font-medium px-2 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/#how-it-works"
                className="text-navy-600 hover:text-coral-500 transition-colors font-medium px-2 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/#pricing"
                className="text-navy-600 hover:text-coral-500 transition-colors font-medium px-2 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/privacy"
                className="text-navy-600 hover:text-coral-500 transition-colors font-medium px-2 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Privacy
              </Link>
              <Link
                href="/support"
                className="text-navy-600 hover:text-coral-500 transition-colors font-medium px-2 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Support
              </Link>
              <a
                href="#"
                className="mx-2 px-5 py-2.5 bg-navy-900 text-white rounded-full font-semibold text-center hover:bg-navy-800 transition-colors"
              >
                Download
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
