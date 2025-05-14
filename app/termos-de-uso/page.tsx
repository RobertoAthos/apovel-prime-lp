import BreadcrumbNav from "@/components/breadcrumb-nav"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Termos de Uso | Apovel Prime",
  description: "Termos e condições de uso dos serviços da Apovel Prime. Conheça seus direitos e responsabilidades.",
  alternates: {
    canonical: "/termos-de-uso",
  },
}

export default function TermsOfService() {
  return (
    <>
      <BreadcrumbNav items={[{ label: "Termos de Uso", href: "/termos-de-uso" }]} />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Termos de Uso</h1>

        <div className="prose max-w-none">
          <p>Última atualização: 13 de maio de 2025</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e utilizar o site e os serviços da Apovel Prime, você concorda com estes Termos de Uso. Se você
            não concordar com qualquer parte destes termos, não deverá utilizar nosso site ou serviços.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Descrição dos Serviços</h2>
          <p>
            A Apovel Prime oferece serviços de proteção veicular, incluindo cobertura para roubo, furto, colisão,
            incêndio, assistência 24 horas, entre outros benefícios para veículos em Porto Seguro-BA e região.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Elegibilidade</h2>
          <p>Para utilizar nossos serviços, você deve:</p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Ter pelo menos 18 anos de idade</li>
            <li>Possuir um veículo que atenda aos nossos critérios de aceitação</li>
            <li>Fornecer informações precisas e completas durante o cadastro</li>
            <li>Manter suas informações atualizadas</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Responsabilidades do Associado</h2>
          <p>Como associado, você é responsável por:</p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Pagar as mensalidades em dia</li>
            <li>Comunicar imediatamente qualquer sinistro</li>
            <li>Fornecer documentação completa e verdadeira</li>
            <li>Seguir os procedimentos estabelecidos em caso de sinistro</li>
            <li>Manter seu veículo em boas condições</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitações de Responsabilidade</h2>
          <p>A Apovel Prime não será responsável por:</p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Danos causados por uso indevido do veículo</li>
            <li>Sinistros ocorridos durante o período de carência</li>
            <li>Eventos não cobertos pelo plano contratado</li>
            <li>Informações incorretas fornecidas pelo associado</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo do site da Apovel Prime, incluindo textos, gráficos, logos, ícones, imagens, clipes de
            áudio, downloads digitais e compilações de dados, é propriedade da Apovel Prime e está protegido por leis de
            direitos autorais.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Alterações nos Termos</h2>
          <p>
            A Apovel Prime reserva-se o direito de modificar estes Termos de Uso a qualquer momento. As alterações
            entrarão em vigor imediatamente após sua publicação no site. O uso contínuo dos serviços após tais
            alterações constitui sua aceitação dos novos termos.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Lei Aplicável</h2>
          <p>
            Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa relacionada a
            estes termos será submetida ao foro da comarca de Porto Seguro-BA.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contato</h2>
          <p>
            Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco pelo e-mail:{" "}
            <a href="mailto:contato@apovelprime.com.br">contato@apovelprime.com.br</a> ou pelo telefone (73) 9846-3231.
          </p>
        </div>
      </div>
    </>
  )
}
