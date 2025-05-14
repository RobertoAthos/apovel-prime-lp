"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function BenefitsSection() {
  const benefits = [
    "Proteção contra roubo e furto",
    "Cobertura para colisão",
    "Proteção contra incêndio",
    "Cobertura para terceiros",
    "Assistência 24 horas",
    "Guincho ilimitado",
    "Carro reserva",
    "Proteção para vidros",
    "Cobertura nacional",
    "App exclusivo para associados",
    "Rastreamento veicular",
    "Clube de descontos",
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="beneficios" className="py-16 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center mb-4 text-yellow">Benefícios Exclusivos</h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
            A Apovel Prime oferece uma ampla gama de benefícios para garantir sua tranquilidade e segurança na estrada.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={item}>
              <Card className="border-l-4 border-l-yellow">
                <CardContent className="p-4 flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p>{benefit}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
