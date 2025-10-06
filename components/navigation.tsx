"use client"

import { useState, useEffect } from "react"
import { Menu, X, ArrowUp } from "lucide-react"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Ensure dark mode is always enabled
    document.documentElement.classList.add("dark")
    
    // Trigger animation on mount
    setHasAnimated(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "contact"]
      const scrollPosition = window.scrollY + window.innerHeight / 2

      // Check if we're at the bottom of the page (contact section)
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100) {
        setActiveSection("contact")
        return
      }

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
    handleScroll() // Run on mount to set initial state
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
    // Close mobile menu after clicking
    setIsMobileMenuOpen(false)
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
    <>
      {/* Desktop and Mobile Navigation */}
      <nav className="fixed md:absolute mt-7 md:mt-15 left-0 right-0 z-50 flex justify-center px-2 md:px-4">
        <div className="w-full max-w-[calc(100%-16px)] md:w-auto md:max-w-none bg-background/70 md:bg-background/90 backdrop-blur-sm border-2 border-border rounded-full px-4 sm:px-8 py-4 shadow-[0_0_40px_rgba(0,0,0,0.3),0_0_20px_rgba(37,99,235,0.2),0_0_30px_rgba(124,58,237,0.15)] overflow-hidden">
          <div className="flex items-center justify-between gap-2">
            
            {/* Mobile Menu Toggle Button - Only visible on mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden px-3 py-2.5 rounded-full text-white hover:bg-primary/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Desktop Navigation Items - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-2">
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
            </div>
          
            {/* Resume Button - Always visible */}
            <button
              onClick={handleResumeDownload}
              className="px-4 sm:px-6 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 whitespace-nowrap bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:scale-110 active:scale-95 overflow-hidden"
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

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 z-40 md:hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Full page background overlay with fade animation */}
        <div className={`absolute inset-0 bg-background transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
        }`} />
        
        {/* Menu content */}
        <div className="relative flex flex-col justify-center items-start h-full px-8">
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`w-full max-w-md px-8 py-5 rounded-2xl text-xl font-medium transition-all duration-500 ease-out text-left mb-4 ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white shadow-lg scale-105"
                  : "text-white hover:text-white hover:bg-primary/10 hover:scale-105"
              } ${
                isMobileMenuOpen 
                  ? 'translate-x-0 opacity-100' 
                  : '-translate-x-full opacity-0'
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 100 + 200}ms` : '0ms',
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              {item.label}
            </a>
          ))}
          
          {/* Back to Top Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("home")
              if (element) {
                element.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }
              setIsMobileMenuOpen(false)
            }}
            className={`w-full max-w-md mt-6 px-8 py-5 rounded-2xl text-xl font-medium transition-all duration-500 ease-out text-left flex items-center gap-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:scale-105 ${
              isMobileMenuOpen 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-full opacity-0'
            }`}
            style={{
              transitionDelay: isMobileMenuOpen ? `${navItems.length * 100 + 200}ms` : '0ms',
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <ArrowUp className="w-6 h-6 animate-bounce" />
            Back to Top
          </button>
        </div>
      </div>
    </>
  )
}
