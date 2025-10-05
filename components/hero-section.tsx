"use client"

import { Github, Linkedin, Mail, Twitter, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypewritingText } from "./typewriting-text"
import { ScrollAnimation } from "./scroll-animation"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <ScrollAnimation animation="fade-up" delay={0} duration={800}>
                <div className="space-y-2">
                  <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-balance bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
                    Hello there, I'm a
                  </h1>
                  <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-balance relative h-[1.2em]">
                    <TypewritingText 
                      texts={["Full Stack Developer", "Timilehin Ogunnowo"]}
                      className="bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent"
                    />
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-left" delay={400} duration={600}>
              <p className="text-xl sm:text-2xl text-muted-foreground text-balance">Next.js • TypeScript • Python/Django</p>
              </ScrollAnimation>
            </div>

            <ScrollAnimation animation="fade-right" delay={600} duration={700}>
            <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
              I’m a full-stack developer who builds efficient, functional and scalable web applications using React Next.js, and TypeScript, focusing on clean code and practical solutions.
            </p>
            </ScrollAnimation>

            <ScrollAnimation animation="scale-in" delay={800} duration={800}>
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <Button asChild size="icon" variant="outline" className="h-14 w-14 rounded-full border-2 hover:scale-110 transition-all duration-300">
                <a href="https://github.com/timi-smiles" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" style={{ color: '#2563eb' }} />
                </a>
              </Button>
              <Button asChild size="icon" variant="outline" className="h-14 w-14 rounded-full border-2 hover:scale-110 transition-all duration-300">
                <a href="https://www.linkedin.com/in/timilehin-ogunnowo" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" style={{ color: '#0077b5' }} />
                </a>
              </Button>
              <Button asChild size="icon" variant="outline" className="h-14 w-14 rounded-full border-2 hover:scale-110 transition-all duration-300">
                <a href="https://x.com/timi_smiles_" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-6 w-6" style={{ color: '#1DA1F2', fill: '#1DA1F2' }} />
                </a>
              </Button>
              <Button asChild size="icon" variant="outline" className="h-14 w-14 rounded-full border-2 hover:scale-110 transition-all duration-300">
                <a href="https://wa.me/2348160808720" target="_blank" rel="noopener noreferrer">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </Button>
            </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="fade-left" delay={400} duration={1000}>
          <div className="flex-shrink-0">
            <div className="relative">
              <div 
                className="absolute inset-[-1rem] bg-primary/5 blur-[4xl] animate-pulse scale-110"
                style={{ borderRadius: '60% 40% 60% 40%' }}
              />
              <div 
                className="relative w-72 h-96 sm:w-96 sm:h-[28rem] lg:w-[28rem] lg:h-[36rem] shadow-2xl overflow-hidden p-1"
                style={{ 
                  borderRadius: '60% 40% 60% 40%',
                  background: 'linear-gradient(135deg, #2563eb, #7c3aed, #06b6d4)'
                }}
              >
                <div 
                  className="w-full h-full bg-white rounded-full overflow-hidden"
                  style={{ borderRadius: '60% 40% 60% 40%' }}
                >
                  <img
                    src="/timi.jpg"
                    alt="Professional Photo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
