import type { ProfileStat, SkillGroup } from '@/types';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend .NET',
    description: {
      es: 'Diseño e implementación de APIs y servicios orientados a mantenibilidad, seguridad y escalabilidad.',
      en: 'Design and implementation of APIs and services focused on maintainability, security and scalability.',
    },
    items: ['C#', '.NET', 'ASP.NET Core', 'REST APIs', 'JWT', 'Dependency Injection'],
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
      es: ['Clean Architecture', 'DDD', 'Patrones de diseño', 'Microservicios', 'SOLID', 'Testing mindset'],
      en: ['Clean Architecture', 'DDD', 'Design patterns', 'Microservices', 'SOLID', 'Testing mindset'],
    },
  },
  {
    title: {
      es: 'Frontend y experiencia',
      en: 'Frontend and user experience',
    },
    description: {
      es: 'Capacidad para construir interfaces modernas y conectar la UI con servicios backend de forma ordenada.',
      en: 'Ability to build modern interfaces and connect the UI with backend services in an organized way.',
    },
    items: ['React', 'JavaScript', 'TypeScript', 'Vue', 'Blazor', 'Responsive UI'],
  },
  {
    title: {
      es: 'Datos, nube y DevOps',
      en: 'Data, cloud and DevOps',
    },
    description: {
      es: 'Experiencia desplegando, integrando y automatizando software sobre stack Microsoft.',
      en: 'Experience deploying, integrating and automating software on the Microsoft stack.',
    },
    items: ['SQL Server', 'Oracle', 'Azure', 'Azure DevOps', 'CI/CD', 'Git'],
  },
];

export const profileStats: ProfileStat[] = [
  {
    value: {
      es: '3+ años',
      en: '3+ years',
    },
    label: {
      es: 'Experiencia en desarrollo',
      en: 'Development experience',
    },
    detail: {
      es: 'Construyendo backend, APIs y soluciones full stack para entornos empresariales.',
      en: 'Building backend, APIs and full stack solutions for enterprise environments.',
    },
  },
  {
    value: '.NET + React',
    label: {
      es: 'Perfil híbrido',
      en: 'Hybrid profile',
    },
    detail: {
      es: 'Capacidad para entregar tanto lógica de negocio como interfaces modernas.',
      en: 'Ability to deliver both business logic and modern interfaces.',
    },
  },
  {
    value: 'Azure DevOps',
    label: {
      es: 'Entrega continua',
      en: 'Continuous delivery',
    },
    detail: {
      es: 'Automatización de despliegues y trazabilidad del ciclo de vida del software.',
      en: 'Deployment automation and traceability across the software delivery lifecycle.',
    },
  },
];
