import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{a as t,c as n,d as r,f as i,i as a,l as o,n as s,o as c,r as l,s as u,t as d,u as f}from"./react-vendor-CMLx2YC4.js";import{a as p,c as m,i as h,l as ee,n as g,o as _,r as v,s as y,t as te}from"./vendor-HNjA9ERI.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var b=e(i(),1),ne=e(r(),1),x={author:`John Castro Sanabria`,role:`Full Stack Developer | .NET & React`,roleLocalized:{es:`Full Stack Developer | .NET & React`,en:`Full Stack Developer | .NET & React`},email:`castrosanabriajohn@gmail.com`,headline:`Desarrollador Full Stack especializado en .NET, React y arquitectura limpia. Construyo soluciones escalables y mantenibles.`,headlineLocalized:{es:`Desarrollador Full Stack especializado en .NET, React y arquitectura limpia. Construyo soluciones escalables y mantenibles.`,en:`Full Stack Developer specialized in .NET, React and clean architecture. I build scalable and maintainable solutions.`},description:`Portafolio profesional de John Castro Sanabria. Full Stack Developer con experiencia en .NET Core, React, SQL Server, Azure y arquitectura limpia. Especializado en APIs REST, microservicios y aplicaciones web modernas.`,descriptionLocalized:{es:`Portafolio profesional de John Castro Sanabria. Full Stack Developer con experiencia en .NET Core, React, SQL Server, Azure y arquitectura limpia. Especializado en APIs REST, microservicios y aplicaciones web modernas.`,en:`Professional portfolio of John Castro Sanabria. Full Stack Developer with experience in .NET Core, React, SQL Server, Azure and clean architecture. Specialized in REST APIs, microservices and modern web applications.`},ctaPrimary:`Ver proyectos`,ctaPrimaryLocalized:{es:`Ver proyectos`,en:`View projects`},ctaSecondary:`Leer blog técnico`,ctaSecondaryLocalized:{es:`Leer blog técnico`,en:`Read technical blog`},socialLinks:[{label:{es:`Correo`,en:`Email`},href:`mailto:castrosanabriajohn@gmail.com`,icon:`mail`},{label:`GitHub`,href:`https://github.com/full-stack-dev-johncastrosanabria`,icon:`github`},{label:`LinkedIn`,href:`https://www.linkedin.com/in/john-castro-sanabria/`,icon:`linkedin`}],keywords:[`.NET`,`React`,`Full Stack`,`Clean Architecture`,`API REST`,`SQL Server`,`Azure`,`JavaScript`,`C#`,`Web Development`]},S=(0,b.createContext)(null);function C(){let e=(0,b.useContext)(S);if(!e)throw Error(`useTheme must be used within ThemeProvider`);return e}var w=e=>`/Portfolio/${e.replace(/^\//,``)}`;function T(e,t=`es`){return!e||typeof e!=`object`||Array.isArray(e)?e:e[t===`en`?`en`:`es`]??e.es??e.en??``}var E=d();function re(){let{t:e,i18n:t}=s(),{theme:n,toggleTheme:r}=C(),i=t.resolvedLanguage||t.language,a=[{to:`/`,label:e(`nav.home`)},{to:`/blog`,label:e(`nav.blog`)}];function o(){let e=i===`es`?`en`:`es`;t.changeLanguage(e),localStorage.setItem(`portfolio-language`,e),document.documentElement.lang=e}return(0,E.jsx)(`header`,{className:`site-header`,children:(0,E.jsxs)(`div`,{className:`container nav-wrapper`,children:[(0,E.jsxs)(c,{className:`brand`,to:`/`,children:[(0,E.jsx)(`span`,{className:`brand-mark brand-avatar`,children:(0,E.jsx)(`img`,{src:w(`profile-john.png`),alt:`Foto de John Castro`})}),(0,E.jsxs)(`span`,{children:[(0,E.jsx)(`strong`,{children:x.author}),(0,E.jsx)(`span`,{className:`brand-subtitle`,children:T(x.roleLocalized,i)})]})]}),(0,E.jsxs)(`nav`,{className:`nav-links`,"aria-label":`Principal`,children:[a.map(e=>(0,E.jsx)(c,{to:e.to,className:({isActive:e})=>e?`nav-link nav-link-active`:`nav-link`,children:e.label},e.to)),(0,E.jsx)(`button`,{className:`language-toggle`,type:`button`,onClick:o,"aria-label":e(`nav.language`),title:e(`nav.language`),children:i===`es`?`EN`:`ES`}),(0,E.jsx)(`button`,{className:`icon-toggle`,type:`button`,onClick:r,"aria-label":e(`nav.theme`),title:e(`nav.theme`),children:(0,E.jsx)(`span`,{"aria-hidden":`true`,children:n===`dark`?`☀`:`☾`})})]})]})})}function ie(){let{i18n:e}=s(),t=e.resolvedLanguage||e.language;return(0,E.jsx)(`footer`,{className:`site-footer`,children:(0,E.jsxs)(`div`,{className:`container footer-grid`,children:[(0,E.jsxs)(`div`,{className:`footer-brand`,children:[(0,E.jsx)(`img`,{className:`footer-brand-mark`,src:w(`brand-mark.svg`),alt:`Logo personal de John Castro`}),(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`p`,{className:`footer-title`,children:x.author}),(0,E.jsx)(`p`,{className:`footer-copy`,children:T(x.descriptionLocalized,t)})]})]}),(0,E.jsx)(`div`,{className:`footer-links`,children:x.socialLinks.map(e=>(0,E.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noreferrer`,children:T(e.label,t)},e.href))})]})})}function ae(){return(0,E.jsxs)(`div`,{className:`app-shell`,children:[(0,E.jsx)(re,{}),(0,E.jsx)(`main`,{className:`main-content`,children:(0,E.jsx)(u,{})}),(0,E.jsx)(ie,{})]})}var oe=[{id:`portfolio`,title:`Portafolio John Castro Sanabria`,category:`Frontend`,description:`Portafolio profesional construido para presentar experiencia, proyectos y contenido técnico con una experiencia rápida, responsive y desplegada en GitHub Pages.`,highlights:[`Arquitectura frontend con React, Vite y React Router`,`Despliegue automatizado hacia GitHub Pages`,`Diseño responsive enfocado en marca personal técnica`,`Secciones de proyectos, experiencia, habilidades y blog`],technologies:[`React`,`Vite`,`Tailwind CSS`,`GitHub Pages`,`GitHub Actions`],liveDemo:`https://full-stack-dev-johncastrosanabria.github.io/Portfolio/`,githubUrl:`https://github.com/full-stack-dev-johncastrosanabria/Portfolio`,featured:!0},{id:`nova-expediente-novacomp`,title:{es:`NovaExpediente / Novacomp - App corporativa de empleados`,en:`NovaExpediente / Novacomp - Corporate employee app`},category:{es:`Mobile híbrido`,en:`Hybrid mobile`},description:{es:`Aplicación oficial para colaboradores de Novacomp, publicada como NovaExpediente en Android y Novacomp en App Store. Centraliza servicios internos, noticias importantes, denuncias o sugerencias, permisos y trámites empresariales como vacaciones.`,en:`Official Novacomp employee app, published as NovaExpediente on Android and Novacomp on the App Store. It centralizes internal services, important news, complaints or suggestions, permissions and business requests such as vacations.`},highlights:{es:[`App híbrida para iOS y Android con una base de código React Native`,`Módulos para servicios de empleados, noticias, permisos y trámites internos`,`Experiencia móvil orientada a autoservicio corporativo y comunicación interna`,`Publicación en App Store y Google Play con soporte a versiones productivas`],en:[`Hybrid iOS and Android app from one React Native codebase`,`Modules for employee services, news, permissions and internal workflows`,`Mobile experience focused on corporate self-service and internal communication`,`Published on App Store and Google Play with production release support`]},technologies:[`React Native`,`TypeScript`,`React Query`,`Expo`,`iOS`,`Android`],links:[{label:{es:`App Store`,en:`App Store`},href:`https://apps.apple.com/us/app/novacomp/id1621800757`,primary:!0},{label:{es:`Google Play`,en:`Google Play`},href:`https://play.google.com/store/apps/details?id=com.nova.NovaExpediente`}],featured:!0},{id:`business-ai-analytics`,title:`BusinessAI Analytics - Plataforma BI con IA`,category:`Full Stack AI`,description:{es:`Plataforma local de business intelligence para administrar datos, visualizar dashboards, pronosticar rendimiento con IA y consultar insights mediante chatbot sobre bases de datos y documentos.`,en:`Local business intelligence platform to manage data, visualize dashboards, forecast performance with AI and query insights through a chatbot over databases and documents.`},highlights:{es:[`Arquitectura de microservicios con Spring Boot y Spring Cloud Gateway`,`Servicio de IA en FastAPI con modelos LSTM para pronósticos`,`Frontend SPA en React TypeScript para dashboards e interacción analítica`,`Persistencia en MySQL y módulos separados para productos, clientes, ventas, analítica y documentos`],en:[`Microservices architecture with Spring Boot and Spring Cloud Gateway`,`FastAPI AI service with LSTM models for forecasting`,`React TypeScript SPA for dashboards and analytics interaction`,`MySQL persistence and separated modules for products, customers, sales, analytics and documents`]},technologies:[`Spring Boot`,`FastAPI`,`React`,`TypeScript`,`MySQL`,`AI`,`LSTM`],githubUrl:`https://github.com/full-stack-dev-johncastrosanabria/BusinessAI-Analytics`,featured:!0},{id:`reactivities`,title:`Reactivities - Red Social Full Stack`,category:`Full Stack`,description:`Red social full stack con backend .NET y frontend React, enfocada en actividades, perfiles, comentarios y flujos de interacción en tiempo real.`,highlights:[`Autenticación y autorización con flujo seguro de usuarios`,`Gestión de actividades, comentarios y followers`,`Separación clara entre backend, frontend y capa de datos`,`Base sólida para patrones modernos como CQRS y MediatR`],technologies:[`.NET`,`React`,`TypeScript`,`Entity Framework`,`SignalR`,`JWT`],githubUrl:`https://github.com/castrosanabriajohn/Reactivities`,featured:!0},{id:`etickets`,title:`eTickets - Plataforma Cinematográfica`,category:`Full Stack Web`,description:`Aplicación web para venta y administración de entradas de cine, con catálogo, funciones, carrito y gestión de entidades del negocio cinematográfico.`,highlights:[`Arquitectura MVC con ASP.NET Core`,`Gestión de películas, cines, actores y productores`,`Flujo de compra y carrito para entradas`,`Panel administrativo para operación del catálogo`],technologies:[`ASP.NET Core MVC`,`Entity Framework`,`SQL Server`,`Bootstrap`,`C#`],githubUrl:`https://github.com/castrosanabriajohn/eTickets`,featured:!0},{id:`microsoft-landing`,title:`Landing Page Microsoft`,category:`Frontend`,description:`Landing page corporativa inspirada en Microsoft, pensada para comunicar una propuesta cloud con una interfaz clara, moderna y orientada a conversión.`,highlights:[`Diseño visual orientado a producto tecnológico`,`Secciones comerciales para propuesta de valor y servicios`,`Experiencia responsive para desktop y móvil`,`Publicación rápida en Netlify`],technologies:[`React`,`CSS`,`Responsive UI`,`Netlify`],liveDemo:`https://bocetoms.netlify.app/`},{id:`admin-dashboard`,title:`Dashboard React`,category:`Frontend`,description:`Dashboard administrativo en React para visualizar métricas, datos y módulos operativos con una interfaz práctica para gestión diaria.`,highlights:[`Diseño de panel administrativo con enfoque en lectura rápida`,`Componentes reutilizables para vistas de datos`,`Estructura preparada para gráficos, tablas y navegación interna`,`Demo pública desplegada en Netlify`],technologies:[`React`,`JavaScript`,`CSS`,`Netlify`,`Dashboard UI`],liveDemo:`https://johns-admin-dashboard-react.netlify.app/`,githubUrl:`https://github.com/castrosanabriajohn/admin-dashboard`},{id:`clean-api`,title:`Interview Clean API - Arquitectura Limpia`,category:`Backend`,description:`API REST diseñada para demostrar criterios de entrevista técnica: separación de capas, validación, documentación y estructura mantenible.`,highlights:[`Arquitectura limpia con límites claros por capa`,`Endpoints REST orientados a pruebas técnicas`,`Validaciones y manejo ordenado de errores`,`Documentación lista para inspección con Swagger/OpenAPI`],technologies:[`.NET`,`Clean Architecture`,`REST API`,`Swagger`,`C#`],githubUrl:`https://github.com/full-stack-dev-johncastrosanabria/InterviewCleanApi`},{id:`basic-business-app`,title:`BasicBusinessApp - API Clean Architecture .NET`,category:`Backend`,description:`Aplicación empresarial base en .NET que usa Clean Architecture para separar dominio, aplicación, infraestructura y presentación.`,highlights:[`Separación de responsabilidades por capas`,`Principios SOLID aplicados a una base empresarial`,`Estructura preparada para testing y evolución`,`Patrones de inyección de dependencias y servicios`],technologies:[`.NET`,`Clean Architecture`,`C#`,`SOLID`,`Entity Framework`],githubUrl:`https://github.com/castrosanabriajohn/BasicBusinessAppV1`},{id:`propflow`,title:`PropFlow - Landing Page Inmobiliaria`,category:`Frontend`,description:`Landing page inmobiliaria con estética moderna para presentar propiedades, beneficios y llamados a la acción de forma clara.`,highlights:[`Diseño responsive orientado a producto inmobiliario`,`Secciones para beneficios, propiedades y conversión`,`Interfaz limpia con jerarquía visual fuerte`,`Base lista para integración con formularios o CRM`],technologies:[`React`,`Tailwind CSS`,`Vite`,`Responsive UI`],githubUrl:`https://github.com/full-stack-dev-johncastrosanabria/PropFlow`},{id:`criadero-pastores`,title:`Criadero Pastores - Negocio Familiar`,category:`Frontend`,description:`Página en React para un negocio familiar, creada para presentar el criadero, mostrar información clave y ofrecer una presencia digital clara.`,highlights:[`Sitio web público para negocio familiar`,`Diseño responsive y navegación sencilla`,`Presentación de contenido comercial y contacto`,`Demo desplegada en Netlify`],technologies:[`React`,`JavaScript`,`CSS`,`Netlify`],liveDemo:`https://canesbarvae.netlify.app/`,githubUrl:`https://github.com/castrosanabriajohn/criadero-pastores`},{id:`meals-to-go`,title:`MealsToGo - Réplica de Uber Eats`,category:`Mobile`,description:`Proyecto móvil híbrido que replica flujos tipo Uber Eats: exploración de restaurantes, menús, favoritos y experiencia de compra desde React Native.`,highlights:[`Aplicación móvil híbrida con React Native`,`Búsqueda y navegación de restaurantes`,`Persistencia de favoritos y datos de usuario`,`Integración con servicios móviles y mapas`],technologies:[`React Native`,`Expo`,`Firebase`,`Google Maps API`,`Redux`],githubUrl:`https://github.com/castrosanabriajohn/MealsToGo`},{id:`expo-amplify-demo`,title:`Expo Amplify Demo - Mobile + AWS`,category:`Mobile`,description:`Aplicación móvil con React Native y AWS Amplify para explorar autenticación, servicios cloud y backend administrado desde el ecosistema AWS.`,highlights:[`Base móvil con Expo y React Native`,`Integración con AWS Amplify`,`Enfoque en autenticación y backend cloud`,`Proyecto útil para validar arquitectura mobile + cloud`],technologies:[`React Native`,`Expo`,`AWS Amplify`,`GraphQL`,`Cloud`],githubUrl:`https://github.com/castrosanabriajohn/expo-amplify-demo`},{id:`spring-demo`,title:`Spring Demo - Backend Java`,category:`Backend`,description:`API backend con Spring Boot para demostrar fundamentos de desarrollo Java empresarial, endpoints REST y organización por capas.`,highlights:[`API REST con Spring Boot`,`Estructura backend clara y extensible`,`Validación y manejo de errores`,`Base adecuada para servicios Java modernos`],technologies:[`Spring Boot`,`Java`,`REST API`,`Maven`,`Backend`],githubUrl:`https://github.com/full-stack-dev-johncastrosanabria/spring-demo`},{id:`vue-project`,title:`Vue Project - Frontend Framework`,category:`Frontend`,description:`Proyecto web en Vue orientado a practicar componentes, estado, rutas y construcción de interfaces modernas con el ecosistema Vue.`,highlights:[`Componentes Vue reutilizables`,`Estructura pensada para vistas y navegación`,`Práctica de patrones frontend modernos`,`Base educativa para escalar a aplicaciones SPA`],technologies:[`Vue`,`JavaScript`,`Vue Router`,`Vite`,`Frontend`],githubUrl:`https://github.com/castrosanabriajohn/vue-project-section10`},{id:`smartgym-api`,title:`SmartGym - Proyecto Universitario PHP`,category:`Backend`,description:`Proyecto universitario en PHP para la gestión de operaciones de gimnasio, con foco en miembros, clases y administración interna.`,highlights:[`Gestión de datos para miembros y servicios`,`Modelo orientado a procesos de gimnasio`,`Backend universitario con estructura CRUD`,`Aplicación práctica de lógica de negocio en PHP`],technologies:[`PHP`,`MySQL`,`Backend`,`CRUD`,`University Project`],githubUrl:`https://github.com/castrosanabriajohn/smartgym`},{id:`webapi-matricula`,title:`WebAPI Matrícula - Proyecto Universitario .NET MVC`,category:`Backend`,description:`Sistema universitario .NET para gestión de matrícula, estudiantes y cursos, construido como ejercicio integral de backend académico.`,highlights:[`Gestión de estudiantes, cursos y matrícula`,`Lógica de negocio académica`,`Estructura basada en .NET y MVC/Web API`,`Persistencia de datos con SQL Server`],technologies:[`.NET MVC`,`C#`,`SQL Server`,`Entity Framework`,`Web API`],githubUrl:`https://github.com/castrosanabriajohn/WebAPIMatricula_3C2023`},{id:`wcf-tarjetas`,title:`WCF Servicio Tarjetas - Proyecto Universitario`,category:`Backend`,description:`Servicio WCF universitario para operaciones relacionadas con tarjetas, aplicando comunicación SOAP y conceptos clásicos de servicios distribuidos.`,highlights:[`Servicio distribuido con WCF`,`Contratos SOAP para comunicación entre sistemas`,`Operaciones orientadas a tarjetas`,`Práctica de integración en .NET Framework`],technologies:[`WCF`,`.NET Framework`,`SOAP`,`C#`,`SQL Server`],githubUrl:`https://github.com/castrosanabriajohn/WcfServicioTarjetas_3C2023-Ulacit`},{id:`personas-solution`,title:`PersonasSolution - Gestión de Personas`,category:`Backend`,description:`Solución backend para gestionar entidades de personas, pensada como base práctica para operaciones CRUD, separación de capas y persistencia.`,highlights:[`Modelo de dominio centrado en personas`,`Operaciones CRUD organizadas`,`Estructura preparada para extender reglas de negocio`,`Proyecto útil para demostrar fundamentos backend`],technologies:[`.NET`,`C#`,`CRUD`,`Backend`,`SQL`],githubUrl:`https://github.com/full-stack-dev-johncastrosanabria/PersonasSolution`},{id:`flask-product-api`,title:`Flask Product API`,category:`Backend`,description:`API ligera en Flask para gestión de productos, ideal para demostrar endpoints REST, simplicidad de Python y construcción rápida de servicios.`,highlights:[`API REST compacta con Flask`,`Gestión de productos mediante endpoints claros`,`Base simple para pruebas, integración o prototipos`,`Demuestra versatilidad fuera del stack .NET`],technologies:[`Python`,`Flask`,`REST API`,`Backend`,`Products`],githubUrl:`https://github.com/full-stack-dev-johncastrosanabria/FlaskApiProdcuct`}],se=[{title:`Backend .NET`,description:{es:`Diseño e implementación de APIs y servicios orientados a mantenibilidad, seguridad y escalabilidad.`,en:`Design and implementation of APIs and services focused on maintainability, security and scalability.`},items:[`C#`,`.NET`,`ASP.NET Core`,`REST APIs`,`JWT`,`Dependency Injection`]},{title:{es:`Arquitectura y calidad`,en:`Architecture and quality`},description:{es:`Buenas prácticas para construir soluciones empresariales limpias y fáciles de evolucionar.`,en:`Best practices for building clean enterprise solutions that are easier to evolve.`},items:{es:[`Clean Architecture`,`DDD`,`Patrones de diseño`,`Microservicios`,`SOLID`,`Testing mindset`],en:[`Clean Architecture`,`DDD`,`Design patterns`,`Microservices`,`SOLID`,`Testing mindset`]}},{title:{es:`Frontend y experiencia`,en:`Frontend and user experience`},description:{es:`Capacidad para construir interfaces modernas y conectar la UI con servicios backend de forma ordenada.`,en:`Ability to build modern interfaces and connect the UI with backend services in an organized way.`},items:[`React`,`JavaScript`,`TypeScript`,`Vue`,`Blazor`,`Responsive UI`]},{title:{es:`Datos, nube y DevOps`,en:`Data, cloud and DevOps`},description:{es:`Experiencia desplegando, integrando y automatizando software sobre stack Microsoft.`,en:`Experience deploying, integrating and automating software on the Microsoft stack.`},items:[`SQL Server`,`Oracle`,`Azure`,`Azure DevOps`,`CI/CD`,`Git`]}],ce=[{value:{es:`3+ años`,en:`3+ years`},label:{es:`Experiencia en desarrollo`,en:`Development experience`},detail:{es:`Construyendo backend, APIs y soluciones full stack para entornos empresariales.`,en:`Building backend, APIs and full stack solutions for enterprise environments.`}},{value:`.NET + React`,label:{es:`Perfil híbrido`,en:`Hybrid profile`},detail:{es:`Capacidad para entregar tanto lógica de negocio como interfaces modernas.`,en:`Ability to deliver both business logic and modern interfaces.`}},{value:`Azure DevOps`,label:{es:`Entrega continua`,en:`Continuous delivery`},detail:{es:`Automatización de despliegues y trazabilidad del ciclo de vida del software.`,en:`Deployment automation and traceability across the software delivery lifecycle.`}}];function D({eyebrow:e,title:t,description:n}){return(0,E.jsxs)(`div`,{className:`section-heading`,children:[e?(0,E.jsx)(`p`,{className:`section-eyebrow`,children:e}):null,(0,E.jsx)(`h2`,{children:t}),n?(0,E.jsx)(`p`,{className:`section-description`,children:n}):null]})}var le=[{company:`Innovative`,role:`Software Development Intern`,period:`May 2022 - Aug 2022`,startDate:`2022-05-01`,endDate:`2022-08-31`,duration:`4 months`,summary:{es:`Participación en el desarrollo de una solución web y móvil con backend .NET, componentes frontend y soporte de despliegue. Experiencia inicial en arquitectura full stack y integración de servicios.`,en:`Contributed to a web and mobile solution with a .NET backend, frontend components and deployment support. Early experience in full stack architecture and service integration.`},description:{es:`Durante mi internship en Innovative, trabajé en un proyecto de transformación digital que incluía una solución integral con backend robusto, interfaces web modernas y aplicación móvil nativa. Colaboré con un equipo multidisciplinario en la implementación de características, optimización de performance y despliegue en múltiples plataformas.`,en:`During my internship at Innovative, I worked on a digital transformation project that included a robust backend, modern web interfaces and a native mobile app. I collaborated with a multidisciplinary team on feature implementation, performance optimization and deployment across multiple platforms.`},achievements:{es:[`Contribuí al desarrollo del backend con .NET Core, implementando APIs REST para una solución interna de gestión de trámites.`,`Participé en el desarrollo frontend con Vue.js para la interfaz web y React Native para la aplicación móvil.`,`Implementé integraciones de analítica y monitoreo con Firebase Analytics y Crashlytics para tracking de errores.`,`Colaboré en el proceso de despliegue y publicación de la aplicación móvil en App Store e Google Play.`,`Aprendí sobre CI/CD, versionamiento y buenas prácticas de desarrollo en equipo.`],en:[`Contributed to backend development with .NET Core, implementing REST APIs for an internal request management solution.`,`Worked on frontend development with Vue.js for the web interface and React Native for the mobile app.`,`Implemented analytics and monitoring integrations with Firebase Analytics and Crashlytics for error tracking.`,`Collaborated in the deployment and mobile app publishing process for App Store and Google Play.`,`Learned about CI/CD, versioning and team development best practices.`]},stack:[`.NET Core`,`C#`,`Vue.js`,`React Native`,`Firebase`,`JavaScript`,`Git`],highlights:[`Full Stack Development`,`Mobile Deployment`,`Firebase Integration`]},{company:`Innovative S.A.`,role:`Software Engineer I (Full Stack)`,period:`Oct 2022 - Sep 2025`,startDate:`2022-10-03`,endDate:`2025-09-30`,duration:`2 years 11 months`,summary:{es:`Desarrollo de APIs REST empresariales y soluciones full stack para el sector financiero con foco en mantenibilidad, seguridad e integración. Liderazgo técnico en arquitectura limpia y optimización de bases de datos.`,en:`Built enterprise REST APIs and full stack solutions for the financial sector, focused on maintainability, security and integration. Technical leadership in clean architecture and database optimization.`},description:{es:`Como Software Engineer I en Innovative, fui responsable del diseño e implementación de soluciones backend escalables para clientes del sector financiero. Trabajé en la modernización de sistemas legacy, implementación de arquitectura limpia y optimización de performance en bases de datos empresariales. Colaboré con equipos de infraestructura en la automatización de despliegues y monitoreo de aplicaciones en producción.`,en:`As Software Engineer I at Innovative, I designed and implemented scalable backend solutions for financial sector clients. I worked on legacy modernization, clean architecture implementation and performance optimization in enterprise databases. I also collaborated with infrastructure teams on deployment automation and production monitoring.`},achievements:{es:[`Desarrollé más de 50 APIs REST con ASP.NET Core y C# siguiendo principios SOLID y Clean Architecture.`,`Implementé patrones de diseño avanzados: CQRS, MediatR, Repository Pattern y Dependency Injection.`,`Optimicé consultas SQL en SQL Server y Oracle, mejorando performance en 40-60% en operaciones críticas.`,`Diseñé y ejecuté procedimientos almacenados complejos para reportes y procesamiento de datos.`,`Automaticé despliegues a múltiples ambientes (DEV, QA, PROD) mediante pipelines CI/CD en Azure DevOps.`,`Implementé estrategias de versionamiento, rollback y monitoreo de aplicaciones en producción.`,`Mentoricé a desarrolladores junior en arquitectura y mejores prácticas de código.`],en:[`Developed 50+ REST APIs with ASP.NET Core and C# following SOLID principles and Clean Architecture.`,`Implemented advanced design patterns including CQRS, MediatR, Repository Pattern and Dependency Injection.`,`Optimized SQL queries in SQL Server and Oracle, improving critical operation performance by 40-60%.`,`Designed and executed complex stored procedures for reporting and data processing.`,`Automated deployments across DEV, QA and PROD environments using Azure DevOps CI/CD pipelines.`,`Implemented versioning, rollback and production monitoring strategies.`,`Mentored junior developers on architecture and code best practices.`]},stack:[`C#`,`.NET Core`,`.NET Framework`,`ASP.NET Core`,`SQL Server`,`Oracle`,`T-SQL`,`PL/SQL`,`Azure DevOps`,`Git`,`Entity Framework`],highlights:[`Clean Architecture`,`Database Optimization`,`CI/CD Pipelines`,`Mentoring`]},{company:`Novacomp S.A.`,role:`Pre-Sales Engineer | Microsoft Cloud & AI Solutions`,period:`Aug 2025 - Feb 2026`,startDate:`2025-08-01`,endDate:`2026-02-28`,duration:`7 months`,summary:{es:`Rol híbrido entre desarrollo de negocio, preventa técnica y consultoría comercial para soluciones Microsoft Cloud, con foco en Azure, DevOps, Fabric, Purview, Power Platform, Microsoft 365 e IA aplicada al negocio.`,en:`Hybrid role across business development, technical pre-sales and commercial consulting for Microsoft Cloud solutions, focused on Azure, DevOps, Fabric, Purview, Power Platform, Microsoft 365 and business AI.`},description:{es:`Quise retarme fuera de mi zona técnica y explorar mi lado comercial, sin dejar de lado mi perfil tecnológico. En Novacomp trabajé en un rol híbrido entre desarrollo de negocio, preventa técnica y consultoría comercial para soluciones Microsoft Cloud. Generé y califiqué oportunidades relacionadas con Azure, Azure DevOps, Microsoft Fabric, Purview, Power Platform, Microsoft 365 e IA aplicada al negocio. Gracias a mi experiencia previa como Full-Stack Software Engineer, pude llevar conversaciones más técnicas y consultivas con clientes, apoyar demostraciones, dashboards, automatizaciones, propuestas y reuniones comerciales. Evolucioné de SDR Tech hacia un rol de preventa, liderando reuniones de forma independiente y manteniendo un promedio aproximado de 10 reuniones calificadas al mes.`,en:`I challenged myself outside my technical comfort zone and explored my commercial side without leaving my technology profile behind. At Novacomp, I worked in a hybrid role across business development, technical pre-sales and commercial consulting for Microsoft Cloud solutions. I generated and qualified opportunities related to Azure, Azure DevOps, Microsoft Fabric, Purview, Power Platform, Microsoft 365 and AI applied to business. Thanks to my previous experience as a Full-Stack Software Engineer, I was able to lead more technical and consultative conversations with clients, support demos, dashboards, automations, proposals and commercial meetings. I evolved from SDR Tech toward a pre-sales role, independently leading meetings and maintaining an average of about 10 qualified meetings per month.`},achievements:{es:[`Generé y califiqué oportunidades comerciales sobre soluciones Microsoft Cloud, datos, productividad e IA.`,`Lideré reuniones calificadas de forma independiente, con un promedio aproximado de 10 reuniones al mes.`,`Apoyé demostraciones técnicas, dashboards, automatizaciones, propuestas y reuniones comerciales consultivas.`,`Conecté necesidades de negocio con soluciones en Azure, Azure DevOps, Microsoft Fabric, Purview, Power Platform y Microsoft 365.`,`Aproveché mi experiencia full stack para sostener conversaciones técnicas con clientes y equipos internos.`,`Evolucioné desde SDR Tech hacia responsabilidades de preventa técnica y consultoría comercial.`],en:[`Generated and qualified business opportunities around Microsoft Cloud, data, productivity and AI solutions.`,`Led qualified meetings independently, averaging about 10 qualified meetings per month.`,`Supported technical demos, dashboards, automations, proposals and consultative commercial meetings.`,`Connected business needs with solutions across Azure, Azure DevOps, Microsoft Fabric, Purview, Power Platform and Microsoft 365.`,`Used my full stack background to sustain technical conversations with clients and internal teams.`,`Evolved from SDR Tech into technical pre-sales and commercial consulting responsibilities.`]},stack:[`Azure`,`Azure DevOps`,`Microsoft Fabric`,`Microsoft Purview`,`Power Platform`,`Microsoft 365`,`AI Solutions`,`Pre-Sales`,`Business Development`],highlights:[`Microsoft Cloud`,`AI Solutions`,`Technical Pre-Sales`,`Business Development`]}];function O({children:e}){return(0,E.jsx)(`span`,{className:`tag`,children:e})}var ue=[...le].sort((e,t)=>new Date(t.startDate).getTime()-new Date(e.startDate).getTime());function k(){let{i18n:e}=s(),t=e.resolvedLanguage||e.language;return(0,E.jsx)(`div`,{className:`timeline`,children:ue.map(e=>(0,E.jsxs)(`article`,{className:`timeline-card`,children:[(0,E.jsx)(`div`,{className:`timeline-meta`,children:(0,E.jsx)(`p`,{className:`timeline-period`,children:T(e.period,t)})}),(0,E.jsxs)(`div`,{className:`timeline-body`,children:[(0,E.jsxs)(`div`,{className:`timeline-title`,children:[(0,E.jsx)(`div`,{className:`timeline-dot`}),(0,E.jsx)(`h3`,{children:T(e.role,t)})]}),(0,E.jsx)(`p`,{className:`timeline-company`,children:e.company}),(0,E.jsx)(`p`,{className:`muted`,children:T(e.summary,t)}),(0,E.jsx)(`ul`,{className:`bullet-list`,children:T(e.achievements,t).map(e=>(0,E.jsx)(`li`,{children:e},e))}),(0,E.jsx)(`div`,{className:`tag-group`,children:e.stack.map(e=>(0,E.jsx)(O,{children:e},e))})]})]},`${e.company}-${T(e.role,`es`)}`))})}function A({project:e,language:t}){let{t:n,i18n:r}=s(),i=t||r.resolvedLanguage||r.language,a=e.links??[];return(0,E.jsxs)(`article`,{className:`project-card`,children:[(0,E.jsx)(`p`,{className:`project-category`,children:T(e.category,i)}),(0,E.jsx)(`h3`,{children:T(e.title,i)}),(0,E.jsx)(`p`,{className:`muted`,children:T(e.description,i)}),(0,E.jsx)(`ul`,{className:`bullet-list`,children:T(e.highlights,i).map(e=>(0,E.jsx)(`li`,{children:e},e))}),(0,E.jsx)(`div`,{className:`tag-group`,children:e.technologies.map(e=>(0,E.jsx)(O,{children:e},e))}),(e.liveDemo||e.githubUrl||a.length>0)&&(0,E.jsxs)(`div`,{className:`project-links`,children:[e.liveDemo&&(0,E.jsx)(`a`,{className:`button button-primary`,href:e.liveDemo,target:`_blank`,rel:`noopener noreferrer`,title:`Ver sitio en vivo`,children:n(`projectLinks.live`)}),e.githubUrl&&(0,E.jsx)(`a`,{className:`button button-secondary`,href:e.githubUrl,target:`_blank`,rel:`noopener noreferrer`,title:`Ver código en GitHub`,children:n(`projectLinks.code`)}),a.map(e=>(0,E.jsx)(`a`,{className:`button ${e.primary?`button-primary`:`button-secondary`}`,href:e.href,target:`_blank`,rel:`noopener noreferrer`,title:T(e.label,i),children:T(e.label,i)},e.href))]})]})}function j({title:e,description:t,items:n,language:r}){let i=T(n,r);return(0,E.jsxs)(`article`,{className:`skill-card`,children:[(0,E.jsx)(`h3`,{children:T(e,r)}),(0,E.jsx)(`p`,{className:`muted`,children:T(t,r)}),(0,E.jsx)(`div`,{className:`tag-group`,children:i.map(e=>(0,E.jsx)(O,{children:e},e))})]})}function M({value:e,label:t,detail:n,language:r}){return(0,E.jsxs)(`article`,{className:`stat-card`,children:[(0,E.jsx)(`p`,{className:`stat-value`,children:T(e,r)}),(0,E.jsx)(`p`,{className:`stat-label`,children:T(t,r)}),(0,E.jsx)(`p`,{className:`muted`,children:T(n,r)})]})}function N(e,t=` | John Castro Sanabria`){(0,b.useEffect)(()=>{let n=e?`${e}${t}`:`John Castro Sanabria - Full Stack Developer`;document.title=n;let r=document.querySelector(`meta[property="og:title"]`);r&&r.setAttribute(`content`,n)},[e,t])}function P(){N(`Portafolio | Full Stack .NET Developer`);let{t:e,i18n:n}=s(),r=n.resolvedLanguage||n.language,i=e(`hero.bullets`,{returnObjects:!0});return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(`section`,{className:`hero-section`,children:(0,E.jsxs)(`div`,{className:`container hero-grid`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`p`,{className:`section-eyebrow`,children:e(`hero.eyebrow`)}),(0,E.jsx)(`h1`,{children:x.author}),(0,E.jsx)(`p`,{className:`hero-role`,children:T(x.roleLocalized,r)}),(0,E.jsx)(`p`,{className:`hero-copy`,children:T(x.headlineLocalized,r)}),(0,E.jsxs)(`div`,{className:`hero-actions`,children:[(0,E.jsx)(`a`,{className:`button`,href:`#proyectos`,children:T(x.ctaPrimaryLocalized,r)}),(0,E.jsx)(t,{className:`button button-secondary`,to:`/blog`,children:T(x.ctaSecondaryLocalized,r)})]})]}),(0,E.jsxs)(`aside`,{className:`hero-card hero-profile-card`,children:[(0,E.jsx)(`div`,{className:`hero-profile-media`,children:(0,E.jsx)(`img`,{src:w(`profile-john.png`),alt:`John Castro en oficina`})}),(0,E.jsxs)(`div`,{className:`hero-profile-copy`,children:[(0,E.jsx)(`p`,{className:`hero-card-label`,children:e(`hero.profile`)}),(0,E.jsx)(`h2`,{children:e(`hero.profileTitle`)}),(0,E.jsx)(`p`,{className:`hero-profile-text`,children:e(`hero.profileText`)}),(0,E.jsx)(`ul`,{className:`bullet-list hero-bullet-list`,children:i.map(e=>(0,E.jsx)(`li`,{children:e},e))})]})]})]})}),(0,E.jsx)(`section`,{className:`section section-tight-top`,children:(0,E.jsx)(`div`,{className:`container stats-grid`,children:ce.map(e=>(0,E.jsx)(M,{value:e.value,label:e.label,detail:e.detail,language:r},T(e.label,`es`)))})}),(0,E.jsx)(`section`,{className:`section`,children:(0,E.jsxs)(`div`,{className:`container`,children:[(0,E.jsx)(D,{eyebrow:e(`sections.stackEyebrow`),title:e(`sections.stackTitle`),description:e(`sections.stackDescription`)}),(0,E.jsx)(`div`,{className:`skills-grid`,children:se.map(e=>(0,E.jsx)(j,{...e,language:r},T(e.title,`es`)))})]})}),(0,E.jsx)(`section`,{className:`section`,children:(0,E.jsxs)(`div`,{className:`container`,children:[(0,E.jsx)(D,{eyebrow:e(`sections.experienceEyebrow`),title:e(`sections.experienceTitle`),description:e(`sections.experienceDescription`)}),(0,E.jsx)(k,{})]})}),(0,E.jsx)(`section`,{className:`section`,id:`proyectos`,children:(0,E.jsxs)(`div`,{className:`container`,children:[(0,E.jsx)(D,{eyebrow:e(`sections.projectsEyebrow`),title:e(`sections.projectsTitle`),description:e(`sections.projectsDescription`)}),(0,E.jsx)(`div`,{className:`card-grid`,children:oe.map(e=>(0,E.jsx)(A,{project:e,language:r},e.id))})]})}),(0,E.jsx)(`section`,{className:`section section-accent`,children:(0,E.jsxs)(`div`,{className:`container cta-panel`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`p`,{className:`section-eyebrow`,children:e(`sections.blogEyebrow`)}),(0,E.jsx)(`h2`,{children:e(`sections.blogTitle`)}),(0,E.jsx)(`p`,{className:`section-description`,children:e(`sections.blogDescription`)})]}),(0,E.jsx)(t,{className:`button`,to:`/blog`,children:e(`sections.blogButton`)})]})})]})}function F(e,t=`es`){return new Intl.DateTimeFormat(t===`en`?`en-US`:`es-ES`,{day:`2-digit`,month:`long`,year:`numeric`}).format(new Date(e))}function I(e,t){return e.slug===t}function L({post:e}){let{t:n,i18n:r}=s(),i=r.resolvedLanguage||r.language;return(0,E.jsxs)(`article`,{className:`blog-card`,children:[(0,E.jsxs)(`div`,{className:`blog-card-top`,children:[(0,E.jsxs)(`p`,{className:`blog-meta`,children:[(0,E.jsx)(`span`,{children:F(e.publishedAt,i)}),(0,E.jsx)(`span`,{children:`•`}),(0,E.jsx)(`span`,{children:e.readingTime}),(0,E.jsx)(`span`,{children:`•`}),(0,E.jsx)(`span`,{children:e.source===`firebase`?`Firebase`:n(`blog.sourceLocal`)})]}),(0,E.jsx)(`h3`,{children:e.title}),(0,E.jsx)(`p`,{className:`muted`,children:e.excerpt})]}),(0,E.jsx)(`div`,{className:`tag-group`,children:e.tags.map(e=>(0,E.jsx)(O,{children:e},e))}),(0,E.jsx)(t,{className:`button button-secondary`,to:`/blog/${e.slug}`,children:n(`blog.readArticle`)})]})}function R({search:e,onSearchChange:t,selectedTag:n,onTagChange:r,availableTags:i}){let{t:a}=s();return(0,E.jsxs)(`div`,{className:`filters-panel`,children:[(0,E.jsxs)(`label`,{className:`field`,children:[(0,E.jsx)(`span`,{children:a(`blog.search`)}),(0,E.jsx)(`input`,{type:`search`,value:e,onChange:e=>t(e.target.value),placeholder:a(`blog.searchPlaceholder`)})]}),(0,E.jsxs)(`label`,{className:`field`,children:[(0,E.jsx)(`span`,{children:a(`blog.tag`)}),(0,E.jsxs)(`select`,{value:n,onChange:e=>r(e.target.value),children:[(0,E.jsx)(`option`,{value:`all`,children:a(`blog.all`)}),i.map(e=>(0,E.jsx)(`option`,{value:e,children:e},e))]})]})]})}function z({title:e,description:t}){return(0,E.jsxs)(`div`,{className:`empty-state`,children:[(0,E.jsx)(`h3`,{children:e}),(0,E.jsx)(`p`,{children:t})]})}function B({label:e=`Cargando contenido...`}){return(0,E.jsxs)(`div`,{className:`loader`,role:`status`,"aria-live":`polite`,children:[(0,E.jsx)(`span`,{className:`loader-dot`}),(0,E.jsx)(`p`,{children:e})]})}var V={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0,measurementId:void 0},H=[`apiKey`,`authDomain`,`projectId`,`appId`].every(e=>!!V[e]);function U(){return H?y().length?_():m(V):null}var W=U(),G=W?v(W):null,de=[{id:`1`,slug:`net-10-features-2026`,title:`.NET 10: Nuevas características y mejoras de performance`,excerpt:`.NET 10 trae mejoras significativas en performance, seguridad y herramientas de desarrollo. Descubre las características clave que debes conocer.`,content:`
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
    `,tags:[`React`,`Full Stack`,`.NET`],publishedAt:`2026-03-10`,readingTime:`4 min`,source:`local`}];function K(e,t=`local`){if(`data`in e){let n=e.data();return{id:e.id,slug:n.slug??e.id,title:n.title??``,excerpt:n.excerpt??``,content:n.content??``,tags:n.tags??[],publishedAt:n.publishedAt??new Date().toISOString(),readingTime:n.readingTime??`4 min`,source:t}}return{...e,source:t}}function q(){let[e,t]=(0,b.useState)(de.map(e=>K(e))),[n,r]=(0,b.useState)(H),[i,a]=(0,b.useState)(``);return(0,b.useEffect)(()=>{async function e(){if(!H||!G){r(!1);return}try{let e=await g(p(te(G,`posts`),h(`publishedAt`,`desc`)));e.empty||t(e.docs.map(e=>K(e,`firebase`)))}catch(e){console.warn(`No se pudieron cargar los posts desde Firebase. Se usarán los locales.`,e),a(`blog.firebaseFallback`)}finally{r(!1)}}e()},[]),{posts:(0,b.useMemo)(()=>[...e].sort((e,t)=>new Date(t.publishedAt).getTime()-new Date(e.publishedAt).getTime()),[e]),isLoading:n,error:i}}var fe={en:{1:{title:`.NET 10: New features and performance improvements`,excerpt:`.NET 10 brings meaningful improvements in performance, security and developer tooling. These are the key features worth knowing.`,content:`
## .NET 10: New features and performance improvements

.NET 10 is an important step in the evolution of the platform. With a focus on performance, security and developer experience, this version reinforces .NET as a strong choice for modern enterprise applications.

### Performance Improvements

#### Improved AOT compilation
Ahead-of-Time (AOT) compilation is now more efficient, reducing binary size by up to 40% compared with previous versions. This is especially useful for containerized applications and edge computing.

#### GC optimizations
The garbage collector has been optimized to reduce pauses and improve throughput in highly concurrent applications.

### Improved Security

#### Encryption by default
Database connections now use TLS encryption by default, improving security without extra configuration.

#### Dependency validation
Improved tooling helps detect dependency vulnerabilities during the build process.

### Developer Tools

#### Visual Studio 2026 improvements
- Smarter AI-assisted IntelliSense
- Improved debugging with snapshots
- Integrated performance profiling

#### Improved CLI
New commands for scaffolding, testing and deployment.

### Recommendations

For new projects, .NET 10 is the recommended option. For existing projects, evaluate migration based on the performance and security benefits.
      `,tags:[`.NET`,`Performance`,`C#`,`Trends`]},2:{title:`Clean Architecture in .NET: Practical guide 2026`,excerpt:`Implement Clean Architecture in your .NET projects. Learn how to structure code for better maintainability and scalability.`,content:`
## Clean Architecture in .NET: Practical guide 2026

Clean Architecture is more relevant than ever in 2026. As applications become more complex, a well-defined architecture is essential.

### Layer Structure

#### 1. Domain Layer
Contains entities and pure business logic. It has no external dependencies.

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
Use cases and orchestration. MediatR is useful for CQRS.

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
        // Creation logic
    }
}
\`\`\`

#### 3. Infrastructure Layer
Repository implementations, external services and persistence details.

#### 4. Presentation Layer
Controllers, DTOs and input validation.

### Benefits

- **Testability**: Each layer is independent and easier to test
- **Maintainability**: Changes in one layer do not affect the rest of the system unnecessarily
- **Scalability**: New features are easier to add
- **Framework independence**: Business logic is not tied to specific technologies

### Recommended Tools

- **MediatR**: For CQRS
- **FluentValidation**: For validation
- **AutoMapper**: For DTO mapping
- **Entity Framework Core**: For data access
      `,tags:[`Clean Architecture`,`SOLID`,`Design Patterns`,`.NET`]},3:{title:`Microservices in .NET: Patterns and practices`,excerpt:`Design and deploy scalable microservices with .NET. Learn about communication, resilience and orchestration.`,content:`
## Microservices in .NET: Patterns and practices

Microservices are a preferred architecture for complex enterprise applications. .NET provides strong tools for implementing them.

### Service Communication

#### Synchronous: gRPC
More efficient than REST for internal communication.

\`\`\`csharp
// Service definition
service UserService {
  rpc GetUser (GetUserRequest) returns (UserResponse);
}
\`\`\`

#### Asynchronous: Message Queues
RabbitMQ and Azure Service Bus help decouple services.

### Resilience

#### Polly
Implement retries, circuit breakers and timeouts.

\`\`\`csharp
var policy = Policy
    .Handle<HttpRequestException>()
    .Or<TimeoutRejectedException>()
    .WaitAndRetryAsync(3, retryAttempt => 
        TimeSpan.FromSeconds(Math.Pow(2, retryAttempt)));
\`\`\`

### Observability

- **Logging**: Serilog with distributed context
- **Tracing**: OpenTelemetry
- **Metrics**: Prometheus

### Deployment

Use Kubernetes or Azure Container Instances for orchestration.
      `,tags:[`Microservices`,`gRPC`,`Kubernetes`,`.NET`]},4:{title:`Async/Await: Best practices in .NET`,excerpt:`Master asynchronous programming in .NET. Avoid deadlocks, memory leaks and other common issues.`,content:`
## Async/Await: Best practices in .NET

Asynchronous programming is fundamental in modern .NET. These practices help avoid common problems.

### Golden Rule: Async All The Way

Never block asynchronous code:

\`\`\`csharp
// BAD
public async Task<User> GetUser(int id)
{
    var result = _userService.GetUserAsync(id).Result; // DEADLOCK!
    return result;
}

// GOOD
public async Task<User> GetUser(int id)
{
    return await _userService.GetUserAsync(id);
}
\`\`\`

### ConfigureAwait(false)

In libraries, use ConfigureAwait(false):

\`\`\`csharp
public async Task<Data> FetchDataAsync()
{
    var response = await _httpClient.GetAsync(url).ConfigureAwait(false);
    return await response.Content.ReadAsAsync<Data>().ConfigureAwait(false);
}
\`\`\`

### Exception Handling

\`\`\`csharp
try
{
    await Task.WhenAll(tasks);
}
catch (Exception ex)
{
    // Handle AggregateException correctly
    _logger.LogError(ex, "Error in parallel operations");
}
\`\`\`

### ValueTask vs Task

Use ValueTask for methods that often complete synchronously:

\`\`\`csharp
public ValueTask<int> GetCachedValueAsync(string key)
{
    if (_cache.TryGetValue(key, out var value))
        return new ValueTask<int>(value);
    
    return new ValueTask<int>(FetchFromDatabaseAsync(key));
}
\`\`\`
      `,tags:[`Async`,`Performance`,`C#`,`Concurrency`]},5:{title:`Entity Framework Core 10: Complete guide`,excerpt:`Master Entity Framework Core 10. Learn about optimized queries, lazy loading and ORM best practices.`,content:`
## Entity Framework Core 10: Complete guide

Entity Framework Core 10 brings significant improvements in performance and functionality.

### Optimized Queries

#### LINQ to SQL Translation
EF Core now translates more LINQ operations directly into SQL:

\`\`\`csharp
// This translates directly to SQL
var users = await _context.Users
    .Where(u => u.Email.Contains("@example.com"))
    .OrderBy(u => u.CreatedAt)
    .Take(10)
    .ToListAsync();
\`\`\`

#### Compiled Queries
For frequent queries, compile them:

\`\`\`csharp
private static readonly Func<AppDbContext, int, Task<User>> GetUserById =
    EF.CompileAsyncQuery((AppDbContext ctx, int id) =>
        ctx.Users.FirstOrDefault(u => u.Id == id));

public async Task<User> GetUser(int id)
{
    return await GetUserById(_context, id);
}
\`\`\`

#### Safe Lazy Loading

\`\`\`csharp
public class User
{
    public int Id { get; set; }
    public virtual ICollection<Post> Posts { get; set; } // Lazy loaded
}

// In Startup
services.AddDbContext<AppDbContext>(options =>
    options.UseLazyLoadingProxies());
\`\`\`

#### Bulk Operations

\`\`\`csharp
await _context.Users
    .Where(u => u.IsInactive)
    .ExecuteDeleteAsync();
\`\`\`
      `,tags:[`Entity Framework`,`ORM`,`SQL`,`.NET`]},6:{title:`Testing in .NET: Unit, integration and E2E`,excerpt:`Build a complete testing strategy. Learn about xUnit, Moq, TestContainers and more.`,content:`
## Testing in .NET: Unit, integration and E2E

Good test coverage is essential for quality code. This is the complete guide.

### Unit Testing with xUnit

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

### Integration Testing with TestContainers

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
        // Test with a real database
    }
}
\`\`\`

### E2E Testing

Use Playwright or Selenium for interface tests.

### Test Coverage

Aim for 80%+ coverage in critical code.
      `,tags:[`xUnit`,`Testing`,`Moq`,`Quality Assurance`]},7:{title:`How I structure REST APIs in ASP.NET Core`,excerpt:`My approach to organizing a maintainable API with layered separation, clear services and room to evolve.`,content:`
## What I look for when designing an API

An enterprise API should not only work. It should also be easy to maintain, test and extend when requirements change.

## My approach

1. Separate domain, application and infrastructure.
2. Keep controllers thin.
3. Move business logic into services and use cases.
4. Take care of validation, contracts and error handling.

## Result

This helps the project scale without becoming a codebase that is hard to understand.
      `,tags:[`ASP.NET Core`,`REST API`,`Architecture`]},8:{title:`Clean Architecture in real .NET projects`,excerpt:`Beyond theory: how it brings order, maintainability and clarity when a system starts to grow.`,content:`
## Why I use it

When a solution starts to grow, mixing data access, business rules and framework details makes everything harder.

## Practical benefits

- Isolates business rules.
- Makes testing and change easier.
- Reduces coupling with infrastructure.
- Clarifies the responsibility of each layer.

## Where it helps most

Especially in systems with integrations, complex rules and multiple deployment environments.
      `,tags:[`Clean Architecture`,`.NET`,`Best practices`]},9:{title:`React as the frontend layer for full stack .NET solutions`,excerpt:`Why React fits well as a modern interface when the backend lives in ASP.NET Core.`,content:`
## A practical combination

ASP.NET Core enables robust APIs, while React provides flexibility for fast and modular interfaces.

## What I value in this combination

- Clear separation between frontend and backend.
- Scalability for teams and modules.
- Better user experience.
- Easy API consumption and UI evolution.

## In summary

It is a very useful combination for building modern enterprise products without losing technical order.
      `,tags:[`React`,`Full Stack`,`.NET`]}}};function J(e,t=`es`){let n=fe[t===`en`?`en`:`es`]?.[e.id]??{};return{...e,title:n.title??T(e.title,t),excerpt:n.excerpt??T(e.excerpt,t),content:n.content??T(e.content,t),tags:n.tags??T(e.tags,t)}}function pe(){N(`Portafolio | Blog técnico .NET`);let{t:e,i18n:t}=s(),n=t.resolvedLanguage||t.language,{posts:r,isLoading:i,error:a}=q(),[o,c]=f(),l=o.get(`search`)??``,u=o.get(`tag`)??`all`,d=(0,b.useMemo)(()=>r.map(e=>J(e,n)),[r,n]),p=(0,b.useMemo)(()=>[...new Set(d.flatMap(e=>e.tags))].sort((e,t)=>e.localeCompare(t,n)),[d,n]),m=(0,b.useMemo)(()=>d.filter(e=>{let t=!l||[e.title,e.excerpt,e.content,e.tags.join(` `)].join(` `).toLowerCase().includes(l.toLowerCase()),n=u===`all`||e.tags.includes(u);return t&&n}),[d,l,u]);function h(e){let t=new URLSearchParams(o);Object.entries(e).forEach(([e,n])=>{!n||n===`all`?t.delete(e):t.set(e,n)}),c(t)}return(0,E.jsx)(`section`,{className:`section`,children:(0,E.jsxs)(`div`,{className:`container`,children:[(0,E.jsx)(D,{eyebrow:e(`sections.blogEyebrow`),title:e(`blog.title`),description:e(`blog.description`)}),(0,E.jsx)(R,{search:l,onSearchChange:e=>h({search:e}),selectedTag:u,onTagChange:e=>h({tag:e}),availableTags:p}),a?(0,E.jsx)(`p`,{className:`helper-text`,children:e(a)}):null,i?(0,E.jsx)(B,{label:e(`blog.loading`)}):null,!i&&m.length===0?(0,E.jsx)(z,{title:e(`blog.emptyTitle`),description:e(`blog.emptyDescription`)}):null,(0,E.jsx)(`div`,{className:`card-grid blog-grid`,children:m.map(e=>(0,E.jsx)(L,{post:e},e.id))})]})})}function me(e){return e.trim().split(`
`).filter(Boolean).map((e,t)=>e.startsWith(`## `)?(0,E.jsx)(`h2`,{children:e.replace(`## `,``)},`${e}-${t}`):e.startsWith(`- `)?(0,E.jsx)(`li`,{children:e.replace(`- `,``)},`${e}-${t}`):/^\d+\.\s/.test(e)?(0,E.jsx)(`li`,{children:e.replace(/^\d+\.\s/,``)},`${e}-${t}`):(0,E.jsx)(`p`,{children:e},`${e}-${t}`))}function he(){let{slug:e}=o(),{t:n,i18n:r}=s(),i=r.resolvedLanguage||r.language,{posts:a,isLoading:c}=q(),l=a.find(t=>I(t,e)),u=l?J(l,i):null;if(N(u?`Portafolio | ${u.title}`:`Portafolio | Artículo`),c)return(0,E.jsx)(`section`,{className:`section`,children:(0,E.jsx)(`div`,{className:`container`,children:(0,E.jsx)(`p`,{children:n(`blog.loadingArticle`)})})});if(!u)return(0,E.jsx)(`section`,{className:`section`,children:(0,E.jsxs)(`div`,{className:`container`,children:[(0,E.jsx)(z,{title:n(`blog.articleNotFoundTitle`),description:n(`blog.articleNotFoundDescription`)}),(0,E.jsx)(t,{className:`button`,to:`/blog`,children:n(`blog.backToBlog`)})]})});let d=me(u.content),f=[],p=[];return d.forEach((e,t)=>{if(e.type===`li`){f.push(e);let n=d[t+1];(!n||n.type!==`li`)&&p.push((0,E.jsx)(`ul`,{className:`bullet-list article-list`,children:f.splice(0,f.length)},`list-group-${t}`))}else p.push(e)}),(0,E.jsx)(`section`,{className:`section`,children:(0,E.jsxs)(`div`,{className:`container article-container`,children:[(0,E.jsxs)(t,{className:`text-link`,to:`/blog`,children:[`<`,` `,n(`blog.backToBlog`)]}),(0,E.jsxs)(`article`,{className:`article-card`,children:[(0,E.jsxs)(`p`,{className:`blog-meta`,children:[(0,E.jsx)(`span`,{children:F(u.publishedAt,i)}),(0,E.jsx)(`span`,{children:`•`}),(0,E.jsx)(`span`,{children:u.readingTime})]}),(0,E.jsx)(`h1`,{children:u.title}),(0,E.jsx)(`p`,{className:`article-lead`,children:u.excerpt}),(0,E.jsx)(`div`,{className:`tag-group`,children:u.tags.map(e=>(0,E.jsx)(O,{children:e},e))}),(0,E.jsx)(`div`,{className:`article-content`,children:p})]})]})})}function Y(){N(`Portafolio | Página no encontrada`);let{t:e}=s();return(0,E.jsx)(`section`,{className:`section`,children:(0,E.jsxs)(`div`,{className:`container empty-state`,children:[(0,E.jsx)(`h1`,{children:`404`}),(0,E.jsx)(`p`,{children:e(`notFound.description`)}),(0,E.jsx)(t,{className:`button`,to:`/`,children:e(`notFound.button`)})]})})}var ge=`/Portfolio/`.replace(/\/$/,``)||`/`,X=n([{path:`/`,element:(0,E.jsx)(ae,{}),errorElement:(0,E.jsx)(Y,{}),children:[{index:!0,element:(0,E.jsx)(P,{})},{path:`blog`,element:(0,E.jsx)(pe,{})},{path:`blog/:slug`,element:(0,E.jsx)(he,{})},{path:`*`,element:(0,E.jsx)(Y,{})}]}],{basename:ge}),Z=`portfolio-theme`;function _e(){if(typeof window>`u`)return`dark`;let e=localStorage.getItem(Z);return e===`light`||e===`dark`?e:window.matchMedia(`(prefers-color-scheme: light)`).matches?`light`:`dark`}function ve({children:e}){let[t,n]=(0,b.useState)(_e);(0,b.useEffect)(()=>{document.documentElement.dataset.theme=t,document.documentElement.style.colorScheme=t,localStorage.setItem(Z,t)},[t]);let r=(0,b.useMemo)(()=>({theme:t,toggleTheme:()=>n(e=>e===`dark`?`light`:`dark`)}),[t]);return(0,E.jsx)(S.Provider,{value:r,children:e})}var Q=localStorage.getItem(`portfolio-language`)||`es`;document.documentElement.lang=Q,ee.use(l).init({resources:{es:{translation:{nav:{home:`Inicio`,blog:`Blog`,language:`Cambiar idioma`,theme:`Cambiar tema`},hero:{eyebrow:`Portafolio Full Stack .NET`,profile:`Perfil`,profileTitle:`Backend sólido, frontend moderno y delivery continuo`,profileText:`Experiencia construyendo soluciones empresariales con C#, ASP.NET Core, React, Vue, SQL Server y Azure DevOps, con enfoque en arquitectura limpia, mantenibilidad e integración.`,bullets:[`APIs REST y seguridad con JWT`,`Frontend con React, Vue y Blazor`,`SQL Server, Oracle e integraciones`,`CI/CD y despliegues con Azure DevOps`]},sections:{stackEyebrow:`Stack principal`,stackTitle:`Tecnologías y fortalezas con las que construyo`,stackDescription:`Mi perfil está orientado a desarrollo de software empresarial, desde la capa backend hasta la interfaz y la entrega continua.`,experienceEyebrow:`Experiencia`,experienceTitle:`Trayectoria en orden cronológico`,experienceDescription:`El recorrido muestra cómo evolucionó mi perfil desde desarrollo y prácticas técnicas hasta software engineering full stack y visión de arquitectura aplicada al negocio.`,projectsEyebrow:`Proyectos`,projectsTitle:`Trabajo representativo en backend, full stack, mobile y DevOps`,projectsDescription:`Casos que refuerzan mi perfil como desarrollador con visión integral de arquitectura, frontend, mobile, datos y delivery.`,blogEyebrow:`Blog técnico`,blogTitle:`Notas sobre .NET, arquitectura y desarrollo full stack`,blogDescription:`Mantén el blog como soporte a tu marca técnica: artículos breves sobre APIs, Clean Architecture, React y DevOps ayudan a reforzar tu perfil frente a reclutadores.`,blogButton:`Ir al blog`},projectLinks:{live:`Ver sitio`,code:`Ver código`,appStore:`App Store`,playStore:`Google Play`},blog:{title:`Contenido pensado para reforzar tu marca como desarrollador .NET`,description:`Publica artículos breves sobre arquitectura, APIs, frontend y prácticas de entrega para mostrar criterio técnico, no solo herramientas.`,search:`Buscar`,searchPlaceholder:`Ej. ASP.NET Core, React, Clean Architecture...`,tag:`Etiqueta`,all:`Todas`,loading:`Cargando artículos...`,emptyTitle:`No hay artículos para este filtro`,emptyDescription:`Cambia la búsqueda o etiqueta para ver más resultados.`,readArticle:`Leer artículo`,backToBlog:`Volver al blog`,loadingArticle:`Cargando artículo...`,articleNotFoundTitle:`Artículo no encontrado`,articleNotFoundDescription:`El contenido que buscas no existe o fue movido.`,sourceLocal:`Local`,firebaseFallback:`No se pudo conectar con Firebase. Se cargaron artículos locales.`},notFound:{description:`La página que buscas no existe.`,button:`Volver al inicio`}}},en:{translation:{nav:{home:`Home`,blog:`Blog`,language:`Change language`,theme:`Change theme`},hero:{eyebrow:`Full Stack .NET Portfolio`,profile:`Profile`,profileTitle:`Strong backend, modern frontend and continuous delivery`,profileText:`Experience building enterprise solutions with C#, ASP.NET Core, React, Vue, SQL Server and Azure DevOps, focused on clean architecture, maintainability and integrations.`,bullets:[`REST APIs and JWT security`,`Frontend with React, Vue and Blazor`,`SQL Server, Oracle and integrations`,`CI/CD and deployments with Azure DevOps`]},sections:{stackEyebrow:`Core stack`,stackTitle:`Technologies and strengths I build with`,stackDescription:`My profile focuses on enterprise software development, from backend services to user interfaces and continuous delivery.`,experienceEyebrow:`Experience`,experienceTitle:`Career path in chronological order`,experienceDescription:`This timeline shows how my profile evolved from development and technical practice into full stack software engineering with architecture applied to business needs.`,projectsEyebrow:`Projects`,projectsTitle:`Representative work in backend, full stack, mobile and DevOps`,projectsDescription:`Projects that reinforce my profile as a developer with end-to-end vision across architecture, frontend, mobile, data and delivery.`,blogEyebrow:`Technical blog`,blogTitle:`Notes about .NET, architecture and full stack development`,blogDescription:`The blog supports my technical brand with short articles about APIs, Clean Architecture, React and DevOps practices.`,blogButton:`Go to blog`},projectLinks:{live:`View site`,code:`View code`,appStore:`App Store`,playStore:`Google Play`},blog:{title:`Content designed to strengthen your brand as a .NET developer`,description:`Publish short articles about architecture, APIs, frontend and delivery practices to show technical judgment, not just tools.`,search:`Search`,searchPlaceholder:`E.g. ASP.NET Core, React, Clean Architecture...`,tag:`Tag`,all:`All`,loading:`Loading articles...`,emptyTitle:`No articles match this filter`,emptyDescription:`Change the search term or tag to see more results.`,readArticle:`Read article`,backToBlog:`Back to blog`,loadingArticle:`Loading article...`,articleNotFoundTitle:`Article not found`,articleNotFoundDescription:`The content you are looking for does not exist or was moved.`,sourceLocal:`Local`,firebaseFallback:`Could not connect to Firebase. Local articles were loaded.`},notFound:{description:`The page you are looking for does not exist.`,button:`Back home`}}}},lng:Q,fallbackLng:`es`,interpolation:{escapeValue:!1}});var $=document.getElementById(`root`);if(!$)throw Error(`Root element was not found`);ne.createRoot($).render((0,E.jsx)(b.StrictMode,{children:(0,E.jsx)(ve,{children:(0,E.jsx)(a,{router:X})})}));