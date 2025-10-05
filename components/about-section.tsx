"use client"

import { ScrollAnimation } from "./scroll-animation"
import { Card } from "@/components/ui/card"

const allSkills = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Prisma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <style jsx>{`
        @keyframes breathing {
          0%, 100% {
            box-shadow: 0 0 40px rgba(0, 0, 0, 0.2), 0 0 30px rgba(59, 130, 246, 0.2);
          }
          50% {
            box-shadow: 0 0 60px rgba(0, 0, 0, 0.3), 0 0 50px rgba(59, 130, 246, 0.35);
          }
        }
        .breathing-container {
          animation: breathing 3s ease-in-out infinite;
        }
      `}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation animation="slide-up" delay={100} duration={1000}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-left" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
              <span className="text-blue-400">Building</span>
              <span className="text-white">, </span>
              <span className="text-purple-400">Breaking</span>
              <span className="text-white">, </span>
              <span className="text-cyan-400">Fixing</span>
              <span className="text-white">!! 😉</span>
            </h2>
          </ScrollAnimation>
          
          <div className="breathing-container prose prose-lg dark:prose-invert mx-auto bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-500">
            <ScrollAnimation animation="fade-right" delay={200} duration={800}>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-pretty mb-4 sm:mb-5" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>
                I'm driven by a passion for creating scalable, high performing web applications that deliver measurable impact. I've built applications using Next.js, React, Node.js, and Django amongst others where i ensure smooth functionality, and exceptional user experience.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-left" delay={400} duration={800}>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-pretty" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>
                I thrive on solving technical challenges and transforming ideas into seamless, production-ready products. Whether optimizing system architectures, implementing innovative features, or collaborating across teams, I bring precision, creativity, and a commitment to technical excellence in every project.
              </p>
            </ScrollAnimation>
          </div>
          
          {/* Skills Section */}
          <div className="mt-12 md:mt-20">
            <ScrollAnimation animation="slide-up" delay={100} duration={1000}>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-8 md:mb-10 text-center tracking-wide" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className="text-white">My </span>
                <span className="text-blue-400">Tech Stack</span>
              </h3>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-up" delay={800} duration={800}>
              <Card className="p-6 sm:p-8 md:p-10 lg:p-14 bg-card/50 backdrop-blur-sm border-2 border-blue-400/20 hover:border-blue-400/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] rounded-3xl">
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                  {allSkills.map((skill, index) => (
                    <ScrollAnimation
                      key={skill.name}
                      animation="slide-up"
                      delay={900 + index * 40}
                      duration={500}
                    >
                      <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-5 rounded-xl hover:bg-blue-400/10 transition-all duration-300 group hover:scale-110 cursor-pointer">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <img 
                            src={skill.logo} 
                            alt={skill.name} 
                            className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300" 
                          />
                        </div>
                        <span className="font-medium text-xs sm:text-sm md:text-base text-gray-300 text-center group-hover:text-blue-400 transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>
                          {skill.name}
                        </span>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
