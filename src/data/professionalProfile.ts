import { experience } from '@/data/experience';
import { siteConfig } from '@/config/site';

// Shared, evidence-backed content for the web CV and generated PDFs.
export const professionalProfile = {
  name: 'John Benjamín Castro Sanabria',
  location: { es: 'San José, Costa Rica', en: 'San José, Costa Rica' },
  email: siteConfig.email,
  links: {
    portfolio: 'https://full-stack-dev-johncastrosanabria.github.io/Portfolio/',
    linkedin: 'https://www.linkedin.com/in/john-castro-sanabria/',
    github: siteConfig.githubProfileUrl,
    x: 'https://x.com/JohnCS97',
  },
  title: {
    es: 'Ingeniero de Software Full-Stack | Fintech & Agentic AI',
    en: 'Full-Stack Software Engineer | Fintech & Agentic AI',
  },
  summary: {
    es: 'Ingeniero de software con 4 años de experiencia combinada en desarrollo full-stack, fintech regulado y preventa Microsoft Cloud. Desarrollo sistemas de pagos, autenticación y banca con C#/.NET, React, Angular y SQL; reduje la regresión de 3 días a 6 horas y una consulta crítica de 47 s a 3,1 s. Complemento esta trayectoria con proyectos de IA aplicada y sistemas multiagente con LangGraph, RAG, MCP, Python y FastAPI. Busco oportunidades como Ingeniero de Software o Ingeniero de IA.',
    en: 'Software engineer with 4 years of combined experience in full-stack development, regulated fintech and Microsoft Cloud pre-sales. I build payment, authentication and banking systems with C#/.NET, React, Angular and SQL; reduced regression from 3 days to 6 hours and a critical query from 47 s to 3.1 s. I complement this background with applied AI and multi-agent projects using LangGraph, RAG, MCP, Python and FastAPI. Targeting Software Engineer or AI Engineer opportunities.',
  },
  skills: [
    { label: { es: 'Desarrollo', en: 'Development' }, items: 'C#, .NET / ASP.NET Core, Java, Spring Boot, Python, Flask, FastAPI, Node.js / Express, React, Angular, Vue, Blazor, TypeScript, JavaScript, React Native' },
    { label: { es: 'Datos y arquitectura', en: 'Data and architecture' }, items: 'SQL Server, T-SQL, PostgreSQL, Oracle, MySQL, MongoDB, REST APIs, Clean Architecture, JWT, Entity Framework Core' },
    { label: { es: 'Entrega y calidad', en: 'Delivery and quality' }, items: 'Azure DevOps, Azure App Service, GitHub Actions, Docker, Git, xUnit, NUnit, MSTest, Moq, Playwright, Selenium' },
    { label: { es: 'IA aplicada', en: 'Applied AI' }, items: 'LangGraph, RAG, MCP, Langfuse, Ollama, FastAPI, observability, guardrails, Docker Sandboxes, Claude, Codex' },
  ],
  experience: [...experience].sort((a, b) => b.startDate.localeCompare(a.startDate)).map((item) => ({
    ...item,
    // Retain the full timeline; the CV selects the most relevant evidence.
    achievements: {
      es: item.achievements && !Array.isArray(item.achievements) ? selectAchievements(item.startDate, item.achievements.es ?? []) : [],
      en: item.achievements && !Array.isArray(item.achievements) ? selectAchievements(item.startDate, item.achievements.en ?? []) : [],
    },
  })),
  projects: [
    {
      name: 'AI NOVA — Multi-agent software engineering',
      href: 'https://www.linkedin.com/in/john-castro-sanabria/',
      description: {
        es: 'Proyecto colaborativo del programa AI NOVA: agentes de producto, arquitectura, desarrollo, seguridad, testing y revisión en un flujo controlado y observable con guardrails. LangGraph, RAG, MCP, Langfuse, Ollama, FastAPI y React.',
        en: 'Collaborative AI NOVA program project: product, architecture, development, security, testing and review agents in a controlled, observable workflow with guardrails. LangGraph, RAG, MCP, Langfuse, Ollama, FastAPI and React.',
      },
    },
    {
      name: 'Docker Coding Agent',
      href: 'https://github.com/full-stack-dev-johncastrosanabria/docker-coding-agent-v1',
      description: {
        es: 'Proyecto de agentes de programación con Claude/Codex en Docker Sandboxes: ejecución acotada, verificación y reportes. Repositorio público con alcance y limitaciones de V1 documentados.',
        en: 'Coding-agent project using Claude/Codex in Docker Sandboxes: bounded execution, verification and reports. Public repository with documented V1 scope and limitations.',
      },
    },
    {
      name: 'BusinessAI Analytics',
      href: 'https://github.com/full-stack-dev-johncastrosanabria/BusinessAI-Analytics',
      description: {
        es: 'BI local con dashboards, pronósticos y chatbot bilingüe. Cinco servicios Spring Boot detrás de Spring Cloud Gateway, React/TypeScript, FastAPI y MySQL; aproximadamente 180 pruebas JUnit 5, jqwik, pytest y Vitest, con GitHub Actions y SonarQube.',
        en: 'Local BI with dashboards, forecasts and a bilingual chatbot. Five Spring Boot services behind Spring Cloud Gateway, React/TypeScript, FastAPI and MySQL; approximately 180 JUnit 5 tests, jqwik, pytest and Vitest, with GitHub Actions and SonarQube.',
      },
    },
    {
      name: 'InterviewCleanAPI',
      href: 'https://github.com/full-stack-dev-johncastrosanabria/InterviewCleanApi',
      description: {
        es: '.NET 10 con Clean Architecture de cuatro capas, EF Core/MySQL, JWT y RBAC. 20 pruebas API xUnit con WebApplicationFactory y pruebas Selenium para clientes React, Angular y Vue.',
        en: '.NET 10 with four-layer Clean Architecture, EF Core/MySQL, JWT and RBAC. 20 xUnit API tests using WebApplicationFactory and Selenium tests for React, Angular and Vue clients.',
      },
    },
  ],
  education: [
    {
      institution: 'ULACIT', period: '2023–2024',
      degree: { es: 'Licenciatura en Ingeniería Informática con énfasis en Desarrollo de Software', en: 'Licentiate in Computer Engineering, Software Development emphasis (post-bachelor degree)' },
    },
    {
      institution: 'Universidad Latina de Costa Rica', period: '2019–2022',
      degree: { es: 'Bachillerato en Ingeniería de Sistemas Computacionales', en: 'Bachelor’s degree in Computer Systems Engineering' },
    },
  ],
  credentials: {
    es: 'Microsoft AZ-900: Azure Fundamentals · Microsoft MS-900: Microsoft 365 Fundamentals · Scrum Foundation Professional Certificate (SFPC). DP-800: SQL AI Developer Associate — en preparación, no certificación obtenida.',
    en: 'Microsoft AZ-900: Azure Fundamentals · Microsoft MS-900: Microsoft 365 Fundamentals · Scrum Foundation Professional Certificate (SFPC). DP-800: SQL AI Developer Associate — in preparation, not an earned certification.',
  },
  languages: {
    es: 'Español nativo · Inglés avanzado (TOEIC 935/990)',
    en: 'Native Spanish · Advanced English (TOEIC 935/990)',
  },
};

function selectAchievements(startDate: string, items: string[]) {
  let indices = [0, 2, 3];
  if (startDate.startsWith('2026')) indices = [0, 1, 2, 3, 4];
  else if (startDate.startsWith('2025')) indices = [0, 1];
  else if (startDate.startsWith('2022-10')) indices = [1, 2, 3, 4, 5];
  return indices.map((index) => items[index]).filter(Boolean);
}
