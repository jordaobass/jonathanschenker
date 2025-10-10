import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code, Briefcase, Star, GitFork, ExternalLink, Building2 } from "lucide-react";
import { getGitHubUser, getGitHubRepos } from "@/lib/github";
import Image from "next/image";
import { HighlightsCarousel } from "@/components/highlights-carousel";
import { getTranslations } from 'next-intl/server';

export function generateStaticParams() {
  return [{ locale: 'pt' }, { locale: 'en' }];
}

export default async function Home() {
  const t = await getTranslations();
  const githubUsername = "jordaobass";
  const userData = await getGitHubUser(githubUsername);
  const repos = await getGitHubRepos(githubUsername);

  const technologies = [
    "JavaScript", "TypeScript", "Angular", "React", "Next.js", "Node.js",
    "Flutter", "Java", ".NET Core", "MongoDB", "PostgreSQL", "MySQL", "Oracle", "SQL Server",
    "Docker", "Kubernetes", "CI/CD", "Microservices", "Grafana", "K6", "Prometheus", "Loki", "Tempo",
    "ChatGPT", "Claude AI", "Machine Learning", "AI Integration"
  ];

  const experiences = [
    {
      title: t('experience.frontend.title'),
      description: t('experience.frontend.description'),
      technologies: ["JavaScript", "TypeScript", "Angular", "React", "Next.js", "Microfrontends", "Performance"]
    },
    {
      title: t('experience.backend.title'),
      description: t('experience.backend.description'),
      technologies: ["Java", ".NET Core", "Microservices", "REST", "GraphQL", "SQL"]
    },
    {
      title: t('experience.devops.title'),
      description: t('experience.devops.description'),
      technologies: ["Docker", "Kubernetes", "CI/CD", "AWS", "Azure", "Terraform"]
    },
    {
      title: t('experience.lead.title'),
      description: t('experience.lead.description'),
      technologies: ["Arquitetura", "Liderança", "Mentoria", "Code Review", "Scrum"]
    },
    {
      title: t('experience.mobile.title'),
      description: t('experience.mobile.description'),
      technologies: ["Flutter", "Dart", "Mobile UI/UX", "REST APIs"]
    }
  ];

  const sectors = [
    t('sectors.public'),
    t('sectors.banking'),
    t('sectors.startups'),
    t('sectors.health')
  ];

  return (
    <div className="min-h-screen gradient-bg">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-green-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10">
        <section className="border-b border-gray-200/50 dark:border-gray-700/50">
          <div className="container mx-auto px-4 py-12 md:py-20 lg:py-32">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Avatar */}
                <div className="relative group shrink-0">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
                  <div className="relative">
                    <Image
                      src={userData.avatar_url}
                      alt={userData.name}
                      width={160}
                      height={160}
                      className="w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-full border-4 border-white dark:border-gray-900"
                      priority
                    />
                  </div>
                </div>

                {/* Hero Content */}
                <div className="flex-1 text-center md:text-left w-full">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4 break-words">
                    <span className="gradient-text animate-gradient">
                      {userData.name}
                    </span>
                  </h1>
                  <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 md:mb-8">
                    {t('hero.title')}
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-4 md:gap-6 mb-6 md:mb-8">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold gradient-text">{userData.public_repos}</div>
                      <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{t('hero.repositories')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold gradient-text">10+</div>
                      <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{t('hero.yearsExperience')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold gradient-text">4</div>
                      <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{t('hero.countries')}</div>
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 md:mb-8 leading-relaxed">
                    {t('hero.description')}
                  </p>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
                    <Button asChild size="lg" className="bg-[#24292e] hover:bg-[#1a1e22] text-white w-full sm:w-auto">
                      <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                        {t('nav.github')}
                      </a>
                    </Button>
                    <Button asChild size="lg" className="bg-[#0077b5] hover:bg-[#006097] text-white w-full sm:w-auto">
                      <a href="https://www.linkedin.com/in/jonathan-schenker-0/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                        {t('nav.linkedin')}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="border-b border-gray-200/50 dark:border-gray-700/50">
          <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8 md:mb-10">
                <div className="p-2 md:p-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg">
                  <Code className="h-5 w-5 md:h-7 md:w-7 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{t('sections.technologies')}</h2>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {technologies.map((tech, index) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-sm md:text-base px-3 md:px-5 py-1.5 md:py-2 glass hover:scale-110 transition-transform cursor-default"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="border-b border-gray-200/50 dark:border-gray-700/50">
          <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8 md:mb-10">
                <div className="p-2 md:p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                  <Briefcase className="h-5 w-5 md:h-7 md:w-7 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{t('sections.experience')}</h2>
              </div>
              <div className="grid gap-4 md:gap-6 grid-cols-1 lg:grid-cols-2">
                {experiences.map((exp, index) => (
                  <Card key={index} className="glass hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg md:text-xl">{exp.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                        {exp.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 md:mt-12 p-4 md:p-8 glass rounded-xl border-l-4 border-green-600">
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-6 font-semibold">💡 {t('sections.highlights')}:</p>
                <HighlightsCarousel />
              </div>
            </div>
          </div>
        </section>

        {/* Sectors Experience */}
        <section className="border-b border-gray-200/50 dark:border-gray-700/50">
          <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8 md:mb-10">
                <div className="p-2 md:p-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg">
                  <Building2 className="h-5 w-5 md:h-7 md:w-7 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{t('sections.sectors')}</h2>
              </div>
              <Card className="glass">
                <CardContent className="pt-6">
                  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {t('sectors.description')}
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {sectors.map((sector) => (
                      <Badge key={sector} variant="secondary" className="text-sm md:text-base px-3 md:px-5 py-1.5 md:py-2 glass hover:scale-105 transition-transform">
                        {sector}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-6 italic">
                    {t('sectors.quote')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section from GitHub */}
        <section className="border-b border-gray-200/50 dark:border-gray-700/50">
          <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8 md:mb-10">
                <div className="p-2 md:p-3 bg-gradient-to-r from-purple-600 to-green-600 rounded-lg">
                  <Github className="h-5 w-5 md:h-7 md:w-7 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{t('sections.projects')}</h2>
              </div>
              <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {repos.map((repo) => (
                  <Card key={repo.id} className="glass hover:shadow-2xl hover:scale-[1.02] md:hover:scale-105 transition-all duration-300 border-2 hover:border-purple-500/50">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <CardTitle className="text-sm md:text-base break-words line-clamp-2">{repo.name}</CardTitle>
                        {repo.language && (
                          <Badge variant="outline" className="shrink-0 text-xs">
                            {repo.language}
                          </Badge>
                        )}
                      </div>
                      {repo.description && (
                        <CardDescription className="line-clamp-2 text-xs md:text-sm">
                          {repo.description}
                        </CardDescription>
                      )}
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 md:h-4 md:w-4" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="h-3 w-3 md:h-4 md:w-4" />
                          <span>{repo.forks_count}</span>
                        </div>
                      </div>
                      <Button asChild variant="secondary" className="w-full group text-sm md:text-base">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                          {t('projects.viewProject')}
                          <ExternalLink className="ml-2 h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8 md:mt-10">
                <Button asChild size="lg" variant="outline" className="glass w-full sm:w-auto">
                  <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                    <span className="text-sm md:text-base">{t('projects.viewAll', { count: userData.public_repos })}</span>
                    <ExternalLink className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="border-b border-gray-200/50 dark:border-gray-700/50">
          <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8">{t('sections.about')}</h2>
              <Card className="glass">
                <CardContent className="pt-4 md:pt-6">
                  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4 md:mb-6 leading-relaxed">
                    {t('about.description1')}
                  </p>
                  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4 md:mb-6 leading-relaxed">
                    {t('about.description2')}
                  </p>
                  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4 md:mb-6 leading-relaxed">
                    {t('about.description3')}
                  </p>
                  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6">
                    {t('about.hobbiesTitle')}
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {t.raw('hobbies').map((hobby: string) => (
                      <Badge key={hobby} variant="secondary" className="text-sm md:text-base px-3 md:px-4 py-1.5 md:py-2 glass">
                        {hobby}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mt-6 italic">
                    {t('about.quote')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 md:py-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-3 md:mb-4">
              &copy; {new Date().getFullYear()} {userData.name}. {t('footer.rights')}
            </p>
            <p className="text-xs md:text-sm text-gray-500">
              {t('footer.madeWith')}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
