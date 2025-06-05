"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Code2, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative">
            <Code2 className="h-6 w-6 transition-transform group-hover:rotate-12" />
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Surajit
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-sm font-medium transition-colors hover:text-primary group ${
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                  pathname === item.href ? "w-full" : ""
                }`}
              />
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="relative overflow-hidden"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4 transition-all" />
              ) : (
                <Sun className="h-4 w-4 transition-all" />
              )}
            </Button>
          )}

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-primary p-2 rounded-lg hover:bg-accent ${
                      pathname === item.href ? "text-primary bg-accent" : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                {/* Theme toggle in mobile menu */}
                {mounted && (
                  <Button variant="outline" onClick={toggleTheme} className="mt-4 justify-start">
                    {theme === "light" ? (
                      <>
                        <Moon className="h-4 w-4 mr-2" />
                        Dark Mode
                      </>
                    ) : (
                      <>
                        <Sun className="h-4 w-4 mr-2" />
                        Light Mode
                      </>
                    )}
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
