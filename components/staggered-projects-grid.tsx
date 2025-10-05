"use client"

import { ScrollAnimation } from "./scroll-animation"
import { AnimatedProjectCard } from "./animated-project-card"

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  impact: string
  github: string
  demo: string
}

interface StaggeredProjectsGridProps {
  projects: Project[]
}

export function StaggeredProjectsGrid({ projects }: StaggeredProjectsGridProps) {
  return (
    <div className="space-y-16">
      {projects.reduce((rows: Project[][], project, index) => {
        const rowIndex = Math.floor(index / 2)
        if (!rows[rowIndex]) rows[rowIndex] = []
        rows[rowIndex].push(project)
        return rows
      }, []).map((row, rowIndex) => (
        <ScrollAnimation key={rowIndex} animation="fade-up" delay={rowIndex * 200} duration={800}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-8xl mx-auto">
            {row.map((project, projectIndex) => (
                <div 
                  key={`${rowIndex}-${projectIndex}`}
                  className={`flex ${
                    projectIndex === 0 
                      ? 'lg:items-start lg:-rotate-2' 
                      : 'lg:items-end lg:pt-60 lg:rotate-2'
                  }`}
                >
                <ScrollAnimation 
                  animation={projectIndex === 0 ? "fade-right" : "fade-left"} 
                  delay={rowIndex * 200 + projectIndex * 300} 
                  duration={800}
                  className="w-full"
                >
                  <div className="relative">
                    <AnimatedProjectCard 
                      project={project} 
                      index={rowIndex * 2 + projectIndex}
                    />
                  </div>
                </ScrollAnimation>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      ))}
    </div>
  )
}
