export default function Footer() {
  return (
    <footer className="border-t border-portfolio-glass-border py-8 px-4 md:px-8 mt-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-portfolio-gold/50">
          &copy; {new Date().getFullYear()} Niranjan Holkar. All rights reserved.
        </p>
        <p className="text-xs text-portfolio-gold/50">
          Designed &amp; Built with React, Three.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
