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
    <section id="about" className="py-24">
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
          <ScrollAnimation animation="fade-up" duration={800}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-left" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
              <span className="text-blue-400">Building</span>
              <span className="text-white">, </span>
              <span className="text-purple-400">Breaking</span>
              <span className="text-white">, </span>
              <span className="text-cyan-400">Fixing</span>
              <span className="text-white">!! 😉</span>
            </h2>
          </ScrollAnimation>
          
          <div className="breathing-container prose prose-lg dark:prose-invert mx-auto bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 transition-all duration-500">
            <ScrollAnimation animation="fade-right" delay={200} duration={800}>
              <p className="text-xl text-gray-400 leading-relaxed text-pretty" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>
                I'm driven by a passion for creating scalable, high performing web applications that deliver measurable impact. I've built applications using Next.js, React, Node.js, and Django amongst others where i ensure smooth functionality, and exceptional user experience.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-left" delay={400} duration={800}>
              <p className="text-xl text-gray-400 leading-relaxed mt-6 text-pretty" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>
                I thrive on solving technical challenges and transforming ideas into seamless, production-ready products. Whether optimizing system architectures, implementing innovative features, or collaborating across teams, I bring precision, creativity, and a commitment to technical excellence in every project.
              </p>
            </ScrollAnimation>
          </div>
          
          {/* Skills Section */}
          <div className="mt-20">
            <ScrollAnimation animation="fade-up" delay={600} duration={800}>
              <h3 className="text-5xl sm:text-6xl font-normal mb-10 text-center" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>
                <span className="text-white">My </span>
                <span className="text-blue-400">Tech Stack</span>
              </h3>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-up" delay={800} duration={800}>
              <Card className="p-10 sm:p-14 bg-card/50 backdrop-blur-sm border-2 border-blue-400/20 hover:border-blue-400/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] rounded-3xl">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10">
                  {allSkills.map((skill, index) => (
                    <ScrollAnimation
                      key={skill.name}
                      animation="slide-up"
                      delay={1000 + index * 80}
                      duration={600}
                    >
                      <div className="flex flex-col items-center gap-4 p-5 rounded-xl hover:bg-blue-400/10 transition-all duration-300 group hover:scale-110 cursor-pointer">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <img 
                            src={skill.logo} 
                            alt={skill.name} 
                            className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300" 
                          />
                        </div>
                        <span className="font-medium text-base text-gray-300 text-center group-hover:text-blue-400 transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>
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
