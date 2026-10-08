import type { ProfileStat, SkillGroup } from '@/types';

export const skillGroups: SkillGroup[] = [
  {
    title: {
      es: 'Backend empresarial',
      en: 'Enterprise backend',
    },
    description: {
      es: 'Diseño de APIs, servicios y microservicios con foco en arquitectura limpia, seguridad, mantenibilidad e integración.',
      en: 'API, service and microservice design focused on clean architecture, security, maintainability and integration.',
    },
    items: ['C#', 'ASP.NET Core', 'Java', 'Spring Boot', 'Python', 'REST APIs', 'JWT', 'Entity Framework Core', 'MediatR'],
  },
  {
    title: {
      es: 'Arquitectura y calidad',
      en: 'Architecture and quality',
    },
    description: {
      es: 'Buenas prácticas para construir soluciones empresariales limpias y fáciles de evolucionar.',
      en: 'Best practices for building clean enterprise solutions that are easier to evolve.',
    },
    items: {
      es: ['Clean Architecture', 'Microservicios', 'CQRS', 'SOLID', 'Patrones de diseño', 'Testing mindset'],
      en: ['Clean Architecture', 'Microservices', 'CQRS', 'SOLID', 'Design patterns', 'Testing mindset'],
    },
  },
  {
    title: {
      es: 'Frontend y mobile',
      en: 'Frontend and mobile',
    },
    description: {
      es: 'Construcción de interfaces web y móviles modernas conectadas a APIs, con enfoque responsive, accesible y productivo.',
      en: 'Modern web and mobile interface development connected to APIs, with a responsive, accessible and productive approach.',
    },
    items: ['React', 'Angular', 'Blazor', 'TypeScript', 'React Native', 'Expo', 'React Query', 'Vue', 'i18next', 'Responsive UI'],
  },
  {
    title: {
      es: 'Cloud, datos e IA',
      en: 'Cloud, data and AI',
    },
    description: {
      es: 'Experiencia integrando datos, automatización, despliegues y soluciones Microsoft Cloud con visión técnica y consultiva.',
      en: 'Experience integrating data, automation, deployments and Microsoft Cloud solutions with a technical and consultative perspective.',
    },
    items: ['Azure', 'Azure DevOps', 'Microsoft Fabric', 'Power Platform', 'SQL Server', 'PostgreSQL', 'Oracle', 'MySQL', 'MongoDB', 'Python', 'FastAPI', 'AI/LSTM', 'GitHub Actions', 'Docker', 'CI/CD'],
  },
  {
    title: { es: 'Agentic AI e IA aplicada', en: 'Agentic AI and applied AI' },
    description: {
      es: 'Proyectos de ingeniería multiagente, integración de herramientas, RAG, observabilidad y ejecución controlada con verificación.',
      en: 'Projects in multi-agent engineering, tool integration, RAG, observability and controlled execution with verification.',
    },
    items: ['LangGraph', 'RAG', 'MCP', 'Langfuse', 'Ollama', 'FastAPI', 'React', 'Docker Sandboxes', 'Claude', 'Codex'],
  },
];

export const profileStats: ProfileStat[] = [
  {
    value: {
      es: '4 años',
      en: '4 years',
    },
    label: {
      es: 'Experiencia combinada',
      en: 'Combined experience',
    },
    detail: {
      es: 'Experiencia combinada en ingeniería full-stack, fintech regulado, Microsoft Cloud y preventa técnica.',
      en: 'Combined experience in full-stack engineering, regulated fintech, Microsoft Cloud and technical pre-sales.',
    },
  },
  {
    value: { es: '3 días → 6 h', en: '3 days → 6 h' },
    label: {
      es: 'Regresión automatizada',
      en: 'Automated regression',
    },
    detail: {
      es: '22 suites E2E de rutas críticas; 11 defectos detectados antes de producción en 4 releases.',
      en: '22 critical-path E2E suites; 11 defects caught before production across 4 releases.',
    },
  },
  {
    value: 'Agentic AI',
    label: {
      es: 'Ingeniería aplicada',
      en: 'Applied engineering',
    },
    detail: {
      es: 'LangGraph, RAG y MCP en proyectos multiagente, con guardrails, observabilidad y verificación.',
      en: 'LangGraph, RAG and MCP in multi-agent projects with guardrails, observability and verification.',
    },
  },
];
