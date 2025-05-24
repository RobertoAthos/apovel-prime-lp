"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Shield, Clock, ThumbsUp, ArrowRight } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"
import BenefitsSection from "@/components/benefits-section"
import TestimonialsSection from "@/components/testimonials-section"
import FaqSection from "@/components/faq-section"
import AssistanceSection from "@/components/assistance-section"
import AboutSection from "@/components/about-section"
import { redirectToWhatsApp } from "@/utils/whatsapp"
import { motion } from "framer-motion"
import BreadcrumbNav from "@/components/breadcrumb-nav"

// Variantes de animação
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function Home() {
  return (
    <>
      <BreadcrumbNav items={[{ label: "Início", href: "/" }]} />

      <main className="flex min-h-screen flex-col">        {/* Hero Section */}
        <section id="inicio" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
          <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                className="space-y-6 text-center md:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >          
             <div className="w-full flex justify-center md:justify-start mb-4">
                  <Image
                    src="/images/logo.png"
                    alt="Apovel Prime - Proteção Veicular"
                    width={200}
                    height={100}          
                    priority
                  />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Proteção Veicular com o melhor custo-benefício
                </h1>
                <p className="text-lg md:text-xl">
                  Proteja seu veículo contra roubo, furto, colisão, incêndio e muito mais com planos a partir de
                  R$89,90/mês.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-yellow hover:bg-yellow/90 text-dark font-medium"
                    onClick={redirectToWhatsApp}
                    aria-label="Faça sua cotação de proteção veicular"
                  >
                    Faça sua cotação
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                    onClick={redirectToWhatsApp}
                    aria-label="Fale conosco pelo WhatsApp"
                  >
                    <Phone className="mr-2 h-4 w-4" /> Fale conosco
                  </Button>
                </div>
                <div className="flex items-center gap-2 bg-white/20 p-3 rounded-lg w-fit">
                  <Image
                    src="/images/reclame-aqui.png"
                    alt="Avaliação Positiva no Reclame Aqui"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                  <div>
                    <p className="text-sm font-medium">Avaliação Positiva</p>
                    <p className="text-xs">Reclame Aqui</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="relative h-64 md:h-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="/images/vehicles.png"
                  alt="Veículos protegidos pela Apovel Prime"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Resto do conteúdo permanece o mesmo, apenas com melhorias de SEO nos textos alternativos e aria-labels */}
        {/* ... */}

        {/* Vantagens */}
        <section id="vantagens" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
              <h2 className="text-3xl font-bold text-center mb-4 text-dark">Por que escolher a Apovel Prime?</h2>
              <p className="text-center text-dark text-lg max-w-2xl mx-auto mb-12 font-medium">
                Conheça as vantagens que fazem da Apovel Prime a melhor escolha para proteção do seu veículo em Porto
                Seguro-BA.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div variants={fadeIn}>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                      <Shield className="h-8 w-8 text-yellow-600" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Proteção Completa</h3>
                    <p className="text-white">
                      Cobertura para roubo, furto, colisão, incêndio e muito mais para seu veículo em Porto Seguro e
                      região.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                      <ThumbsUp className="h-8 w-8 text-yellow-600" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Melhor Custo-Benefício</h3>
                    <p className="text-white">
                      Planos até 60% mais baratos que seguros tradicionais com as mesmas coberturas e benefícios.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                      <Clock className="h-8 w-8 text-yellow-600" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Atendimento 24h</h3>
                    <p className="text-white">
                      Assistência 24 horas por dia, 7 dias por semana, em todo o território nacional, incluindo Porto
                      Seguro-BA.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefícios */}
        <BenefitsSection />

        {/* Assistência 24 Horas */}
        <AssistanceSection />

        {/* Sobre nós */}
        <AboutSection />

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">Pronto para proteger seu veículo?</h2>
              <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto mb-10">
                Faça sua cotação agora mesmo e descubra como a Apovel Prime pode oferecer a melhor proteção veicular em
                Porto Seguro-BA com o melhor custo-benefício do mercado.
              </p>
              <Button
                size="lg"
                className="bg-yellow hover:bg-yellow/90 text-dark font-bold text-lg px-8 py-6"
                onClick={redirectToWhatsApp}
                aria-label="Faça sua cotação de proteção veicular agora"
              >
                Faça sua cotação
              </Button>
              <p className="mt-6 text-gray-700">Sem compromisso. Resposta em até 24 horas.</p>
            </motion.div>
          </div>
        </section>

        {/* Depoimentos */}
        <TestimonialsSection />

        {/* FAQ */}
        <FaqSection />

        {/* CTA Final */}
        <section className="py-20 bg-yellow text-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Proteja seu veículo agora mesmo</h2>
                <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                  Junte-se a milhares de clientes satisfeitos e garanta a melhor proteção para seu
                  veículo com condições especiais.
                </p>
                <Button
                  size="lg"
                  className="bg-dark hover:bg-dark/90 text-white font-bold text-lg px-10 py-7 group"
                  onClick={redirectToWhatsApp}
                  aria-label="Faça sua cotação de proteção veicular"
                >
                  Faça sua cotação
                  <ArrowRight
                    className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Button>
              </motion.div>

              <motion.div
                className="mt-8 flex flex-wrap justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-dark/10 flex items-center justify-center mr-3">
                    <Shield className="h-5 w-5 text-dark" aria-hidden="true" />
                  </div>
                  <span className="font-medium">Proteção completa</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-dark/10 flex items-center justify-center mr-3">
                    <Clock className="h-5 w-5 text-dark" aria-hidden="true" />
                  </div>
                  <span className="font-medium">Atendimento 24h</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-dark/10 flex items-center justify-center mr-3">
                    <ThumbsUp className="h-5 w-5 text-dark" aria-hidden="true" />
                  </div>
                  <span className="font-medium">Melhor custo-benefício</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Botão flutuante do WhatsApp */}
        <WhatsAppButton />
      </main>
    </>
  )
}
