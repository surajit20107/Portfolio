"use client"

import React from "react"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

interface ResumeDownloadProps {
  children: React.ReactNode
}

export function ResumeDownload({ children }: ResumeDownloadProps) {
  const [isDownloading, setIsDownloading] = useState(false)
  const { toast } = useToast()

  const handleDownload = async () => {
    setIsDownloading(true)

    try {
      // Create a sample PDF content (in a real app, you'd fetch from your server)
      const pdfContent = generateResumePDF()

      // Create blob and download
      const blob = new Blob([pdfContent], { type: "application/pdf" })
      const url = window.URL.createObjectURL(blob)

      // Create download link
      const link = document.createElement("a")
      link.href = url
      link.download = "Surajit_Resume.pdf"
      document.body.appendChild(link)
      link.click()

      // Cleanup
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)

      toast({
        title: "Resume Downloaded! 📄",
        description: "Thanks for your interest! The resume has been downloaded successfully.",
      })
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Sorry, there was an error downloading the resume. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div onClick={handleDownload} className="cursor-pointer">
      {React.cloneElement(children as React.ReactElement, {
        disabled: isDownloading,
        children: isDownloading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Downloading...
          </>
        ) : (
          (children as React.ReactElement).props.children
        ),
      })}
    </div>
  )
}

// Simple PDF generation function (in a real app, use a proper PDF library)
function generateResumePDF(): string {
  return `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 5 0 R
>>
>>
>>
endobj

4 0 obj
<<
/Length 200
>>
stream
BT
/F1 24 Tf
50 750 Td
(Surajit Jana - Full Stack Developer | MERN Specialist) Tj
0 -30 Td
/F1 12 Tf
(Email: surajitjana20107@gmail.com) Tj
0 -20 Td
(Phone: +91 9330975907 Tj
0 -20 Td
(Location: Kolkata, IN) Tj
0 -40 Td
(Skills: HTML, CSS, JavaScript, React, Next.js, TypeScript, Node.js, Express, Mongodb and Python) Tj
0 -20 Td
(Experience: 3+ years in full-stack development) Tj
ET
endstream
endobj

5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj

xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000053 00000 n 
0000000110 00000 n 
0000000271 00000 n 
0000000524 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
593
%%EOF`
}
