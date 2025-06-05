import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container px-4 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground">Get to know the person behind the code</p>
        </div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Profile */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Image
                    src="/surajit.jpg"
                    alt="Surajit"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4 aspect-square object-cover"
                  />
                  <h2 className="text-2xl font-bold mb-2">Surajit Jana</h2>
                  <p className="text-muted-foreground mb-4">Full Stack Developer | MERN Stack Specialist</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Kolkata, IN</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Available for work</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bio & Details */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>My Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  I'm a passionate full-stack developer who creates digital solutions that
                  make a difference. My journey began with a curiosity about how websites work, which quickly evolved
                  into a deep love for coding and design.
                </p>
                <p className="text-muted-foreground">
                  I specialize in modern web technologies including HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Express, EJS, Python excetra. I believe
                  in writing clean, maintainable code and creating user experiences that are both beautiful and
                  functional.
                </p>
                <p className="text-muted-foreground">
                  When I'm not coding, you can find me exploring new technologies, contributing to open source projects,
                  or enjoying the great outdoors with my camera.
                </p>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="font-semibold">Bachelor of Computer Science</h3>
                    <p className="text-sm text-muted-foreground">University of Kolkata</p>
                    <p className="text-sm text-muted-foreground">2018 - 2022</p>
                  </div>
                  <div className="border-l-2 border-muted pl-4">
                    <h3 className="font-semibold">Full Stack Web Development Bootcamp</h3>
                    <p className="text-sm text-muted-foreground">General Assembly</p>
                    <p className="text-sm text-muted-foreground">2021</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="font-semibold">Frontend Developer</h3>
                    <p className="text-sm text-muted-foreground">TechCorp Inc.</p>
                    <p className="text-sm text-muted-foreground">2022</p>
                    <p className="text-sm mt-2">
                      Work on multiple client projects using React, Next.js, and TypeScript.
                    </p>
                  </div>
                  <div className="border-l-2 border-muted pl-4">
                    <h3 className="font-semibold">Full Stack Developer</h3>
                    <p className="text-sm text-muted-foreground">Self Employed</p>
                    <p className="text-sm text-muted-foreground">2023 - current</p>
                    <p className="text-sm mt-2">Developed and maintained web applications using MERN stack.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card>
              <CardHeader>
                <CardTitle>Interests & Hobbies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Photography</Badge>
                  <Badge variant="secondary">Hiking</Badge>
                  <Badge variant="secondary">Open Source</Badge>
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">Travel</Badge>
                  <Badge variant="secondary">Music</Badge>
                  <Badge variant="secondary">Gaming</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
