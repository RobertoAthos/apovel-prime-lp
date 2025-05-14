"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Cliente desde 2021",
      content:
        "Excelente serviço! Quando precisei acionar a assistência, fui atendido rapidamente e sem burocracia. Recomendo a todos.",
      rating: 5,
    },
    {
      name: "Ana Oliveira",
      role: "Cliente desde 2022",
      content:
        "Valor muito abaixo do mercado de seguros e com os mesmos benefícios. O atendimento é rápido e eficiente.",
      rating: 5,
    },
    {
      name: "Roberto Santos",
      role: "Cliente desde 2020",
      content:
        "Já utilizei o guincho duas vezes e o serviço foi impecável. A equipe é muito atenciosa e resolve tudo rapidamente.",
      rating: 5,
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="depoimentos" className="py-16 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center mb-4 text-yellow">O que dizem nossos clientes</h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
            Veja o que nossos clientes têm a dizer sobre nossos serviços de proteção veicular.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={item}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow fill-yellow" />
                    ))}
                  </div>
                  <p className="mb-6 text-white">{testimonial.content}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-gray-500">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
