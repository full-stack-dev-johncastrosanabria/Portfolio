import type { LocalizedString, LocalizedStringArray } from '@/types';

interface ProjectTranslation {
  title?: LocalizedString;
  category?: LocalizedString;
  description?: LocalizedString;
  highlights?: LocalizedStringArray;
}

export const projectTranslations: Partial<Record<string, ProjectTranslation>> = {
  portfolio: {
    title: {
      en: 'John Castro Sanabria Portfolio',
    },
    description: {
      en: 'Professional portfolio built to present experience, projects and technical content with a fast, responsive experience deployed on GitHub Pages.',
    },
    highlights: {
      en: [
        'Frontend architecture with React, Vite and React Router',
        'Automated deployment to GitHub Pages',
        'Responsive design focused on a technical personal brand',
        'Projects, experience, skills and blog sections',
      ],
    },
  },
  'business-ai-analytics': {
    title: {
      en: 'BusinessAI Analytics - AI BI Platform',
    },
  },
  reactivities: {
    title: {
      en: 'Reactivities - Full Stack Social Network',
    },
    description: {
      en: 'Full stack social network with a .NET backend and React frontend, focused on activities, profiles, comments and real-time interaction flows.',
    },
    highlights: {
      en: [
        'Authentication and authorization with secure user flows',
        'Activity, comment and follower management',
        'Clear separation between backend, frontend and data layers',
        'Solid foundation for modern patterns such as CQRS and MediatR',
      ],
    },
  },
  etickets: {
    title: {
      en: 'eTickets - Movie Ticketing Platform',
    },
    description: {
      en: 'Web application for selling and managing movie tickets, with catalog, showtimes, cart and management of cinema business entities.',
    },
    highlights: {
      en: [
        'MVC architecture with ASP.NET Core',
        'Movie, cinema, actor and producer management',
        'Ticket purchase and cart flow',
        'Admin panel for catalog operations',
      ],
    },
  },
  'admin-dashboard': {
    description: {
      en: 'React admin dashboard for visualizing metrics, data and operational modules with a practical interface for daily management.',
    },
    highlights: {
      en: [
        'Admin panel design focused on fast reading',
        'Reusable components for data views',
        'Structure prepared for charts, tables and internal navigation',
        'Public demo deployed on Netlify',
      ],
    },
  },
  'clean-api': {
    title: {
      en: 'Interview Clean API - Clean Architecture',
    },
    description: {
      en: 'REST API designed to demonstrate technical interview criteria: layer separation, validation, documentation and maintainable structure.',
    },
    highlights: {
      en: [
        'Clean architecture with clear layer boundaries',
        'REST endpoints oriented to technical exercises',
        'Validation and organized error handling',
        'Inspection-ready documentation with Swagger/OpenAPI',
      ],
    },
  },
  'basic-business-app': {
    description: {
      en: 'Base enterprise application in .NET using Clean Architecture to separate domain, application, infrastructure and presentation.',
    },
    highlights: {
      en: [
        'Layered separation of responsibilities',
        'SOLID principles applied to an enterprise foundation',
        'Structure prepared for testing and evolution',
        'Dependency injection and service patterns',
      ],
    },
  },
  propflow: {
    title: {
      en: 'PropFlow - Real Estate Landing Page',
    },
    description: {
      en: 'Real estate landing page with a modern aesthetic for presenting properties, benefits and calls to action clearly.',
    },
    highlights: {
      en: [
        'Responsive design oriented to real estate products',
        'Sections for benefits, properties and conversion',
        'Clean interface with strong visual hierarchy',
        'Base ready for form or CRM integration',
      ],
    },
  },
  'meals-to-go': {
    title: {
      en: 'MealsToGo - Uber Eats Clone',
    },
    description: {
      en: 'Hybrid mobile project that recreates Uber Eats-style flows: restaurant discovery, menus, favorites and purchase experience from React Native.',
    },
    highlights: {
      en: [
        'Hybrid mobile app with React Native',
        'Restaurant search and navigation',
        'Favorites and user data persistence',
        'Integration with mobile services and maps',
      ],
    },
  },
  'expo-amplify-demo': {
    description: {
      en: 'Mobile application with React Native and AWS Amplify to explore authentication, cloud services and managed backend capabilities in the AWS ecosystem.',
    },
    highlights: {
      en: [
        'Mobile foundation with Expo and React Native',
        'AWS Amplify integration',
        'Focus on authentication and cloud backend',
        'Useful project for validating mobile + cloud architecture',
      ],
    },
  },
  'spring-demo': {
    description: {
      en: 'Backend API with Spring Boot to demonstrate enterprise Java development fundamentals, REST endpoints and layered organization.',
    },
    highlights: {
      en: [
        'REST API with Spring Boot',
        'Clear and extensible backend structure',
        'Validation and error handling',
        'Solid base for modern Java services',
      ],
    },
  },
  'vue-project': {
    description: {
      en: 'Vue web project focused on practicing components, state, routes and modern interface construction with the Vue ecosystem.',
    },
    highlights: {
      en: [
        'Reusable Vue components',
        'Structure designed for views and navigation',
        'Practice of modern frontend patterns',
        'Educational base for scaling into SPA applications',
      ],
    },
  },
  'smartgym-api': {
    title: {
      en: 'SmartGym - University PHP Project',
    },
    description: {
      en: 'University PHP project for managing gym operations, focused on members, classes and internal administration.',
    },
    highlights: {
      en: [
        'Data management for members and services',
        'Model oriented to gym processes',
        'University backend with CRUD structure',
        'Practical application of business logic in PHP',
      ],
    },
  },
  'webapi-matricula': {
    title: {
      en: 'Enrollment WebAPI - University .NET MVC Project',
    },
    description: {
      en: 'University .NET system for managing enrollment, students and courses, built as a comprehensive academic backend exercise.',
    },
    highlights: {
      en: [
        'Student, course and enrollment management',
        'Academic business logic',
        'Structure based on .NET and MVC/Web API',
        'Data persistence with SQL Server',
      ],
    },
  },
  'wcf-tarjetas': {
    title: {
      en: 'WCF Card Service - University Project',
    },
    description: {
      en: 'University WCF service for card-related operations, applying SOAP communication and classic distributed service concepts.',
    },
    highlights: {
      en: [
        'Distributed service with WCF',
        'SOAP contracts for system-to-system communication',
        'Card-oriented operations',
        'Integration practice in .NET Framework',
      ],
    },
  },
  'personas-solution': {
    title: {
      en: 'PersonasSolution - People Management',
    },
    description: {
      en: 'Visual Basic solution for managing people entities, designed as a practical base for CRUD operations, layer separation and persistence.',
    },
    highlights: {
      en: [
        'Domain model centered on people',
        'Organized CRUD operations',
        'Structure prepared to extend business rules',
        'Useful project for demonstrating backend fundamentals',
      ],
    },
  },
  'flask-product-api': {
    description: {
      en: 'Lightweight Flask API for product management, useful for demonstrating REST endpoints, Python simplicity and fast service construction.',
    },
    highlights: {
      en: [
        'Compact REST API with Flask',
        'Product management through clear endpoints',
        'Simple base for testing, integration or prototypes',
        'Demonstrates versatility outside the .NET stack',
      ],
    },
  },
};
