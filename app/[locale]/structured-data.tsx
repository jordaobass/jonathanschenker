export function StructuredData({ locale }: { locale: string }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jonathan Schenker",
    "jobTitle": locale === 'pt' ? "Desenvolvedor Full Stack Freelancer" : "Freelance Full Stack Developer",
    "description": locale === 'pt'
      ? "Desenvolvedor Full Stack freelancer com 10+ anos de experiência. Disponível para projetos e consultoria em React, Angular, Node.js, Flutter, Java e .NET"
      : "Freelance Full Stack Developer with 10+ years experience. Available for projects and consulting in React, Angular, Node.js, Flutter, Java and .NET",
    "url": "https://jonathanschenker.com",
    "sameAs": [
      "https://github.com/jordaobass",
      "https://www.linkedin.com/in/jonathan-schenker-0/"
    ],
    "knowsAbout": [
      "JavaScript",
      "TypeScript",
      "React",
      "Angular",
      "Node.js",
      "Flutter",
      "Java",
      ".NET Core",
      "Docker",
      "Kubernetes",
      "DevOps",
      "Software Architecture",
      "Technical Leadership",
      "Microservices",
      "AI Integration"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Developer",
      "occupationLocation": {
        "@type": "Country",
        "name": locale === 'pt' ? "Remoto / Internacional" : "Remote / International"
      },
      "skills": "React, Angular, Node.js, Flutter, Java, .NET, DevOps, AI Integration"
    },
    "offers": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": locale === 'pt' ? "Desenvolvimento de Software e Consultoria" : "Software Development and Consulting",
        "description": locale === 'pt'
          ? "Desenvolvimento web, mobile, arquitetura de software, integração de IA, consultoria técnica"
          : "Web development, mobile development, software architecture, AI integration, technical consulting"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
