"use client"

import { Github, Linkedin, Twitter, MessageCircle, ArrowDownLeft } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Unhashing Animation Hook
function useUnhashingText(finalText: string, isVisible: boolean, delay: number = 0) {
  const [displayText, setDisplayText] = useState(finalText) // Initialize with final text to prevent hydration mismatch
  const [hasStarted, setHasStarted] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  
  const chars = "JKLMNOPQRSTUVWXYZabcdefghijklmn56789@._-!#$%&*"
  
  // Set mounted state on client
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  useEffect(() => {
    if (!isVisible || hasStarted || !isMounted) return
    
    const startDelay = setTimeout(() => {
      setHasStarted(true)
      let currentIndex = 0
      let iterations = 0
      
      const interval = setInterval(() => {
        setDisplayText((prev) => {
          return finalText
            .split("")
            .map((char, index) => {
              // If we've already revealed this character, keep it
              if (index < currentIndex) {
                return finalText[index]
              }
              
              // If we're currently working on this character
              if (index === currentIndex) {
                // After some iterations, reveal the actual character
                if (iterations > 4) {
                  currentIndex++
                  iterations = 0
                  return char
                }
                // Otherwise show random character
                return chars[Math.floor(Math.random() * chars.length)]
              }
              
              // Future characters remain random
              return chars[Math.floor(Math.random() * chars.length)]
            })
            .join("")
        })
        
        iterations++
        
        // Once we've revealed all characters, stop
        if (currentIndex >= finalText.length) {
          clearInterval(interval)
        }
      }, 30) // Speed of the animation
      
      return () => clearInterval(interval)
    }, delay)
    
    return () => clearTimeout(startDelay)
  }, [isVisible, finalText, delay, hasStarted, isMounted, chars])
  
  return displayText
}

export function ContactSection() {
  const gmailAddress = "timioguns16@gmail.com" 
  const socialLinks = {
    twitter: "https://x.com/timi_smiles",
    whatsapp: "https://wa.me/2348160808720", 
    github: "https://github.com/timi-smiles",
    linkedin: "https://www.linkedin.com/in/timilehin-ogunnowo",
  }

  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  
  // Use the unhashing animation for the email
  const displayEmail = useUnhashingText(gmailAddress, isVisible, 600)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="py-12 sm:py-16 bg-secondary/30 flex items-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative">
          {/* Main Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
            
            {/* Top Left - Say Hello Section */}
            <div 
              className={`flex flex-col justify-start space-y-4 lg:-ml-20 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-[75px] font-light text-white tracking-tight"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, letterSpacing: '0.02em' }}>
                Say Hello
              </h2>
              <p className="text-gray-400 text-lg sm:text-xl lg:text-3xl max-w-none leading-relaxed whitespace-nowrap"
                 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}>
                Ready to bring your projects to life? Let's work together
              </p>
            </div>

            {/* Top Right - Large Arrow */}
            <div 
              className={`flex items-start justify-center lg:justify-end lg:-mr-18 lg:-mt-15 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-12 rotate-45'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="relative group">
                <ArrowDownLeft 
                  className="w-20 h-80 sm:w-32 sm:h-32 lg:w-40 lg:h-40 text-gray-600 animate-pulse transition-transform duration-500 group-hover:-rotate-[30deg]" 
                  strokeWidth={1.5}
                />
              </div>
            </div>

            {/* Center - Availability Card */}
            <div 
              className={`lg:col-span-2 flex justify-center items-center my-8 lg:my-4 transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative px-8 py-6 bg-background/95 backdrop-blur-sm rounded-2xl border-2 border-gray-800 hover:border-gray-700 transition-all duration-300">
                  <p className="text-gray-400 text-center text-base sm:text-lg lg:text-xl leading-relaxed"
                     style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, letterSpacing: '0.03em' }}>
                    Open to freelance opportunities and full-time positions.<br />
                    Let's build something amazing together!
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Left - Email */}
            <div 
              className={`flex flex-col justify-end lg:-ml-20 mt-8 lg:mt-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: '70ms' }}
            >
              <a 
                href={`mailto:${gmailAddress}`}
                className="group inline-block"
              >
                <p className="text-4xl sm:text-5xl lg:text-[65px] text-gray-400 hover:text-white transition-all duration-300 font-mono whitespace-nowrap overflow-hidden"
                   style={{ 
                     fontFamily: "'JetBrains Mono', 'Courier New', monospace", 
                     fontWeight: 400, 
                     letterSpacing: '0.02em',
                     minWidth: 'fit-content',
                     width: '100%'
                   }}>
                  {displayEmail}
                </p>
                <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-2"></div>
              </a>
            </div>

            {/* Bottom Right - Social Icons */}
            <div 
              className={`flex flex-col justify-end lg:-mr-18 mt-8 lg:mt-7 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <div className="flex items-center justify-end gap-6 lg:gap-8">
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label="X (Twitter)"
                >
                  <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <Twitter className="relative w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-gray-400 hover:text-blue-400 transition-all duration-300 group-hover:scale-110" strokeWidth={2} />
                </a>
                
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label="WhatsApp"
                >
                  <div className="absolute -inset-2 bg-green-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <svg 
                    className="relative w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-gray-400 group-hover:text-green-400 transition-all duration-300 group-hover:scale-110"
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
                
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label="GitHub"
                >
                  <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <Github className="relative w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-gray-400 hover:text-purple-400 transition-all duration-300 group-hover:scale-110" />
                </a>
                
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label="LinkedIn"
                >
                  <div className="absolute -inset-2 bg-cyan-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <Linkedin className="relative w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-gray-400 hover:text-cyan-400 transition-all duration-300 group-hover:scale-110" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
