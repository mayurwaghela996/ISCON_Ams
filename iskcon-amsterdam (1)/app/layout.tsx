import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import LanguageSwitcher from "@/components/language-switcher"

export const metadata: Metadata = {
  title: "ISKCON Amsterdam Temple",
  description: "Experience Spiritual Bliss with Bhakti Yoga, Kirtan & Community",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-sm">
              <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="ISKCON Amsterdam Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="text-lg font-bold text-amber-900">ISKCON Amsterdam</span>
                </Link>

                <nav className="hidden md:flex gap-6">
                  <Link href="/" className="text-amber-900 hover:text-amber-600 font-medium">
                    Home
                  </Link>
                  <Link href="/about" className="text-amber-900 hover:text-amber-600 font-medium">
                    About
                  </Link>
                  <Link href="/events" className="text-amber-900 hover:text-amber-600 font-medium">
                    Events
                  </Link>
                  <Link href="/gallery" className="text-amber-900 hover:text-amber-600 font-medium">
                    Gallery
                  </Link>
                  <Link href="/teachings" className="text-amber-900 hover:text-amber-600 font-medium">
                    Teachings
                  </Link>
                  <Link href="/blog" className="text-amber-900 hover:text-amber-600 font-medium">
                    Blog
                  </Link>
                  <Link href="/contact" className="text-amber-900 hover:text-amber-600 font-medium">
                    Contact
                  </Link>
                </nav>

                <div className="flex items-center gap-4">
                  <LanguageSwitcher />
                  <Button className="hidden md:flex bg-amber-600 hover:bg-amber-700 text-white">Donate</Button>

                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-white">
                      <div className="flex flex-col gap-6 mt-8">
                        <Link href="/" className="text-amber-900 hover:text-amber-600 font-medium">
                          Home
                        </Link>
                        <Link href="/about" className="text-amber-900 hover:text-amber-600 font-medium">
                          About
                        </Link>
                        <Link href="/events" className="text-amber-900 hover:text-amber-600 font-medium">
                          Events
                        </Link>
                        <Link href="/gallery" className="text-amber-900 hover:text-amber-600 font-medium">
                          Gallery
                        </Link>
                        <Link href="/teachings" className="text-amber-900 hover:text-amber-600 font-medium">
                          Teachings
                        </Link>
                        <Link href="/blog" className="text-amber-900 hover:text-amber-600 font-medium">
                          Blog
                        </Link>
                        <Link href="/contact" className="text-amber-900 hover:text-amber-600 font-medium">
                          Contact
                        </Link>
                        <LanguageSwitcher />
                        <Button className="bg-amber-600 hover:bg-amber-700 text-white">Donate</Button>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </header>

            <main className="flex-1">{children}</main>

            <footer className="bg-amber-900 text-amber-100 py-12">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-amber-200">ISKCON Amsterdam</h3>
                    <p className="mb-4">International Society for Krishna Consciousness</p>
                    <div className="flex gap-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-amber-200 hover:text-white hover:bg-amber-800"
                      >
                        <Facebook className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-amber-200 hover:text-white hover:bg-amber-800"
                      >
                        <Instagram className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-amber-200 hover:text-white hover:bg-amber-800"
                      >
                        <Twitter className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-amber-200 hover:text-white hover:bg-amber-800"
                      >
                        <Youtube className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-amber-200">Quick Links</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/about" className="hover:text-white">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/events" className="hover:text-white">
                          Events
                        </Link>
                      </li>
                      <li>
                        <Link href="/gallery" className="hover:text-white">
                          Gallery
                        </Link>
                      </li>
                      <li>
                        <Link href="/teachings" className="hover:text-white">
                          Teachings
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog" className="hover:text-white">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="hover:text-white">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-amber-200">Programs</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/programs/sunday-feast" className="hover:text-white">
                          Sunday Feast
                        </Link>
                      </li>
                      <li>
                        <Link href="/programs/kirtan" className="hover:text-white">
                          Kirtan Sessions
                        </Link>
                      </li>
                      <li>
                        <Link href="/programs/bhagavad-Gita" className="hover:text-white">
                          Bhagavad Gita Classes
                        </Link>
                      </li>
                      <li>
                        <Link href="/programs/food-distribution" className="hover:text-white">
                          Food Distribution
                        </Link>
                      </li>
                      <li>
                        <Link href="/programs/festivals" className="hover:text-white">
                          Festivals
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-amber-200">Contact</h3>
                    <address className="not-italic space-y-2">
                      <p>123 Spiritual Street</p>
                      <p>1000 AB Amsterdam</p>
                      <p>Netherlands</p>
                      <p className="mt-2">Phone: +31 20 123 4567</p>
                      <p>Email: info@iskconamsterdam.com</p>
                    </address>
                  </div>
                </div>

                <div className="mt-12 pt-6 border-t border-amber-800 text-center">
                  <p>&copy; {new Date().getFullYear()} ISKCON Amsterdam. All rights reserved.</p>
                  <p className="mt-2 text-sm">
                    <Link href="/privacy" className="hover:text-white">
                      Privacy Policy
                    </Link>{" "}
                    |
                    <Link href="/terms" className="hover:text-white ml-2">
                      Terms of Service
                    </Link>
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
