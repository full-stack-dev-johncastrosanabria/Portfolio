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
    role: 'SDR Técnico | Microsoft Cloud',
    period: 'Aug 2025 - Feb 2026',
    startDate: '2025-08-01',
    endDate: '2026-02-28',
    duration: '7 months',
    summary:
      'Rol técnico-comercial que fortaleció mi visión de arquitectura, discovery y traducción de necesidades de negocio a soluciones técnicas. Experiencia en preventa, PoCs y modernización cloud.',
    description:
      'En Novacomp, trabajé como SDR Técnico en el equipo de Microsoft Cloud, combinando responsabilidades técnicas con actividades comerciales. Participé en el descubrimiento de necesidades de clientes, diseño de soluciones cloud y demostración de tecnologías Microsoft. Esta experiencia me permitió desarrollar habilidades de comunicación técnica y entender mejor cómo traducir requisitos de negocio a arquitecturas de soluciones.',
    achievements: [
      'Realicé discovery técnico-funcional con líderes de TI y CIOs para identificar oportunidades de modernización cloud.',
      'Colaboré con arquitectos de soluciones en el diseño de PoCs (Proof of Concepts) para validar tecnologías Microsoft.',
      'Participé en demos técnicas, workshops y presentaciones a stakeholders de alto nivel.',
      'Documenté arquitecturas de referencia para migración a Azure y modernización de aplicaciones legacy.',
      'Fortalecí mi capacidad para comunicar decisiones técnicas complejas a audiencias no técnicas.',
      'Aprendí sobre gobernanza cloud, seguridad y compliance en entornos empresariales.',
    ],
    stack: ['Azure', 'Azure DevOps', 'Microsoft Fabric', 'Azure SQL', 'Azure App Service', 'Azure Functions', 'Power BI', 'Discovery', 'Solution Architecture'],
    highlights: ['Cloud Architecture', 'Technical Sales', 'PoC Development', 'Stakeholder Communication'],
  },
];
