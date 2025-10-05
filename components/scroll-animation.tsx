"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-in" | "slide-up" | "slide-down"
  delay?: number
  duration?: number
  threshold?: number
}

export function ScrollAnimation({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [delay, threshold])

  const getAnimationClasses = () => {
    const baseClasses = "transition-all ease-out"
    const durationClass = `duration-${Math.min(Math.max(Math.floor(duration / 100), 3), 12)}`
    
    switch (animation) {
      case "fade-up":
        return cn(
          baseClasses,
          durationClass,
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )
      case "fade-down":
        return cn(
          baseClasses,
          durationClass,
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0" 
        )
      case "fade-left":
        return cn(
          baseClasses,
          durationClass,
          isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
        )
      case "fade-right":
        return cn(
          baseClasses,
          durationClass,
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
        )
      case "scale-in":
        return cn(
          baseClasses,
          durationClass,
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        )
      case "slide-up":
        return cn(
          baseClasses,
          durationClass,
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        )
      case "slide-down":
        return cn(
          baseClasses,
          durationClass,
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
        )
      default:
        return cn(baseClasses, durationClass, isVisible ? "opacity-100" : "opacity-0")
    }
  }

  return (
    <div
      ref={elementRef}
      className={cn(className)}
      style={{ transitionDuration: `${duration}ms` }}
    >
      <div className={getAnimationClasses()}>
        {children}
      </div>
    </div>
  )
}
