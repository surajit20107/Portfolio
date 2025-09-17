import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex flex-col items-center space-y-2 md:items-start">
            <p className="text-sm text-muted-foreground">&copy;{` ${new Date().getFullYear()} Surajit. All rights reserved.`}</p>
            <p className="text-sm text-muted-foreground">Built with ❤️ and lots of ☕</p>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="https://github.com/surajit20107" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com/in/surajit-jana20107" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://twitter.com/surajit_20107" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="mailto:surajitdev20107@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
