"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"

export default function AssistanceSection() {
  const assistanceServices = [
    {
      product: "Reboque",
      description: "Temos reboques disponíveis 24 horas em todo Brasil para te socorrer em casos de acidente ou pane.",
    },
    {
      product: "Chaveiro",
      description: "Trancou a chave dentro do carro? Nós enviamos um chaveiro para resolver seu problema na hora.",
    },
    {
      product: "Troca de Pneus",
      description: "Furou o pneu? Nós enviamos um técnico para trocá-lo ou um reboque para te levar a um borracheiro.",
    },
    {
      product: "Táxi",
      description:
        "Seu veículo te deixou na mão em um raio de 40k de sua residência? Nós chamamos um táxi para levar você pra casa.",
    },
    {
      product: "Hospedagem",
      description:
        "Seu veículo te deixou na mão e você precisa passar a noite em algum hotel? Nós conseguimos um para você.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="assistencia" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center mb-2 text-dark">Assistência 24 Horas Completa</h2>
          <p className="text-center text-gray-800 max-w-2xl mx-auto mb-12">Cobertura em todo território nacional</p>
        </motion.div>

        <motion.div
          className="bg-gray-50 rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-5 border-b py-4 px-6 bg-dark">
            <div className="col-span-1 font-bold text-white">Produto</div>
            <div className="col-span-4 font-bold text-white">Descrição</div>
          </div>

          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {assistanceServices.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`grid grid-cols-1 md:grid-cols-5 py-4 px-6 items-center ${
                  index < assistanceServices.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="col-span-1 flex items-center mb-2 md:mb-0">
                  <div className="w-6 h-6 rounded-full bg-yellow flex items-center justify-center mr-2 flex-shrink-0">
                    <Check className="h-4 w-4 text-dark" />
                  </div>
                  <span className="font-medium text-dark">{service.product}</span>
                </div>
                <div className="col-span-4 text-gray-800">{service.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
