"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TypewritingTextProps {
  texts: string[]
  className?: string
  delay?: number
}

export function TypewritingText({
  texts,
  className,
  delay = 3000,
}: TypewritingTextProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (texts.length <= 1) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % texts.length)
    }, delay)

    return () => clearInterval(interval)
  }, [texts.length, delay])

  if (texts.length === 0) return null

  return (
    <div className="relative overflow-hidden h-full w-full">
      {texts.map((text, index) => (
        <div
          key={text}
          className={cn(
            "absolute inset-0 flex items-center transition-all duration-700 ease-in-out",
            index === activeIndex ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
            className
          )}
        >
          {text}
        </div>
      ))}
    </div>
  )
}