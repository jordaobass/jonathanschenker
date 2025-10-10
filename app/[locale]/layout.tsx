import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { LanguageSwitcher } from "@/components/language-switcher";
import { StructuredData } from "./structured-data";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const title = locale === 'pt'
    ? "Jonathan Schenker - Desenvolvedor Full Stack | Freelancer & Consultor"
    : "Jonathan Schenker - Full Stack Developer | Freelancer & Consultant";

  const description = locale === 'pt'
    ? "Desenvolvedor Full Stack disponível para projetos freelance e consultoria. 10+ anos de experiência em React, Angular, Node.js, Flutter, Java, .NET. Especialista em desenvolvimento web, mobile e soluções escaláveis para startups, bancos e setor público."
    : "Full Stack Developer available for freelance projects and consulting. 10+ years experience in React, Angular, Node.js, Flutter, Java, .NET. Expert in web, mobile development and scalable solutions for startups, banks and public sector.";

  return {
    title,
    description,
    keywords: [
      "desenvolvedor freelancer",
      "full stack developer freelance",
      "consultor tecnologia",
      "desenvolvedor react",
      "desenvolvedor angular",
      "desenvolvedor flutter",
      "tech lead freelancer",
      "arquiteto software",
      "desenvolvedor nodejs",
      "freelance developer",
      "technology consultant",
      "software architect",
      "hire developer",
      "contratar desenvolvedor",
      "Jonathan Schenker"
    ],
    authors: [{ name: "Jonathan Schenker" }],
    creator: "Jonathan Schenker",
    publisher: "Jonathan Schenker",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      url: "https://jonathanschenker.com",
      title,
      description,
      siteName: "Jonathan Schenker Portfolio",
      images: [
        {
          url: "https://avatars.githubusercontent.com/u/jordaobass",
          width: 1200,
          height: 630,
          alt: "Jonathan Schenker - Full Stack Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://avatars.githubusercontent.com/u/jordaobass"],
    },
    alternates: {
      canonical: `https://jonathanschenker.com/${locale}`,
      languages: {
        'pt-BR': 'https://jonathanschenker.com/pt',
        'en-US': 'https://jonathanschenker.com/en',
      },
    },
    verification: {
      google: "google-site-verification-code",
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="canonical" href={`https://jonathanschenker.com/${locale}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#16a34a" />
        <StructuredData locale={locale} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <LanguageSwitcher />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
