import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Mail, Send, ChevronRight } from 'lucide-react'
import { mailtoHref, waHref } from '../utils/contact'
import WhatsAppIcon from './WhatsAppIcon'

const messages = [
  { id: 1, from: 'bot', text: "Hey! 👋 Thanks for stopping by." },
  { id: 2, from: 'bot', text: "I'm Niranjan's portfolio assistant. How can I help?" },
]

const quickReplies = [
  { label: 'Send Email', icon: <Mail size={14} />, href: mailtoHref },
  { label: 'WhatsApp Me', icon: <Send size={14} />, href: waHref },
]

export default function Chatbot() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full bg-portfolio-accent text-portfolio-dark shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[99]"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed bottom-24 right-6 z-[101] w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl shadow-2xl border overflow-hidden"
              style={{ maxHeight: '480px' }}
            >
              <div className="bg-portfolio-accent text-portfolio-dark p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-portfolio-dark/20 flex items-center justify-center text-sm font-bold">
                    N
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Niranjan's Assistant</p>
                    <p className="text-[11px] opacity-70">Online</p>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1 rounded-lg hover:bg-portfolio-dark/10 transition-colors"
                  aria-label="Close chat"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="bg-cream dark:bg-portfolio-dark p-4 space-y-3 overflow-y-auto" style={{ maxHeight: '320px' }}>
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.from === 'bot' ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.from === 'bot'
                          ? 'bg-white dark:bg-portfolio-navy text-navy dark:text-portfolio-gold rounded-bl-md shadow-sm'
                          : 'bg-portfolio-accent text-portfolio-dark rounded-br-md'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                <div className="flex flex-wrap gap-2 pt-2">
                  {quickReplies.map((qr, i) => (
                    <a
                      key={i}
                      href={qr.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium
                        bg-portfolio-laser/15 dark:bg-portfolio-accent/10
                        text-portfolio-laser dark:text-portfolio-accent
                        border border-portfolio-laser/20 dark:border-portfolio-accent/20
                        hover:bg-portfolio-laser/25 dark:hover:bg-portfolio-accent/20
                        transition-all"
                    >
                      {qr.icon}
                      {qr.label}
                      <ChevronRight size={12} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-portfolio-navy px-4 py-3 border-t border-navy/10 dark:border-portfolio-gold/10">
                <p className="text-[11px] text-navy/50 dark:text-portfolio-gold/50 text-center">
                  Typically replies within a few hours
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
