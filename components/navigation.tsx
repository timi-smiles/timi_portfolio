"use client"

import { useState, useEffect } from "react"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    // Ensure dark mode is always enabled
    document.documentElement.classList.add("dark")
    
    // Trigger animation on mount
    setHasAnimated(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  const navItems = [
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    // { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ]

  const handleResumeDownload = () => {
    // Create a temporary link to trigger download
    const link = document.createElement('a')
    link.href = '/TIMILEHIN_RESUME.pdf' 
    link.download = 'Timilehin_Ogunnowo_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <nav className="absolute mt-15 left-0 right-0 z-50 flex justify-center px-4">
      <div className="bg-background/90 backdrop-blur-md border-2 border-border rounded-full px-8 py-4 shadow-[0_0_40px_rgba(0,0,0,0.3),0_0_20px_rgba(37,99,235,0.2),0_0_30px_rgba(124,58,237,0.15)] overflow-hidden">
        <div className="flex items-center gap-2">
          {navItems.map((item, index) => (
            <div key={item.id} className="flex items-center overflow-hidden">
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`px-5 py-2.5 rounded-full text-base font-medium transition-all duration-300 whitespace-nowrap ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white shadow-lg scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/10 hover:scale-105"
                }`}
              >
                {item.label.split('').map((letter, letterIndex) => (
                  <span
                    key={letterIndex}
                    className={`inline-block transition-all duration-500 ease-out ${
                      hasAnimated ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 100 + letterIndex * 50}ms`,
                      transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </a>
              <div className="h-5 w-px bg-border mx-2" />
            </div>
          ))}
          
          {/* Resume Button - Styled Separately */}
          <button
            onClick={handleResumeDownload}
            className="px-6 py-2.5 rounded-full text-base font-semibold transition-all duration-300 whitespace-nowrap bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:scale-110 active:scale-95 overflow-hidden"
          >
            {('Resume ↓').split('').map((letter, letterIndex) => (
              <span
                key={letterIndex}
                className={`inline-block transition-all duration-500 ease-out ${
                  hasAnimated ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${navItems.length * 100 + letterIndex * 50}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                {letter}
              </span>
            ))}
          </button>
        </div>
      </div>
    </nav>
  )
}
