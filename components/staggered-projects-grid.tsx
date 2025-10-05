"use client"

import { ScrollAnimation } from "./scroll-animation"
import { AnimatedProjectCard } from "./animated-project-card"
import { useEffect, useRef, useState } from "react"

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

// Define unique, slick animation styles for each project
const projectAnimations = [
  { 
    initial: "opacity-0 translate-y-20 -translate-x-10 rotate-12 scale-90",
    animate: "opacity-100 translate-y-0 translate-x-0 rotate-0 scale-100",
    rotate: "lg:rotate-1", 
    hover: "hover:rotate-0 hover:scale-105 hover:-translate-y-2"
  },
  { 
    initial: "opacity-0 -translate-x-32 translate-y-10 -rotate-6 scale-95",
    animate: "opacity-100 translate-x-0 translate-y-0 rotate-0 scale-100",
    rotate: "lg:-rotate-2", 
    hover: "hover:rotate-1 hover:scale-105 hover:-translate-y-2"
  },
  { 
    initial: "opacity-0 scale-50 rotate-45 translate-y-20",
    animate: "opacity-100 scale-100 rotate-0 translate-y-0",
    rotate: "lg:rotate-2", 
    hover: "hover:-rotate-1 hover:scale-110 hover:-translate-y-3"
  },
  { 
    initial: "opacity-0 translate-x-32 -translate-y-10 rotate-12 scale-90",
    animate: "opacity-100 translate-x-0 translate-y-0 rotate-0 scale-100",
    rotate: "lg:-rotate-1", 
    hover: "hover:rotate-2 hover:scale-105 hover:-translate-y-2"
  },
  { 
    initial: "opacity-0 translate-y-40 scale-75 -rotate-12",
    animate: "opacity-100 translate-y-0 scale-100 rotate-0",
    rotate: "lg:rotate-3", 
    hover: "hover:rotate-0 hover:scale-108 hover:-translate-y-4"
  },
  { 
    initial: "opacity-0 -translate-y-32 translate-x-16 rotate-8 scale-85",
    animate: "opacity-100 translate-y-0 translate-x-0 rotate-0 scale-100",
    rotate: "lg:-rotate-2", 
    hover: "hover:rotate-1 hover:scale-105 hover:-translate-y-2"
  },
]

export function StaggeredProjectsGrid({ projects }: StaggeredProjectsGridProps) {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set(prev).add(index))
          }
        },
        { threshold: 0.1 }
      )
      
      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer, index) => {
        if (observer && cardRefs.current[index]) {
          observer.unobserve(cardRefs.current[index]!)
        }
      })
    }
  }, [projects.length])

  return (
    <div className="space-y-16">
      {projects.reduce((rows: Project[][], project, index) => {
        const rowIndex = Math.floor(index / 2)
        if (!rows[rowIndex]) rows[rowIndex] = []
        rows[rowIndex].push(project)
        return rows
      }, []).map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-8xl mx-auto">
          {row.map((project, projectIndex) => {
            const projectGlobalIndex = rowIndex * 2 + projectIndex
            const animationConfig = projectAnimations[projectGlobalIndex % projectAnimations.length]
            
            return (
              <div
                key={`${rowIndex}-${projectIndex}`}
                ref={el => { cardRefs.current[projectGlobalIndex] = el }}
                className={`flex ${
                  projectIndex === 0 
                    ? 'lg:items-start' 
                    : 'lg:items-end lg:pt-60'
                }`}
              >
                <div
                  className={`w-full transition-all duration-[1200ms] ease-out ${
                    animationConfig.rotate
                  } ${
                    animationConfig.hover
                  } ${
                    visibleCards.has(projectGlobalIndex)
                      ? animationConfig.animate
                      : animationConfig.initial
                  }`}
                  style={{
                    transitionDelay: `${projectGlobalIndex * 180}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    willChange: 'transform, opacity'
                  }}
                >
                  <AnimatedProjectCard 
                    project={project} 
                    index={projectGlobalIndex}
                  />
                </div>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}
