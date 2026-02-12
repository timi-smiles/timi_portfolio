"use client"

import { ScrollAnimation } from "./scroll-animation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    company: "SHOPPAY",
    role: "Fullstack Mobile Engineer",
    location: "Remote",
    period: "Dec 2024 - Present",
    description: "Building secure escrow-based e-commerce marketplace with Node.js, Express, MongoDB, and React Native",
    tech: ["Node.js", "Express", "MongoDB", "React Native"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    company: "STUDIO DORESH",
    role: "Backend Developer",
    location: "Remote",
    period: "Oct 2024 – Jan 2025",
    description: "Engineered financial intelligence platform using Python, FastAPI, PostgreSQL, and ML processing pipelines",
    tech: ["Python", "FastAPI", "PostgreSQL", "Celery"],
    color: "from-purple-500 to-pink-500"
  },
  {
    company: "LEADWAY PENSURE PFA",
    role: "Software Engineer",
    location: "Lagos, Nigeria",
    period: "Jun 2024 - Oct 2024",
    description: "Enhanced enterprise pension management applications using React.js, C#, and .NET Framework",
    tech: ["React.js", "C#", ".NET"],
    color: "from-orange-500 to-red-500"
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <ScrollAnimation animation="slide-up" delay={100} duration={1000}>
            <div className="mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                <span className="text-blue-400">Experience</span>
              </h2>
            </div>
          </ScrollAnimation>

          {/* Experience Cards */}
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <ScrollAnimation
                key={exp.company}
                animation="fade-up"
                delay={200 + index * 100}
                duration={600}
              >
                <Card className="group relative overflow-hidden bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:translate-x-2 rounded-xl">
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      {/* Left side - Company and Role */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg sm:text-xl font-bold text-white truncate">
                            {exp.company}
                          </h3>
                          <span className="text-sm text-blue-400 font-medium whitespace-nowrap">• {exp.role}</span>
                        </div>
                        <p className="text-sm text-gray-300">
                          {exp.description}
                        </p>
                      </div>

                      {/* Right side - Meta info */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span className="whitespace-nowrap">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          <span className="whitespace-nowrap">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack - Only on desktop */}
                    <div className="hidden sm:flex flex-wrap gap-2 mt-3">
                      {exp.tech.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="px-2 py-0.5 text-xs bg-primary/10 border border-primary/30 text-blue-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          {/* Call to action */}
          <ScrollAnimation animation="fade-up" delay={600} duration={600}>
            <div className="mt-8 text-center">
              <a 
                href="/TIMILEHIN_OGUNNOWO_RESUME.pdf" 
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                View Full Resume
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
