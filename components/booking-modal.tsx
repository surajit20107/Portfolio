"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Video, Phone, MessageSquare } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface BookingModalProps {
  children: React.ReactNode
}

export function BookingModal({ children }: BookingModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    meetingType: "",
    date: "",
    time: "",
    message: "",
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate booking
    toast({
      title: "Meeting Booked! 🎉",
      description: "I'll send you a calendar invite shortly. Looking forward to our chat!",
    })

    setIsOpen(false)
    setFormData({
      name: "",
      email: "",
      meetingType: "",
      date: "",
      time: "",
      message: "",
    })
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Book a Meeting
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="booking-name">Name</Label>
              <Input
                id="booking-name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Your name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="booking-email">Email</Label>
              <Input
                id="booking-email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Meeting Type</Label>
            <Select value={formData.meetingType} onValueChange={(value) => handleChange("meetingType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select meeting type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="video">
                  <div className="flex items-center gap-2">
                    <Video className="h-4 w-4" />
                    Video Call (30 min)
                  </div>
                </SelectItem>
                <SelectItem value="phone">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone Call (30 min)
                  </div>
                </SelectItem>
                <SelectItem value="consultation">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Project Consultation (60 min)
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="booking-date">Preferred Date</Label>
              <Input
                id="booking-date"
                type="date"
                value={formData.date}
                onChange={(e) => handleChange("date", e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="booking-time">Preferred Time</Label>
              <Select value={formData.time} onValueChange={(value) => handleChange("time", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="09:00">9:00 AM</SelectItem>
                  <SelectItem value="10:00">10:00 AM</SelectItem>
                  <SelectItem value="11:00">11:00 AM</SelectItem>
                  <SelectItem value="14:00">2:00 PM</SelectItem>
                  <SelectItem value="15:00">3:00 PM</SelectItem>
                  <SelectItem value="16:00">4:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="booking-message">Message (Optional)</Label>
            <Textarea
              id="booking-message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Tell me about your project or what you'd like to discuss..."
              rows={3}
            />
          </div>

          <Button type="submit" className="w-full">
            <Calendar className="mr-2 h-4 w-4" />
            Book Meeting
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
