export const projects = [
  {
    id: 'reactivities',
    title: 'Reactivities - Red Social Full Stack',
    category: 'Full Stack',
    description:
      'Plataforma de red social completa con .NET 8 backend y React frontend. Arquitectura limpia con CQRS, MediatR y Entity Framework Core.',
    highlights: [
      'Autenticación JWT y autorización basada en roles',
      'Real-time updates con SignalR',
      'Gestión de actividades, comentarios y followers',
      'Interfaz moderna con React 19 y Tailwind CSS',
    ],
    technologies: ['.NET 8', 'React 19', 'SignalR', 'Entity Framework', 'PostgreSQL', 'JWT'],
    featured: true,
  },
  {
    id: 'etickets',
    title: 'eTickets - Plataforma Cinematográfica',
    category: 'Full Stack Web',
    description:
      'Sistema de venta de entradas para cines con ASP.NET Core MVC. Gestión de películas, cines, funciones y compra de boletos.',
    highlights: [
      'Arquitectura MVC con Entity Framework Core',
      'Carrito de compras y procesamiento de pagos',
      'Panel administrativo para gestión de contenido',
      'Autenticación con Identity Framework',
    ],
    technologies: ['ASP.NET Core MVC', 'Entity Framework', 'SQL Server', 'Bootstrap', 'Stripe'],
    featured: true,
  },
  {
    id: 'clean-api',
    title: 'Interview Clean API - Arquitectura Limpia',
    category: 'Backend',
    description:
      'API REST implementando Clean Architecture con separación clara de capas, SOLID principles y patrones de diseño avanzados.',
    highlights: [
      'Arquitectura en capas: Presentation, Application, Domain, Infrastructure',
      'Validación con FluentValidation',
      'Logging y manejo de excepciones centralizado',
      'Documentación con Swagger/OpenAPI',
    ],
    technologies: ['.NET Core', 'Clean Architecture', 'FluentValidation', 'AutoMapper', 'Swagger'],
    githubUrl: 'https://github.com/full-stack-dev-johncastrosanabria/InterviewCleanApi',
  },
  {
    id: 'propflow',
    title: 'PropFlow - Landing Page Inmobiliaria',
    category: 'Frontend',
    description:
      'Landing page moderna para plataforma inmobiliaria. Diseño responsivo con animaciones fluidas y optimización SEO.',
    highlights: [
      'Diseño responsive y mobile-first',
      'Animaciones con Framer Motion',
      'Optimización de Core Web Vitals',
      'Integración con formularios de contacto',
    ],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Next.js', 'Vercel'],
    githubUrl: 'https://github.com/full-stack-dev-johncastrosanabria/PropFlow',
  },
  {
    id: 'admin-dashboard',
    title: 'Admin Dashboard - React',
    category: 'Frontend',
    description:
      'Dashboard administrativo completo con gráficos, tablas interactivas y gestión de datos en tiempo real.',
    highlights: [
      'Gráficos con Chart.js y Recharts',
      'Tablas con paginación y filtrado',
      'Tema oscuro/claro',
      'Responsive design',
    ],
    technologies: ['React 19', 'Tailwind CSS', 'Recharts', 'React Router', 'Context API'],
    liveDemo: 'https://johns-admin-dashboard-react.netlify.app/',
    featured: false,
  },
  {
    id: 'criadero-pastores',
    title: 'Criadero Pastores - E-commerce',
    category: 'Full Stack',
    description:
      'Plataforma e-commerce para venta de perros de raza. Gestión de inventario, carrito de compras y sistema de pedidos.',
    highlights: [
      'Catálogo de productos con filtros avanzados',
      'Carrito de compras persistente',
      'Sistema de órdenes y seguimiento',
      'Integración con pasarela de pagos',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Netlify'],
    liveDemo: 'https://canesbarvae.netlify.app/',
    featured: false,
  },
  {
    id: 'meals-to-go',
    title: 'MealsToGo - Uber Eats Clone',
    category: 'Mobile',
    description:
      'Aplicación móvil híbrida que replica la funcionalidad de Uber Eats. Búsqueda de restaurantes, menús y pedidos.',
    highlights: [
      'Geolocalización en tiempo real',
      'Búsqueda y filtrado de restaurantes',
      'Carrito de compras persistente',
      'Integración con Google Maps',
    ],
    technologies: ['React Native', 'Expo', 'Firebase', 'Google Maps API', 'Redux'],
  },
  {
    id: 'expo-amplify-demo',
    title: 'Expo Amplify Demo - Mobile + AWS',
    category: 'Mobile',
    description:
      'Aplicación móvil con React Native y AWS Amplify. Autenticación, base de datos en tiempo real y almacenamiento en la nube.',
    highlights: [
      'Autenticación con Cognito',
      'Base de datos DynamoDB',
      'Almacenamiento S3',
      'API GraphQL con AppSync',
    ],
    technologies: ['React Native', 'Expo', 'AWS Amplify', 'GraphQL', 'DynamoDB'],
  },
  {
    id: 'spring-demo',
    title: 'Spring Demo - Backend Java',
    category: 'Backend',
    description:
      'API REST con Spring Boot. Demostración de patrones de diseño, inyección de dependencias y buenas prácticas en Java.',
    highlights: [
      'Spring Boot con Spring Data JPA',
      'Validación con Bean Validation',
      'Manejo de excepciones global',
      'Documentación con Springdoc OpenAPI',
    ],
    technologies: ['Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'Maven', 'Docker'],
    githubUrl: 'https://github.com/full-stack-dev-johncastrosanabria/spring-demo',
  },
  {
    id: 'vue-project',
    title: 'Vue Project - Frontend Framework',
    category: 'Frontend',
    description:
      'Proyecto educativo con Vue.js. Componentes reutilizables, state management con Pinia y routing avanzado.',
    highlights: [
      'Componentes Vue 3 con Composition API',
      'State management con Pinia',
      'Routing con Vue Router',
      'Estilos con Tailwind CSS',
    ],
    technologies: ['Vue 3', 'Pinia', 'Vue Router', 'Tailwind CSS', 'Vite'],
  },
  {
    id: 'smartgym-api',
    title: 'SmartGym API - Proyecto Universitario',
    category: 'Backend',
    description:
      'API para gestión de gimnasios. Gestión de miembros, clases, entrenadores y seguimiento de progreso.',
    highlights: [
      'Autenticación y autorización',
      'Gestión de membresías',
      'Programación de clases',
      'Reportes de progreso',
    ],
    technologies: ['PHP', 'Laravel', 'MySQL', 'REST API', 'JWT'],
  },
  {
    id: 'webapi-matricula',
    title: 'WebAPI Matrícula - Proyecto Universitario .NET',
    category: 'Backend',
    description:
      'Sistema de matrícula universitaria. Gestión de estudiantes, cursos, calificaciones y reportes académicos.',
    highlights: [
      'Gestión de estudiantes y cursos',
      'Cálculo de calificaciones',
      'Generación de reportes',
      'Autenticación de usuarios',
    ],
    technologies: ['.NET Framework', 'SQL Server', 'Entity Framework', 'Web API', 'LINQ'],
  },
  {
    id: 'wcf-tarjetas',
    title: 'WCF Servicio Tarjetas - Proyecto Universitario',
    category: 'Backend',
    description:
      'Servicio WCF para gestión de tarjetas de crédito. Validación, procesamiento y seguridad de transacciones.',
    highlights: [
      'Servicio WCF distribuido',
      'Validación de tarjetas',
      'Procesamiento de transacciones',
      'Seguridad y encriptación',
    ],
    technologies: ['WCF', '.NET Framework', 'SOAP', 'SQL Server', 'Encryption'],
  },
  {
    id: 'basic-business-app',
    title: 'BasicBusinessApp - Clean Architecture .NET',
    category: 'Backend',
    description:
      'Aplicación empresarial con arquitectura limpia. Demostración de SOLID principles, patrones de diseño y testing.',
    highlights: [
      'Arquitectura limpia en capas',
      'SOLID principles aplicados',
      'Unit testing con xUnit',
      'Inyección de dependencias',
    ],
    technologies: ['.NET Core', 'Clean Architecture', 'xUnit', 'Moq', 'AutoMapper'],
  },
];
