import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Server, Database, Wrench, Lightbulb } from "lucide-react"
import { TechIcon } from "@/components/tech-icon"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      { name: "React/Next.js", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "JavaScript", level: 5 },
      { name: "HTML/CSS", level: 5 },
      { name: "Tailwind CSS", level: 4 },
      { name: "Vue.js", level: 4 },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Python", level: 4 },
      { name: "Express.js", level: 4 },
      { name: "REST APIs", level: 5 },
      { name: "GraphQL", level: 4 },
      { name: "Microservices", level: 3 },
    ],
  },
  {
    title: "Database & Cloud",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 4 },
      { name: "MongoDB", level: 5 },
      { name: "Redis", level: 3 },
      { name: "AWS", level: 4 },
      { name: "Docker", level: 4 },
      { name: "Vercel", level: 5 },
    ],
  },
  {
    title: "Design & UI/UX",
    icon: Palette,
    skills: [
      { name: "Figma", level: 5 },
      { name: "Adobe XD", level: 4 },
      { name: "Photoshop", level: 3 },
      { name: "UI Design", level: 4 },
      { name: "UX Research", level: 4 },
      { name: "Prototyping", level: 4 },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    skills: [
      { name: "Git/GitHub", level: 5 },
      { name: "VS Code", level: 5 },
      { name: "Webpack", level: 4 },
      { name: "Jest/Testing", level: 4 },
      { name: "CI/CD", level: 4 },
      { name: "Agile/Scrum", level: 5 },
    ],
  },
]

const certifications = [
  "AWS Certified Developer",
  "Google Analytics Certified",
  "React Developer Certification",
  "MongoDB Certified Developer",
]

const languages = [
  { name: "English", level: "Native" },
  { name: "Bengali", level: "Native" },
  { name: "Hindi", level: "Native" },
]

export default function SkillsPage() {
  return (
    <div className="container px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">Skills & Expertise</h1>
          <p className="text-xl text-muted-foreground">Technologies and tools I work with</p>
          <p className="text-sm text-muted-foreground mt-2">
            💡 <strong>Desktop:</strong> Hover over icons for details • <strong>Mobile:</strong> Tap icons to see names
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={index}
                className="h-fit hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <TechIcon key={skillIndex} name={skill.name} level={skill.level} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Certifications */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors group"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-sm group-hover:text-primary transition-colors">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle>Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-2 rounded-lg hover:bg-accent/50 transition-colors group"
                  >
                    <span className="font-medium group-hover:text-primary transition-colors">{lang.name}</span>
                    <Badge
                      variant="secondary"
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      {lang.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle>Soft Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "Problem Solving",
                  "Team Leadership",
                  "Communication",
                  "Critical Thinking",
                  "Adaptability",
                  "Time Management",
                  "Mentoring",
                ].map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
