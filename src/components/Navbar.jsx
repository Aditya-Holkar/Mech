import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import useStore from '../store/useStore'
import { mailtoHref, waHref } from '../utils/contact'
import WhatsAppIcon from './WhatsAppIcon'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
]

const sidebarVariants = {
  hidden: { x: '-100%' },
  visible: { x: 0 },
}

export default function Navbar() {
  const { theme, toggleTheme } = useStore()
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [menuOpen])

  const activeClass = (active) =>
    `text-sm font-medium transition-colors ${
      active
        ? 'text-portfolio-gold'
        : 'text-portfolio-gold/60 hover:text-portfolio-gold'
    }`

  const mobileActiveClass = (active) =>
    `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
      active
        ? 'text-portfolio-gold bg-portfolio-gold/10'
        : 'text-portfolio-gold/60 hover:text-portfolio-gold hover:bg-portfolio-gold/5'
    }`

  return (
    <>
      <nav className="glass fixed top-0 left-0 right-0 z-[53] px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-portfolio-gold font-bold text-lg tracking-wider whitespace-nowrap"
            onClick={() => setMenuOpen(false)}
          >
            NH<span className="text-portfolio-blue">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-portfolio-accent/30 bg-portfolio-accent/5 mr-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-portfolio-gold/80 font-medium whitespace-nowrap">
                Open for Mech Roles
              </span>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={activeClass(pathname === link.path)}
              >
                {link.label}
              </Link>
            ))}

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-portfolio-gold/60 hover:text-portfolio-gold transition-all"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <WhatsAppIcon size={18} />
            </a>
            <a
              href={mailtoHref}
              className="p-2 rounded-lg text-portfolio-gold/60 hover:text-portfolio-gold transition-all"
              aria-label="Send email"
              title="Send Enquiry"
            >
              <Mail size={18} />
            </a>
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
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[51]"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sidebarVariants}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-72 bg-portfolio-dark z-[52] flex flex-col pt-20 px-6 border-r border-portfolio-accent/10 shadow-2xl"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-portfolio-accent/30 bg-portfolio-accent/5 mb-6 self-start">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-portfolio-gold/80 font-medium whitespace-nowrap">
                  Open for Mech Roles
                </span>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={mobileActiveClass(pathname === link.path)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-auto pb-8 space-y-1">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-portfolio-gold/60 hover:text-portfolio-gold hover:bg-portfolio-gold/5 transition-colors"
                >
                  <WhatsAppIcon size={16} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={mailtoHref}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-portfolio-gold/60 hover:text-portfolio-gold hover:bg-portfolio-gold/5 transition-colors"
                >
                  <Mail size={16} />
                  <span>Send Enquiry</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
