import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Leadway Pensure",
    period: "2023 - 2024",
    description:
      "Developed and maintained enterprise applications using React and C#. Integrated SOAP APIs and redesigned kiosk interfaces for improved user experience.",
    technologies: ["React", "C#", "Swagger UI", "SOAP APIs"],
    link: "#",
  },
  {
    title: "Software Developer, Co-Founder",
    company: "UC HUB",
    period: "2022 - Present",
    description:
      "Built an EdTech platform connecting tutors with students. Implemented tutor-student matching algorithms, payment processing, and scaled the platform to serve hundreds of users.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    link: "#",
  },
  {
    title: "Volunteer Instructor",
    company: "LASOP",
    period: "2021 - 2022",
    description:
      "Guided trainee developers in debugging techniques, algorithm design, and coding best practices. Helped build confidence and technical skills in aspiring developers.",
    technologies: ["JavaScript", "Python", "Algorithms", "Mentoring"],
    link: "#",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">{exp.title}</CardTitle>
                    <CardDescription className="text-base mt-1">
                      {exp.company} • {exp.period}
                    </CardDescription>
                  </div>
                  <a
                    href={exp.link}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`View ${exp.company}`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-pretty">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
