import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

// Palavras-chave relacionadas a proteção veicular e Porto Seguro-BA
const keywords = [
  "proteção veicular",
  "seguro automotivo",
  "Porto Seguro BA",
  "assistência 24 horas",
  "cobertura para roubo",
  "cobertura para furto",
  "cobertura para colisão",
  "melhor custo-benefício",
  "associação de proteção veicular",
  "seguro para carros",
  "seguro para motos",
  "proteção veicular Bahia",
  "seguro barato",
  "guincho 24 horas",
  "proteção terceiros",
  "carro reserva",
  "rastreamento veicular",
  "Apovel Prime",
]

export const metadata: Metadata = {
  title: "Apovel Prime | Proteção Veicular em Porto Seguro-BA | Melhor Custo-Benefício",
  description:
    "Proteção veicular com o melhor custo-benefício em Porto Seguro-BA. Planos a partir de R$89,90/mês. Cobertura para roubo, furto, colisão e assistência 24h em todo Brasil.",
  keywords: keywords.join(", "),
  authors: [{ name: "Apovel Prime" }],
  creator: "Apovel Prime",
  publisher: "Apovel Prime",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL("https://apovelprime.site"),
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },
  openGraph: {
    title: "Apovel Prime | Proteção Veicular em Porto Seguro-BA",
    description:
      "Proteção veicular com o melhor custo-benefício. Planos a partir de R$89,90/mês. Cobertura para roubo, furto, colisão e assistência 24h.",
    url: "https://apovelprime.site",
    siteName: "Apovel Prime",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://apovelprime.site/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Apovel Prime - Proteção Veicular",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apovel Prime | Proteção Veicular em Porto Seguro-BA",
    description: "Proteção veicular com o melhor custo-benefício. Planos a partir de R$89,90/mês.",
    images: [],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  category: "proteção veicular",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href="https://apovelprime.site" />
        <meta name="geo.region" content="BR-BA" />
        <meta name="geo.placename" content="Porto Seguro" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {/* Schema.org JSON-LD para Rich Snippets */}
          <Script
            id="schema-org-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Apovel Prime",
                image: "https://apovelprime.site/images/placeholder-logo.png",
                "@id": "https://apovelprime.site",
                url: "https://apovelprime.site",
                telephone: "+557398463231",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Av. Principal, 1000",
                  addressLocality: "Porto Seguro",
                  addressRegion: "BA",
                  postalCode: "45810-000",
                  addressCountry: "BR",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: -16.4439,
                  longitude: -39.0644,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                sameAs: [          
                  "https://www.instagram.com/apovelprime/?hl=pt-br",
                ],
                priceRange: "$$",
                description:
                  "Proteção veicular com o melhor custo-benefício em Porto Seguro-BA. Planos a partir de R$89,90/mês.",
              }),
            }}
          />

          {/* Google Tag Manager */}
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-XXXXXXX');
              `,
            }}
          />

          <Header />
          <main>{children}</main>
          <Footer />

          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        </ThemeProvider>
      </body>
    </html>
  )
}
