"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { redirectToWhatsApp } from "@/utils/whatsapp"

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-white rounded-lg shadow-lg p-4 mb-4 w-72"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-green-600">Fale conosco</h3>
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm mb-3 text-dark">Olá! Como podemos ajudar você hoje?</p>
            <Button
              className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center"
              onClick={redirectToWhatsApp}
            >
              <Image src="/images/whatsapp-logo.png" alt="WhatsApp" width={24} height={24} className="mr-2" />
              Iniciar conversa
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.5,
        }}
      >
        <Button
          size="lg"
          className="rounded-full h-16 w-16 bg-green-600 hover:bg-green-700 shadow-lg p-0 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image src="/images/whatsapp-logo.png" alt="WhatsApp" width={32} height={32} />
        </Button>
      </motion.div>
    </div>
  )
}
