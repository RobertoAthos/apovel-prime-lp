"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { redirectToWhatsApp } from "@/utils/whatsapp"
import { motion } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Vantagens", href: "#vantagens" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Assistência", href: "#assistencia" },
    { name: "Sobre nós", href: "#sobre" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "FAQ", href: "#faq" },
  ]

  return (
    <motion.header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white shadow-sm py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center">
            <Image src="/images/logo-claro.png" alt="Apovel Prime" width={180} height={60} className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-yellow font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-yellow text-yellow hover:bg-yellow/10"
              onClick={redirectToWhatsApp}
            >
              <Phone className="mr-2 h-4 w-4" /> (73) 9846-3231
            </Button>
            <Button className="bg-yellow hover:bg-yellow/90 text-dark" onClick={redirectToWhatsApp}>
              Faça sua cotação
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-dark border-t py-4 px-4 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-4 flex justify-center">
            <Image src="/images/logo-claro.png" alt="Apovel Prime" width={150} height={50} className="h-10 w-auto" />
          </div>
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-yellow font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 flex flex-col space-y-3">
              <Button
                variant="outline"
                className="border-yellow text-yellow hover:bg-yellow/10 w-full justify-start"
                onClick={redirectToWhatsApp}
              >
                <Phone className="mr-2 h-4 w-4" /> (73) 9846-3231
              </Button>
              <Button className="bg-yellow hover:bg-yellow/90 text-dark w-full" onClick={redirectToWhatsApp}>
                Faça sua cotação
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
