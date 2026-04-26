import type { ProfileStat, SkillGroup } from '@/types';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend .NET',
    description:
      'Diseño e implementación de APIs y servicios orientados a mantenibilidad, seguridad y escalabilidad.',
    items: ['C#', '.NET', 'ASP.NET Core', 'REST APIs', 'JWT', 'Dependency Injection'],
  },
  {
    title: 'Arquitectura y calidad',
    description:
      'Buenas prácticas para construir soluciones empresariales limpias y fáciles de evolucionar.',
    items: ['Clean Architecture', 'DDD', 'Patrones de diseño', 'Microservicios', 'SOLID', 'Testing mindset'],
  },
  {
    title: 'Frontend y experiencia',
    description:
      'Capacidad para construir interfaces modernas y conectar la UI con servicios backend de forma ordenada.',
    items: ['React', 'JavaScript', 'TypeScript', 'Vue', 'Blazor', 'Responsive UI'],
  },
  {
    title: 'Datos, nube y DevOps',
    description:
      'Experiencia desplegando, integrando y automatizando software sobre stack Microsoft.',
    items: ['SQL Server', 'Oracle', 'Azure', 'Azure DevOps', 'CI/CD', 'Git'],
  },
];

export const profileStats: ProfileStat[] = [
  {
    value: '3+ años',
    label: 'Experiencia en desarrollo',
    detail: 'Construyendo backend, APIs y soluciones full stack para entornos empresariales.',
  },
  {
    value: '.NET + React',
    label: 'Perfil híbrido',
    detail: 'Capacidad para entregar tanto lógica de negocio como interfaces modernas.',
  },
  {
    value: 'Azure DevOps',
    label: 'Entrega continua',
    detail: 'Automatización de despliegues y trazabilidad del ciclo de vida del software.',
  },
];
