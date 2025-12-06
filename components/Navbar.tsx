'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const experienceLinks = [
    { name: 'Eclipse Automation (TPM)', href: '/experience/eclipse' },
    { name: 'Cell Fluidics (ME)', href: '/experience/cellfe' },
    { name: 'Lithos Energy (ME)', href: '/experience/lithos' },
    { name: 'Envest (Intern)', href: '/experience/envest' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm dark:bg-black/80' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Jacky Chen
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/#about" className="hover:text-blue-600 transition-colors font-medium">About</Link>
          
          {/* Dropdown for Work Experience */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              className="flex items-center gap-1 hover:text-blue-600 transition-colors font-medium focus:outline-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Work Experience <ChevronDown size={16} />
            </button>
            
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-neutral-900 rounded-xl shadow-xl border border-gray-100 dark:border-neutral-800 overflow-hidden"
                >
                  <div className="py-2">
                    {experienceLinks.map((link) => (
                      <Link 
                        key={link.name}
                        href={link.href}
                        className="block px-4 py-3 text-sm hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/#projects" className="hover:text-blue-600 transition-colors font-medium">Projects</Link>
          <Link href="/#contact" className="hover:text-blue-600 transition-colors font-medium">Contact</Link>
          
          {/* Dark Mode Toggle */}
          {mounted ? (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-gray-700 dark:text-gray-300" />
              ) : (
                <Moon size={20} className="text-gray-700 dark:text-gray-300" />
              )}
            </button>
          ) : (
            <div className="p-2 rounded-lg">
              <Moon size={20} className="text-gray-700" />
            </div>
          )}
        </div>
        
        {/* Mobile menu with dark mode toggle */}
        {mounted ? (
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-gray-700 dark:text-gray-300" />
              ) : (
                <Moon size={20} className="text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        ) : (
          <div className="md:hidden p-2 rounded-lg">
            <Moon size={20} className="text-gray-700" />
          </div>
        )}
      </div>
    </motion.nav>
  )
}
