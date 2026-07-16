import type { ExperienceItem } from '@/types';

export const experience: ExperienceItem[] = [
  {
    company: 'Innovative S.A.',
    role: {
      es: 'Practicante de Desarrollo de Software',
      en: 'Software Development Intern',
    },
    period: {
      es: 'Mayo 2022 - Agosto 2022',
      en: 'May 2022 - August 2022',
    },
    startDate: '2022-05-01',
    endDate: '2022-08-31',
    duration: {
      es: '4 meses',
      en: '4 months',
    },
    summary: {
      es: 'San José, CR · Presencial. Construí una solución web y móvil de planillas con backend .NET Core, apps iOS y Android en producción, y una REST API segura.',
      en: 'San José, CR · On-site. Built a web and mobile payroll solution with a .NET Core backend, iOS and Android apps in production, and a secure REST API.',
    },
    description: {
      es: 'Durante mi práctica en Innovative construí una solución integral de planillas web y móvil, con apps iOS y Android en producción, backend en .NET Core y una REST API segura. Diseñé el esquema de SQL Server y los procedimientos almacenados, e integré analítica y monitoreo para uso, rendimiento y seguridad.',
      en: 'During my internship at Innovative I built an end-to-end web and mobile payroll solution, with iOS and Android apps in production, a .NET Core backend and a secure REST API. I designed the SQL Server schema and stored procedures, and integrated analytics and monitoring for usage, performance and security.',
    },
    achievements: {
      es: [
        'Construí una solución web y móvil de planillas — app iOS y app Android en producción — con Vue.js, React Native y .NET Core.',
        'Diseñé el esquema de SQL Server y los procedimientos almacenados, y entregué una REST API segura.',
        'Integré OneSignal, Firebase Analytics y Crashlytics para notificaciones y monitoreo de errores.',
        'Analicé datos de uso, rendimiento y seguridad con Python y Power BI.',
      ],
      en: [
        'Built a web and mobile payroll solution — iOS app and Android app in production — with Vue.js, React Native and .NET Core.',
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
      es: 'San José, CR · Híbrido. Construí y mantuve 4 productos SaaS fintech de misión crítica — pagos SINPE, 2FA y banca digital — para bancos, valores y cooperativas certificadas ante el BCCR.',
      en: 'San José, CR · Hybrid. Built and maintained 4 mission-critical fintech SaaS products — SINPE payments, 2FA and digital banking — for banks, brokerages and BCCR-certified credit unions.',
    },
    description: {
      es: 'Como Ingeniero de Software en Innovative construí y mantuve 4 productos SaaS fintech para clientes como Scotiabank, Banco BCT, DiDi, MultiMoney, Improsa Valores, MIDEPLAN, JUPEMA y JPC Solutions, además de cooperativas nacionales. Trabajé sobre stacks de C#/.NET, Java, React y SQL Server, entregando hotfixes en producción y cumpliendo requisitos de reguladores financieros y del Banco Central de Costa Rica.',
      en: 'As a Software Engineer at Innovative I built and maintained 4 fintech SaaS products for clients including Scotiabank, Banco BCT, DiDi, MultiMoney, Improsa Valores, MIDEPLAN, JUPEMA and JPC Solutions, plus national credit unions. I worked across C#/.NET, Java, React and SQL Server stacks, delivering production hotfixes and meeting financial-regulator and Central Bank of Costa Rica requirements.',
    },
    achievements: {
      es: [
        'Construí y mantuve 4 productos SaaS fintech para Scotiabank, Banco BCT, DiDi, MultiMoney, Improsa Valores, MIDEPLAN, JUPEMA y JPC Solutions, además de cooperativas nacionales.',
        'NovaMP SINPE — Plataforma de Pagos Electrónicos (BCCR): construí módulos de configuración y reportería financiera y entregué hotfixes sosteniendo disponibilidad 24/7 para más de 10 entidades certificadas ante el BCCR.',
        'NovaToken — Autenticación de Dos Factores (2FA): desarrollé el BackOffice en React y mantuve la lógica de tokens OTP (expiración de 60 segundos), cumpliendo requisitos de reguladores en LATAM.',
        'NovaBank — Banca por Internet Omnicanal: construí módulos de transferencia de fondos e integraciones con core bancario para Coopeguanacaste y Coope San Ramón, conforme con OWASP Top 10.',
        'JUPEMA — Gestión Digital de Expedientes: entregué un nuevo sistema de gestión de expedientes y reportería para la Junta de Pensiones del Magisterio Nacional (Java · .NET · Blazor · Oracle).',
        'También contribuí a NovaSign (firma y sello digital ante el BCCR), NovaCloud (nube conforme a normativa SINPE) y desarrollo de apps a la medida.',
      ],
      en: [
        'Built and maintained 4 fintech SaaS products for Scotiabank, Banco BCT, DiDi, MultiMoney, Improsa Valores, MIDEPLAN, JUPEMA and JPC Solutions, plus national credit unions.',
        'NovaMP SINPE — Electronic Payments Platform (BCCR): built configuration and financial-reporting modules and delivered hotfixes sustaining 24/7 uptime for 10+ entities certified by the Central Bank of Costa Rica.',
        'NovaToken — Two-Factor Authentication (2FA): developed the React BackOffice and maintained OTP token logic (60-second expiry), meeting financial-regulator requirements across LATAM.',
        'NovaBank — Omnichannel Internet Banking: built fund-transfer modules and core-banking integrations for Coopeguanacaste and Coope San Ramón, OWASP Top 10 compliant.',
        'JUPEMA — Digital Case Management: delivered a new case-management and reporting system for Costa Rica\'s National Teachers\' Pension Fund (Java · .NET · Blazor · Oracle).',
        'Also contributed to NovaSign (BCCR digital signature & sealing), NovaCloud (SINPE-compliant cloud) and custom app development.',
      ],
    },
    stack: ['C#', '.NET', '.NET Core', 'Java', 'Blazor', 'React', 'SQL Server', 'Oracle', 'T-SQL', 'Stored Procedures', 'OWASP Top 10', 'Git'],
    highlights: ['Fintech SaaS', 'SINPE / BCCR', '2FA Security', 'Digital Banking'],
  },
  {
    company: 'Servicios Computacionales Novacomp S.A.',
    role: {
      es: 'SDR / Ingeniero de Preventa',
      en: 'SDR / Pre-Sales Engineer',
    },
    period: {
      es: 'Octubre 2025 - Febrero 2026',
      en: 'October 2025 - February 2026',
    },
    startDate: '2025-10-01',
    endDate: '2026-02-28',
    duration: {
      es: '5 meses',
      en: '5 months',
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
      es: 'San José, CR · Híbrido. Desarrollo y mantengo sistemas empresariales para clientes del sector financiero sobre Java, .NET, React y SQL Server, aplicando IA y liderando QA automatizado E2E.',
      en: 'San José, CR · Hybrid. Develop and maintain enterprise systems for financial-sector clients across Java, .NET, React and SQL Server, applying AI and leading automated E2E QA.',
    },
    description: {
      es: 'De regreso en Innovative desarrollo y mantengo sistemas empresariales para clientes del sector financiero sobre stacks de Java, .NET, React y SQL Server, con front-ends en TypeScript/JavaScript y herramientas en Python, aplicando IA para ampliar capacidades de producto y acelerar la entrega. Además lidero el aseguramiento de calidad del ciclo de release con pruebas E2E automatizadas.',
      en: 'Back at Innovative, I develop and maintain enterprise systems for financial-sector clients across Java, .NET, React and SQL Server stacks, with TypeScript/JavaScript front ends and Python tooling, applying AI to extend product capabilities and accelerate delivery. I also lead quality assurance across the release cycle with automated E2E testing.',
    },
    achievements: {
      es: [
        'Desarrollo y mantengo sistemas empresariales para clientes del sector financiero sobre Java, .NET, React y SQL Server, con front-ends en TypeScript/JavaScript y herramientas en Python.',
        'Aplico IA para ampliar las capacidades de producto y acelerar la entrega.',
        'Lidero el aseguramiento de calidad del ciclo de release con pruebas E2E automatizadas en Playwright y Selenium — cobertura funcional y de regresión y gestión de defectos.',
        'Protejo la confiabilidad de sistemas fintech en producción mediante testing continuo.',
      ],
      en: [
        'Develop and maintain enterprise systems for financial-sector clients across Java, .NET, React and SQL Server, with TypeScript/JavaScript front ends and Python tooling.',
        'Apply AI to extend product capabilities and accelerate delivery.',
        'Lead quality assurance across the release cycle with automated E2E testing in Playwright and Selenium — functional and regression coverage and defect management.',
        'Protect the reliability of production fintech systems through continuous testing.',
      ],
    },
    stack: ['Java', 'C#', '.NET', 'React', 'TypeScript', 'SQL Server', 'Python', 'AI Integration', 'Playwright', 'Selenium'],
    highlights: ['Enterprise Systems', 'AI Integration', 'QA Automation', 'Fintech'],
  },
];
