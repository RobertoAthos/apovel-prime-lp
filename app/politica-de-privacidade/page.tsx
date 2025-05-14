import BreadcrumbNav from "@/components/breadcrumb-nav"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidade | Apovel Prime",
  description:
    "Política de privacidade da Apovel Prime. Saiba como tratamos seus dados pessoais e garantimos sua segurança.",
  alternates: {
    canonical: "/politica-de-privacidade",
  },
}

export default function PrivacyPolicy() {
  return (
    <>
      <BreadcrumbNav items={[{ label: "Política de Privacidade", href: "/politica-de-privacidade" }]} />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>

        <div className="prose max-w-none">
          <p>Última atualização: 13 de maio de 2025</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introdução</h2>
          <p>
            A Apovel Prime valoriza a privacidade dos seus usuários e está comprometida em proteger as informações
            pessoais que você compartilha conosco. Esta Política de Privacidade explica como coletamos, usamos,
            compartilhamos e protegemos suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados
            (LGPD).
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Informações que coletamos</h2>
          <p>Podemos coletar os seguintes tipos de informações:</p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Informações de identificação pessoal (nome, endereço, telefone, e-mail)</li>
            <li>Informações sobre seu veículo (marca, modelo, ano, placa)</li>
            <li>Histórico de sinistros e reclamações</li>
            <li>Informações de pagamento</li>
            <li>Dados de navegação em nosso site</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Como usamos suas informações</h2>
          <p>Utilizamos suas informações para:</p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Fornecer e melhorar nossos serviços de proteção veicular</li>
            <li>Processar pagamentos e gerenciar sua conta</li>
            <li>Comunicar sobre atualizações, ofertas e promoções</li>
            <li>Cumprir obrigações legais e regulatórias</li>
            <li>Prevenir fraudes e garantir a segurança</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Compartilhamento de informações</h2>
          <p>Podemos compartilhar suas informações com terceiros nas seguintes circunstâncias:</p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Prestadores de serviços que nos auxiliam (como serviços de guincho, oficinas)</li>
            <li>Parceiros de negócios para oferecer produtos complementares</li>
            <li>Autoridades governamentais quando exigido por lei</li>
            <li>Em caso de reorganização, fusão ou venda da empresa</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Seus direitos</h2>
          <p>De acordo com a LGPD, você tem direito a:</p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Acessar seus dados pessoais</li>
            <li>Corrigir dados incompletos ou imprecisos</li>
            <li>Solicitar a exclusão de seus dados</li>
            <li>Revogar seu consentimento</li>
            <li>Solicitar a portabilidade de seus dados</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Segurança de dados</h2>
          <p>
            Implementamos medidas técnicas e organizacionais para proteger suas informações contra acesso não
            autorizado, alteração, divulgação ou destruição.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contato</h2>
          <p>
            Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer seus direitos, entre em contato
            conosco pelo e-mail: <a href="mailto:privacidade@apovelprime.com.br">privacidade@apovelprime.com.br</a> ou
            pelo telefone (73) 9846-3231.
          </p>
        </div>
      </div>
    </>
  )
}
