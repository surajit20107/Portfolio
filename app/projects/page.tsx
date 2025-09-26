import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Ticket Pilot",
    description:
      "Ai-Ticket-Agent is an intelligent, automated ticket management system powered by artificial intelligence. This project aims to streamline the support ticket lifecycle by leveraging AI for fast, accurate classification, assignment, and resolution of incoming requests.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Inngest", "Agent-Kit", "MongoDB", "Zod", "Nodemailer", "Bcrypt", "JWT"],
    liveUrl: "https://ticket-pilot.vercel.app",
    githubUrl: "https://github.com/surajit20107/Ai-Ticket-Agent",
    date: "2025",
    featured: true,
  },
  {
    title: "Joke Crowd",
    description:
      "A simple RESTful API built with the Gin web framework in Go for managing a collection of jokes. This project is designed for learning and practicing how to build, structure, and interact with APIs using Gin.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Gin", "GORM", "PostgreSQL", "UUID", "Validator", "JWT"],
    liveUrl: "https://golang-jokes-api.onrender.com",
    githubUrl: "https://github.com/surajit20107/JokeCrowd",
    date: "2025",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Node.js, Express & Ejs, featuring user authentication, payment processing, and admin dashboard.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Node.js", "Express", "Mongodb", "Tailwind CSS"],
    liveUrl: "https://scatch-vabj.onrender.com",
    githubUrl: "https://github.com/surajit20107/Scatch",
    date: "2025",
    featured: true,
  },
  {
    title: "Ultimate Password Manager",
    description:
      "Last-Pass, The ultimate password management application with real-time updates, user register & signin, upload avatar & change password feature. offering a secure and feature-rich platform. The project follows a modern architecture with completely separated frontend and backend services.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Multer", "Cloudinary", "Tailwind CSS"],
    liveUrl: "https://last-pass-five.vercel.app",
    githubUrl: "https://github.com/surajit20107/Last-pass",
    date: "2025",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing my work and skills with smooth animations and optimized performance.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "MDX"],
    liveUrl: "https://surajit-dev.netlify.app",
    githubUrl: "https://github.com/surajit20107/Portfolio",
    date: "2024",
    featured: false,
  },
  {
    title: "Dish Dive",
    description:
      "Dish Dive is a modern recipe discovery web application built with Next.js and React. It allows users to search for recipes by name, browse dishes by category, and explore detailed information for each meal, including ingredients, step-by-step instructions, and video tutorials.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Tailwind CSS", "Axios"],
    liveUrl: "https://dish-divee.vercel.app",
    githubUrl: "https://github.com/surajit20107/Dish-Dive",
    date: "2025",
    featured: false,
  },
  {
    title: "TodoFy",
    description:
      "TodoFy is a clean, intuitive to-do web app designed to help you stay focused and productive. Whether you're managing daily tasks, planning projects, or organizing your life, TodoFy makes it easy to capture, prioritize, and complete your goals—anytime, anywhere. With smart features and a distraction-free interface, getting things done has never felt this good.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Tailwind CSS", "React Icons", "React Loading Skeleton", "UUID", "TypeScript"],
    liveUrl: "https://next-todofy.vercel.app",
    githubUrl: "https://github.com/surajit20107/TodoFy",
    date: "2025",
    featured: false,
  },
  {
    title: "Random Jokes Generator",
    description:
      "The Random Jokes Generator is a fun and interactive web application built using HTML, CSS, and JavaScript. Its primary function is to display a new random joke each time the user clicks Generate button, offering light-hearted entertainment with just a tap.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://randomjokes-gen.netlify.app",
    githubUrl: "https://github.com/surajit20107/random-jokes",
    date: "2024",
    featured: false,
  },
]

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="container px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground">A showcase of my recent work and side projects</p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button asChild size="sm">
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {project.date}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2 pt-1">
                    <Button asChild size="sm" variant="outline" className="flex-1">
                      <Link href={project.liveUrl} target="_blank" className="text-xs">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <Link href={project.githubUrl} target="_blank" className="text-xs">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
