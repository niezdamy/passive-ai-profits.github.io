"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (href: string) => pathname === href

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">Passive AI Profits</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium hover:text-primary",
              isActive("/") ? "text-primary font-semibold" : "",
            )}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className={cn(
              "text-sm font-medium hover:text-primary",
              isActive("/blog") ? "text-primary font-semibold" : "",
            )}
          >
            Blog
          </Link>
          <Link
            href="/tools"
            className={cn(
              "text-sm font-medium hover:text-primary",
              isActive("/tools") ? "text-primary font-semibold" : "",
            )}
          >
            Tools
          </Link>
          <Link
            href="/about"
            className={cn(
              "text-sm font-medium hover:text-primary",
              isActive("/about") ? "text-primary font-semibold" : "",
            )}
          >
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/#newsletter">
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Stay Updated
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 z-50 bg-white transition-transform duration-300",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex flex-col p-6 space-y-4">
          <Link
            href="/"
            className={cn(
              "text-lg font-medium p-2 hover:bg-gray-100 rounded",
              isActive("/") ? "bg-gray-100 text-primary font-semibold" : "",
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className={cn(
              "text-lg font-medium p-2 hover:bg-gray-100 rounded",
              isActive("/blog") ? "bg-gray-100 text-primary font-semibold" : "",
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/tools"
            className={cn(
              "text-lg font-medium p-2 hover:bg-gray-100 rounded",
              isActive("/tools") ? "bg-gray-100 text-primary font-semibold" : "",
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            Tools
          </Link>
          <Link
            href="/about"
            className={cn(
              "text-lg font-medium p-2 hover:bg-gray-100 rounded",
              isActive("/about") ? "bg-gray-100 text-primary font-semibold" : "",
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>

          <div className="pt-4 flex flex-col gap-2">
            <Link href="/#newsletter" passHref>
                <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => setIsMenuOpen(false)}>
                  Stay Updated
                </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
