import type { ExperienceItem } from '@/types';

export const experience: ExperienceItem[] = [
  {
    company: 'Innovative',
    role: 'Software Development Intern',
    period: 'May 2022 - Aug 2022',
    startDate: '2022-05-01',
    endDate: '2022-08-31',
    duration: '4 months',
    summary:
      'Participación en el desarrollo de una solución web y móvil con backend .NET, componentes frontend y soporte de despliegue. Experiencia inicial en arquitectura full stack y integración de servicios.',
    description:
      'Durante mi internship en Innovative, trabajé en un proyecto de transformación digital que incluía una solución integral con backend robusto, interfaces web modernas y aplicación móvil nativa. Colaboré con un equipo multidisciplinario en la implementación de características, optimización de performance y despliegue en múltiples plataformas.',
    achievements: [
      'Contribuí al desarrollo del backend con .NET Core, implementando APIs REST para una solución interna de gestión de trámites.',
      'Participé en el desarrollo frontend con Vue.js para la interfaz web y React Native para la aplicación móvil.',
      'Implementé integraciones de analítica y monitoreo con Firebase Analytics y Crashlytics para tracking de errores.',
      'Colaboré en el proceso de despliegue y publicación de la aplicación móvil en App Store e Google Play.',
      'Aprendí sobre CI/CD, versionamiento y buenas prácticas de desarrollo en equipo.',
    ],
    stack: ['.NET Core', 'C#', 'Vue.js', 'React Native', 'Firebase', 'JavaScript', 'Git'],
    highlights: ['Full Stack Development', 'Mobile Deployment', 'Firebase Integration'],
  },
  {
    company: 'Innovative S.A.',
    role: 'Software Engineer I (Full Stack)',
    period: 'Oct 2022 - Sep 2025',
    startDate: '2022-10-03',
    endDate: '2025-09-30',
    duration: '2 years 11 months',
    summary:
      'Desarrollo de APIs REST empresariales y soluciones full stack para el sector financiero con foco en mantenibilidad, seguridad e integración. Liderazgo técnico en arquitectura limpia y optimización de bases de datos.',
    description:
      'Como Software Engineer I en Innovative, fui responsable del diseño e implementación de soluciones backend escalables para clientes del sector financiero. Trabajé en la modernización de sistemas legacy, implementación de arquitectura limpia y optimización de performance en bases de datos empresariales. Colaboré con equipos de infraestructura en la automatización de despliegues y monitoreo de aplicaciones en producción.',
    achievements: [
      'Desarrollé más de 50 APIs REST con ASP.NET Core y C# siguiendo principios SOLID y Clean Architecture.',
      'Implementé patrones de diseño avanzados: CQRS, MediatR, Repository Pattern y Dependency Injection.',
      'Optimicé consultas SQL en SQL Server y Oracle, mejorando performance en 40-60% en operaciones críticas.',
      'Diseñé y ejecuté procedimientos almacenados complejos para reportes y procesamiento de datos.',
      'Automaticé despliegues a múltiples ambientes (DEV, QA, PROD) mediante pipelines CI/CD en Azure DevOps.',
      'Implementé estrategias de versionamiento, rollback y monitoreo de aplicaciones en producción.',
      'Mentoricé a desarrolladores junior en arquitectura y mejores prácticas de código.',
    ],
    stack: ['C#', '.NET Core', '.NET Framework', 'ASP.NET Core', 'SQL Server', 'Oracle', 'T-SQL', 'PL/SQL', 'Azure DevOps', 'Git', 'Entity Framework'],
    highlights: ['Clean Architecture', 'Database Optimization', 'CI/CD Pipelines', 'Mentoring'],
  },
  {
    company: 'Novacomp S.A.',
    role: 'Pre-Sales Engineer | Microsoft Cloud & AI Solutions',
    period: 'Aug 2025 - Feb 2026',
    startDate: '2025-08-01',
    endDate: '2026-02-28',
    duration: '7 months',
    summary:
      'Rol híbrido entre desarrollo de negocio, preventa técnica y consultoría comercial para soluciones Microsoft Cloud, con foco en Azure, DevOps, Fabric, Purview, Power Platform, Microsoft 365 e IA aplicada al negocio.',
    description:
      'Quise retarme fuera de mi zona técnica y explorar mi lado comercial, sin dejar de lado mi perfil tecnológico. En Novacomp trabajé en un rol híbrido entre desarrollo de negocio, preventa técnica y consultoría comercial para soluciones Microsoft Cloud. Generé y califiqué oportunidades relacionadas con Azure, Azure DevOps, Microsoft Fabric, Purview, Power Platform, Microsoft 365 e IA aplicada al negocio. Gracias a mi experiencia previa como Full-Stack Software Engineer, pude llevar conversaciones más técnicas y consultivas con clientes, apoyar demostraciones, dashboards, automatizaciones, propuestas y reuniones comerciales. Evolucioné de SDR Tech hacia un rol de preventa, liderando reuniones de forma independiente y manteniendo un promedio aproximado de 10 reuniones calificadas al mes.',
    achievements: [
      'Generé y califiqué oportunidades comerciales sobre soluciones Microsoft Cloud, datos, productividad e IA.',
      'Lideré reuniones calificadas de forma independiente, con un promedio aproximado de 10 reuniones al mes.',
      'Apoyé demostraciones técnicas, dashboards, automatizaciones, propuestas y reuniones comerciales consultivas.',
      'Conecté necesidades de negocio con soluciones en Azure, Azure DevOps, Microsoft Fabric, Purview, Power Platform y Microsoft 365.',
      'Aproveché mi experiencia full stack para sostener conversaciones técnicas con clientes y equipos internos.',
      'Evolucioné desde SDR Tech hacia responsabilidades de preventa técnica y consultoría comercial.',
    ],
    stack: ['Azure', 'Azure DevOps', 'Microsoft Fabric', 'Microsoft Purview', 'Power Platform', 'Microsoft 365', 'AI Solutions', 'Pre-Sales', 'Business Development'],
    highlights: ['Microsoft Cloud', 'AI Solutions', 'Technical Pre-Sales', 'Business Development'],
  },
];
