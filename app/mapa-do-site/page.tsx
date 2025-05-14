import Link from "next/link"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mapa do Site | Apovel Prime",
  description:
    "Navegue facilmente pelo site da Apovel Prime. Encontre todas as páginas e seções disponíveis em nosso mapa do site.",
  alternates: {
    canonical: "/mapa-do-site",
  },
}

export default function SiteMap() {
  return (
    <>
      <BreadcrumbNav items={[{ label: "Mapa do Site", href: "/mapa-do-site" }]} />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Mapa do Site</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Páginas Principais */}
          <div>
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Páginas Principais</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-yellow-600 hover:underline">
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-yellow-600 hover:underline">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-yellow-600 hover:underline">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/planos" className="text-yellow-600 hover:underline">
                  Planos
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-yellow-600 hover:underline">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-yellow-600 hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Serviços</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos/protecao-carros" className="text-yellow-600 hover:underline">
                  Proteção para Carros
                </Link>
              </li>
              <li>
                <Link href="/servicos/protecao-motos" className="text-yellow-600 hover:underline">
                  Proteção para Motos
                </Link>
              </li>
              <li>
                <Link href="/servicos/protecao-caminhoes" className="text-yellow-600 hover:underline">
                  Proteção para Caminhões
                </Link>
              </li>
              <li>
                <Link href="/servicos/assistencia-24h" className="text-yellow-600 hover:underline">
                  Assistência 24h
                </Link>
              </li>
              <li>
                <Link href="/servicos/rastreamento" className="text-yellow-600 hover:underline">
                  Rastreamento Veicular
                </Link>
              </li>
            </ul>
          </div>

          {/* Seções da Página Inicial */}
          <div>
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Seções da Página Inicial</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/#inicio" className="text-yellow-600 hover:underline">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/#vantagens" className="text-yellow-600 hover:underline">
                  Vantagens
                </Link>
              </li>
              <li>
                <Link href="/#beneficios" className="text-yellow-600 hover:underline">
                  Benefícios
                </Link>
              </li>
              <li>
                <Link href="/#assistencia" className="text-yellow-600 hover:underline">
                  Assistência 24h
                </Link>
              </li>
              <li>
                <Link href="/#sobre" className="text-yellow-600 hover:underline">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="/#depoimentos" className="text-yellow-600 hover:underline">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-yellow-600 hover:underline">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Informações Legais */}
          <div>
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Informações Legais</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/politica-de-privacidade" className="text-yellow-600 hover:underline">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-de-uso" className="text-yellow-600 hover:underline">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/mapa-do-site" className="text-yellow-600 hover:underline">
                  Mapa do Site
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Contato</h2>
            <ul className="space-y-2">
              <li>
                <strong>Endereço:</strong> Av. Principal, 1000, Porto Seguro - BA
              </li>
              <li>
                <strong>Telefone:</strong>{" "}
                <a href="tel:+5573984632311" className="text-yellow-600 hover:underline">
                  (73) 9846-3231
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:contato@apovelprime.com.br" className="text-yellow-600 hover:underline">
                  contato@apovelprime.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Redes Sociais</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://facebook.com/apovelprime"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/apovelprime"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/apovelprime"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/apovelprime"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
