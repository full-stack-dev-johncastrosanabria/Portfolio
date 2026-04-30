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
    items: ['React', 'TypeScript', 'React Native', 'Expo', 'React Query', 'Vue', 'i18next', 'Responsive UI'],
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
    items: ['Azure', 'Azure DevOps', 'Microsoft Fabric', 'Power Platform', 'SQL Server', 'Oracle', 'MySQL', 'Python', 'FastAPI', 'AI/LSTM', 'CI/CD'],
  },
];

export const profileStats: ProfileStat[] = [
  {
    value: {
      es: 'Casi 4 años',
      en: 'Nearly 4 years',
    },
    label: {
      es: 'Experiencia combinada',
      en: 'Combined experience',
    },
    detail: {
      es: 'Casi 4 años de experiencia combinando desarrollo full-stack, Azure DevOps, soluciones Microsoft Cloud y preventa técnica.',
      en: 'Nearly 4 years of combined experience in full-stack software engineering, Azure DevOps, Microsoft Cloud solutions, and technical pre-sales.',
    },
  },
  {
    value: '.NET + React',
    label: {
      es: 'Perfil híbrido',
      en: 'Hybrid profile',
    },
    detail: {
      es: 'Capacidad para entregar backend, frontend, mobile y conversaciones técnicas de negocio.',
      en: 'Ability to deliver backend, frontend, mobile and technical business conversations.',
    },
  },
  {
    value: 'Cloud + AI',
    label: {
      es: 'Microsoft Cloud e IA',
      en: 'Microsoft Cloud and AI',
    },
    detail: {
      es: 'Azure, DevOps, Fabric, Power Platform e IA aplicada a soluciones empresariales.',
      en: 'Azure, DevOps, Fabric, Power Platform and AI applied to enterprise solutions.',
    },
  },
];
