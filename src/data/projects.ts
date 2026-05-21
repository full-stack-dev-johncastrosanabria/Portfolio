import type { Project } from '@/types';

const projectPriority = [
  'novamp-sinpe',
  'novatoken',
  'novabank',
  'nova-expediente-novacomp',
  'business-ai-analytics',
  'reactivities',
  'portfolio',
  'clean-api',
  'basic-business-app',
  'etickets',
  'spring-demo',
  'meals-to-go',
  'expo-amplify-demo',
  'admin-dashboard',
  'propflow',
  'vue-project',
  'flask-product-api',
  'personas-solution',
  'webapi-matricula',
  'wcf-tarjetas',
  'smartgym-api',
];

const projectItems: Project[] = [
  {
    id: 'novamp-sinpe',
    title: {
      es: 'NovaMP SINPE - Plataforma de Pagos Electrónicos',
      en: 'NovaMP SINPE - Electronic Payments Platform',
    },
    category: {
      es: 'Proyecto profesional fintech',
      en: 'Professional fintech project',
    },
    description: {
      es: 'Plataforma de medios de pago para entidades conectadas al Sistema Nacional de Pagos Electrónicos SINPE del Banco Central de Costa Rica.',
      en: 'Payments platform for institutions connected to Costa Rica Central Bank electronic payments network, SINPE.',
    },
    highlights: {
      es: [
        'Construí módulos de configuración y reportería financiera para operación de entidades certificadas por el BCCR.',
        'Atendí hotfixes en producción, cuidando disponibilidad 24/7 para más de 10 entidades financieras.',
        'Participé en funcionalidades relacionadas con movilización electrónica de fondos entre cuentas IBAN.',
        'Trabajé sobre una solución SaaS con soporte operativo crítico y estándares de conexión BCCR-SINPE.',
      ],
      en: [
        'Built configuration and financial reporting modules for institutions certified by the Central Bank of Costa Rica.',
        'Handled production hotfixes while supporting 24/7 availability for more than 10 financial institutions.',
        'Contributed to features related to electronic fund movement between IBAN accounts.',
        'Worked on a SaaS solution with critical operational support and BCCR-SINPE connection standards.',
      ],
    },
    technologies: ['C#', '.NET', 'React', 'SQL Server', 'Fintech', 'BCCR-SINPE'],
    links: [
      {
        label: {
          es: 'Ver sitio',
          en: 'View site',
        },
        href: 'https://www.in-novative.com/novamp-sinpe/',
        primary: true,
      },
    ],
    featured: true,
  },
  {
    id: 'novatoken',
    title: {
      es: 'NovaToken - Autenticación de Dos Factores (2FA)',
      en: 'NovaToken - Two-Factor Authentication (2FA)',
    },
    category: {
      es: 'Proyecto profesional seguridad',
      en: 'Professional security project',
    },
    description: {
      es: 'Solución SoftToken de segundo factor de autenticación para reforzar seguridad transaccional, OTP y cumplimiento regulatorio financiero.',
      en: 'SoftToken second-factor authentication solution for transactional security, OTP flows and financial regulatory compliance.',
    },
    highlights: {
      es: [
        'Desarrollé el BackOffice en React para operación y consulta de evidencias, usuarios y procesos de seguridad.',
        'Mantuve lógica de tokens OTP con expiración de 60 segundos para canales transaccionales.',
        'Trabajé en una solución orientada a cumplimiento con reguladores financieros en LATAM.',
        'Colaboré en flujos de seguridad para robustecer autenticación y reducir riesgo de acceso no autorizado.',
      ],
      en: [
        'Built the React BackOffice for operations and review of evidence, users and security processes.',
        'Maintained OTP token logic with 60-second expiration for transactional channels.',
        'Worked on a solution oriented to compliance with financial regulators in LATAM.',
        'Contributed to security flows that strengthen authentication and reduce unauthorized access risk.',
      ],
    },
    technologies: ['C#', '.NET', 'React', 'SQL Server', '2FA', 'OTP', 'Security'],
    links: [
      {
        label: {
          es: 'Ver sitio',
          en: 'View site',
        },
        href: 'https://www.in-novative.com/nova-token/',
        primary: true,
      },
    ],
    featured: true,
  },
  {
    id: 'novabank',
    title: {
      es: 'NovaBank - Banca por Internet Omnicanal',
      en: 'NovaBank - Omnichannel Internet Banking',
    },
    category: {
      es: 'Proyecto profesional banking',
      en: 'Professional banking project',
    },
    description: {
      es: 'Solución omnicanal de banca digital para Internet Banking y Mobile Banking, con administración centralizada y cumplimiento OWASP Top 10.',
      en: 'Omnichannel digital banking solution for Internet Banking and Mobile Banking, with centralized administration and OWASP Top 10 compliance.',
    },
    highlights: {
      es: [
        'Construí módulos de transferencia de fondos e integraciones de core bancario para Coopeguanacaste y Coope San Ramón.',
        'Implementé funcionalidades backend y frontend sobre flujos de banca por internet para cooperativas.',
        'Trabajé bajo criterios de seguridad alineados con OWASP Top 10 para canales web y app.',
        'Participé en integraciones orientadas a centralizar cambios en un repositorio de canales omnicanal.',
      ],
      en: [
        'Built fund transfer modules and core banking integrations for Coopeguanacaste and Coope San Ramon.',
        'Implemented backend and frontend functionality for cooperative internet banking flows.',
        'Worked under security criteria aligned with OWASP Top 10 for web and app channels.',
        'Contributed to integrations designed to centralize changes in an omnichannel repository.',
      ],
    },
    technologies: ['Java', 'Spring Boot', 'Vue.js', 'Banking', 'OWASP Top 10', 'Core Banking'],
    links: [
      {
        label: {
          es: 'Ver sitio',
          en: 'View site',
        },
        href: 'https://www.in-novative.com/nova-bank/',
        primary: true,
      },
    ],
    featured: true,
  },
  {
    id: 'portfolio',
    title: 'Portafolio John Castro Sanabria',
    category: 'Frontend',
    description:
      'Portafolio profesional construido para presentar experiencia, proyectos y contenido técnico con una experiencia rápida, responsive y desplegada en GitHub Pages.',
    highlights: [
      'Arquitectura frontend con React, Vite y React Router',
      'Despliegue automatizado hacia GitHub Pages',
      'Diseño responsive enfocado en marca personal técnica',
      'Secciones de proyectos, experiencia, habilidades y blog',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'i18next', 'GitHub Pages'],
    liveDemo: 'https://full-stack-dev-johncastrosanabria.github.io/Portfolio/',
    githubUrl: 'https://github.com/full-stack-dev-johncastrosanabria/Portfolio',
    featured: true,
  },
  {
    id: 'nova-expediente-novacomp',
    title: {
      es: 'NovaExpediente / Novacomp - App corporativa de empleados',
      en: 'NovaExpediente / Novacomp - Corporate employee app',
    },
    category: {
      es: 'Mobile híbrido',
      en: 'Hybrid mobile',
    },
    description: {
      es: 'Aplicación oficial para colaboradores de Novacomp, publicada como NovaExpediente en Android y Novacomp en App Store. Centraliza servicios internos, noticias importantes, denuncias o sugerencias, permisos y trámites empresariales como vacaciones.',
      en: 'Official Novacomp employee app, published as NovaExpediente on Android and Novacomp on the App Store. It centralizes internal services, important news, complaints or suggestions, permissions and business requests such as vacations.',
    },
    highlights: {
      es: [
        'App híbrida para iOS y Android con una base de código React Native',
        'Módulos para servicios de empleados, noticias, permisos y trámites internos',
        'Experiencia móvil orientada a autoservicio corporativo y comunicación interna',
        'Publicación en App Store y Google Play con soporte a versiones productivas',
      ],
      en: [
        'Hybrid iOS and Android app from one React Native codebase',
        'Modules for employee services, news, permissions and internal workflows',
        'Mobile experience focused on corporate self-service and internal communication',
        'Published on App Store and Google Play with production release support',
      ],
    },
    technologies: ['React Native', 'TypeScript', 'React Query', 'Expo', 'iOS', 'Android', 'App Store', 'Google Play'],
    links: [
      {
        label: {
          es: 'App Store',
          en: 'App Store',
        },
        href: 'https://apps.apple.com/us/app/novacomp/id1621800757',
        primary: true,
      },
      {
        label: {
          es: 'Google Play',
          en: 'Google Play',
        },
        href: 'https://play.google.com/store/apps/details?id=com.nova.NovaExpediente',
      },
    ],
    featured: true,
  },
  {
    id: 'business-ai-analytics',
    title: 'BusinessAI Analytics - Plataforma BI con IA',
    category: 'Full Stack AI',
    description: {
      es: 'Plataforma local de business intelligence para administrar datos, visualizar dashboards, pronosticar rendimiento con IA y consultar insights mediante chatbot sobre bases de datos y documentos.',
      en: 'Local business intelligence platform to manage data, visualize dashboards, forecast performance with AI and query insights through a chatbot over databases and documents.',
    },
    highlights: {
      es: [
        'Arquitectura de microservicios con Spring Boot y Spring Cloud Gateway',
        'Servicio de IA en FastAPI con modelos LSTM para pronósticos',
        'Frontend SPA en React TypeScript para dashboards e interacción analítica',
        'Persistencia en MySQL y módulos separados para productos, clientes, ventas, analítica y documentos',
      ],
      en: [
        'Microservices architecture with Spring Boot and Spring Cloud Gateway',
        'FastAPI AI service with LSTM models for forecasting',
        'React TypeScript SPA for dashboards and analytics interaction',
        'MySQL persistence and separated modules for products, customers, sales, analytics and documents',
      ],
    },
    technologies: ['Spring Boot', 'Spring Cloud Gateway', 'FastAPI', 'Python', 'React', 'TypeScript', 'MySQL', 'AI', 'LSTM'],
    links: [
      {
        label: {
          es: 'Ver Sitio',
          en: 'View Site',
        },
        href: 'https://full-stack-dev-johncastrosanabria.github.io/BusinessAI-Analytics/login',
        primary: true,
      },
    ],
    liveDemo: 'https://youtu.be/i_TPjHsoOHE',
    liveDemoLabel: {
      es: 'Ver Demo',
      en: 'View Demo',
    },
    githubUrl: 'https://github.com/full-stack-dev-johncastrosanabria/BusinessAI-Analytics',
    featured: true,
  },
  {
    id: 'reactivities',
    title: 'Reactivities - Red Social Full Stack',
    category: 'Full Stack',
    description:
      'Red social full stack con backend .NET y frontend React, enfocada en actividades, perfiles, comentarios y flujos de interacción en tiempo real.',
    highlights: [
      'Autenticación y autorización con flujo seguro de usuarios',
      'Gestión de actividades, comentarios y followers',
      'Separación clara entre backend, frontend y capa de datos',
      'Base sólida para patrones modernos como CQRS y MediatR',
    ],
    technologies: ['ASP.NET Core', 'React', 'TypeScript', 'Entity Framework Core', 'SignalR', 'JWT', 'MediatR'],
    githubUrl: 'https://github.com/castrosanabriajohn/Reactivities',
    featured: true,
  },
  {
    id: 'etickets',
    title: 'eTickets - Plataforma Cinematográfica',
    category: 'Full Stack Web',
    description:
      'Aplicación web para venta y administración de entradas de cine, con catálogo, funciones, carrito y gestión de entidades del negocio cinematográfico.',
    highlights: [
      'Arquitectura MVC con ASP.NET Core',
      'Gestión de películas, cines, actores y productores',
      'Flujo de compra y carrito para entradas',
      'Panel administrativo para operación del catálogo',
    ],
    technologies: ['ASP.NET Core MVC', 'Entity Framework Core', 'SQL Server', 'Bootstrap', 'C#'],
    githubUrl: 'https://github.com/castrosanabriajohn/eTickets',
    featured: true,
  },
  {
    id: 'admin-dashboard',
    title: 'Dashboard React',
    category: 'Frontend',
    description:
      'Dashboard administrativo en React para visualizar métricas, datos y módulos operativos con una interfaz práctica para gestión diaria.',
    highlights: [
      'Diseño de panel administrativo con enfoque en lectura rápida',
      'Componentes reutilizables para vistas de datos',
      'Estructura preparada para gráficos, tablas y navegación interna',
      'Demo pública desplegada en Netlify',
    ],
    technologies: ['React', 'JavaScript', 'CSS', 'Netlify', 'Dashboard UI', 'Data Visualization'],
    liveDemo: 'https://johns-admin-dashboard-react.netlify.app/',
    githubUrl: 'https://github.com/castrosanabriajohn/admin-dashboard',
  },
  {
    id: 'clean-api',
    title: 'Interview Clean API - Arquitectura Limpia',
    category: 'Backend',
    description:
      'API REST diseñada para demostrar criterios de entrevista técnica: separación de capas, validación, documentación y estructura mantenible.',
    highlights: [
      'Arquitectura limpia con límites claros por capa',
      'Endpoints REST orientados a pruebas técnicas',
      'Validaciones y manejo ordenado de errores',
      'Documentación lista para inspección con Swagger/OpenAPI',
    ],
    technologies: ['ASP.NET Core', 'Clean Architecture', 'REST API', 'Swagger', 'C#', 'SOLID'],
    githubUrl: 'https://github.com/full-stack-dev-johncastrosanabria/InterviewCleanApi',
  },
  {
    id: 'basic-business-app',
    title: 'BasicBusinessApp - API Clean Architecture .NET',
    category: 'Backend',
    description:
      'Aplicación empresarial base en .NET que usa Clean Architecture para separar dominio, aplicación, infraestructura y presentación.',
    highlights: [
      'Separación de responsabilidades por capas',
      'Principios SOLID aplicados a una base empresarial',
      'Estructura preparada para testing y evolución',
      'Patrones de inyección de dependencias y servicios',
    ],
    technologies: ['ASP.NET Core', 'Clean Architecture', 'C#', 'SOLID', 'Entity Framework Core'],
    githubUrl: 'https://github.com/castrosanabriajohn/BasicBusinessAppV1',
  },
  {
    id: 'propflow',
    title: 'PropFlow - Landing Page Inmobiliaria',
    category: 'Frontend',
    description:
      'Landing page inmobiliaria con estética moderna para presentar propiedades, beneficios y llamados a la acción de forma clara.',
    highlights: [
      'Diseño responsive orientado a producto inmobiliario',
      'Secciones para beneficios, propiedades y conversión',
      'Interfaz limpia con jerarquía visual fuerte',
      'Base lista para integración con formularios o CRM',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Responsive UI'],
    githubUrl: 'https://github.com/full-stack-dev-johncastrosanabria/PropFlow',
  },
  {
    id: 'meals-to-go',
    title: 'MealsToGo - Réplica de Uber Eats',
    category: 'Mobile',
    description:
      'Proyecto móvil híbrido que replica flujos tipo Uber Eats: exploración de restaurantes, menús, favoritos y experiencia de compra desde React Native.',
    highlights: [
      'Aplicación móvil híbrida con React Native',
      'Búsqueda y navegación de restaurantes',
      'Persistencia de favoritos y datos de usuario',
      'Integración con servicios móviles y mapas',
    ],
    technologies: ['React Native', 'Expo', 'Firebase', 'Google Maps API', 'Redux', 'Mobile UI'],
    githubUrl: 'https://github.com/castrosanabriajohn/MealsToGo',
  },
  {
    id: 'expo-amplify-demo',
    title: 'Expo Amplify Demo - Mobile + AWS',
    category: 'Mobile',
    description:
      'Aplicación móvil con React Native y AWS Amplify para explorar autenticación, servicios cloud y backend administrado desde el ecosistema AWS.',
    highlights: [
      'Base móvil con Expo y React Native',
      'Integración con AWS Amplify',
      'Enfoque en autenticación y backend cloud',
      'Proyecto útil para validar arquitectura mobile + cloud',
    ],
    technologies: ['React Native', 'Expo', 'AWS Amplify', 'GraphQL', 'Cloud', 'Authentication'],
    githubUrl: 'https://github.com/castrosanabriajohn/expo-amplify-demo',
  },
  {
    id: 'spring-demo',
    title: 'Spring Demo - Backend Java',
    category: 'Backend',
    description:
      'API backend con Spring Boot para demostrar fundamentos de desarrollo Java empresarial, endpoints REST y organización por capas.',
    highlights: [
      'API REST con Spring Boot',
      'Estructura backend clara y extensible',
      'Validación y manejo de errores',
      'Base adecuada para servicios Java modernos',
    ],
    technologies: ['Spring Boot', 'Java', 'REST API', 'Maven', 'Backend', 'Layered Architecture'],
    githubUrl: 'https://github.com/full-stack-dev-johncastrosanabria/spring-demo',
  },
  {
    id: 'vue-project',
    title: 'Vue Project - Frontend Framework',
    category: 'Frontend',
    description:
      'Proyecto web en Vue orientado a practicar componentes, estado, rutas y construcción de interfaces modernas con el ecosistema Vue.',
    highlights: [
      'Componentes Vue reutilizables',
      'Estructura pensada para vistas y navegación',
      'Práctica de patrones frontend modernos',
      'Base educativa para escalar a aplicaciones SPA',
    ],
    technologies: ['Vue', 'JavaScript', 'Vue Router', 'Vite', 'Frontend', 'SPA'],
    githubUrl: 'https://github.com/castrosanabriajohn/vue-project-section10',
  },
  {
    id: 'smartgym-api',
    title: 'SmartGym - Proyecto Universitario PHP',
    category: 'Backend',
    description:
      'Proyecto universitario en PHP para la gestión de operaciones de gimnasio, con foco en miembros, clases y administración interna.',
    highlights: [
      'Gestión de datos para miembros y servicios',
      'Modelo orientado a procesos de gimnasio',
      'Backend universitario con estructura CRUD',
      'Aplicación práctica de lógica de negocio en PHP',
    ],
    technologies: ['PHP', 'MySQL', 'Backend', 'CRUD', 'Academic Project'],
    githubUrl: 'https://github.com/castrosanabriajohn/smartgym',
  },
  {
    id: 'webapi-matricula',
    title: 'WebAPI Matrícula - Proyecto Universitario .NET MVC',
    category: 'Backend',
    description:
      'Sistema universitario .NET para gestión de matrícula, estudiantes y cursos, construido como ejercicio integral de backend académico.',
    highlights: [
      'Gestión de estudiantes, cursos y matrícula',
      'Lógica de negocio académica',
      'Estructura basada en .NET y MVC/Web API',
      'Persistencia de datos con SQL Server',
    ],
    technologies: ['ASP.NET MVC', 'C#', 'SQL Server', 'Entity Framework', 'Web API'],
    githubUrl: 'https://github.com/castrosanabriajohn/WebAPIMatricula_3C2023',
  },
  {
    id: 'wcf-tarjetas',
    title: 'WCF Servicio Tarjetas - Proyecto Universitario',
    category: 'Backend',
    description:
      'Servicio WCF universitario para operaciones relacionadas con tarjetas, aplicando comunicación SOAP y conceptos clásicos de servicios distribuidos.',
    highlights: [
      'Servicio distribuido con WCF',
      'Contratos SOAP para comunicación entre sistemas',
      'Operaciones orientadas a tarjetas',
      'Práctica de integración en .NET Framework',
    ],
    technologies: ['WCF', '.NET Framework', 'SOAP', 'C#', 'SQL Server'],
    githubUrl: 'https://github.com/castrosanabriajohn/WcfServicioTarjetas_3C2023-Ulacit',
  },
  {
    id: 'personas-solution',
    title: 'PersonasSolution - Gestión de Personas',
    category: 'Backend',
    description:
      'Solución en Visual Basic para gestionar entidades de personas, pensada como base práctica para operaciones CRUD, separación de capas y persistencia.',
    highlights: [
      'Modelo de dominio centrado en personas',
      'Operaciones CRUD organizadas',
      'Estructura preparada para extender reglas de negocio',
      'Proyecto útil para demostrar fundamentos backend',
    ],
    technologies: ['Visual Basic', 'CRUD', 'Backend', 'SQL', 'Layered Architecture'],
    githubUrl: 'https://github.com/full-stack-dev-johncastrosanabria/PersonasSolution',
  },
  {
    id: 'flask-product-api',
    title: 'Flask Product API',
    category: 'Backend',
    description:
      'API ligera en Flask para gestión de productos, ideal para demostrar endpoints REST, simplicidad de Python y construcción rápida de servicios.',
    highlights: [
      'API REST compacta con Flask',
      'Gestión de productos mediante endpoints claros',
      'Base simple para pruebas, integración o prototipos',
      'Demuestra versatilidad fuera del stack .NET',
    ],
    technologies: ['Python', 'Flask', 'REST API', 'Backend', 'CRUD'],
    githubUrl: 'https://github.com/full-stack-dev-johncastrosanabria/FlaskApiProdcuct',
  },
];

export const projects: Project[] = [...projectItems].sort(
  (current, next) => projectPriority.indexOf(current.id) - projectPriority.indexOf(next.id),
);
