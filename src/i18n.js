import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const savedLanguage = localStorage.getItem('portfolio-language') || 'es';

document.documentElement.lang = savedLanguage;

const resources = {
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        blog: 'Blog',
        language: 'Cambiar idioma',
      },
      hero: {
        eyebrow: 'Portafolio Full Stack .NET',
        profile: 'Perfil',
        profileTitle: 'Backend sólido, frontend moderno y delivery continuo',
        profileText:
          'Experiencia construyendo soluciones empresariales con C#, ASP.NET Core, React, Vue, SQL Server y Azure DevOps, con enfoque en arquitectura limpia, mantenibilidad e integración.',
        bullets: [
          'APIs REST y seguridad con JWT',
          'Frontend con React, Vue y Blazor',
          'SQL Server, Oracle e integraciones',
          'CI/CD y despliegues con Azure DevOps',
        ],
      },
      sections: {
        stackEyebrow: 'Stack principal',
        stackTitle: 'Tecnologías y fortalezas con las que construyo',
        stackDescription:
          'Mi perfil está orientado a desarrollo de software empresarial, desde la capa backend hasta la interfaz y la entrega continua.',
        experienceEyebrow: 'Experiencia',
        experienceTitle: 'Trayectoria en orden cronológico',
        experienceDescription:
          'El recorrido muestra cómo evolucionó mi perfil desde desarrollo y prácticas técnicas hasta software engineering full stack y visión de arquitectura aplicada al negocio.',
        projectsEyebrow: 'Proyectos',
        projectsTitle: 'Trabajo representativo en backend, full stack, mobile y DevOps',
        projectsDescription:
          'Casos que refuerzan mi perfil como desarrollador con visión integral de arquitectura, frontend, mobile, datos y delivery.',
        blogEyebrow: 'Blog técnico',
        blogTitle: 'Notas sobre .NET, arquitectura y desarrollo full stack',
        blogDescription:
          'Mantén el blog como soporte a tu marca técnica: artículos breves sobre APIs, Clean Architecture, React y DevOps ayudan a reforzar tu perfil frente a reclutadores.',
        blogButton: 'Ir al blog',
      },
      projectLinks: {
        live: 'Ver sitio',
        code: 'Ver código',
        appStore: 'App Store',
        playStore: 'Google Play',
      },
      blog: {
        title: 'Contenido pensado para reforzar tu marca como desarrollador .NET',
        description:
          'Publica artículos breves sobre arquitectura, APIs, frontend y prácticas de entrega para mostrar criterio técnico, no solo herramientas.',
        search: 'Buscar',
        searchPlaceholder: 'Ej. ASP.NET Core, React, Clean Architecture...',
        tag: 'Etiqueta',
        all: 'Todas',
        loading: 'Cargando artículos...',
        emptyTitle: 'No hay artículos para este filtro',
        emptyDescription: 'Cambia la búsqueda o etiqueta para ver más resultados.',
        readArticle: 'Leer artículo',
      },
      notFound: {
        description: 'La página que buscas no existe.',
        button: 'Volver al inicio',
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        blog: 'Blog',
        language: 'Change language',
      },
      hero: {
        eyebrow: 'Full Stack .NET Portfolio',
        profile: 'Profile',
        profileTitle: 'Strong backend, modern frontend and continuous delivery',
        profileText:
          'Experience building enterprise solutions with C#, ASP.NET Core, React, Vue, SQL Server and Azure DevOps, focused on clean architecture, maintainability and integrations.',
        bullets: [
          'REST APIs and JWT security',
          'Frontend with React, Vue and Blazor',
          'SQL Server, Oracle and integrations',
          'CI/CD and deployments with Azure DevOps',
        ],
      },
      sections: {
        stackEyebrow: 'Core stack',
        stackTitle: 'Technologies and strengths I build with',
        stackDescription:
          'My profile focuses on enterprise software development, from backend services to user interfaces and continuous delivery.',
        experienceEyebrow: 'Experience',
        experienceTitle: 'Career path in chronological order',
        experienceDescription:
          'This timeline shows how my profile evolved from development and technical practice into full stack software engineering with architecture applied to business needs.',
        projectsEyebrow: 'Projects',
        projectsTitle: 'Representative work in backend, full stack, mobile and DevOps',
        projectsDescription:
          'Projects that reinforce my profile as a developer with end-to-end vision across architecture, frontend, mobile, data and delivery.',
        blogEyebrow: 'Technical blog',
        blogTitle: 'Notes about .NET, architecture and full stack development',
        blogDescription:
          'The blog supports my technical brand with short articles about APIs, Clean Architecture, React and DevOps practices.',
        blogButton: 'Go to blog',
      },
      projectLinks: {
        live: 'View site',
        code: 'View code',
        appStore: 'App Store',
        playStore: 'Google Play',
      },
      blog: {
        title: 'Content designed to strengthen your brand as a .NET developer',
        description:
          'Publish short articles about architecture, APIs, frontend and delivery practices to show technical judgment, not just tools.',
        search: 'Search',
        searchPlaceholder: 'E.g. ASP.NET Core, React, Clean Architecture...',
        tag: 'Tag',
        all: 'All',
        loading: 'Loading articles...',
        emptyTitle: 'No articles match this filter',
        emptyDescription: 'Change the search term or tag to see more results.',
        readArticle: 'Read article',
      },
      notFound: {
        description: 'The page you are looking for does not exist.',
        button: 'Back home',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
