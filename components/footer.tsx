import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Sobre */}
          <div className="space-y-4">
            <Link href="/" aria-label="Página inicial da Apovel Prime">
              <Image
                src="/images/logo.png"
                alt="Apovel Prime - Proteção Veicular"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 mt-4">
              Proteção veicular com o melhor custo-benefício do mercado em Porto
              Seguro-BA. Planos a partir de R$89,90/mês.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link
                href="https://www.instagram.com/apovelprime/?hl=pt-br"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Apovel Prime"
                className="text-gray-400 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#inicio"
                  className="text-gray-400 hover:text-white"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/#vantagens"
                  className="text-gray-400 hover:text-white"
                >
                  Vantagens
                </Link>
              </li>
              <li>
                <Link
                  href="/#beneficios"
                  className="text-gray-400 hover:text-white"
                >
                  Benefícios
                </Link>
              </li>
              <li>
                <Link
                  href="/#assistencia"
                  className="text-gray-400 hover:text-white"
                >
                  Assistência 24h
                </Link>
              </li>
              <li>
                <Link href="/#sobre" className="text-gray-400 hover:text-white">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  href="/#depoimentos"
                  className="text-gray-400 hover:text-white"
                >
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-gray-400 hover:text-white">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>Proteção para Carros</li>
              <li>Proteção para Motos</li>
              <li>Proteção para Caminhões</li>
              <li>Assistência 24h</li>
              <li>Rastreamento Veicular</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              {/* <li className="flex items-start">
                <MapPin className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  Av. Principal, 1000, Porto Seguro - BA
                </span>
              </li> */}
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-yellow-500 mr-2" />
                <a
                  href="tel:+557398463231"
                  className="text-gray-400 hover:text-white"
                >
                  (73) 9846-3231
                </a>
              </li>
              {/* <li className="flex items-center">
                <Mail className="h-5 w-5 text-yellow-500 mr-2" />
                <a
                  href="mailto:contato@apovelprime.com.br"
                  className="text-gray-400 hover:text-white"
                >
                  contato@apovelprime.com.br
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} Apovel Prime. Todos os direitos reservados.</p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <Link
                href="/politica-de-privacidade"
                className="text-gray-400 hover:text-white text-sm"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos-de-uso"
                className="text-gray-400 hover:text-white text-sm"
              >
                Termos de Uso
              </Link>
              <Link
                href="/mapa-do-site"
                className="text-gray-400 hover:text-white text-sm"
              >
                Mapa do Site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
