"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

export default function FaqSection() {
  const faqs = [
    {
      question: "Qual a diferença entre proteção veicular e seguro tradicional?",
      answer:
        "A proteção veicular funciona através de um sistema de associação mútua, onde os associados dividem os custos dos eventos. Isso permite oferecer preços mais acessíveis que seguros tradicionais, mantendo as mesmas coberturas e benefícios.",
    },
    {
      question: "Como funciona em caso de sinistro?",
      answer:
        "Em caso de sinistro, basta entrar em contato com nossa central de atendimento 24h. Um de nossos consultores irá orientá-lo sobre os procedimentos necessários e a documentação exigida. O processo é rápido e com mínima burocracia.",
    },
    {
      question: "Qualquer veículo pode ser protegido?",
      answer:
        "Aceitamos veículos de passeio, utilitários, motos e caminhões com até 20 anos de fabricação, após análise de perfil. Veículos com restrições ou problemas estruturais podem passar por uma avaliação especial.",
    },
    {
      question: "A proteção veicular cobre veículos de aplicativo (Uber, 99)?",
      answer:
        "Sim, oferecemos planos específicos para veículos utilizados em aplicativos de transporte, com coberturas adequadas para este tipo de uso.",
    },
    {
      question: "Existe carência para utilizar os serviços?",
      answer:
        "Para assistência 24h não há carência. Para proteção contra roubo e furto, a carência é de 30 dias. Para colisão e demais coberturas, a carência é de 15 dias após a vistoria do veículo.",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center mb-4 text-dark">Perguntas Frequentes</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Tire suas dúvidas sobre nossos serviços de proteção veicular.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={item}>
                <AccordionItem value={`item-${index}`} className="mb-4 rounded-lg overflow-hidden border-none">
                  <AccordionTrigger className="bg-dark text-white px-6 py-4 hover:bg-dark/90 hover:no-underline rounded-t-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="bg-dark text-white/90 px-6 py-4 rounded-b-lg">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
