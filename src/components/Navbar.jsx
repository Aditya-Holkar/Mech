import { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import useStore from '../store/useStore'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/experience', label: 'Experience' },
  { path: '/skills', label: 'Skills' },
  { path: '/education', label: 'Education' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useStore()
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="glass fixed top-0 left-0 right-0 z-50 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16">
        <Link
          to="/"
          className="text-portfolio-gold font-bold text-lg tracking-wider whitespace-nowrap"
          onClick={() => setMenuOpen(false)}
        >
          NH<span className="text-portfolio-blue">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                pathname === link.path
                  ? 'text-portfolio-gold'
                  : 'text-portfolio-gold/60 hover:text-portfolio-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-portfolio-gold/60 hover:text-portfolio-gold transition-all"
            aria-label="Toggle theme"
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden p-2 rounded-lg text-portfolio-gold/60 hover:text-portfolio-gold transition-all"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="md:hidden pb-4 flex flex-col gap-1"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.path
                    ? 'text-portfolio-gold bg-portfolio-gold/8'
                    : 'text-portfolio-gold/60 hover:text-portfolio-gold hover:bg-portfolio-gold/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
