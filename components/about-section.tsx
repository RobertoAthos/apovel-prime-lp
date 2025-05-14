"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { redirectToWhatsApp } from "@/utils/whatsapp"
import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center mb-4 text-yellow">Sobre nós</h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
            Conheça a história da Apovel Prime e nossa missão de oferecer proteção veicular de qualidade com o melhor
            custo-benefício
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo textual */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white">Proteção veicular com tradição e confiança</h3>
            <p className="text-gray-300">
              A Apovel Prime nasceu com o propósito de democratizar o acesso à proteção veicular de qualidade. Desde
              nossa fundação, temos trabalhado incansavelmente para oferecer serviços que realmente fazem a diferença na
              vida de nossos associados.
            </p>
            <p className="text-gray-300">
              Com uma equipe altamente qualificada e anos de experiência no mercado, nos tornamos referência em proteção
              veicular, atendendo milhares de clientes em todo o Brasil com excelência e agilidade.
            </p>
            <p className="text-gray-300">
              Nossa missão é proporcionar tranquilidade e segurança para nossos associados através de planos acessíveis
              e coberturas completas, sempre com atendimento humanizado e eficiente.
            </p>
            <div className="pt-4">
              <Button className="bg-yellow hover:bg-yellow/90 text-dark" onClick={redirectToWhatsApp}>
                Conheça nossos valores
              </Button>
            </div>
          </motion.div>

          {/* Imagem da equipe */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-full max-w-[500px] overflow-hidden rounded-xl shadow-lg">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative aspect-[4/3]">
                <Image
                  src="/images/equipe-apovel.jpeg"
                  alt="Equipe Apovel Prime"
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent rounded-xl">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-medium text-yellow text-lg">Nossa equipe</p>
                    <p className="text-sm text-white/90">
                      Profissionais dedicados a oferecer o melhor atendimento e proteção para seu veículo
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
