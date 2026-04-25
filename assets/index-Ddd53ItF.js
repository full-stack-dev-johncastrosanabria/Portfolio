import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{a as t,c as n,i as r,l as i,n as a,o,r as s,s as c,t as l,u}from"./react-vendor-VeJG9e5c.js";import{a as d,c as f,i as p,n as m,o as h,r as g,s as _,t as v}from"./vendor-Z7ylu0Wr.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var y=e(u(),1),b=e(i(),1),x={author:`John Castro Sanabria`,role:`Full Stack Developer | .NET & React`,email:`castrosanabriajohn2@gmail.com`,headline:`Desarrollador Full Stack especializado en .NET, React y arquitectura limpia. Construyo soluciones escalables y mantenibles.`,description:`Portafolio profesional de John Castro Sanabria. Full Stack Developer con experiencia en .NET Core, React, SQL Server, Azure y arquitectura limpia. Especializado en APIs REST, microservicios y aplicaciones web modernas.`,ctaPrimary:`Ver proyectos`,ctaSecondary:`Leer blog técnico`,socialLinks:[{label:`Correo`,href:`mailto:castrosanabriajohn2@gmail.com`,icon:`mail`},{label:`GitHub`,href:`https://github.com/full-stack-dev-johncastrosanabria`,icon:`github`},{label:`LinkedIn`,href:`https://www.linkedin.com/in/john-castro-sanabria/`,icon:`linkedin`}],keywords:[`.NET`,`React`,`Full Stack`,`Clean Architecture`,`API REST`,`SQL Server`,`Azure`,`JavaScript`,`C#`,`Web Development`]},S=e=>`/Portfolio/${e.replace(/^\//,``)}`,C=l(),w=[{to:`/`,label:`Inicio`},{to:`/blog`,label:`Blog`}];function T(){return(0,C.jsx)(`header`,{className:`site-header`,children:(0,C.jsxs)(`div`,{className:`container nav-wrapper`,children:[(0,C.jsxs)(r,{className:`brand`,to:`/`,children:[(0,C.jsx)(`span`,{className:`brand-mark brand-avatar`,children:(0,C.jsx)(`img`,{src:S(`profile-john.png`),alt:`Foto de John Castro`})}),(0,C.jsxs)(`span`,{children:[(0,C.jsx)(`strong`,{children:x.author}),(0,C.jsx)(`span`,{className:`brand-subtitle`,children:x.role})]})]}),(0,C.jsx)(`nav`,{className:`nav-links`,"aria-label":`Principal`,children:w.map(e=>(0,C.jsx)(r,{to:e.to,className:({isActive:e})=>e?`nav-link nav-link-active`:`nav-link`,children:e.label},e.to))})]})})}function E(){return(0,C.jsx)(`footer`,{className:`site-footer`,children:(0,C.jsxs)(`div`,{className:`container footer-grid`,children:[(0,C.jsxs)(`div`,{className:`footer-brand`,children:[(0,C.jsx)(`img`,{className:`footer-brand-mark`,src:S(`brand-mark.svg`),alt:`Logo personal de John Castro`}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`p`,{className:`footer-title`,children:x.author}),(0,C.jsx)(`p`,{className:`footer-copy`,children:x.description})]})]}),(0,C.jsx)(`div`,{className:`footer-links`,children:x.socialLinks.map(e=>(0,C.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noreferrer`,children:e.label},e.label))})]})})}function ee(){return(0,C.jsxs)(`div`,{className:`app-shell`,children:[(0,C.jsx)(T,{}),(0,C.jsx)(`main`,{className:`main-content`,children:(0,C.jsx)(t,{})}),(0,C.jsx)(E,{})]})}var te=[{id:`portfolio`,title:`Portafolio John Castro Sanabria`,category:`Frontend`,description:`Portafolio profesional construido para presentar experiencia, proyectos y contenido técnico con una experiencia rápida, responsive y desplegada en GitHub Pages.`,highlights:[`Arquitectura frontend con React, Vite y React Router`,`Despliegue automatizado hacia GitHub Pages`,`Diseño responsive enfocado en marca personal técnica`,`Secciones de proyectos, experiencia, habilidades y blog`],technologies:[`React`,`Vite`,`Tailwind CSS`,`GitHub Pages`,`GitHub Actions`],liveDemo:`https://full-stack-dev-johncastrosanabria.github.io/Portfolio/`,githubUrl:`https://github.com/full-stack-dev-johncastrosanabria/Portfolio`,featured:!0},{id:`reactivities`,title:`Reactivities - Red Social Full Stack`,category:`Full Stack`,description:`Red social full stack con backend .NET y frontend React, enfocada en actividades, perfiles, comentarios y flujos de interacción en tiempo real.`,highlights:[`Autenticación y autorización con flujo seguro de usuarios`,`Gestión de actividades, comentarios y followers`,`Separación clara entre backend, frontend y capa de datos`,`Base sólida para patrones modernos como CQRS y MediatR`],technologies:[`.NET`,`React`,`TypeScript`,`Entity Framework`,`SignalR`,`JWT`],githubUrl:`https://github.com/castrosanabriajohn/Reactivities`,featured:!0},{id:`etickets`,title:`eTickets - Plataforma Cinematográfica`,category:`Full Stack Web`,description:`Aplicación web para venta y administración de entradas de cine, con catálogo, funciones, carrito y gestión de entidades del negocio cinematográfico.`,highlights:[`Arquitectura MVC con ASP.NET Core`,`Gestión de películas, cines, actores y productores`,`Flujo de compra y carrito para entradas`,`Panel administrativo para operación del catálogo`],technologies:[`ASP.NET Core MVC`,`Entity Framework`,`SQL Server`,`Bootstrap`,`C#`],githubUrl:`https://github.com/castrosanabriajohn/eTickets`,featured:!0},{id:`microsoft-landing`,title:`Landing Page Microsoft`,category:`Frontend`,description:`Landing page corporativa inspirada en Microsoft, pensada para comunicar una propuesta cloud con una interfaz clara, moderna y orientada a conversión.`,highlights:[`Diseño visual orientado a producto tecnológico`,`Secciones comerciales para propuesta de valor y servicios`,`Experiencia responsive para desktop y móvil`,`Publicación rápida en Netlify`],technologies:[`React`,`CSS`,`Responsive UI`,`Netlify`],liveDemo:`https://bocetoms.netlify.app/`},{id:`admin-dashboard`,title:`Dashboard React`,category:`Frontend`,description:`Dashboard administrativo en React para visualizar métricas, datos y módulos operativos con una interfaz práctica para gestión diaria.`,highlights:[`Diseño de panel administrativo con enfoque en lectura rápida`,`Componentes reutilizables para vistas de datos`,`Estructura preparada para gráficos, tablas y navegación interna`,`Demo pública desplegada en Netlify`],technologies:[`React`,`JavaScript`,`CSS`,`Netlify`,`Dashboard UI`],liveDemo:`https://johns-admin-dashboard-react.netlify.app/`,githubUrl:`https://github.com/castrosanabriajohn/admin-dashboard`},{id:`clean-api`,title:`Interview Clean API - Arquitectura Limpia`,category:`Backend`,description:`API REST diseñada para demostrar criterios de entrevista técnica: separación de capas, validación, documentación y estructura mantenible.`,highlights:[`Arquitectura limpia con límites claros por capa`,`Endpoints REST orientados a pruebas técnicas`,`Validaciones y manejo ordenado de errores`,`Documentación lista para inspección con Swagger/OpenAPI`],technologies:[`.NET`,`Clean Architecture`,`REST API`,`Swagger`,`C#`],githubUrl:`https://github.com/full-stack-dev-johncastrosanabria/InterviewCleanApi`},{id:`basic-business-app`,title:`BasicBusinessApp - API Clean Architecture .NET`,category:`Backend`,description:`Aplicación empresarial base en .NET que usa Clean Architecture para separar dominio, aplicación, infraestructura y presentación.`,highlights:[`Separación de responsabilidades por capas`,`Principios SOLID aplicados a una base empresarial`,`Estructura preparada para testing y evolución`,`Patrones de inyección de dependencias y servicios`],technologies:[`.NET`,`Clean Architecture`,`C#`,`SOLID`,`Entity Framework`],githubUrl:`https://github.com/castrosanabriajohn/BasicBusinessAppV1`},{id:`propflow`,title:`PropFlow - Landing Page Inmobiliaria`,category:`Frontend`,description:`Landing page inmobiliaria con estética moderna para presentar propiedades, beneficios y llamados a la acción de forma clara.`,highlights:[`Diseño responsive orientado a producto inmobiliario`,`Secciones para beneficios, propiedades y conversión`,`Interfaz limpia con jerarquía visual fuerte`,`Base lista para integración con formularios o CRM`],technologies:[`React`,`Tailwind CSS`,`Vite`,`Responsive UI`],githubUrl:`https://github.com/full-stack-dev-johncastrosanabria/PropFlow`},{id:`criadero-pastores`,title:`Criadero Pastores - Negocio Familiar`,category:`Frontend`,description:`Página en React para un negocio familiar, creada para presentar el criadero, mostrar información clave y ofrecer una presencia digital clara.`,highlights:[`Sitio web público para negocio familiar`,`Diseño responsive y navegación sencilla`,`Presentación de contenido comercial y contacto`,`Demo desplegada en Netlify`],technologies:[`React`,`JavaScript`,`CSS`,`Netlify`],liveDemo:`https://canesbarvae.netlify.app/`,githubUrl:`https://github.com/castrosanabriajohn/criadero-pastores`},{id:`meals-to-go`,title:`MealsToGo - Réplica de Uber Eats`,category:`Mobile`,description:`Proyecto móvil híbrido que replica flujos tipo Uber Eats: exploración de restaurantes, menús, favoritos y experiencia de compra desde React Native.`,highlights:[`Aplicación móvil híbrida con React Native`,`Búsqueda y navegación de restaurantes`,`Persistencia de favoritos y datos de usuario`,`Integración con servicios móviles y mapas`],technologies:[`React Native`,`Expo`,`Firebase`,`Google Maps API`,`Redux`],githubUrl:`https://github.com/castrosanabriajohn/MealsToGo`},{id:`expo-amplify-demo`,title:`Expo Amplify Demo - Mobile + AWS`,category:`Mobile`,description:`Aplicación móvil con React Native y AWS Amplify para explorar autenticación, servicios cloud y backend administrado desde el ecosistema AWS.`,highlights:[`Base móvil con Expo y React Native`,`Integración con AWS Amplify`,`Enfoque en autenticación y backend cloud`,`Proyecto útil para validar arquitectura mobile + cloud`],technologies:[`React Native`,`Expo`,`AWS Amplify`,`GraphQL`,`Cloud`],githubUrl:`https://github.com/castrosanabriajohn/expo-amplify-demo`},{id:`spring-demo`,title:`Spring Demo - Backend Java`,category:`Backend`,description:`API backend con Spring Boot para demostrar fundamentos de desarrollo Java empresarial, endpoints REST y organización por capas.`,highlights:[`API REST con Spring Boot`,`Estructura backend clara y extensible`,`Validación y manejo de errores`,`Base adecuada para servicios Java modernos`],technologies:[`Spring Boot`,`Java`,`REST API`,`Maven`,`Backend`],githubUrl:`https://github.com/full-stack-dev-johncastrosanabria/spring-demo`},{id:`vue-project`,title:`Vue Project - Frontend Framework`,category:`Frontend`,description:`Proyecto web en Vue orientado a practicar componentes, estado, rutas y construcción de interfaces modernas con el ecosistema Vue.`,highlights:[`Componentes Vue reutilizables`,`Estructura pensada para vistas y navegación`,`Práctica de patrones frontend modernos`,`Base educativa para escalar a aplicaciones SPA`],technologies:[`Vue`,`JavaScript`,`Vue Router`,`Vite`,`Frontend`],githubUrl:`https://github.com/castrosanabriajohn/vue-project-section10`},{id:`smartgym-api`,title:`SmartGym - Proyecto Universitario PHP`,category:`Backend`,description:`Proyecto universitario en PHP para la gestión de operaciones de gimnasio, con foco en miembros, clases y administración interna.`,highlights:[`Gestión de datos para miembros y servicios`,`Modelo orientado a procesos de gimnasio`,`Backend universitario con estructura CRUD`,`Aplicación práctica de lógica de negocio en PHP`],technologies:[`PHP`,`MySQL`,`Backend`,`CRUD`,`University Project`],githubUrl:`https://github.com/castrosanabriajohn/smartgym`},{id:`webapi-matricula`,title:`WebAPI Matrícula - Proyecto Universitario .NET MVC`,category:`Backend`,description:`Sistema universitario .NET para gestión de matrícula, estudiantes y cursos, construido como ejercicio integral de backend académico.`,highlights:[`Gestión de estudiantes, cursos y matrícula`,`Lógica de negocio académica`,`Estructura basada en .NET y MVC/Web API`,`Persistencia de datos con SQL Server`],technologies:[`.NET MVC`,`C#`,`SQL Server`,`Entity Framework`,`Web API`],githubUrl:`https://github.com/castrosanabriajohn/WebAPIMatricula_3C2023`},{id:`wcf-tarjetas`,title:`WCF Servicio Tarjetas - Proyecto Universitario`,category:`Backend`,description:`Servicio WCF universitario para operaciones relacionadas con tarjetas, aplicando comunicación SOAP y conceptos clásicos de servicios distribuidos.`,highlights:[`Servicio distribuido con WCF`,`Contratos SOAP para comunicación entre sistemas`,`Operaciones orientadas a tarjetas`,`Práctica de integración en .NET Framework`],technologies:[`WCF`,`.NET Framework`,`SOAP`,`C#`,`SQL Server`],githubUrl:`https://github.com/castrosanabriajohn/WcfServicioTarjetas_3C2023-Ulacit`},{id:`personas-solution`,title:`PersonasSolution - Gestión de Personas`,category:`Backend`,description:`Solución backend para gestionar entidades de personas, pensada como base práctica para operaciones CRUD, separación de capas y persistencia.`,highlights:[`Modelo de dominio centrado en personas`,`Operaciones CRUD organizadas`,`Estructura preparada para extender reglas de negocio`,`Proyecto útil para demostrar fundamentos backend`],technologies:[`.NET`,`C#`,`CRUD`,`Backend`,`SQL`],githubUrl:`https://github.com/full-stack-dev-johncastrosanabria/PersonasSolution`},{id:`flask-product-api`,title:`Flask Product API`,category:`Backend`,description:`API ligera en Flask para gestión de productos, ideal para demostrar endpoints REST, simplicidad de Python y construcción rápida de servicios.`,highlights:[`API REST compacta con Flask`,`Gestión de productos mediante endpoints claros`,`Base simple para pruebas, integración o prototipos`,`Demuestra versatilidad fuera del stack .NET`],technologies:[`Python`,`Flask`,`REST API`,`Backend`,`Products`],githubUrl:`https://github.com/full-stack-dev-johncastrosanabria/FlaskApiProdcuct`}],D=[{title:`Backend .NET`,description:`Diseño e implementación de APIs y servicios orientados a mantenibilidad, seguridad y escalabilidad.`,items:[`C#`,`.NET`,`ASP.NET Core`,`REST APIs`,`JWT`,`Dependency Injection`]},{title:`Arquitectura y calidad`,description:`Buenas prácticas para construir soluciones empresariales limpias y fáciles de evolucionar.`,items:[`Clean Architecture`,`DDD`,`Patrones de diseño`,`Microservicios`,`SOLID`,`Testing mindset`]},{title:`Frontend y experiencia`,description:`Capacidad para construir interfaces modernas y conectar la UI con servicios backend de forma ordenada.`,items:[`React`,`JavaScript`,`TypeScript`,`Vue`,`Blazor`,`Responsive UI`]},{title:`Datos, nube y DevOps`,description:`Experiencia desplegando, integrando y automatizando software sobre stack Microsoft.`,items:[`SQL Server`,`Oracle`,`Azure`,`Azure DevOps`,`CI/CD`,`Git`]}],O=[{value:`3+ años`,label:`Experiencia en desarrollo`,detail:`Construyendo backend, APIs y soluciones full stack para entornos empresariales.`},{value:`.NET + React`,label:`Perfil híbrido`,detail:`Capacidad para entregar tanto lógica de negocio como interfaces modernas.`},{value:`Azure DevOps`,label:`Entrega continua`,detail:`Automatización de despliegues y trazabilidad del ciclo de vida del software.`}];function k({eyebrow:e,title:t,description:n}){return(0,C.jsxs)(`div`,{className:`section-heading`,children:[e?(0,C.jsx)(`p`,{className:`section-eyebrow`,children:e}):null,(0,C.jsx)(`h2`,{children:t}),n?(0,C.jsx)(`p`,{className:`section-description`,children:n}):null]})}var A=[{company:`Innovative`,role:`Software Development Intern`,period:`May 2022 - Aug 2022`,startDate:`2022-05-01`,endDate:`2022-08-31`,duration:`4 months`,summary:`Participación en el desarrollo de una solución web y móvil con backend .NET, componentes frontend y soporte de despliegue. Experiencia inicial en arquitectura full stack y integración de servicios.`,description:`Durante mi internship en Innovative, trabajé en un proyecto de transformación digital que incluía una solución integral con backend robusto, interfaces web modernas y aplicación móvil nativa. Colaboré con un equipo multidisciplinario en la implementación de características, optimización de performance y despliegue en múltiples plataformas.`,achievements:[`Contribuí al desarrollo del backend con .NET Core, implementando APIs REST para una solución interna de gestión de trámites.`,`Participé en el desarrollo frontend con Vue.js para la interfaz web y React Native para la aplicación móvil.`,`Implementé integraciones de analítica y monitoreo con Firebase Analytics y Crashlytics para tracking de errores.`,`Colaboré en el proceso de despliegue y publicación de la aplicación móvil en App Store e Google Play.`,`Aprendí sobre CI/CD, versionamiento y buenas prácticas de desarrollo en equipo.`],stack:[`.NET Core`,`C#`,`Vue.js`,`React Native`,`Firebase`,`JavaScript`,`Git`],highlights:[`Full Stack Development`,`Mobile Deployment`,`Firebase Integration`]},{company:`Innovative S.A.`,role:`Software Engineer I (Full Stack)`,period:`Oct 2022 - Sep 2025`,startDate:`2022-10-03`,endDate:`2025-09-30`,duration:`2 years 11 months`,summary:`Desarrollo de APIs REST empresariales y soluciones full stack para el sector financiero con foco en mantenibilidad, seguridad e integración. Liderazgo técnico en arquitectura limpia y optimización de bases de datos.`,description:`Como Software Engineer I en Innovative, fui responsable del diseño e implementación de soluciones backend escalables para clientes del sector financiero. Trabajé en la modernización de sistemas legacy, implementación de arquitectura limpia y optimización de performance en bases de datos empresariales. Colaboré con equipos de infraestructura en la automatización de despliegues y monitoreo de aplicaciones en producción.`,achievements:[`Desarrollé más de 50 APIs REST con ASP.NET Core y C# siguiendo principios SOLID y Clean Architecture.`,`Implementé patrones de diseño avanzados: CQRS, MediatR, Repository Pattern y Dependency Injection.`,`Optimicé consultas SQL en SQL Server y Oracle, mejorando performance en 40-60% en operaciones críticas.`,`Diseñé y ejecuté procedimientos almacenados complejos para reportes y procesamiento de datos.`,`Automaticé despliegues a múltiples ambientes (DEV, QA, PROD) mediante pipelines CI/CD en Azure DevOps.`,`Implementé estrategias de versionamiento, rollback y monitoreo de aplicaciones en producción.`,`Mentoricé a desarrolladores junior en arquitectura y mejores prácticas de código.`],stack:[`C#`,`.NET Core`,`.NET Framework`,`ASP.NET Core`,`SQL Server`,`Oracle`,`T-SQL`,`PL/SQL`,`Azure DevOps`,`Git`,`Entity Framework`],highlights:[`Clean Architecture`,`Database Optimization`,`CI/CD Pipelines`,`Mentoring`]},{company:`Novacomp S.A.`,role:`SDR Técnico | Microsoft Cloud`,period:`Aug 2025 - Feb 2026`,startDate:`2025-08-01`,endDate:`2026-02-28`,duration:`7 months`,summary:`Rol técnico-comercial que fortaleció mi visión de arquitectura, discovery y traducción de necesidades de negocio a soluciones técnicas. Experiencia en preventa, PoCs y modernización cloud.`,description:`En Novacomp, trabajé como SDR Técnico en el equipo de Microsoft Cloud, combinando responsabilidades técnicas con actividades comerciales. Participé en el descubrimiento de necesidades de clientes, diseño de soluciones cloud y demostración de tecnologías Microsoft. Esta experiencia me permitió desarrollar habilidades de comunicación técnica y entender mejor cómo traducir requisitos de negocio a arquitecturas de soluciones.`,achievements:[`Realicé discovery técnico-funcional con líderes de TI y CIOs para identificar oportunidades de modernización cloud.`,`Colaboré con arquitectos de soluciones en el diseño de PoCs (Proof of Concepts) para validar tecnologías Microsoft.`,`Participé en demos técnicas, workshops y presentaciones a stakeholders de alto nivel.`,`Documenté arquitecturas de referencia para migración a Azure y modernización de aplicaciones legacy.`,`Fortalecí mi capacidad para comunicar decisiones técnicas complejas a audiencias no técnicas.`,`Aprendí sobre gobernanza cloud, seguridad y compliance en entornos empresariales.`],stack:[`Azure`,`Azure DevOps`,`Microsoft Fabric`,`Azure SQL`,`Azure App Service`,`Azure Functions`,`Power BI`,`Discovery`,`Solution Architecture`],highlights:[`Cloud Architecture`,`Technical Sales`,`PoC Development`,`Stakeholder Communication`]}];function j({children:e}){return(0,C.jsx)(`span`,{className:`tag`,children:e})}var M=[...A].sort((e,t)=>new Date(t.startDate).getTime()-new Date(e.startDate).getTime());function N(){return(0,C.jsx)(`div`,{className:`timeline`,children:M.map(e=>(0,C.jsxs)(`article`,{className:`timeline-card`,children:[(0,C.jsx)(`div`,{className:`timeline-meta`,children:(0,C.jsx)(`p`,{className:`timeline-period`,children:e.period})}),(0,C.jsxs)(`div`,{className:`timeline-body`,children:[(0,C.jsxs)(`div`,{className:`timeline-title`,children:[(0,C.jsx)(`div`,{className:`timeline-dot`}),(0,C.jsx)(`h3`,{children:e.role})]}),(0,C.jsx)(`p`,{className:`timeline-company`,children:e.company}),(0,C.jsx)(`p`,{className:`muted`,children:e.summary}),(0,C.jsx)(`ul`,{className:`bullet-list`,children:e.achievements.map(e=>(0,C.jsx)(`li`,{children:e},e))}),(0,C.jsx)(`div`,{className:`tag-group`,children:e.stack.map(e=>(0,C.jsx)(j,{children:e},e))})]})]},`${e.company}-${e.role}`))})}function P({project:e}){return(0,C.jsxs)(`article`,{className:`project-card`,children:[(0,C.jsx)(`p`,{className:`project-category`,children:e.category}),(0,C.jsx)(`h3`,{children:e.title}),(0,C.jsx)(`p`,{className:`muted`,children:e.description}),(0,C.jsx)(`ul`,{className:`bullet-list`,children:e.highlights.map(e=>(0,C.jsx)(`li`,{children:e},e))}),(0,C.jsx)(`div`,{className:`tag-group`,children:e.technologies.map(e=>(0,C.jsx)(j,{children:e},e))}),(e.liveDemo||e.githubUrl)&&(0,C.jsxs)(`div`,{className:`project-links`,children:[e.liveDemo&&(0,C.jsx)(`a`,{className:`button button-primary`,href:e.liveDemo,target:`_blank`,rel:`noopener noreferrer`,title:`Ver sitio en vivo`,children:`Ver Sitio`}),e.githubUrl&&(0,C.jsx)(`a`,{className:`button button-secondary`,href:e.githubUrl,target:`_blank`,rel:`noopener noreferrer`,title:`Ver código en GitHub`,children:`Ver Código`})]})]})}function F({title:e,description:t,items:n}){return(0,C.jsxs)(`article`,{className:`skill-card`,children:[(0,C.jsx)(`h3`,{children:e}),(0,C.jsx)(`p`,{className:`muted`,children:t}),(0,C.jsx)(`div`,{className:`tag-group`,children:n.map(e=>(0,C.jsx)(j,{children:e},e))})]})}function I({value:e,label:t,detail:n}){return(0,C.jsxs)(`article`,{className:`stat-card`,children:[(0,C.jsx)(`p`,{className:`stat-value`,children:e}),(0,C.jsx)(`p`,{className:`stat-label`,children:t}),(0,C.jsx)(`p`,{className:`muted`,children:n})]})}function L(e,t=` | John Castro Sanabria`){(0,y.useEffect)(()=>{let n=e?`${e}${t}`:`John Castro Sanabria - Full Stack Developer`;document.title=n;let r=document.querySelector(`meta[property="og:title"]`);r&&r.setAttribute(`content`,n)},[e,t])}function R(){return L(`Portafolio | Full Stack .NET Developer`),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`section`,{className:`hero-section`,children:(0,C.jsxs)(`div`,{className:`container hero-grid`,children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`p`,{className:`section-eyebrow`,children:`Portafolio Full Stack .NET`}),(0,C.jsx)(`h1`,{children:x.author}),(0,C.jsx)(`p`,{className:`hero-role`,children:x.role}),(0,C.jsx)(`p`,{className:`hero-copy`,children:x.headline}),(0,C.jsxs)(`div`,{className:`hero-actions`,children:[(0,C.jsx)(`a`,{className:`button`,href:`#proyectos`,children:x.ctaPrimary}),(0,C.jsx)(s,{className:`button button-secondary`,to:`/blog`,children:x.ctaSecondary})]})]}),(0,C.jsxs)(`aside`,{className:`hero-card hero-profile-card`,children:[(0,C.jsx)(`div`,{className:`hero-profile-media`,children:(0,C.jsx)(`img`,{src:S(`profile-john.png`),alt:`John Castro en oficina`})}),(0,C.jsxs)(`div`,{className:`hero-profile-copy`,children:[(0,C.jsx)(`p`,{className:`hero-card-label`,children:`Perfil`}),(0,C.jsx)(`h2`,{children:`Backend sólido, frontend moderno y delivery continuo`}),(0,C.jsx)(`p`,{className:`hero-profile-text`,children:`Experiencia construyendo soluciones empresariales con C#, ASP.NET Core, React, Vue, SQL Server y Azure DevOps, con enfoque en arquitectura limpia, mantenibilidad e integración.`}),(0,C.jsxs)(`ul`,{className:`bullet-list hero-bullet-list`,children:[(0,C.jsx)(`li`,{children:`APIs REST y seguridad con JWT`}),(0,C.jsx)(`li`,{children:`Frontend con React, Vue y Blazor`}),(0,C.jsx)(`li`,{children:`SQL Server, Oracle e integraciones`}),(0,C.jsx)(`li`,{children:`CI/CD y despliegues con Azure DevOps`})]})]})]})]})}),(0,C.jsx)(`section`,{className:`section section-tight-top`,children:(0,C.jsx)(`div`,{className:`container stats-grid`,children:O.map(e=>(0,C.jsx)(I,{value:e.value,label:e.label,detail:e.detail},e.label))})}),(0,C.jsx)(`section`,{className:`section`,children:(0,C.jsxs)(`div`,{className:`container`,children:[(0,C.jsx)(k,{eyebrow:`Stack principal`,title:`Tecnologías y fortalezas con las que construyo`,description:`Mi perfil está orientado a desarrollo de software empresarial, desde la capa backend hasta la interfaz y la entrega continua.`}),(0,C.jsx)(`div`,{className:`skills-grid`,children:D.map(e=>(0,C.jsx)(F,{...e},e.title))})]})}),(0,C.jsx)(`section`,{className:`section`,children:(0,C.jsxs)(`div`,{className:`container`,children:[(0,C.jsx)(k,{eyebrow:`Experiencia`,title:`Trayectoria en orden cronológico`,description:`El recorrido muestra cómo evolucionó mi perfil desde desarrollo y prácticas técnicas hasta software engineering full stack y visión de arquitectura aplicada al negocio.`}),(0,C.jsx)(N,{})]})}),(0,C.jsx)(`section`,{className:`section`,id:`proyectos`,children:(0,C.jsxs)(`div`,{className:`container`,children:[(0,C.jsx)(k,{eyebrow:`Proyectos`,title:`Trabajo representativo en backend, full stack y DevOps`,description:`Casos que refuerzan mi perfil como desarrollador .NET con visión integral de arquitectura, frontend, datos y delivery.`}),(0,C.jsx)(`div`,{className:`card-grid`,children:te.map(e=>(0,C.jsx)(P,{project:e},e.id))})]})}),(0,C.jsx)(`section`,{className:`section section-accent`,children:(0,C.jsxs)(`div`,{className:`container cta-panel`,children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`p`,{className:`section-eyebrow`,children:`Blog técnico`}),(0,C.jsx)(`h2`,{children:`Notas sobre .NET, arquitectura y desarrollo full stack`}),(0,C.jsx)(`p`,{className:`section-description`,children:`Mantén el blog como soporte a tu marca técnica: artículos breves sobre APIs, Clean Architecture, React y DevOps ayudan a reforzar tu perfil frente a reclutadores.`})]}),(0,C.jsx)(s,{className:`button`,to:`/blog`,children:`Ir al blog`})]})})]})}function z(e){return new Intl.DateTimeFormat(`es-ES`,{day:`2-digit`,month:`long`,year:`numeric`}).format(new Date(e))}function B(e,t){return e.slug===t}function V({post:e}){return(0,C.jsxs)(`article`,{className:`blog-card`,children:[(0,C.jsxs)(`div`,{className:`blog-card-top`,children:[(0,C.jsxs)(`p`,{className:`blog-meta`,children:[(0,C.jsx)(`span`,{children:z(e.publishedAt)}),(0,C.jsx)(`span`,{children:`•`}),(0,C.jsx)(`span`,{children:e.readingTime}),(0,C.jsx)(`span`,{children:`•`}),(0,C.jsx)(`span`,{children:e.source===`firebase`?`Firebase`:`Local`})]}),(0,C.jsx)(`h3`,{children:e.title}),(0,C.jsx)(`p`,{className:`muted`,children:e.excerpt})]}),(0,C.jsx)(`div`,{className:`tag-group`,children:e.tags.map(e=>(0,C.jsx)(j,{children:e},e))}),(0,C.jsx)(s,{className:`button button-secondary`,to:`/blog/${e.slug}`,children:`Leer artículo`})]})}function H({search:e,onSearchChange:t,selectedTag:n,onTagChange:r,availableTags:i}){return(0,C.jsxs)(`div`,{className:`filters-panel`,children:[(0,C.jsxs)(`label`,{className:`field`,children:[(0,C.jsx)(`span`,{children:`Buscar`}),(0,C.jsx)(`input`,{type:`search`,value:e,onChange:e=>t(e.target.value),placeholder:`Ej. ASP.NET Core, React, Clean Architecture...`})]}),(0,C.jsxs)(`label`,{className:`field`,children:[(0,C.jsx)(`span`,{children:`Etiqueta`}),(0,C.jsxs)(`select`,{value:n,onChange:e=>r(e.target.value),children:[(0,C.jsx)(`option`,{value:`all`,children:`Todas`}),i.map(e=>(0,C.jsx)(`option`,{value:e,children:e},e))]})]})]})}function U({title:e,description:t}){return(0,C.jsxs)(`div`,{className:`empty-state`,children:[(0,C.jsx)(`h3`,{children:e}),(0,C.jsx)(`p`,{children:t})]})}function W({label:e=`Cargando contenido...`}){return(0,C.jsxs)(`div`,{className:`loader`,role:`status`,"aria-live":`polite`,children:[(0,C.jsx)(`span`,{className:`loader-dot`}),(0,C.jsx)(`p`,{children:e})]})}var G={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0,measurementId:void 0},K=[`apiKey`,`authDomain`,`projectId`,`appId`].every(e=>!!G[e]),q=K?_().length?h():f(G):null,J=q?g(q):null,Y=[{id:`1`,slug:`net-10-features-2026`,title:`.NET 10: Nuevas características y mejoras de performance`,excerpt:`.NET 10 trae mejoras significativas en performance, seguridad y herramientas de desarrollo. Descubre las características clave que debes conocer.`,content:`
## .NET 10: Nuevas características y mejoras de performance

.NET 10 representa un salto importante en la evolución de la plataforma. Con enfoque en performance, seguridad y experiencia del desarrollador, esta versión consolida a .NET como la opción preferida para aplicaciones empresariales modernas.

### Mejoras de Performance

#### Compilación AOT mejorada
La compilación Ahead-of-Time (AOT) ahora es más eficiente, reduciendo el tamaño de los binarios hasta un 40% en comparación con versiones anteriores. Esto es crítico para aplicaciones en contenedores y edge computing.

#### Optimizaciones de GC
El recolector de basura ha sido optimizado para reducir pausas y mejorar la throughput en aplicaciones de alta concurrencia.

### Seguridad Mejorada

#### Encriptación por defecto
Las conexiones a bases de datos ahora usan encriptación TLS por defecto, mejorando la seguridad sin configuración adicional.

#### Validación de dependencias
Herramientas mejoradas para detectar vulnerabilidades en dependencias durante el build.

### Herramientas de Desarrollo

#### Mejoras en Visual Studio 2026
- IntelliSense más inteligente con IA
- Debugging mejorado con snapshots
- Profiling integrado para performance

#### CLI mejorada
Nuevos comandos para scaffolding, testing y deployment.

### Recomendaciones

Para proyectos nuevos, .NET 10 es la opción recomendada. Para proyectos existentes, evalúa la migración considerando los beneficios de performance y seguridad.
    `,tags:[`.NET`,`Performance`,`C#`,`Tendencias`],publishedAt:`2026-04-20`,readingTime:`8 min`,source:`local`},{id:`2`,slug:`clean-architecture-2026`,title:`Clean Architecture en .NET: Guía práctica 2026`,excerpt:`Implementa Clean Architecture en tus proyectos .NET. Aprende cómo estructurar tu código para máxima mantenibilidad y escalabilidad.`,content:`
## Clean Architecture en .NET: Guía práctica 2026

Clean Architecture es más relevante que nunca en 2026. Con la complejidad creciente de las aplicaciones, una arquitectura bien definida es esencial.

### Estructura de Capas

#### 1. Domain Layer
Contiene las entidades y lógica de negocio pura. Sin dependencias externas.

\`\`\`csharp
public class User
{
    public int Id { get; set; }
    public string Email { get; set; }
    public string PasswordHash { get; set; }
    
    public bool ValidatePassword(string password) => 
        BCrypt.Net.BCrypt.Verify(password, PasswordHash);
}
\`\`\`

#### 2. Application Layer
Casos de uso y orquestación. Usa MediatR para CQRS.

\`\`\`csharp
public class CreateUserCommand : IRequest<UserDto>
{
    public string Email { get; set; }
    public string Password { get; set; }
}

public class CreateUserCommandHandler : IRequestHandler<CreateUserCommand, UserDto>
{
    public async Task<UserDto> Handle(CreateUserCommand request, CancellationToken cancellationToken)
    {
        // Lógica de creación
    }
}
\`\`\`

#### 3. Infrastructure Layer
Implementaciones de repositorios, servicios externos, etc.

#### 4. Presentation Layer
Controllers, DTOs, validación de entrada.

### Beneficios

- **Testabilidad**: Cada capa es independiente y fácil de testear
- **Mantenibilidad**: Cambios en una capa no afectan otras
- **Escalabilidad**: Fácil agregar nuevas funcionalidades
- **Independencia de frameworks**: Lógica de negocio no depende de tecnologías específicas

### Herramientas Recomendadas

- **MediatR**: Para CQRS
- **FluentValidation**: Para validación
- **AutoMapper**: Para mapeo de DTOs
- **Entity Framework Core**: Para acceso a datos
    `,tags:[`Clean Architecture`,`SOLID`,`Design Patterns`,`.NET`],publishedAt:`2026-04-15`,readingTime:`12 min`,source:`local`},{id:`3`,slug:`microservices-net-2026`,title:`Microservicios en .NET: Patrones y prácticas`,excerpt:`Diseña y despliega microservicios escalables con .NET. Aprende sobre comunicación, resiliencia y orquestación.`,content:`
## Microservicios en .NET: Patrones y prácticas

Los microservicios son la arquitectura preferida para aplicaciones empresariales complejas. .NET ofrece excelentes herramientas para implementarlos.

### Comunicación entre Servicios

#### Síncrona: gRPC
Más eficiente que REST para comunicación interna.

\`\`\`csharp
// Definición del servicio
service UserService {
  rpc GetUser (GetUserRequest) returns (UserResponse);
}
\`\`\`

#### Asíncrona: Message Queues
RabbitMQ, Azure Service Bus para desacoplamiento.

### Resiliencia

#### Polly
Implementa reintentos, circuit breakers y timeouts.

\`\`\`csharp
var policy = Policy
    .Handle<HttpRequestException>()
    .Or<TimeoutRejectedException>()
    .WaitAndRetryAsync(3, retryAttempt => 
        TimeSpan.FromSeconds(Math.Pow(2, retryAttempt)));
\`\`\`

### Observabilidad

- **Logging**: Serilog con contexto distribuido
- **Tracing**: OpenTelemetry
- **Métricas**: Prometheus

### Deployment

Usa Kubernetes o Azure Container Instances para orquestación.
    `,tags:[`Microservices`,`gRPC`,`Kubernetes`,`.NET`],publishedAt:`2026-04-10`,readingTime:`10 min`,source:`local`},{id:`4`,slug:`async-await-best-practices`,title:`Async/Await: Mejores prácticas en .NET`,excerpt:`Domina la programación asíncrona en .NET. Evita deadlocks, memory leaks y otros problemas comunes.`,content:`
## Async/Await: Mejores prácticas en .NET

La programación asíncrona es fundamental en .NET moderno. Aquí están las mejores prácticas para evitar problemas comunes.

### Regla de Oro: Async All The Way

Nunca bloquees en código asíncrono:

\`\`\`csharp
// ❌ MALO
public async Task<User> GetUser(int id)
{
    var result = _userService.GetUserAsync(id).Result; // DEADLOCK!
    return result;
}

// ✅ BUENO
public async Task<User> GetUser(int id)
{
    return await _userService.GetUserAsync(id);
}
\`\`\`

### ConfigureAwait(false)

En librerías, siempre usa ConfigureAwait(false):

\`\`\`csharp
public async Task<Data> FetchDataAsync()
{
    var response = await _httpClient.GetAsync(url).ConfigureAwait(false);
    return await response.Content.ReadAsAsync<Data>().ConfigureAwait(false);
}
\`\`\`

### Manejo de Excepciones

\`\`\`csharp
try
{
    await Task.WhenAll(tasks);
}
catch (Exception ex)
{
    // Maneja AggregateException correctamente
    _logger.LogError(ex, "Error en operaciones paralelas");
}
\`\`\`

### ValueTask vs Task

Usa ValueTask para métodos que frecuentemente completan sincrónicamente:

\`\`\`csharp
public ValueTask<int> GetCachedValueAsync(string key)
{
    if (_cache.TryGetValue(key, out var value))
        return new ValueTask<int>(value);
    
    return new ValueTask<int>(FetchFromDatabaseAsync(key));
}
\`\`\`
    `,tags:[`Async`,`Performance`,`C#`,`Concurrency`],publishedAt:`2026-04-05`,readingTime:`9 min`,source:`local`},{id:`5`,slug:`entity-framework-core-2026`,title:`Entity Framework Core 10: Guía completa`,excerpt:`Domina Entity Framework Core 10. Aprende sobre queries optimizadas, lazy loading y mejores prácticas de ORM.`,content:`
## Entity Framework Core 10: Guía completa

Entity Framework Core 10 trae mejoras significativas en performance y funcionalidad.

### Queries Optimizadas

#### LINQ to SQL Translation
EF Core ahora traduce más operaciones LINQ directamente a SQL:

\`\`\`csharp
// Esto se traduce directamente a SQL
var users = await _context.Users
    .Where(u => u.Email.Contains("@example.com"))
    .OrderBy(u => u.CreatedAt)
    .Take(10)
    .ToListAsync();
\`\`\`

#### Compiled Queries
Para queries frecuentes, compílalas:

\`\`\`csharp
private static readonly Func<AppDbContext, int, Task<User>> GetUserById =
    EF.CompileAsyncQuery((AppDbContext ctx, int id) =>
        ctx.Users.FirstOrDefault(u => u.Id == id));

public async Task<User> GetUser(int id)
{
    return await GetUserById(_context, id);
}
\`\`\`

#### Lazy Loading Seguro

\`\`\`csharp
public class User
{
    public int Id { get; set; }
    public virtual ICollection<Post> Posts { get; set; } // Lazy loaded
}

// En Startup
services.AddDbContext<AppDbContext>(options =>
    options.UseLazyLoadingProxies());
\`\`\`

#### Bulk Operations

\`\`\`csharp
await _context.Users
    .Where(u => u.IsInactive)
    .ExecuteDeleteAsync();
\`\`\`
    `,tags:[`Entity Framework`,`ORM`,`SQL`,`.NET`],publishedAt:`2026-03-30`,readingTime:`11 min`,source:`local`},{id:`6`,slug:`testing-net-2026`,title:`Testing en .NET: Unit, Integration y E2E`,excerpt:`Implementa una estrategia de testing completa. Aprende sobre xUnit, Moq, TestContainers y más.`,content:`
## Testing en .NET: Unit, Integration y E2E

Una buena cobertura de tests es esencial para código de calidad. Aquí está la guía completa.

### Unit Testing con xUnit

\`\`\`csharp
public class UserServiceTests
{
    private readonly UserService _service;
    private readonly Mock<IUserRepository> _repositoryMock;
    
    public UserServiceTests()
    {
        _repositoryMock = new Mock<IUserRepository>();
        _service = new UserService(_repositoryMock.Object);
    }
    
    [Fact]
    public async Task CreateUser_WithValidData_ReturnsUser()
    {
        // Arrange
        var command = new CreateUserCommand { Email = "test@example.com" };
        
        // Act
        var result = await _service.CreateUserAsync(command);
        
        // Assert
        Assert.NotNull(result);
        Assert.Equal("test@example.com", result.Email);
    }
}
\`\`\`

### Integration Testing con TestContainers

\`\`\`csharp
[Collection("Database collection")]
public class UserRepositoryTests : IAsyncLifetime
{
    private readonly PostgreSqlContainer _container = 
        new PostgreSqlBuilder().Build();
    
    public async Task InitializeAsync()
    {
        await _container.StartAsync();
    }
    
    public async Task DisposeAsync()
    {
        await _container.StopAsync();
    }
    
    [Fact]
    public async Task GetUser_WithValidId_ReturnsUser()
    {
        // Test con base de datos real
    }
}
\`\`\`

### E2E Testing

Usa Playwright o Selenium para tests de interfaz.

### Cobertura de Tests

Apunta a 80%+ de cobertura en código crítico.
    `,tags:[`xUnit`,`Testing`,`Moq`,`Quality Assurance`],publishedAt:`2026-03-25`,readingTime:`10 min`,source:`local`},{id:`7`,slug:`como-estructuro-apis-rest-en-aspnet-core`,title:`Cómo estructuro APIs REST en ASP.NET Core`,excerpt:`Mi enfoque para organizar una API mantenible usando separación por capas, servicios claros y foco en evolución.`,content:`
## Qué busco al diseñar una API

Una API empresarial no solo debe funcionar. También debe ser fácil de mantener, probar y extender cuando cambian los requerimientos.

## Mi enfoque

1. Separar dominio, aplicación e infraestructura.
2. Mantener controladores delgados.
3. Llevar la lógica de negocio a servicios y casos de uso.
4. Cuidar validaciones, contratos y manejo de errores.

## Resultado

Esto facilita que el proyecto escale sin convertirse en una base de código difícil de entender.
    `,tags:[`ASP.NET Core`,`REST API`,`Arquitectura`],publishedAt:`2026-04-01`,readingTime:`4 min`,source:`local`},{id:`8`,slug:`clean-architecture-en-proyectos-net-reales`,title:`Clean Architecture en proyectos .NET reales`,excerpt:`Más que teoría: cómo aporta orden, mantenibilidad y claridad cuando el sistema empieza a crecer.`,content:`
## Por qué la uso

Cuando una solución empieza a crecer, mezclar acceso a datos, reglas de negocio y detalles de framework complica todo.

## Beneficios prácticos

- Aísla reglas de negocio.
- Facilita pruebas y cambios.
- Reduce acoplamiento con infraestructura.
- Hace más clara la responsabilidad de cada capa.

## Dónde aporta más

Especialmente en sistemas con integraciones, reglas complejas y varios ambientes de despliegue.
    `,tags:[`Clean Architecture`,`.NET`,`Buenas prácticas`],publishedAt:`2026-03-22`,readingTime:`5 min`,source:`local`},{id:`9`,slug:`react-como-capa-frontend-para-soluciones-full-stack-net`,title:`React como capa frontend para soluciones full stack .NET`,excerpt:`Por qué React encaja bien como interfaz moderna cuando el backend vive en ASP.NET Core.`,content:`
## Una combinación práctica

ASP.NET Core permite construir APIs robustas y React aporta flexibilidad para crear interfaces rápidas y modulares.

## Qué valoro de esta combinación

- Separación clara entre frontend y backend.
- Escalabilidad para equipos y módulos.
- Mejor experiencia de usuario.
- Facilidad para consumir APIs y evolucionar la UI.

## En resumen

Es una combinación muy útil para construir productos empresariales modernos sin perder orden técnico.
    `,tags:[`React`,`Full Stack`,`.NET`],publishedAt:`2026-03-10`,readingTime:`4 min`,source:`local`}];function X(e,t=`local`){if(`data`in e){let n=e.data();return{id:e.id,slug:n.slug,title:n.title,excerpt:n.excerpt,content:n.content,tags:n.tags??[],publishedAt:n.publishedAt??new Date().toISOString(),readingTime:n.readingTime??`4 min`,source:t}}return{...e,source:t}}function Z(){let[e,t]=(0,y.useState)(Y.map(e=>X(e))),[n,r]=(0,y.useState)(K),[i,a]=(0,y.useState)(``);return(0,y.useEffect)(()=>{async function e(){if(!K||!J){r(!1);return}try{let e=await m(d(v(J,`posts`),p(`publishedAt`,`desc`)));e.empty||t(e.docs.map(e=>X(e,`firebase`)))}catch(e){console.warn(`No se pudieron cargar los posts desde Firebase. Se usarán los locales.`,e),a(`No se pudo conectar con Firebase. Se cargaron artículos locales.`)}finally{r(!1)}}e()},[]),{posts:(0,y.useMemo)(()=>[...e].sort((e,t)=>new Date(t.publishedAt).getTime()-new Date(e.publishedAt).getTime()),[e]),isLoading:n,error:i}}function Q(){L(`Portafolio | Blog técnico .NET`);let{posts:e,isLoading:t,error:r}=Z(),[i,a]=n(),o=i.get(`search`)??``,s=i.get(`tag`)??`all`,c=(0,y.useMemo)(()=>[...new Set(e.flatMap(e=>e.tags))].sort((e,t)=>e.localeCompare(t,`es`)),[e]),l=(0,y.useMemo)(()=>e.filter(e=>{let t=!o||[e.title,e.excerpt,e.content,e.tags.join(` `)].join(` `).toLowerCase().includes(o.toLowerCase()),n=s===`all`||e.tags.includes(s);return t&&n}),[e,o,s]);function u(e){let t=new URLSearchParams(i);Object.entries(e).forEach(([e,n])=>{!n||n===`all`?t.delete(e):t.set(e,n)}),a(t)}return(0,C.jsx)(`section`,{className:`section`,children:(0,C.jsxs)(`div`,{className:`container`,children:[(0,C.jsx)(k,{eyebrow:`Blog técnico`,title:`Contenido pensado para reforzar tu marca como desarrollador .NET`,description:`Publica artículos breves sobre arquitectura, APIs, frontend y prácticas de entrega para mostrar criterio técnico, no solo herramientas.`}),(0,C.jsx)(H,{search:o,onSearchChange:e=>u({search:e}),selectedTag:s,onTagChange:e=>u({tag:e}),availableTags:c}),r?(0,C.jsx)(`p`,{className:`helper-text`,children:r}):null,t?(0,C.jsx)(W,{label:`Cargando artículos...`}):null,!t&&l.length===0?(0,C.jsx)(U,{title:`No hay artículos para este filtro`,description:`Cambia la búsqueda o etiqueta para ver más resultados.`}):null,(0,C.jsx)(`div`,{className:`card-grid blog-grid`,children:l.map(e=>(0,C.jsx)(V,{post:e},e.id))})]})})}function ne(e){return e.trim().split(`
`).filter(Boolean).map((e,t)=>e.startsWith(`## `)?(0,C.jsx)(`h2`,{children:e.replace(`## `,``)},`${e}-${t}`):e.startsWith(`- `)?(0,C.jsx)(`li`,{children:e.replace(`- `,``)},`${e}-${t}`):/^\d+\.\s/.test(e)?(0,C.jsx)(`li`,{children:e.replace(/^\d+\.\s/,``)},`${e}-${t}`):(0,C.jsx)(`p`,{children:e},`${e}-${t}`))}function re(){let{slug:e}=c(),{posts:t,isLoading:n}=Z(),r=t.find(t=>B(t,e));if(L(r?`Portafolio | ${r.title}`:`Portafolio | Artículo`),n)return(0,C.jsx)(`section`,{className:`section`,children:(0,C.jsx)(`div`,{className:`container`,children:(0,C.jsx)(`p`,{children:`Cargando artículo...`})})});if(!r)return(0,C.jsx)(`section`,{className:`section`,children:(0,C.jsxs)(`div`,{className:`container`,children:[(0,C.jsx)(U,{title:`Artículo no encontrado`,description:`El contenido que buscas no existe o fue movido.`}),(0,C.jsx)(s,{className:`button`,to:`/blog`,children:`Volver al blog`})]})});let i=ne(r.content),a=[],o=[];return i.forEach((e,t)=>{if(e.type===`li`){a.push(e);let n=i[t+1];(!n||n.type!==`li`)&&o.push((0,C.jsx)(`ul`,{className:`bullet-list article-list`,children:a.splice(0,a.length)},`list-group-${t}`))}else o.push(e)}),(0,C.jsx)(`section`,{className:`section`,children:(0,C.jsxs)(`div`,{className:`container article-container`,children:[(0,C.jsx)(s,{className:`text-link`,to:`/blog`,children:`← Volver al blog`}),(0,C.jsxs)(`article`,{className:`article-card`,children:[(0,C.jsxs)(`p`,{className:`blog-meta`,children:[(0,C.jsx)(`span`,{children:z(r.publishedAt)}),(0,C.jsx)(`span`,{children:`•`}),(0,C.jsx)(`span`,{children:r.readingTime})]}),(0,C.jsx)(`h1`,{children:r.title}),(0,C.jsx)(`p`,{className:`article-lead`,children:r.excerpt}),(0,C.jsx)(`div`,{className:`tag-group`,children:r.tags.map(e=>(0,C.jsx)(j,{children:e},e))}),(0,C.jsx)(`div`,{className:`article-content`,children:o})]})]})})}function $(){return L(`Portafolio | Página no encontrada`),(0,C.jsx)(`section`,{className:`section`,children:(0,C.jsxs)(`div`,{className:`container empty-state`,children:[(0,C.jsx)(`h1`,{children:`404`}),(0,C.jsx)(`p`,{children:`La página que buscas no existe.`}),(0,C.jsx)(s,{className:`button`,to:`/`,children:`Volver al inicio`})]})})}var ie=`/Portfolio/`.replace(/\/$/,``)||`/`,ae=o([{path:`/`,element:(0,C.jsx)(ee,{}),errorElement:(0,C.jsx)($,{}),children:[{index:!0,element:(0,C.jsx)(R,{})},{path:`blog`,element:(0,C.jsx)(Q,{})},{path:`blog/:slug`,element:(0,C.jsx)(re,{})},{path:`*`,element:(0,C.jsx)($,{})}]}],{basename:ie});b.createRoot(document.getElementById(`root`)).render((0,C.jsx)(y.StrictMode,{children:(0,C.jsx)(a,{router:ae})}));