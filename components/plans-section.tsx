import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PlansSection() {
  const plans = [
    {
      name: "Básico",
      price: "R$89,90",
      period: "/mês",
      description: "Ideal para carros populares",
      features: [
        "Proteção contra roubo e furto",
        "Cobertura para colisão",
        "Assistência 24 horas",
        "Guincho até 100km",
        "Proteção para terceiros até R$30 mil",
      ],
      highlight: false,
    },
    {
      name: "Prime",
      price: "R$79,90",
      period: "/mês",
      description: "Nosso plano mais popular",
      features: [
        "Proteção contra roubo e furto",
        "Cobertura para colisão",
        "Assistência 24 horas",
        "Guincho ilimitado",
        "Proteção para terceiros até R$50 mil",
        "Carro reserva por 7 dias",
        "Proteção para vidros",
      ],
      highlight: true,
    },
    {
      name: "Premium",
      price: "R$119,90",
      period: "/mês",
      description: "Proteção completa para seu veículo",
      features: [
        "Proteção contra roubo e furto",
        "Cobertura para colisão",
        "Assistência 24 horas",
        "Guincho ilimitado",
        "Proteção para terceiros até R$100 mil",
        "Carro reserva por 15 dias",
        "Proteção para vidros",
        "Rastreador veicular incluso",
        "App exclusivo",
      ],
      highlight: false,
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Nossos Planos</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Escolha o plano ideal para seu veículo e necessidades. Todos com excelente custo-benefício.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`${plan.highlight ? "border-yellow-500 shadow-lg relative" : ""}`}>
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Mais Popular
                </div>
              )}
              <CardHeader className={`text-center ${plan.highlight ? "bg-yellow-50" : ""}`}>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${plan.highlight ? "bg-yellow-500 hover:bg-yellow-600" : ""}`}>
                  Fazer Cotação
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
