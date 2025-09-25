"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Calendar,
  MessageCircle,
  Loader2,
  Download,
} from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import { BookingModal } from "@/components/booking-modal"
import { resume_url } from "@/app/page"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Message sent successfully! 🚀",
      description: "Thanks for reaching out! I'll get back to you within 24 hours.",
    })

    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsLoading(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="container px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground">Let's discuss your next project or just say hello</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="transition-all duration-200 focus:scale-[1.02]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="transition-all duration-200 focus:scale-[1.02]"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>
                <Button type="submit" className="w-full group relative overflow-hidden" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "surajitdev20107@gmail.com", href: "mailto:surajitdev20107@gmail.com" },
                  // { icon: Phone, label: "Phone", value: "+91 1234567890", href: "tel:+91 1234567890" },
                  { icon: MapPin, label: "Location", value: "Kolkata, IN", href: "#" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 group cursor-pointer hover:bg-accent/50 p-2 rounded-lg transition-colors"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <BookingModal>
                  <Button className="w-full group">
                    <Calendar className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    Schedule a Meeting
                  </Button>
                </BookingModal>
                
                <div>
                  <Link href={resume_url} target="_blank">
                    <Button variant="outline" className="w-full group">
                      <Download className="mr-2 h-4 w-4 group-hover:bounce transition-transform" />
                      Download Resume
                    </Button>
                  </Link>
                </div>
                
                <Button variant="outline" className="w-full group" asChild>
                  <Link href="/projects">
                    <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    View My Work
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: "https://github.com/surajit20107", color: "hover:bg-gray-900 hover:text-white" },
                    { icon: Linkedin, href: "https://linkedin.com/in/surajit-jana20107", color: "hover:bg-blue-600 hover:text-white" },
                    { icon: Twitter, href: "https://twitter.com/surajit_20107", color: "hover:bg-blue-400 hover:text-white" },
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className={`flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 hover:scale-110 ${social.color}`}
                    >
                      <social.icon className="h-6 w-6" />
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-medium text-green-700 dark:text-green-400">Available for new projects</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I'm currently accepting new freelance projects and full-time opportunities. Let's discuss how we can
                    work together!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
