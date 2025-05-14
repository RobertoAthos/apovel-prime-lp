import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Pronto para proteger seu veículo?</h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Faça sua cotação agora mesmo e descubra como a Apovel Prime pode oferecer a melhor proteção veicular com o
          melhor custo-benefício do mercado.
        </p>
        <Button size="lg" className="bg-yellow hover:bg-yellow/90 text-dark font-bold text-lg px-8 py-6">
          Faça sua cotação
        </Button>
        <p className="mt-6 text-gray-400">Sem compromisso. Resposta em até 24 horas.</p>
      </div>
    </section>
  )
}
