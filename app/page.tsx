import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Download, Github, Linkedin, Calendar, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedBackground } from "@/components/animated-background"
import { BookingModal } from "@/components/booking-modal"

export const resume_url = "https://drive.google.com/file/d/1mekXLeNV3LM1bHsGlQl7TfKdHVd3aAXy/view?usp=drivesdk"

export default function HomePage() {
  const feturedProjects = [
    {
      title: "E-commerce Store",
      description: "An e-commerce store build with Node.js, Express, Mongodb & Ejs, featuring user authentication, payment processing and admin dashboard.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Password Manager",
      description: "Last-Pass build with React, Node.js, Express, Mongodb, Multer & cloudinary. Featuring user authentication, change password, update avatar.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Portfolio Website",
      description: "This project showcase my work, skills & The technologies i work with. Also this represents my dev journey ☕",
      image: "/placeholder.svg?height=200&width=300",
    }
  ]
  return (
    <div className="flex flex-col relative">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

        <div className="container relative px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col space-y-6 animate-in slide-in-from-left duration-1000">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Sparkles className="h-4 w-4" />
                  Available for new projects
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent animate-pulse">
                    Surajit
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground md:text-2xl">Full Stack Developer & MERN Specialist</p>
                <p className="text-lg text-muted-foreground max-w-[600px]">
                  I craft robust, scalable, and user-focused web applications using the MERN stack and beyond. Passionate about clean architecture, modern UI/UX, and building end-to-end solutions that solve real-world problems. Let's build something amazing together!
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="group relative overflow-hidden">
                  <Link href="/projects">
                    <span className="relative z-10">View My Work</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </Button>
                <BookingModal>
                  <Button size="lg" variant="outline" className="group">
                    <Calendar className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    Book a Call
                  </Button>
                </BookingModal>
                
                <div>
                  <Link href={resume_url} target="_blank">
                    <Button variant="outline" size="lg" className="group">
                      <Download className="mr-2 h-4 w-4 group-hover:bounce transition-transform" />
                      Download CV
                    </Button>
                  </Link>
                </div>
                
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  href="https://github.com/surajit20107"
                  className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://linkedin.com/in/surajit-jana20107"
                  className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end animate-in slide-in-from-right duration-1000">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20 animate-pulse group-hover:opacity-30 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl animate-spin-slow" />
                <Image
                  src="/surajit.jpg"
                  alt="Surajit"
                  width={400}
                  height={400}
                  className="relative rounded-full border-4 border-background shadow-2xl group-hover:scale-105 transition-transform duration-500 object-cover aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-muted/50 backdrop-blur-sm">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { number: "50+", label: "Projects Completed", delay: "0ms" },
              { number: "3+", label: "Years Experience", delay: "200ms" },
              { number: "100%", label: "Client Satisfaction", delay: "400ms" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: stat.delay }}
              >
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Featured Work</h2>
            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
              Here are some of my recent projects that showcase my skills and creativity.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {feturedProjects.map((project) => (
              <Card
                key={project.title}
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <Button variant="ghost" size="sm" asChild className="group/btn">
                    <Link href="/projects">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="group">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
