import { ScrollAnimation } from "./scroll-animation"
import { StaggeredProjectsGrid } from "./staggered-projects-grid"

const projects = [
    {
    title: "MediCheck",
    description: "AI-powered drug verification and tracking platform that helps users instantly identify counterfeit or expired drugs using blockchain-backed data validation.",
    image: "/PROJECTS/medicheck.png",
    technologies: ["Next.js", "TypeScript", "Hedera Consensus Service", "AI/ML"],
    impact: "Reduced risk of counterfeit drug consumption by enabling real-time verification",
    github: "https://github.com/timi-smiles/MediCheck",
    demo: "https://app-medicheck.vercel.app/",
  },
  {
    title: "LASU Hostel Complaint Management System",
    description: "LASU Hostel Complaint Management System streamlines issue reporting, resolution, and tracking for Lagos State University hostels using Next.js and PostgreSQL.",
    image: "/PROJECTS/hostel-management-app.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    impact: "Eradicated traditional way of reporting, reduced reporting time by 40%",
    github: "https://github.com/timi-smiles/lasu-hostel-complaint-system",
    demo: "https://www.lasuhcms.com/",
  },
  {
  title: "Leadway Pensure Kiosk Application",
  description: "An interactive self-service kiosk application developed during my internship at Leadway Pensure to enhance customer onboarding and pension service accessibility, built using React.js for the frontend and C# (.NET) for the backend.",
  image: "/PROJECTS/leadway.png",
  technologies: ["React.js", "C#", ".NET", "SOAP API"],
  impact: "Improved client engagement and streamlined pension account access through an intuitive, touch-friendly interface.",
  demo: "https://leadway-pensure.com/services/",
  },
  {
  title: "Health Advice Expert System (Chatbot)",
  description: "Intelligent chatbot built with PHP and a trained machine learning model to provide users with personalized health advice and symptom-based recommendations through an interactive interface.",
  image: "/PROJECTS/chatbot.png",
  technologies: ["PHP", "Machine Learning", "AI"],
  impact: "Improved access to basic healthcare information by offering quick, data-driven advice and reducing dependence on physical consultations for minor health concerns.",
  github: "https://github.com/timi-smiles/Health-Advice-Expert-System",
  },
  {
  title: "Inferno Brand Website",
  description: "A visually captivating and storytelling-driven portfolio website built for Inferno Photography to showcase its originality, creativity, and artistic excellence. The site highlights the brand’s journey, studio works, wedding shoots, and client testimonials through a clean, intuitive, and responsive interface.",
  image: "/PROJECTS/inferno.png",
  technologies: ["Next.js", "Tailwind CSS"],
  impact: "Elevated the brand’s digital presence by translating its visual identity into a compelling online experience that resonates with clients and showcases its authenticity and craft.",
  demo: "https://infernomedia.vercel.app/",
  github: "https://github.com/timi-smiles/inferno",
  },
  {
  title: "Yoruba Traditional Wedding Website",
  description: "A beautifully crafted Yoruba traditional wedding website designed to celebrate love, culture, and unity. The site invites guests to the wedding, shares the couple’s love story, and showcases memorable moments with elegant visuals.",
  image: "/PROJECTS/image.png",
  technologies: ["Next.js", "Tailwind CSS"],
  impact: "Created a culturally rich, responsive, and user-intuitive wedding website that enhanced guest engagement through RSVP functionality and storytelling visuals, blending tradition with modern design.",
  github: "https://github.com/timi-smiles/trad_wedding",
  demo: "https://ayoade25.vercel.app/",
},
{
  title: "Personal Portfolio",
  description: "A portfolio site showcasing my skills, projects, and journey in my early years of web development.",
  image: "/PROJECTS/portfolio.png",
  technologies: ["JavaScript", "HTML", "CSS"],
  impact: "Enhanced my personal brand and made it easy for prospective employers or collaborators to explore my work and reach out.",
  github: "https://github.com/timi-smiles/My-Portfolio", 
  demo: "https://timi-portfolioo.netlify.app/",
},
  

]

export function ProjectsSection() {
  return (
    <section id="projects" className="pt-16 pb-26 md:py-26 bg-secondary/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <ScrollAnimation animation="slide-up" delay={100} duration={1000}>
          <h2 className="text-4xl sm:text-4xl lg:text-5xl font-medium mb-12 text-center tracking-wide">
            <span className="text-white">Selected </span>
            <span className="text-blue-400">Projects</span>
          </h2>
        </ScrollAnimation>
        
        <StaggeredProjectsGrid projects={projects} />
      </div>
    </section>
  )
}
