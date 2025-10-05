"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "./scroll-animation"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    technologies: string[]
    impact: string
    github?: string
    demo?: string
  }
  index: number
}

export function AnimatedProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Different animations for each card
  const animations = ["fade-up", "slide-up", "scale-in", "fade-left", "fade-right", "fade-down"]
  const animation = animations[index % animations.length]
  const delay = index * 150 // Staggered delay

  const hoverEffects = "group overflow-hidden transition-all duration-500 flex flex-col hover:scale-[1.02] active:scale-[0.98]"

  return (
    <ScrollAnimation 
      animation={animation as any}
      delay={delay}
      duration={800}
      className="min-h-0"
    >
      <Card
        className={hoverEffects}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          boxShadow: isHovered ? '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(59, 130, 246, 0.15)' : undefined,
          borderColor: isHovered ? 'rgba(59, 130, 246, 0.3)' : undefined,
        }}
      >
        {/* Enhanced Image Container */}
        <div className="relative overflow-hidden aspect-video p-6 flex items-center justify-center">
          <div 
            className="w-full h-full rounded-xl overflow-hidden"
            style={{ 
              border: '2px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 0 20px rgba(37, 99, 235, 0.15), 0 0 40px rgba(124, 58, 237, 0.1)'
            }}
          >
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className={`object-cover w-full h-full transition-all duration-700 rounded-xl ${
                isHovered ? "scale-110 rotate-2" : "scale-100 rotate-0"
              }`}
            />
          </div>
          
          {/* Animated Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-card/95 via-card/20 to-transparent transition-all duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`} />
          
          {/* Floating Action Buttons */}
          <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-500 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}>
          </div>
        </div>

        <CardHeader className="pb-2">
          <CardTitle className={`text-2xl transition-all duration-300 ${
            isHovered ? "text-blue-400" : ""
          }`}>
            {project.title}
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4 flex-1 flex flex-col">
          {/* Animated Technology Badges */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <ScrollAnimation
                key={tech}
                animation="scale-in"
                delay={delay + techIndex * 50}
                duration={400}
              >
                <Badge 
                  className={`text-sm px-3 py-1 transition-all duration-300 ${
                    isHovered 
                      ? "bg-blue-500/20 text-blue-300 border-blue-400/40 scale-105" 
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {tech}
                </Badge>
              </ScrollAnimation>
            ))}
          </div>

          {/* Impact Statement */}
          <ScrollAnimation
            animation="fade-left"
            delay={delay + 200}
            duration={600}
          >
            <p className="text-sm font-semibold text-white">
              {project.impact}
            </p>
          </ScrollAnimation>

          {/* Animated Bottom Actions */}
          <div className={`flex gap-3 mt-auto pt-4 transition-all duration-500 ${
            isHovered ? "opacity-100" : "opacity-90"
          }`}>
            {project.github && project.github !== "#" && (
              <Button 
                asChild 
                variant="outline" 
                size="default"
                className={`gap-2 transition-all duration-300 ${
                  isHovered 
                    ? "bg-blue-500/10 border-blue-400/40 text-blue-300" 
                    : "bg-transparent"
                }`}
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-base">
                  <Github className="h-5 w-5" />
                  Code
                </a>
              </Button>
            )}
            {project.demo && project.demo !== "#" && (
              <Button 
                asChild 
                size="default"
                className="gap-2 bg-blue-600 hover:bg-blue-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] text-white border-0 shadow-lg transition-all duration-300"
              >
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-base">
                  <ExternalLink className="h-5 w-5" />
                  Live Preview 
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </ScrollAnimation>
  )
}
