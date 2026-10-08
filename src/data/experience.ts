import type { ExperienceItem } from '@/types';
import { professionalPhotos } from '@/data/professionalPhotos';

export const experience: ExperienceItem[] = [
  {
    company: 'Innovative S.A.',
    role: {
      es: 'Practicante de Desarrollo de Software',
      en: 'Software Development Intern',
    },
    period: {
      es: 'Mayo 2022 - Octubre 2022',
      en: 'May 2022 - October 2022',
    },
    startDate: '2022-05-01',
    endDate: '2022-10-31',
    duration: {
      es: '6 meses',
      en: '6 months',
    },
    summary: {
      es: 'San José, CR · Presencial. Desarrollé una aplicación web y móvil para colaboradores: noticias, permisos, convenios, eventos y perfiles, con .NET Core, Vue y React Native.',
      en: 'San José, CR · On-site. Developed an employee web and mobile application for news, leave, agreements, events and profiles with .NET Core, Vue and React Native.',
    },
    description: {
      es: 'Durante mi práctica desarrollé una aplicación para colaboradores y su backoffice, con REST API en .NET Core y SQL Server. Integré notificaciones, analítica y monitoreo de errores, y analicé datos de uso y rendimiento con Python y Power BI.',
      en: 'During my internship I developed an employee application and its backoffice, using a .NET Core REST API and SQL Server. I integrated notifications, analytics and error monitoring, and analyzed usage and performance data with Python and Power BI.',
    },
    achievements: {
      es: [
        'Desarrollé una app web y móvil para colaboradores y su backoffice con Vue.js, React Native, .NET Core y SQL Server.',
        'Diseñé el esquema de SQL Server y los procedimientos almacenados, y entregué una REST API segura.',
        'Integré OneSignal, Firebase Analytics y Crashlytics para notificaciones y monitoreo de errores.',
        'Analicé datos de uso, rendimiento y seguridad con Python y Power BI.',
      ],
      en: [
        'Developed an employee web and mobile app and its backoffice with Vue.js, React Native, .NET Core and SQL Server.',
        'Designed the SQL Server schema and stored procedures, and delivered a secure REST API.',
        'Integrated OneSignal, Firebase Analytics and Crashlytics for notifications and error monitoring.',
        'Analyzed usage, performance and security data with Python and Power BI.',
      ],
    },
    stack: ['.NET Core', 'C#', 'Vue.js', 'React Native', 'SQL Server', 'Firebase', 'Python', 'Power BI'],
    highlights: ['Full Stack Development', 'Mobile Deployment', 'REST API'],
  },
  {
    company: 'Innovative S.A. (Novacomp Group)',
    role: {
      es: 'Ingeniero de Software',
      en: 'Software Engineer',
    },
    period: {
      es: 'Octubre 2022 - Setiembre 2025',
      en: 'October 2022 - September 2025',
    },
    startDate: '2022-10-03',
    endDate: '2025-09-30',
    duration: {
      es: '2 años 11 meses',
      en: '2 years 11 months',
    },
    summary: {
      es: 'San José, CR · Remoto. Construí y mantuve 4 productos SaaS fintech de misión crítica — pagos SINPE, 2FA y banca digital — para bancos, valores y cooperativas certificadas ante el BCCR.',
      en: 'San José, CR · Remote. Built and maintained 4 mission-critical fintech SaaS products — SINPE payments, 2FA and digital banking — for banks, brokerages and BCCR-certified credit unions.',
    },
    description: {
      es: 'Como Ingeniero de Software en Innovative construí y mantuve 4 productos SaaS fintech para clientes como Scotiabank, Banco BCT, DiDi, MultiMoney, Improsa Valores, MIDEPLAN, JUPEMA y JPC Solutions, además de cooperativas nacionales. Trabajé sobre stacks de C#/.NET, Java, React y SQL Server, entregando hotfixes en producción y cumpliendo requisitos de reguladores financieros y del Banco Central de Costa Rica.',
      en: 'As a Software Engineer at Innovative I built and maintained 4 fintech SaaS products for clients including Scotiabank, Banco BCT, DiDi, MultiMoney, Improsa Valores, MIDEPLAN, JUPEMA and JPC Solutions, plus national credit unions. I worked across C#/.NET, Java, React and SQL Server stacks, delivering production hotfixes and meeting financial-regulator and Central Bank of Costa Rica requirements.',
    },
    achievements: {
      es: [
        'Construí y mantuve 4 productos SaaS fintech para Scotiabank, Banco BCT, DiDi, MultiMoney, Improsa Valores, MIDEPLAN, JUPEMA y JPC Solutions, además de cooperativas nacionales.',
        'NovaMP SINPE — Plataforma de Pagos Electrónicos (BCCR): construí módulos de configuración y reportería financiera y entregué hotfixes sosteniendo disponibilidad 24/7 para más de 10 entidades certificadas ante el BCCR.',
        'Reduje una consulta de reportería de alto volumen de 47 s a 3,1 s mediante análisis de planes de ejecución, índices con INCLUDE y reemplazo de cursores por operaciones basadas en conjuntos.',
        'NovaToken — Autenticación de Dos Factores (2FA): desarrollé el BackOffice en React y mantuve la lógica de tokens OTP (expiración de 60 segundos), cumpliendo requisitos de reguladores en LATAM.',
        'NovaBank — Banca por Internet Omnicanal: construí módulos de transferencia de fondos e integraciones con core bancario para Coopeguanacaste y Coope San Ramón, conforme con OWASP Top 10.',
        'JUPEMA — Gestión Digital de Expedientes: entregué un nuevo sistema de gestión de expedientes y reportería para la Junta de Pensiones del Magisterio Nacional (Java · .NET · Blazor · Oracle).',
        'También contribuí a NovaSign (firma y sello digital ante el BCCR), NovaCloud (nube conforme a normativa SINPE) y desarrollo de apps a la medida.',
      ],
      en: [
        'Built and maintained 4 fintech SaaS products for Scotiabank, Banco BCT, DiDi, MultiMoney, Improsa Valores, MIDEPLAN, JUPEMA and JPC Solutions, plus national credit unions.',
        'NovaMP SINPE — Electronic Payments Platform (BCCR): built configuration and financial-reporting modules and delivered hotfixes sustaining 24/7 uptime for 10+ entities certified by the Central Bank of Costa Rica.',
        'Reduced a high-volume reporting query from 47 s to 3.1 s through execution-plan analysis, covering indexes with INCLUDE and set-based replacements for cursor logic.',
        'NovaToken — Two-Factor Authentication (2FA): developed the React BackOffice and maintained OTP token logic (60-second expiry), meeting financial-regulator requirements across LATAM.',
        'NovaBank — Omnichannel Internet Banking: built fund-transfer modules and core-banking integrations for Coopeguanacaste and Coope San Ramón, OWASP Top 10 compliant.',
        'JUPEMA — Digital Case Management: delivered a new case-management and reporting system for Costa Rica\'s National Teachers\' Pension Fund (Java · .NET · Blazor · Oracle).',
        'Also contributed to NovaSign (BCCR digital signature & sealing), NovaCloud (SINPE-compliant cloud) and custom app development.',
      ],
    },
    stack: ['C#', '.NET', '.NET Core', 'Java', 'Blazor', 'Angular', 'React', 'Vue', 'SQL Server', 'PostgreSQL', 'Oracle', 'MongoDB', 'T-SQL', 'Stored Procedures', 'OWASP Top 10', 'Azure DevOps', 'Git'],
    highlights: ['Fintech SaaS', 'SINPE / BCCR', '2FA Security', 'Digital Banking'],
    photo: professionalPhotos.publication,
  },
  {
    company: 'Servicios Computacionales Novacomp S.A.',
    role: {
      es: 'SDR / Ingeniero de Preventa',
      en: 'SDR / Pre-Sales Engineer',
    },
    period: {
      es: 'Octubre 2025 - Marzo 2026',
      en: 'October 2025 - March 2026',
    },
    startDate: '2025-10-01',
    endDate: '2026-03-31',
    duration: {
      es: '6 meses',
      en: '6 months',
    },
    summary: {
      es: 'San José, CR · Híbrido. Rol híbrido de preventa técnica y desarrollo de negocio para soluciones Microsoft Cloud, datos e IA, con un promedio de ~15 reuniones calificadas por mes.',
      en: 'San José, CR · Hybrid. Hybrid technical pre-sales and business-development role for Microsoft Cloud, data and AI solutions, averaging ~15 qualified meetings per month.',
    },
    description: {
      es: 'En Novacomp trabajé en un rol híbrido entre preventa técnica, desarrollo de negocio y consultoría comercial para soluciones Microsoft Cloud. Aproveché mi experiencia full stack para llevar conversaciones técnico-consultivas, traduciendo necesidades de negocio en hojas de ruta de soluciones Microsoft Cloud e IA, y progresé de SDR Tech a preventa independiente.',
      en: 'At Novacomp I worked in a hybrid role across technical pre-sales, business development and commercial consulting for Microsoft Cloud solutions. I used my full stack background to lead technical-consultative conversations, translating business needs into Microsoft Cloud and AI solution roadmaps, and progressed from SDR Tech to independent pre-sales.',
    },
    achievements: {
      es: [
        'Generé y califiqué pipeline para soluciones de Azure, Microsoft 365, Power Platform, MS Fabric y Azure DevOps, con un promedio de ~15 reuniones calificadas por mes.',
        'Lideré conversaciones técnico-consultivas traduciendo necesidades de negocio en hojas de ruta de soluciones Microsoft Cloud e IA.',
        'Progresé a preventa independiente, liderando talleres y propuestas sin supervisión.',
        'Aproveché mi experiencia full stack para sostener conversaciones técnicas con clientes y equipos internos.',
      ],
      en: [
        'Generated and qualified pipeline for Azure, Microsoft 365, Power Platform, MS Fabric and Azure DevOps solutions, averaging ~15 qualified meetings per month.',
        'Led technical-consultative conversations translating business needs into Microsoft Cloud and AI solution roadmaps.',
        'Progressed to independent pre-sales, leading workshops and proposals without supervision.',
        'Used my full stack background to sustain technical conversations with clients and internal teams.',
      ],
    },
    stack: ['Azure', 'Azure DevOps', 'Microsoft Fabric', 'Power Platform', 'Microsoft 365', 'AI Solutions', 'Pre-Sales', 'Business Development'],
    highlights: ['Microsoft Cloud', 'AI Solutions', 'Technical Pre-Sales', 'Business Development'],
    photo: professionalPhotos.event,
  },
  {
    company: 'Innovative S.A. (Novacomp Group)',
    role: {
      es: 'Ingeniero de Software',
      en: 'Software Engineer',
    },
    period: {
      es: 'Abril 2026 - Actualidad',
      en: 'April 2026 - Present',
    },
    startDate: '2026-04-01',
    endDate: '',
    duration: {
      es: 'Actualidad',
      en: 'Present',
    },
    summary: {
      es: 'San José, CR · Remoto. Desarrollo APIs y sistemas financieros con Java, .NET, React y SQL. Reduje la regresión de 3 días a 6 horas mediante QA automatizado.',
      en: 'San José, CR · Remote. Develop APIs and financial systems with Java, .NET, React and SQL. Reduced regression from 3 days to 6 hours through automated QA.',
    },
    description: {
      es: 'De regreso en Innovative desarrollo y mantengo sistemas empresariales para clientes del sector financiero sobre stacks de Java, .NET, React y SQL Server, con front-ends en TypeScript/JavaScript y herramientas en Python, aplicando IA para ampliar capacidades de producto y acelerar la entrega. Además lidero el aseguramiento de calidad del ciclo de release con pruebas E2E automatizadas.',
      en: 'Back at Innovative, I develop and maintain enterprise systems for financial-sector clients across Java, .NET, React and SQL Server stacks, with TypeScript/JavaScript front ends and Python tooling, applying AI to extend product capabilities and accelerate delivery. I also lead quality assurance across the release cycle with automated E2E testing.',
    },
    achievements: {
      es: [
        'Desarrollo y mantengo sistemas empresariales para clientes del sector financiero sobre Java, .NET, React y SQL Server, con front-ends en TypeScript/JavaScript y herramientas en Python.',
        'Desarrollo REST APIs y microservicios contenerizados con Docker, Flask y Express.',
        'Reduje la regresión de 3 días a 6 horas con 22 suites E2E de rutas críticas en Playwright y Selenium y pruebas paralelas xUnit/NUnit.',
        'Detecté 11 defectos antes de producción en 4 releases consecutivos de una plataforma de pagos 24/7.',
        'Integro APIs de LLMs y scripts Python en flujos de IA aplicada para generación de reportes financieros.',
      ],
      en: [
        'Develop and maintain enterprise systems for financial-sector clients across Java, .NET, React and SQL Server, with TypeScript/JavaScript front ends and Python tooling.',
        'Develop containerized REST APIs and microservices with Docker, Flask and Express.',
        'Reduced regression from 3 days to 6 hours with 22 critical-path E2E suites in Playwright and Selenium and parallel xUnit/NUnit tests.',
        'Caught 11 defects before production across 4 consecutive releases of a 24/7 payments platform.',
        'Integrate LLM APIs and Python scripts into applied-AI workflows for financial report generation.',
      ],
    },
    stack: ['Java', 'C#', '.NET', 'React', 'TypeScript', 'SQL Server', 'Python', 'Flask', 'Express', 'Docker', 'Playwright', 'Selenium', 'xUnit', 'NUnit'],
    highlights: ['Enterprise Systems', 'AI Integration', 'QA Automation', 'Fintech'],
    photo: professionalPhotos.team,
  },
];
