import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{a as t,c as n,d as r,f as i,i as a,l as o,n as s,o as c,r as l,s as u,t as d,u as f}from"./react-vendor-DJDjReJf.js";import{a as p,c as m,i as h,l as ee,n as te,o as g,r as _,s as ne,t as re}from"./vendor-HNjA9ERI.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var v=e(i(),1),ie=e(r(),1),y=l();function b(){return(0,y.jsxs)(`div`,{className:`animated-background`,"aria-hidden":`true`,children:[(0,y.jsx)(`div`,{className:`liquid-field liquid-field-primary`}),(0,y.jsx)(`div`,{className:`liquid-field liquid-field-secondary`}),(0,y.jsx)(`div`,{className:`liquid-mesh`})]})}var x={author:`John Castro Sanabria`,role:`Ingeniero de software full-stack | .NET, Java, Spring Boot, React, TypeScript y SQL | Azure DevOps | Certificado AZ-900 y MS-900`,roleLocalized:{es:`Ingeniero de software full-stack | .NET, Java, Spring Boot, React, TypeScript y SQL | Azure DevOps | Certificado AZ-900 y MS-900`,en:`Full-stack software engineer | .NET, Java, Spring Boot, React, TypeScript and SQL | Azure DevOps | AZ-900 and MS-900 certified`},email:`castrosanabriajohn@gmail.com`,headline:`Ingeniero de software full-stack especializado en .NET, Java, Spring Boot, React, TypeScript, SQL y arquitectura limpia. Construyo soluciones escalables y mantenibles.`,headlineLocalized:{es:`Ingeniero de software full-stack especializado en .NET, Java, Spring Boot, React, TypeScript, SQL y arquitectura limpia. Construyo soluciones escalables y mantenibles.`,en:`Full-stack software engineer specialized in .NET, Java, Spring Boot, React, TypeScript, SQL and clean architecture. I build scalable and maintainable solutions.`},description:`Portafolio profesional de John Castro Sanabria. Ingeniero de software full-stack con experiencia en .NET, Java, Spring Boot, React, TypeScript, SQL, Azure DevOps y arquitectura limpia. Certificado AZ-900 y MS-900.`,descriptionLocalized:{es:`Portafolio profesional de John Castro Sanabria. Ingeniero de software full-stack con experiencia en .NET, Java, Spring Boot, React, TypeScript, SQL, Azure DevOps y arquitectura limpia. Certificado AZ-900 y MS-900.`,en:`Professional portfolio of John Castro Sanabria. Full-stack software engineer with experience in .NET, Java, Spring Boot, React, TypeScript, SQL, Azure DevOps and clean architecture. AZ-900 and MS-900 certified.`},ctaPrimary:`Ver proyectos`,ctaPrimaryLocalized:{es:`Proyectos`,en:`View projects`},ctaSecondary:`Leer blog técnico`,ctaSecondaryLocalized:{es:`Blog técnico`,en:`Technical blog`},ctaYouTubeLocalized:{es:`YouTube`,en:`YouTube`},ctaGitHubLocalized:{es:`GitHub`,en:`GitHub`},resumeDownloads:{es:`resume/John_Castro_Sanabria_CV_ES.pdf`,en:`resume/John_Castro_Sanabria_CV_EN.pdf`},youtubeUrl:`https://www.youtube.com/@JohnCastroTechLabs`,githubProfileUrl:`https://github.com/full-stack-dev-johncastrosanabria/`,socialLinks:[{label:{es:`Correo`,en:`Email`},href:`mailto:castrosanabriajohn@gmail.com`,icon:`mail`},{label:`GitHub`,href:`https://github.com/full-stack-dev-johncastrosanabria`,icon:`github`},{label:`LinkedIn`,href:`https://www.linkedin.com/in/john-castro-sanabria/`,icon:`linkedin`}],keywords:[`.NET`,`Java`,`Spring Boot`,`React`,`Full Stack`,`TypeScript`,`Clean Architecture`,`API REST`,`SQL Server`,`Azure`,`Azure DevOps`,`AZ-900`,`MS-900`,`JavaScript`,`C#`,`Web Development`]},S=(0,v.createContext)(null);function ae(){let e=(0,v.useContext)(S);if(!e)throw Error(`useTheme must be used within ThemeProvider`);return e}var C=e=>`/Portfolio/${e.replace(/^\//,``)}`;function w(e,t=`es`){return!e||typeof e!=`object`||Array.isArray(e)?e:e[t===`en`?`en`:`es`]??e.es??e.en??``}function oe(){let{t:e,i18n:t}=d(),{theme:n,toggleTheme:r}=ae(),i=t.resolvedLanguage||t.language,a=[{to:`/`,label:e(`nav.home`)},{to:`/blog`,label:e(`nav.blog`)}];function o(){let e=i===`es`?`en`:`es`;t.changeLanguage(e),localStorage.setItem(`portfolio-language`,e),document.documentElement.lang=e}return(0,y.jsx)(`header`,{className:`site-header`,children:(0,y.jsxs)(`div`,{className:`container nav-wrapper`,children:[(0,y.jsxs)(c,{className:`brand`,to:`/`,children:[(0,y.jsx)(`span`,{className:`brand-mark brand-avatar`,children:(0,y.jsx)(`img`,{src:C(`profile-john.png`),alt:`Foto de John Castro`})}),(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`strong`,{children:x.author}),(0,y.jsx)(`span`,{className:`brand-subtitle`,children:w(x.roleLocalized,i)})]})]}),(0,y.jsxs)(`nav`,{className:`nav-links`,"aria-label":`Principal`,children:[a.map(e=>(0,y.jsx)(c,{to:e.to,className:({isActive:e})=>e?`nav-link nav-link-active`:`nav-link`,children:e.label},e.to)),(0,y.jsx)(`button`,{className:`language-toggle`,type:`button`,onClick:o,"aria-label":e(`nav.language`),title:e(`nav.language`),children:i===`es`?`EN`:`ES`}),(0,y.jsx)(`button`,{className:`icon-toggle`,type:`button`,onClick:r,"aria-label":e(`nav.theme`),title:e(`nav.theme`),children:(0,y.jsx)(`span`,{"aria-hidden":`true`,children:n===`dark`?`☀`:`☾`})})]})]})})}function se(){let{i18n:e}=d(),t=e.resolvedLanguage||e.language;return(0,y.jsx)(`footer`,{className:`site-footer`,children:(0,y.jsxs)(`div`,{className:`container footer-grid`,children:[(0,y.jsxs)(`div`,{className:`footer-brand`,children:[(0,y.jsx)(`img`,{className:`footer-brand-mark`,src:C(`brand-mark.svg`),alt:`Logo personal de John Castro`}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{className:`footer-title`,children:x.author}),(0,y.jsx)(`p`,{className:`footer-copy`,children:w(x.descriptionLocalized,t)})]})]}),(0,y.jsx)(`div`,{className:`footer-links`,children:x.socialLinks.map(e=>(0,y.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noreferrer`,children:w(e.label,t)},e.href))})]})})}function ce(){return(0,y.jsxs)(`div`,{className:`app-shell`,children:[(0,y.jsx)(b,{}),(0,y.jsx)(oe,{}),(0,y.jsx)(`main`,{className:`main-content`,children:(0,y.jsx)(u,{})}),(0,y.jsx)(se,{})]})}var le=[{id:`az-900`,title:{es:`Microsoft Certified: Azure Fundamentals`,en:`Microsoft Certified: Azure Fundamentals`},issuer:`Microsoft`,issuedAt:{es:`30 de enero de 2026`,en:`January 30, 2026`},category:{es:`Cloud fundamentals`,en:`Cloud fundamentals`},credentialId:`407DBE67BFC78ED5`,certificationNumber:`DBD678-318E1C`,status:{es:`Activa`,en:`Active`},image:`certifications/az-900.png`,featured:!0},{id:`ms-900`,title:{es:`Microsoft 365 Certified: Fundamentals`,en:`Microsoft 365 Certified: Fundamentals`},issuer:`Microsoft`,issuedAt:{es:`6 de julio de 2025`,en:`July 6, 2025`},category:{es:`Productividad y Microsoft 365`,en:`Productivity and Microsoft 365`},credentialId:`1C458F347531B23`,certificationNumber:`E2Y3C0-A961A5`,status:{es:`Activa`,en:`Active`},image:`certifications/ms-900.png`,featured:!0},{id:`commercial-skills`,title:{es:`Desarrollo de habilidades comerciales`,en:`Commercial skills development`},issuer:`RD Consultores & Asociados / Novacomp`,issuedAt:{es:`Enero de 2026`,en:`January 2026`},category:{es:`Preventa y ciclo de ventas`,en:`Pre-sales and sales cycle`},hours:`8 h`,image:`certifications/commercial-skills.svg`},{id:`data-science`,title:{es:`Programa de Data Science`,en:`Data Science program`},issuer:`Mundos E / Universidad Nacional de Córdoba`,issuedAt:{es:`11 de agosto de 2022`,en:`August 11, 2022`},category:{es:`Data Science`,en:`Data Science`},hours:`181 h`,image:`certifications/data-science.svg`}],T=[`novamp-sinpe`,`novatoken`,`novabank`,`nova-expediente-novacomp`,`business-ai-analytics`,`reactivities`,`portfolio`,`clean-api`,`basic-business-app`,`etickets`,`spring-demo`,`meals-to-go`,`expo-amplify-demo`,`admin-dashboard`,`propflow`,`vue-project`,`flask-product-api`,`personas-solution`,`webapi-matricula`,`wcf-tarjetas`,`smartgym-api`],ue=[...[{id:`novamp-sinpe`,title:{es:`NovaMP SINPE - Plataforma de Pagos Electrónicos`,en:`NovaMP SINPE - Electronic Payments Platform`},category:{es:`Proyecto profesional fintech`,en:`Professional fintech project`},description:{es:`Plataforma de medios de pago para entidades conectadas al Sistema Nacional de Pagos Electrónicos SINPE del Banco Central de Costa Rica.`,en:`Payments platform for institutions connected to Costa Rica Central Bank electronic payments network, SINPE.`},highlights:{es:[`Construí módulos de configuración y reportería financiera para operación de entidades certificadas por el BCCR.`,`Atendí hotfixes en producción, cuidando disponibilidad 24/7 para más de 10 entidades financieras.`,`Participé en funcionalidades relacionadas con movilización electrónica de fondos entre cuentas IBAN.`,`Trabajé sobre una solución SaaS con soporte operativo crítico y estándares de conexión BCCR-SINPE.`],en:[`Built configuration and financial reporting modules for institutions certified by the Central Bank of Costa Rica.`,`Handled production hotfixes while supporting 24/7 availability for more than 10 financial institutions.`,`Contributed to features related to electronic fund movement between IBAN accounts.`,`Worked on a SaaS solution with critical operational support and BCCR-SINPE connection standards.`]},technologies:[`C#`,`.NET`,`React`,`SQL Server`,`Fintech`,`BCCR-SINPE`],links:[{label:{es:`Ver sitio`,en:`View site`},href:`https://www.in-novative.com/novamp-sinpe/`,primary:!0}],featured:!0},{id:`novatoken`,title:{es:`NovaToken - Autenticación de Dos Factores (2FA)`,en:`NovaToken - Two-Factor Authentication (2FA)`},category:{es:`Proyecto profesional seguridad`,en:`Professional security project`},description:{es:`Solución SoftToken de segundo factor de autenticación para reforzar seguridad transaccional, OTP y cumplimiento regulatorio financiero.`,en:`SoftToken second-factor authentication solution for transactional security, OTP flows and financial regulatory compliance.`},highlights:{es:[`Desarrollé el BackOffice en React para operación y consulta de evidencias, usuarios y procesos de seguridad.`,`Mantuve lógica de tokens OTP con expiración de 60 segundos para canales transaccionales.`,`Trabajé en una solución orientada a cumplimiento con reguladores financieros en LATAM.`,`Colaboré en flujos de seguridad para robustecer autenticación y reducir riesgo de acceso no autorizado.`],en:[`Built the React BackOffice for operations and review of evidence, users and security processes.`,`Maintained OTP token logic with 60-second expiration for transactional channels.`,`Worked on a solution oriented to compliance with financial regulators in LATAM.`,`Contributed to security flows that strengthen authentication and reduce unauthorized access risk.`]},technologies:[`C#`,`.NET`,`React`,`SQL Server`,`2FA`,`OTP`,`Security`],links:[{label:{es:`Ver sitio`,en:`View site`},href:`https://www.in-novative.com/nova-token/`,primary:!0}],featured:!0},{id:`novabank`,title:{es:`NovaBank - Banca por Internet Omnicanal`,en:`NovaBank - Omnichannel Internet Banking`},category:{es:`Proyecto profesional banking`,en:`Professional banking project`},description:{es:`Solución omnicanal de banca digital para Internet Banking y Mobile Banking, con administración centralizada y cumplimiento OWASP Top 10.`,en:`Omnichannel digital banking solution for Internet Banking and Mobile Banking, with centralized administration and OWASP Top 10 compliance.`},highlights:{es:[`Construí módulos de transferencia de fondos e integraciones de core bancario para Coopeguanacaste y Coope San Ramón.`,`Implementé funcionalidades backend y frontend sobre flujos de banca por internet para cooperativas.`,`Trabajé bajo criterios de seguridad alineados con OWASP Top 10 para canales web y app.`,`Participé en integraciones orientadas a centralizar cambios en un repositorio de canales omnicanal.`],en:[`Built fund transfer modules and core banking integrations for Coopeguanacaste and Coope San Ramon.`,`Implemented backend and frontend functionality for cooperative internet banking flows.`,`Worked under security criteria aligned with OWASP Top 10 for web and app channels.`,`Contributed to integrations designed to centralize changes in an omnichannel repository.`]},technologies:[`Java`,`Spring Boot`,`Vue.js`,`Banking`,`OWASP Top 10`,`Core Banking`],links:[{label:{es:`Ver sitio`,en:`View site`},href:`https://www.in-novative.com/nova-bank/`,primary:!0}],featured:!0},{id:`portfolio`,title:`Portafolio John Castro Sanabria`,category:`Frontend`,description:`Portafolio profesional construido para presentar experiencia, proyectos y contenido técnico con una experiencia rápida, responsive y desplegada en GitHub Pages.`,highlights:[`Arquitectura frontend con React, Vite y React Router`,`Despliegue automatizado hacia GitHub Pages`,`Diseño responsive enfocado en marca personal técnica`,`Secciones de proyectos, experiencia, habilidades y blog`],technologies:[`React`,`TypeScript`,`Vite`,`Tailwind CSS`,`i18next`,`GitHub Pages`],liveDemo:`https://full-stack-dev-johncastrosanabria.github.io/Portfolio/`,githubUrl:`https://github.com/full-stack-dev-johncastrosanabria/Portfolio`,featured:!0},{id:`nova-expediente-novacomp`,title:{es:`NovaExpediente / Novacomp - App corporativa de empleados`,en:`NovaExpediente / Novacomp - Corporate employee app`},category:{es:`Mobile híbrido`,en:`Hybrid mobile`},description:{es:`Aplicación oficial para colaboradores de Novacomp, publicada como NovaExpediente en Android y Novacomp en App Store. Centraliza servicios internos, noticias importantes, denuncias o sugerencias, permisos y trámites empresariales como vacaciones.`,en:`Official Novacomp employee app, published as NovaExpediente on Android and Novacomp on the App Store. It centralizes internal services, important news, complaints or suggestions, permissions and business requests such as vacations.`},highlights:{es:[`App híbrida para iOS y Android con una base de código React Native`,`Módulos para servicios de empleados, noticias, permisos y trámites internos`,`Experiencia móvil orientada a autoservicio corporativo y comunicación interna`,`Publicación en App Store y Google Play con soporte a versiones productivas`],en:[`Hybrid iOS and Android app from one React Native codebase`,`Modules for employee services, news, permissions and internal workflows`,`Mobile experience focused on corporate self-service and internal communication`,`Published on App Store and Google Play with production release support`]},technologies:[`React Native`,`TypeScript`,`React Query`,`Expo`,`iOS`,`Android`,`App Store`,`Google Play`],links:[{label:{es:`App Store`,en:`App Store`},href:`https://apps.apple.com/us/app/novacomp/id1621800757`,primary:!0},{label:{es:`Google Play`,en:`Google Play`},href:`https://play.google.com/store/apps/details?id=com.nova.NovaExpediente`}],featured:!0},{id:`business-ai-analytics`,title:`BusinessAI Analytics - Plataforma BI con IA`,category:`Full Stack AI`,description:{es:`Plataforma local de business intelligence para administrar datos, visualizar dashboards, pronosticar rendimiento con IA y consultar insights mediante chatbot sobre bases de datos y documentos.`,en:`Local business intelligence platform to manage data, visualize dashboards, forecast performance with AI and query insights through a chatbot over databases and documents.`},highlights:{es:[`Arquitectura de microservicios con Spring Boot y Spring Cloud Gateway`,`Servicio de IA en FastAPI con modelos LSTM para pronósticos`,`Frontend SPA en React TypeScript para dashboards e interacción analítica`,`Persistencia en MySQL y módulos separados para productos, clientes, ventas, analítica y documentos`],en:[`Microservices architecture with Spring Boot and Spring Cloud Gateway`,`FastAPI AI service with LSTM models for forecasting`,`React TypeScript SPA for dashboards and analytics interaction`,`MySQL persistence and separated modules for products, customers, sales, analytics and documents`]},technologies:[`Spring Boot`,`Spring Cloud Gateway`,`FastAPI`,`Python`,`React`,`TypeScript`,`MySQL`,`AI`,`LSTM`],links:[{label:{es:`Ver Sitio`,en:`View Site`},href:`https://full-stack-dev-johncastrosanabria.github.io/BusinessAI-Analytics/login`,primary:!0}],liveDemo:`https://youtu.be/i_TPjHsoOHE`,liveDemoLabel:{es:`Ver Demo`,en:`View Demo`},githubUrl:`https://github.com/full-stack-dev-johncastrosanabria/BusinessAI-Analytics`,featured:!0},{id:`reactivities`,title:`Reactivities - Red Social Full Stack`,category:`Full Stack`,description:`Red social full stack con backend .NET y frontend React, enfocada en actividades, perfiles, comentarios y flujos de interacción en tiempo real.`,highlights:[`Autenticación y autorización con flujo seguro de usuarios`,`Gestión de actividades, comentarios y followers`,`Separación clara entre backend, frontend y capa de datos`,`Base sólida para patrones modernos como CQRS y MediatR`],technologies:[`ASP.NET Core`,`React`,`TypeScript`,`Entity Framework Core`,`SignalR`,`JWT`,`MediatR`],githubUrl:`https://github.com/castrosanabriajohn/Reactivities`,featured:!0},{id:`etickets`,title:`eTickets - Plataforma Cinematográfica`,category:`Full Stack Web`,description:`Aplicación web para venta y administración de entradas de cine, con catálogo, funciones, carrito y gestión de entidades del negocio cinematográfico.`,highlights:[`Arquitectura MVC con ASP.NET Core`,`Gestión de películas, cines, actores y productores`,`Flujo de compra y carrito para entradas`,`Panel administrativo para operación del catálogo`],technologies:[`ASP.NET Core MVC`,`Entity Framework Core`,`SQL Server`,`Bootstrap`,`C#`],githubUrl:`https://github.com/castrosanabriajohn/eTickets`,featured:!0},{id:`admin-dashboard`,title:`Dashboard React`,category:`Frontend`,description:`Dashboard administrativo en React para visualizar métricas, datos y módulos operativos con una interfaz práctica para gestión diaria.`,highlights:[`Diseño de panel administrativo con enfoque en lectura rápida`,`Componentes reutilizables para vistas de datos`,`Estructura preparada para gráficos, tablas y navegación interna`,`Demo pública desplegada en Netlify`],technologies:[`React`,`JavaScript`,`CSS`,`Netlify`,`Dashboard UI`,`Data Visualization`],liveDemo:`https://johns-admin-dashboard-react.netlify.app/`,githubUrl:`https://github.com/castrosanabriajohn/admin-dashboard`},{id:`clean-api`,title:`Interview Clean API - Arquitectura Limpia`,category:`Backend`,description:`API REST diseñada para demostrar criterios de entrevista técnica: separación de capas, validación, documentación y estructura mantenible.`,highlights:[`Arquitectura limpia con límites claros por capa`,`Endpoints REST orientados a pruebas técnicas`,`Validaciones y manejo ordenado de errores`,`Documentación lista para inspección con Swagger/OpenAPI`],technologies:[`ASP.NET Core`,`Clean Architecture`,`REST API`,`Swagger`,`C#`,`SOLID`],githubUrl:`https://github.com/full-stack-dev-johncastrosanabria/InterviewCleanApi`},{id:`basic-business-app`,title:`BasicBusinessApp - API Clean Architecture .NET`,category:`Backend`,description:`Aplicación empresarial base en .NET que usa Clean Architecture para separar dominio, aplicación, infraestructura y presentación.`,highlights:[`Separación de responsabilidades por capas`,`Principios SOLID aplicados a una base empresarial`,`Estructura preparada para testing y evolución`,`Patrones de inyección de dependencias y servicios`],technologies:[`ASP.NET Core`,`Clean Architecture`,`C#`,`SOLID`,`Entity Framework Core`],githubUrl:`https://github.com/castrosanabriajohn/BasicBusinessAppV1`},{id:`propflow`,title:`PropFlow - Landing Page Inmobiliaria`,category:`Frontend`,description:`Landing page inmobiliaria con estética moderna para presentar propiedades, beneficios y llamados a la acción de forma clara.`,highlights:[`Diseño responsive orientado a producto inmobiliario`,`Secciones para beneficios, propiedades y conversión`,`Interfaz limpia con jerarquía visual fuerte`,`Base lista para integración con formularios o CRM`],technologies:[`React`,`TypeScript`,`Tailwind CSS`,`Vite`,`Responsive UI`],githubUrl:`https://github.com/full-stack-dev-johncastrosanabria/PropFlow`},{id:`meals-to-go`,title:`MealsToGo - Réplica de Uber Eats`,category:`Mobile`,description:`Proyecto móvil híbrido que replica flujos tipo Uber Eats: exploración de restaurantes, menús, favoritos y experiencia de compra desde React Native.`,highlights:[`Aplicación móvil híbrida con React Native`,`Búsqueda y navegación de restaurantes`,`Persistencia de favoritos y datos de usuario`,`Integración con servicios móviles y mapas`],technologies:[`React Native`,`Expo`,`Firebase`,`Google Maps API`,`Redux`,`Mobile UI`],githubUrl:`https://github.com/castrosanabriajohn/MealsToGo`},{id:`expo-amplify-demo`,title:`Expo Amplify Demo - Mobile + AWS`,category:`Mobile`,description:`Aplicación móvil con React Native y AWS Amplify para explorar autenticación, servicios cloud y backend administrado desde el ecosistema AWS.`,highlights:[`Base móvil con Expo y React Native`,`Integración con AWS Amplify`,`Enfoque en autenticación y backend cloud`,`Proyecto útil para validar arquitectura mobile + cloud`],technologies:[`React Native`,`Expo`,`AWS Amplify`,`GraphQL`,`Cloud`,`Authentication`],githubUrl:`https://github.com/castrosanabriajohn/expo-amplify-demo`},{id:`spring-demo`,title:`Spring Demo - Backend Java`,category:`Backend`,description:`API backend con Spring Boot para demostrar fundamentos de desarrollo Java empresarial, endpoints REST y organización por capas.`,highlights:[`API REST con Spring Boot`,`Estructura backend clara y extensible`,`Validación y manejo de errores`,`Base adecuada para servicios Java modernos`],technologies:[`Spring Boot`,`Java`,`REST API`,`Maven`,`Backend`,`Layered Architecture`],githubUrl:`https://github.com/full-stack-dev-johncastrosanabria/spring-demo`},{id:`vue-project`,title:`Vue Project - Frontend Framework`,category:`Frontend`,description:`Proyecto web en Vue orientado a practicar componentes, estado, rutas y construcción de interfaces modernas con el ecosistema Vue.`,highlights:[`Componentes Vue reutilizables`,`Estructura pensada para vistas y navegación`,`Práctica de patrones frontend modernos`,`Base educativa para escalar a aplicaciones SPA`],technologies:[`Vue`,`JavaScript`,`Vue Router`,`Vite`,`Frontend`,`SPA`],githubUrl:`https://github.com/castrosanabriajohn/vue-project-section10`},{id:`smartgym-api`,title:`SmartGym - Proyecto Universitario PHP`,category:`Backend`,description:`Proyecto universitario en PHP para la gestión de operaciones de gimnasio, con foco en miembros, clases y administración interna.`,highlights:[`Gestión de datos para miembros y servicios`,`Modelo orientado a procesos de gimnasio`,`Backend universitario con estructura CRUD`,`Aplicación práctica de lógica de negocio en PHP`],technologies:[`PHP`,`MySQL`,`Backend`,`CRUD`,`Academic Project`],githubUrl:`https://github.com/castrosanabriajohn/smartgym`},{id:`webapi-matricula`,title:`WebAPI Matrícula - Proyecto Universitario .NET MVC`,category:`Backend`,description:`Sistema universitario .NET para gestión de matrícula, estudiantes y cursos, construido como ejercicio integral de backend académico.`,highlights:[`Gestión de estudiantes, cursos y matrícula`,`Lógica de negocio académica`,`Estructura basada en .NET y MVC/Web API`,`Persistencia de datos con SQL Server`],technologies:[`ASP.NET MVC`,`C#`,`SQL Server`,`Entity Framework`,`Web API`],githubUrl:`https://github.com/castrosanabriajohn/WebAPIMatricula_3C2023`},{id:`wcf-tarjetas`,title:`WCF Servicio Tarjetas - Proyecto Universitario`,category:`Backend`,description:`Servicio WCF universitario para operaciones relacionadas con tarjetas, aplicando comunicación SOAP y conceptos clásicos de servicios distribuidos.`,highlights:[`Servicio distribuido con WCF`,`Contratos SOAP para comunicación entre sistemas`,`Operaciones orientadas a tarjetas`,`Práctica de integración en .NET Framework`],technologies:[`WCF`,`.NET Framework`,`SOAP`,`C#`,`SQL Server`],githubUrl:`https://github.com/castrosanabriajohn/WcfServicioTarjetas_3C2023-Ulacit`},{id:`personas-solution`,title:`PersonasSolution - Gestión de Personas`,category:`Backend`,description:`Solución en Visual Basic para gestionar entidades de personas, pensada como base práctica para operaciones CRUD, separación de capas y persistencia.`,highlights:[`Modelo de dominio centrado en personas`,`Operaciones CRUD organizadas`,`Estructura preparada para extender reglas de negocio`,`Proyecto útil para demostrar fundamentos backend`],technologies:[`Visual Basic`,`CRUD`,`Backend`,`SQL`,`Layered Architecture`],githubUrl:`https://github.com/full-stack-dev-johncastrosanabria/PersonasSolution`},{id:`flask-product-api`,title:`Flask Product API`,category:`Backend`,description:`API ligera en Flask para gestión de productos, ideal para demostrar endpoints REST, simplicidad de Python y construcción rápida de servicios.`,highlights:[`API REST compacta con Flask`,`Gestión de productos mediante endpoints claros`,`Base simple para pruebas, integración o prototipos`,`Demuestra versatilidad fuera del stack .NET`],technologies:[`Python`,`Flask`,`REST API`,`Backend`,`CRUD`],githubUrl:`https://github.com/full-stack-dev-johncastrosanabria/FlaskApiProdcuct`}]].sort((e,t)=>T.indexOf(e.id)-T.indexOf(t.id)),de=[{title:{es:`Backend empresarial`,en:`Enterprise backend`},description:{es:`Diseño de APIs, servicios y microservicios con foco en arquitectura limpia, seguridad, mantenibilidad e integración.`,en:`API, service and microservice design focused on clean architecture, security, maintainability and integration.`},items:[`C#`,`ASP.NET Core`,`Java`,`Spring Boot`,`Python`,`REST APIs`,`JWT`,`Entity Framework Core`,`MediatR`]},{title:{es:`Arquitectura y calidad`,en:`Architecture and quality`},description:{es:`Buenas prácticas para construir soluciones empresariales limpias y fáciles de evolucionar.`,en:`Best practices for building clean enterprise solutions that are easier to evolve.`},items:{es:[`Clean Architecture`,`Microservicios`,`CQRS`,`SOLID`,`Patrones de diseño`,`Testing mindset`],en:[`Clean Architecture`,`Microservices`,`CQRS`,`SOLID`,`Design patterns`,`Testing mindset`]}},{title:{es:`Frontend y mobile`,en:`Frontend and mobile`},description:{es:`Construcción de interfaces web y móviles modernas conectadas a APIs, con enfoque responsive, accesible y productivo.`,en:`Modern web and mobile interface development connected to APIs, with a responsive, accessible and productive approach.`},items:[`React`,`TypeScript`,`React Native`,`Expo`,`React Query`,`Vue`,`i18next`,`Responsive UI`]},{title:{es:`Cloud, datos e IA`,en:`Cloud, data and AI`},description:{es:`Experiencia integrando datos, automatización, despliegues y soluciones Microsoft Cloud con visión técnica y consultiva.`,en:`Experience integrating data, automation, deployments and Microsoft Cloud solutions with a technical and consultative perspective.`},items:[`Azure`,`Azure DevOps`,`Microsoft Fabric`,`Power Platform`,`SQL Server`,`Oracle`,`MySQL`,`Python`,`FastAPI`,`AI/LSTM`,`CI/CD`]}],fe=[{value:{es:`Casi 4 años`,en:`Nearly 4 years`},label:{es:`Experiencia combinada`,en:`Combined experience`},detail:{es:`Casi 4 años de experiencia combinando desarrollo full-stack, Azure DevOps, soluciones Microsoft Cloud y preventa técnica.`,en:`Nearly 4 years of combined experience in full-stack software engineering, Azure DevOps, Microsoft Cloud solutions, and technical pre-sales.`}},{value:`.NET + React`,label:{es:`Perfil híbrido`,en:`Hybrid profile`},detail:{es:`Capacidad para entregar backend, frontend, mobile y conversaciones técnicas de negocio.`,en:`Ability to deliver backend, frontend, mobile and technical business conversations.`}},{value:`Cloud + AI`,label:{es:`Microsoft Cloud e IA`,en:`Microsoft Cloud and AI`},detail:{es:`Azure, DevOps, Fabric, Power Platform e IA aplicada a soluciones empresariales.`,en:`Azure, DevOps, Fabric, Power Platform and AI applied to enterprise solutions.`}}];function E({eyebrow:e,title:t,description:n}){return(0,y.jsxs)(`div`,{className:`section-heading`,children:[e?(0,y.jsx)(`p`,{className:`section-eyebrow`,children:e}):null,(0,y.jsx)(`h2`,{children:t}),n?(0,y.jsx)(`p`,{className:`section-description`,children:n}):null]})}var pe=[{company:`Innovative`,role:`Software Development Intern`,period:`May 2022 - Aug 2022`,startDate:`2022-05-01`,endDate:`2022-08-31`,duration:`4 months`,summary:{es:`Participación en el desarrollo de una solución web y móvil con backend .NET, componentes frontend y soporte de despliegue. Experiencia inicial en arquitectura full stack y integración de servicios.`,en:`Contributed to a web and mobile solution with a .NET backend, frontend components and deployment support. Early experience in full stack architecture and service integration.`},description:{es:`Durante mi internship en Innovative, trabajé en un proyecto de transformación digital que incluía una solución integral con backend robusto, interfaces web modernas y aplicación móvil nativa. Colaboré con un equipo multidisciplinario en la implementación de características, optimización de performance y despliegue en múltiples plataformas.`,en:`During my internship at Innovative, I worked on a digital transformation project that included a robust backend, modern web interfaces and a native mobile app. I collaborated with a multidisciplinary team on feature implementation, performance optimization and deployment across multiple platforms.`},achievements:{es:[`Contribuí al desarrollo del backend con .NET Core, implementando APIs REST para una solución interna de gestión de trámites.`,`Participé en el desarrollo frontend con Vue.js para la interfaz web y React Native para la aplicación móvil.`,`Implementé integraciones de analítica y monitoreo con Firebase Analytics y Crashlytics para tracking de errores.`,`Colaboré en el proceso de despliegue y publicación de la aplicación móvil en App Store e Google Play.`,`Aprendí sobre CI/CD, versionamiento y buenas prácticas de desarrollo en equipo.`],en:[`Contributed to backend development with .NET Core, implementing REST APIs for an internal request management solution.`,`Worked on frontend development with Vue.js for the web interface and React Native for the mobile app.`,`Implemented analytics and monitoring integrations with Firebase Analytics and Crashlytics for error tracking.`,`Collaborated in the deployment and mobile app publishing process for App Store and Google Play.`,`Learned about CI/CD, versioning and team development best practices.`]},stack:[`.NET Core`,`C#`,`Vue.js`,`React Native`,`Firebase`,`JavaScript`,`Git`],highlights:[`Full Stack Development`,`Mobile Deployment`,`Firebase Integration`]},{company:`Innovative S.A.`,role:`Software Engineer I (Full Stack)`,period:`Oct 2022 - Sep 2025`,startDate:`2022-10-03`,endDate:`2025-09-30`,duration:`2 years 11 months`,summary:{es:`Desarrollo de APIs REST empresariales y soluciones full stack para el sector financiero con .NET, Java y Spring Boot, con foco en mantenibilidad, seguridad e integración. Liderazgo técnico en arquitectura limpia y optimización de bases de datos.`,en:`Built enterprise REST APIs and full stack solutions for the financial sector with .NET, Java and Spring Boot, focused on maintainability, security and integration. Technical leadership in clean architecture and database optimization.`},description:{es:`Como Software Engineer I en Innovative, fui responsable del diseño e implementación de soluciones backend escalables para clientes del sector financiero con .NET, Java y Spring Boot. Trabajé en la modernización de sistemas legacy, implementación de arquitectura limpia y optimización de performance en bases de datos empresariales. Colaboré con equipos de infraestructura en la automatización de despliegues y monitoreo de aplicaciones en producción.`,en:`As Software Engineer I at Innovative, I designed and implemented scalable backend solutions for financial sector clients with .NET, Java and Spring Boot. I worked on legacy modernization, clean architecture implementation and performance optimization in enterprise databases. I also collaborated with infrastructure teams on deployment automation and production monitoring.`},achievements:{es:[`Desarrollé más de 50 APIs REST con ASP.NET Core y C# siguiendo principios SOLID y Clean Architecture.`,`Trabajé con Java y Spring Boot en soluciones backend empresariales orientadas a servicios REST e integración.`,`Implementé patrones de diseño avanzados: CQRS, MediatR, Repository Pattern y Dependency Injection.`,`Optimicé consultas SQL en SQL Server y Oracle, mejorando performance en 40-60% en operaciones críticas.`,`Diseñé y ejecuté procedimientos almacenados complejos para reportes y procesamiento de datos.`,`Automaticé despliegues a múltiples ambientes (DEV, QA, PROD) mediante pipelines CI/CD en Azure DevOps.`,`Implementé estrategias de versionamiento, rollback y monitoreo de aplicaciones en producción.`,`Mentoricé a desarrolladores junior en arquitectura y mejores prácticas de código.`],en:[`Developed 50+ REST APIs with ASP.NET Core and C# following SOLID principles and Clean Architecture.`,`Worked with Java and Spring Boot on enterprise backend solutions focused on REST services and integration.`,`Implemented advanced design patterns including CQRS, MediatR, Repository Pattern and Dependency Injection.`,`Optimized SQL queries in SQL Server and Oracle, improving critical operation performance by 40-60%.`,`Designed and executed complex stored procedures for reporting and data processing.`,`Automated deployments across DEV, QA and PROD environments using Azure DevOps CI/CD pipelines.`,`Implemented versioning, rollback and production monitoring strategies.`,`Mentored junior developers on architecture and code best practices.`]},stack:[`C#`,`.NET Core`,`.NET Framework`,`ASP.NET Core`,`Java`,`Spring Boot`,`SQL Server`,`Oracle`,`T-SQL`,`PL/SQL`,`Azure DevOps`,`Git`,`Entity Framework`],highlights:[`Clean Architecture`,`Database Optimization`,`CI/CD Pipelines`,`Mentoring`]},{company:`Novacomp S.A.`,role:`Pre-Sales Engineer | Microsoft Cloud & AI Solutions`,period:`Oct 2025 - Feb 2026`,startDate:`2025-10-01`,endDate:`2026-02-28`,duration:`5 months`,summary:{es:`Rol híbrido entre desarrollo de negocio, preventa técnica y consultoría comercial para soluciones Microsoft Cloud, con foco en Azure, DevOps, Fabric, Purview, Power Platform, Microsoft 365 e IA aplicada al negocio.`,en:`Hybrid role across business development, technical pre-sales and commercial consulting for Microsoft Cloud solutions, focused on Azure, DevOps, Fabric, Purview, Power Platform, Microsoft 365 and business AI.`},description:{es:`Quise retarme fuera de mi zona técnica y explorar mi lado comercial, sin dejar de lado mi perfil tecnológico. En Novacomp trabajé en un rol híbrido entre desarrollo de negocio, preventa técnica y consultoría comercial para soluciones Microsoft Cloud. Generé y califiqué oportunidades relacionadas con Azure, Azure DevOps, Microsoft Fabric, Purview, Power Platform, Microsoft 365 e IA aplicada al negocio. Gracias a mi experiencia previa como Full-Stack Software Engineer, pude llevar conversaciones más técnicas y consultivas con clientes, apoyar demostraciones, dashboards, automatizaciones, propuestas y reuniones comerciales. Evolucioné de SDR Tech hacia un rol de preventa, liderando reuniones de forma independiente y manteniendo un promedio aproximado de 10 reuniones calificadas al mes.`,en:`I challenged myself outside my technical comfort zone and explored my commercial side without leaving my technology profile behind. At Novacomp, I worked in a hybrid role across business development, technical pre-sales and commercial consulting for Microsoft Cloud solutions. I generated and qualified opportunities related to Azure, Azure DevOps, Microsoft Fabric, Purview, Power Platform, Microsoft 365 and AI applied to business. Thanks to my previous experience as a Full-Stack Software Engineer, I was able to lead more technical and consultative conversations with clients, support demos, dashboards, automations, proposals and commercial meetings. I evolved from SDR Tech toward a pre-sales role, independently leading meetings and maintaining an average of about 10 qualified meetings per month.`},achievements:{es:[`Generé y califiqué oportunidades comerciales sobre soluciones Microsoft Cloud, datos, productividad e IA.`,`Lideré reuniones calificadas de forma independiente, con un promedio aproximado de 10 reuniones al mes.`,`Apoyé demostraciones técnicas, dashboards, automatizaciones, propuestas y reuniones comerciales consultivas.`,`Conecté necesidades de negocio con soluciones en Azure, Azure DevOps, Microsoft Fabric, Purview, Power Platform y Microsoft 365.`,`Aproveché mi experiencia full stack para sostener conversaciones técnicas con clientes y equipos internos.`,`Evolucioné desde SDR Tech hacia responsabilidades de preventa técnica y consultoría comercial.`],en:[`Generated and qualified business opportunities around Microsoft Cloud, data, productivity and AI solutions.`,`Led qualified meetings independently, averaging about 10 qualified meetings per month.`,`Supported technical demos, dashboards, automations, proposals and consultative commercial meetings.`,`Connected business needs with solutions across Azure, Azure DevOps, Microsoft Fabric, Purview, Power Platform and Microsoft 365.`,`Used my full stack background to sustain technical conversations with clients and internal teams.`,`Evolved from SDR Tech into technical pre-sales and commercial consulting responsibilities.`]},stack:[`Azure`,`Azure DevOps`,`Microsoft Fabric`,`Microsoft Purview`,`Power Platform`,`Microsoft 365`,`AI Solutions`,`Pre-Sales`,`Business Development`],highlights:[`Microsoft Cloud`,`AI Solutions`,`Technical Pre-Sales`,`Business Development`]}];function D({children:e}){return(0,y.jsx)(`span`,{className:`tag`,children:e})}var me=[...pe].sort((e,t)=>new Date(t.startDate).getTime()-new Date(e.startDate).getTime());function he(){let{i18n:e}=d(),t=e.resolvedLanguage||e.language;return(0,y.jsx)(`div`,{className:`timeline`,children:me.map(e=>(0,y.jsxs)(`article`,{className:`timeline-card`,children:[(0,y.jsx)(`div`,{className:`timeline-meta`,children:(0,y.jsx)(`p`,{className:`timeline-period`,children:w(e.period,t)})}),(0,y.jsxs)(`div`,{className:`timeline-body`,children:[(0,y.jsxs)(`div`,{className:`timeline-title`,children:[(0,y.jsx)(`div`,{className:`timeline-dot`}),(0,y.jsx)(`h3`,{children:w(e.role,t)})]}),(0,y.jsx)(`p`,{className:`timeline-company`,children:e.company}),(0,y.jsx)(`p`,{className:`muted`,children:w(e.summary,t)}),(0,y.jsx)(`ul`,{className:`bullet-list`,children:w(e.achievements,t).map(e=>(0,y.jsx)(`li`,{children:e},e))}),(0,y.jsx)(`div`,{className:`tag-group`,children:e.stack.map(e=>(0,y.jsx)(D,{children:e},e))})]})]},`${e.company}-${w(e.role,`es`)}`))})}function O({certification:e,language:t}){return(0,y.jsxs)(`article`,{className:e.featured?`cert-card cert-card-featured`:`cert-card`,children:[e.image?(0,y.jsxs)(`button`,{className:`cert-media`,type:`button`,"aria-haspopup":`dialog`,"aria-label":`${t===`en`?`View certificate`:`Ver certificado`}: ${w(e.title,t)}`,onClick:()=>{window.dispatchEvent(new CustomEvent(`open-certificate-modal`,{detail:{image:C(e.image||``),title:w(e.title,t)}}))},children:[(0,y.jsx)(`img`,{src:C(e.image),alt:w(e.title,t),loading:`lazy`}),(0,y.jsx)(`span`,{children:t===`en`?`View certificate`:`Ver certificado`})]}):null,(0,y.jsxs)(`div`,{className:`cert-content`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{className:`cert-category`,children:w(e.category,t)}),(0,y.jsx)(`h3`,{children:w(e.title,t)}),(0,y.jsx)(`p`,{className:`cert-issuer`,children:e.issuer})]}),(0,y.jsxs)(`dl`,{className:`cert-meta`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`dt`,{children:t===`en`?`Issued`:`Emitido`}),(0,y.jsx)(`dd`,{children:w(e.issuedAt,t)})]}),e.credentialId?(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`dt`,{children:t===`en`?`Credential ID`:`ID de credencial`}),(0,y.jsx)(`dd`,{children:e.credentialId})]}):null,e.certificationNumber?(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`dt`,{children:t===`en`?`Certification number`:`Número de certificación`}),(0,y.jsx)(`dd`,{children:e.certificationNumber})]}):null,e.status?(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`dt`,{children:t===`en`?`Status`:`Estado`}),(0,y.jsx)(`dd`,{children:w(e.status,t)})]}):null,e.hours?(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`dt`,{children:t===`en`?`Duration`:`Duración`}),(0,y.jsx)(`dd`,{children:e.hours})]}):null]})]})]})}function k(){let[e,t]=(0,v.useState)(null);return(0,v.useEffect)(()=>{let e=e=>{let{detail:n}=e;t(n)};return window.addEventListener(`open-certificate-modal`,e),()=>window.removeEventListener(`open-certificate-modal`,e)},[]),(0,v.useEffect)(()=>{if(!e)return;let n=e=>{e.key===`Escape`&&t(null)};return document.body.classList.add(`modal-open`),window.addEventListener(`keydown`,n),()=>{document.body.classList.remove(`modal-open`),window.removeEventListener(`keydown`,n)}},[e]),e?(0,y.jsx)(`div`,{className:`cert-modal-backdrop`,role:`presentation`,onClick:()=>t(null),children:(0,y.jsxs)(`section`,{className:`cert-modal`,role:`dialog`,"aria-modal":`true`,"aria-label":e.title,onClick:e=>e.stopPropagation(),children:[(0,y.jsxs)(`header`,{className:`cert-modal-header`,children:[(0,y.jsx)(`h2`,{children:e.title}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(null),"aria-label":`Cerrar`,children:`×`})]}),(0,y.jsx)(`div`,{className:`cert-modal-media`,children:(0,y.jsx)(`img`,{src:e.image,alt:e.title})})]})}):null}function A({name:e}){return e===`github`?(0,y.jsx)(`img`,{src:`/Portfolio/github-mark.svg`,alt:``}):e===`youtube`?(0,y.jsxs)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,y.jsx)(`path`,{d:`M21.6 7.2a3 3 0 0 0-2.1-2.1C17.6 4.6 12 4.6 12 4.6s-5.6 0-7.5.5a3 3 0 0 0-2.1 2.1A31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8Z`}),(0,y.jsx)(`path`,{d:`m10.2 15.4 5-3.4-5-3.4v6.8Z`,fill:`currentColor`})]}):e===`download`?(0,y.jsxs)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,y.jsx)(`path`,{d:`M12 3a1.4 1.4 0 0 1 1.4 1.4v7.1l2.1-2.1a1.4 1.4 0 1 1 2 2L13 15.9a1.4 1.4 0 0 1-2 0l-4.5-4.5a1.4 1.4 0 0 1 2-2l2.1 2.1V4.4A1.4 1.4 0 0 1 12 3Z`}),(0,y.jsx)(`path`,{d:`M5.4 18.2c0-.8.6-1.4 1.4-1.4h10.4a1.4 1.4 0 1 1 0 2.8H6.8c-.8 0-1.4-.6-1.4-1.4Z`})]}):e===`document`?(0,y.jsxs)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,y.jsx)(`path`,{d:`M6.8 2.5h6.5L19 8.2v13.3H6.8A1.8 1.8 0 0 1 5 19.7V4.3a1.8 1.8 0 0 1 1.8-1.8Zm6 1.8v4.4h4.4`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinejoin:`round`}),(0,y.jsx)(`path`,{d:`M8.5 12h7M8.5 15.5h7M8.5 8.5h2.8`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})]}):(0,y.jsxs)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,y.jsx)(`path`,{d:`M3 6.3c0-1 .8-1.8 1.8-1.8h5l1.8 2.2h7.6c1 0 1.8.8 1.8 1.8v9.2c0 1-.8 1.8-1.8 1.8H4.8c-1 0-1.8-.8-1.8-1.8V6.3Z`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinejoin:`round`}),(0,y.jsx)(`path`,{d:`M3 9h18`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})]})}var j={portfolio:{title:{en:`John Castro Sanabria Portfolio`},description:{en:`Professional portfolio built to present experience, projects and technical content with a fast, responsive experience deployed on GitHub Pages.`},highlights:{en:[`Frontend architecture with React, Vite and React Router`,`Automated deployment to GitHub Pages`,`Responsive design focused on a technical personal brand`,`Projects, experience, skills and blog sections`]}},"business-ai-analytics":{title:{en:`BusinessAI Analytics - AI BI Platform`}},reactivities:{title:{en:`Reactivities - Full Stack Social Network`},description:{en:`Full stack social network with a .NET backend and React frontend, focused on activities, profiles, comments and real-time interaction flows.`},highlights:{en:[`Authentication and authorization with secure user flows`,`Activity, comment and follower management`,`Clear separation between backend, frontend and data layers`,`Solid foundation for modern patterns such as CQRS and MediatR`]}},etickets:{title:{en:`eTickets - Movie Ticketing Platform`},description:{en:`Web application for selling and managing movie tickets, with catalog, showtimes, cart and management of cinema business entities.`},highlights:{en:[`MVC architecture with ASP.NET Core`,`Movie, cinema, actor and producer management`,`Ticket purchase and cart flow`,`Admin panel for catalog operations`]}},"admin-dashboard":{description:{en:`React admin dashboard for visualizing metrics, data and operational modules with a practical interface for daily management.`},highlights:{en:[`Admin panel design focused on fast reading`,`Reusable components for data views`,`Structure prepared for charts, tables and internal navigation`,`Public demo deployed on Netlify`]}},"clean-api":{title:{en:`Interview Clean API - Clean Architecture`},description:{en:`REST API designed to demonstrate technical interview criteria: layer separation, validation, documentation and maintainable structure.`},highlights:{en:[`Clean architecture with clear layer boundaries`,`REST endpoints oriented to technical exercises`,`Validation and organized error handling`,`Inspection-ready documentation with Swagger/OpenAPI`]}},"basic-business-app":{description:{en:`Base enterprise application in .NET using Clean Architecture to separate domain, application, infrastructure and presentation.`},highlights:{en:[`Layered separation of responsibilities`,`SOLID principles applied to an enterprise foundation`,`Structure prepared for testing and evolution`,`Dependency injection and service patterns`]}},propflow:{title:{en:`PropFlow - Real Estate Landing Page`},description:{en:`Real estate landing page with a modern aesthetic for presenting properties, benefits and calls to action clearly.`},highlights:{en:[`Responsive design oriented to real estate products`,`Sections for benefits, properties and conversion`,`Clean interface with strong visual hierarchy`,`Base ready for form or CRM integration`]}},"meals-to-go":{title:{en:`MealsToGo - Uber Eats Clone`},description:{en:`Hybrid mobile project that recreates Uber Eats-style flows: restaurant discovery, menus, favorites and purchase experience from React Native.`},highlights:{en:[`Hybrid mobile app with React Native`,`Restaurant search and navigation`,`Favorites and user data persistence`,`Integration with mobile services and maps`]}},"expo-amplify-demo":{description:{en:`Mobile application with React Native and AWS Amplify to explore authentication, cloud services and managed backend capabilities in the AWS ecosystem.`},highlights:{en:[`Mobile foundation with Expo and React Native`,`AWS Amplify integration`,`Focus on authentication and cloud backend`,`Useful project for validating mobile + cloud architecture`]}},"spring-demo":{description:{en:`Backend API with Spring Boot to demonstrate enterprise Java development fundamentals, REST endpoints and layered organization.`},highlights:{en:[`REST API with Spring Boot`,`Clear and extensible backend structure`,`Validation and error handling`,`Solid base for modern Java services`]}},"vue-project":{description:{en:`Vue web project focused on practicing components, state, routes and modern interface construction with the Vue ecosystem.`},highlights:{en:[`Reusable Vue components`,`Structure designed for views and navigation`,`Practice of modern frontend patterns`,`Educational base for scaling into SPA applications`]}},"smartgym-api":{title:{en:`SmartGym - University PHP Project`},description:{en:`University PHP project for managing gym operations, focused on members, classes and internal administration.`},highlights:{en:[`Data management for members and services`,`Model oriented to gym processes`,`University backend with CRUD structure`,`Practical application of business logic in PHP`]}},"webapi-matricula":{title:{en:`Enrollment WebAPI - University .NET MVC Project`},description:{en:`University .NET system for managing enrollment, students and courses, built as a comprehensive academic backend exercise.`},highlights:{en:[`Student, course and enrollment management`,`Academic business logic`,`Structure based on .NET and MVC/Web API`,`Data persistence with SQL Server`]}},"wcf-tarjetas":{title:{en:`WCF Card Service - University Project`},description:{en:`University WCF service for card-related operations, applying SOAP communication and classic distributed service concepts.`},highlights:{en:[`Distributed service with WCF`,`SOAP contracts for system-to-system communication`,`Card-oriented operations`,`Integration practice in .NET Framework`]}},"personas-solution":{title:{en:`PersonasSolution - People Management`},description:{en:`Visual Basic solution for managing people entities, designed as a practical base for CRUD operations, layer separation and persistence.`},highlights:{en:[`Domain model centered on people`,`Organized CRUD operations`,`Structure prepared to extend business rules`,`Useful project for demonstrating backend fundamentals`]}},"flask-product-api":{description:{en:`Lightweight Flask API for product management, useful for demonstrating REST endpoints, Python simplicity and fast service construction.`},highlights:{en:[`Compact REST API with Flask`,`Product management through clear endpoints`,`Simple base for testing, integration or prototypes`,`Demonstrates versatility outside the .NET stack`]}}};function M(e,t){let n=e.toLowerCase(),r=t.toLowerCase();return n.includes(`app store`)||r.includes(`apps.apple.com`)?`app-store`:n.includes(`google play`)||r.includes(`play.google.com`)?`play-store`:`external`}function N(e,t){let n=e.toLowerCase(),r=t.toLowerCase();return n.includes(`demo`)||r.includes(`youtube.com`)||r.includes(`youtu.be`)?`demo`:`site`}function P(e,t){let n=e.toLowerCase();return n.includes(`ver sitio`)||n.includes(`view site`)?`button-site`:t?`button-primary`:`button-secondary`}function F({name:e}){return e===`app-store`?(0,y.jsx)(`img`,{src:C(`app-store-mark.svg`),alt:``,"aria-hidden":`true`}):e===`play-store`?(0,y.jsxs)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`,fill:`#ffffff`}),(0,y.jsx)(`path`,{d:`M7.1 5.3c-.4.2-.7.6-.7 1.2v11c0 .6.3 1 .7 1.2l6-6.7-6-6.7Z`,fill:`#3bccff`}),(0,y.jsx)(`path`,{d:`m13.9 11.1 2.1-2.4-7.6-4.2c-.4-.2-.8-.1-1.1.1l6.6 6.5Z`,fill:`#00d87f`}),(0,y.jsx)(`path`,{d:`m13.9 12.9-6.6 6.5c.3.2.8.3 1.1.1l7.6-4.2-2.1-2.4Z`,fill:`#ff3d48`}),(0,y.jsx)(`path`,{d:`m16.7 9.1 2.2 1.2c1 .5 1 1.9 0 2.4l-2.2 1.2-2.5-1.9 2.5-2.9Z`,fill:`#ffcd2e`})]}):e===`demo`?(0,y.jsxs)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`12`,cy:`12`,r:`8.4`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`}),(0,y.jsx)(`path`,{d:`m10.5 8.8 5.1 3.2-5.1 3.2V8.8Z`})]}):e===`site`?(0,y.jsxs)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,y.jsx)(`rect`,{x:`4`,y:`5`,width:`16`,height:`14`,rx:`3`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`}),(0,y.jsx)(`path`,{d:`M4.7 9h14.6`,fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,strokeWidth:`2`}),(0,y.jsx)(`path`,{d:`M10.2 14h4.9m0 0-2-2m2 2-2 2`,fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2`})]}):e===`code`?(0,y.jsxs)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,y.jsx)(`rect`,{x:`4`,y:`5`,width:`16`,height:`14`,rx:`3`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`}),(0,y.jsx)(`path`,{d:`M4.7 9h14.6`,fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,strokeWidth:`2`}),(0,y.jsx)(`path`,{d:`m10 13-2 2 2 2`,fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2`}),(0,y.jsx)(`path`,{d:`m14 13 2 2-2 2`,fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2`})]}):(0,y.jsxs)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,y.jsx)(`path`,{d:`M8 7h8.6v8.6`,fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2.2`}),(0,y.jsx)(`path`,{d:`m16.2 7.4-9 9`,fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,strokeWidth:`2.2`})]})}function I({project:e,language:t}){let{t:n,i18n:r}=d(),i=t||r.resolvedLanguage||r.language,a=e.links??[],o=i===`en`?j[e.id]:void 0,s=o?.title??e.title,c=o?.category??e.category,l=o?.description??e.description,u=o?.highlights??e.highlights,f=e.liveDemoLabel?w(e.liveDemoLabel,i):n(`projectLinks.live`);return(0,y.jsxs)(`article`,{className:`project-card`,children:[(0,y.jsx)(`p`,{className:`project-category`,children:w(c,i)}),(0,y.jsx)(`h3`,{children:w(s,i)}),(0,y.jsx)(`p`,{className:`muted`,children:w(l,i)}),(0,y.jsx)(`ul`,{className:`bullet-list`,children:w(u,i).map(e=>(0,y.jsx)(`li`,{children:e},e))}),(0,y.jsx)(`div`,{className:`tag-group`,children:e.technologies.map(e=>(0,y.jsx)(D,{children:e},e))}),(e.liveDemo||e.githubUrl||a.length>0)&&(0,y.jsxs)(`div`,{className:`project-links`,children:[e.liveDemo&&(0,y.jsxs)(`a`,{className:`button button-primary ${N(f,e.liveDemo)===`site`?`button-site`:`button-demo`}`,href:e.liveDemo,target:`_blank`,rel:`noopener noreferrer`,title:f,children:[(0,y.jsx)(`span`,{className:`button-icon`,"aria-hidden":`true`,children:(0,y.jsx)(F,{name:N(f,e.liveDemo)})}),(0,y.jsx)(`span`,{children:f})]}),e.githubUrl&&(0,y.jsxs)(`a`,{className:`button button-secondary`,href:e.githubUrl,target:`_blank`,rel:`noopener noreferrer`,title:n(`projectLinks.code`),children:[(0,y.jsx)(`span`,{className:`button-icon`,"aria-hidden":`true`,children:(0,y.jsx)(F,{name:`code`})}),(0,y.jsx)(`span`,{children:n(`projectLinks.code`)})]}),a.map(e=>{let t=w(e.label,i);return(0,y.jsxs)(`a`,{className:`button ${P(t,e.primary)}`,href:e.href,target:`_blank`,rel:`noopener noreferrer`,title:t,children:[(0,y.jsx)(`span`,{className:`button-icon`,"aria-hidden":`true`,children:(0,y.jsx)(F,{name:M(t,e.href)})}),(0,y.jsx)(`span`,{children:t})]},e.href)})]})]})}function L({title:e,description:t,items:n,language:r}){let i=w(n,r);return(0,y.jsxs)(`article`,{className:`skill-card`,children:[(0,y.jsx)(`h3`,{children:w(e,r)}),(0,y.jsx)(`p`,{className:`muted`,children:w(t,r)}),(0,y.jsx)(`div`,{className:`tag-group`,children:i.map(e=>(0,y.jsx)(D,{children:e},e))})]})}function R({value:e,label:t,detail:n,language:r}){return(0,y.jsxs)(`article`,{className:`stat-card`,children:[(0,y.jsx)(`p`,{className:`stat-value`,children:w(e,r)}),(0,y.jsx)(`p`,{className:`stat-label`,children:w(t,r)}),(0,y.jsx)(`p`,{className:`muted`,children:w(n,r)})]})}function z(e,t=` | John Castro Sanabria`){(0,v.useEffect)(()=>{let n=e?`${e}${t}`:`John Castro Sanabria - Ingeniero de software full-stack`;document.title=n;let r=document.querySelector(`meta[property="og:title"]`);r&&r.setAttribute(`content`,n)},[e,t])}function ge(){z(`Portafolio | Ingeniero de software full-stack`);let{t:e,i18n:n}=d(),r=n.resolvedLanguage||n.language,i=e(`hero.bullets`,{returnObjects:!0});return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`section`,{className:`hero-section`,children:(0,y.jsxs)(`div`,{className:`container hero-grid`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{className:`section-eyebrow`,children:e(`hero.eyebrow`)}),(0,y.jsx)(`h1`,{children:x.author}),(0,y.jsx)(`p`,{className:`hero-role`,children:w(x.roleLocalized,r)}),(0,y.jsx)(`p`,{className:`hero-copy`,children:w(x.headlineLocalized,r)}),(0,y.jsxs)(`div`,{className:`hero-actions`,children:[(0,y.jsxs)(`a`,{className:`button hero-button hero-button-primary`,href:`#proyectos`,children:[(0,y.jsx)(`span`,{className:`hero-button-icon`,"aria-hidden":`true`,children:(0,y.jsx)(A,{name:`folder`})}),(0,y.jsx)(`span`,{children:w(x.ctaPrimaryLocalized,r)})]}),(0,y.jsxs)(t,{className:`button hero-button hero-button-secondary`,to:`/blog`,children:[(0,y.jsx)(`span`,{className:`hero-button-icon`,"aria-hidden":`true`,children:(0,y.jsx)(A,{name:`document`})}),(0,y.jsx)(`span`,{children:w(x.ctaSecondaryLocalized,r)})]}),(0,y.jsxs)(`details`,{className:`resume-download`,children:[(0,y.jsxs)(`summary`,{className:`button hero-button hero-button-secondary`,children:[(0,y.jsx)(`span`,{className:`hero-button-icon`,"aria-hidden":`true`,children:(0,y.jsx)(A,{name:`download`})}),(0,y.jsx)(`span`,{children:e(`hero.resumeButton`)})]}),(0,y.jsxs)(`div`,{className:`resume-options`,"aria-label":e(`hero.resumeQuestion`),children:[(0,y.jsx)(`span`,{children:e(`hero.resumeQuestion`)}),(0,y.jsx)(`a`,{href:C(x.resumeDownloads.es),download:`John_Castro_Sanabria_CV_ES.pdf`,children:e(`hero.resumeSpanish`)}),(0,y.jsx)(`a`,{href:C(x.resumeDownloads.en),download:`John_Castro_Sanabria_CV_EN.pdf`,children:e(`hero.resumeEnglish`)})]})]})]}),(0,y.jsxs)(`div`,{className:`hero-social-actions`,"aria-label":`Canales profesionales`,children:[(0,y.jsxs)(`a`,{className:`button button-youtube`,href:x.youtubeUrl,target:`_blank`,rel:`noopener noreferrer`,children:[(0,y.jsx)(`span`,{className:`button-icon button-icon-youtube`,"aria-hidden":`true`,children:(0,y.jsx)(A,{name:`youtube`})}),(0,y.jsx)(`span`,{className:`button-label`,children:w(x.ctaYouTubeLocalized,r)})]}),(0,y.jsxs)(`a`,{className:`button button-github`,href:x.githubProfileUrl,target:`_blank`,rel:`noopener noreferrer`,children:[(0,y.jsx)(`span`,{className:`button-icon button-icon-github`,"aria-hidden":`true`,children:(0,y.jsx)(A,{name:`github`})}),(0,y.jsx)(`span`,{className:`button-label`,children:w(x.ctaGitHubLocalized,r)})]})]})]}),(0,y.jsxs)(`aside`,{className:`hero-card hero-profile-card`,children:[(0,y.jsx)(`div`,{className:`hero-profile-media`,children:(0,y.jsx)(`img`,{src:C(`profile-john.png`),alt:`John Castro en oficina`})}),(0,y.jsxs)(`div`,{className:`hero-profile-copy`,children:[(0,y.jsx)(`p`,{className:`hero-card-label`,children:e(`hero.profile`)}),(0,y.jsx)(`h2`,{children:e(`hero.profileTitle`)}),(0,y.jsx)(`p`,{className:`hero-profile-text`,children:e(`hero.profileText`)}),(0,y.jsx)(`ul`,{className:`bullet-list hero-bullet-list`,children:i.map(e=>(0,y.jsx)(`li`,{children:e},e))})]})]})]})}),(0,y.jsx)(`section`,{className:`section section-tight-top`,children:(0,y.jsx)(`div`,{className:`container stats-grid`,children:fe.map(e=>(0,y.jsx)(R,{value:e.value,label:e.label,detail:e.detail,language:r},w(e.label,`es`)))})}),(0,y.jsx)(`section`,{className:`section`,children:(0,y.jsxs)(`div`,{className:`container`,children:[(0,y.jsx)(E,{eyebrow:e(`sections.stackEyebrow`),title:e(`sections.stackTitle`),description:e(`sections.stackDescription`)}),(0,y.jsx)(`div`,{className:`skills-grid`,children:de.map(e=>(0,y.jsx)(L,{...e,language:r},w(e.title,`es`)))})]})}),(0,y.jsx)(`section`,{className:`section`,children:(0,y.jsxs)(`div`,{className:`container`,children:[(0,y.jsx)(E,{eyebrow:e(`sections.certificationsEyebrow`),title:e(`sections.certificationsTitle`),description:e(`sections.certificationsDescription`)}),(0,y.jsx)(`div`,{className:`certifications-grid`,children:le.map(e=>(0,y.jsx)(O,{certification:e,language:r},e.id))})]})}),(0,y.jsx)(`section`,{className:`section`,children:(0,y.jsxs)(`div`,{className:`container`,children:[(0,y.jsx)(E,{eyebrow:e(`sections.experienceEyebrow`),title:e(`sections.experienceTitle`),description:e(`sections.experienceDescription`)}),(0,y.jsx)(he,{})]})}),(0,y.jsx)(`section`,{className:`section`,id:`proyectos`,children:(0,y.jsxs)(`div`,{className:`container`,children:[(0,y.jsx)(E,{eyebrow:e(`sections.projectsEyebrow`),title:e(`sections.projectsTitle`),description:e(`sections.projectsDescription`)}),(0,y.jsx)(`div`,{className:`card-grid`,children:ue.map(e=>(0,y.jsx)(I,{project:e,language:r},e.id))})]})}),(0,y.jsx)(`section`,{className:`section section-accent`,children:(0,y.jsxs)(`div`,{className:`container cta-panel`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{className:`section-eyebrow`,children:e(`sections.blogEyebrow`)}),(0,y.jsx)(`h2`,{children:e(`sections.blogTitle`)}),(0,y.jsx)(`p`,{className:`section-description`,children:e(`sections.blogDescription`)})]}),(0,y.jsx)(t,{className:`button`,to:`/blog`,children:e(`sections.blogButton`)})]})}),(0,y.jsx)(k,{})]})}function B(e,t=`es`){return new Intl.DateTimeFormat(t===`en`?`en-US`:`es-ES`,{day:`2-digit`,month:`long`,year:`numeric`}).format(new Date(e))}function _e(e,t){return e.slug===t}function ve({post:e}){let{t:n,i18n:r}=d(),i=r.resolvedLanguage||r.language;return(0,y.jsxs)(`article`,{className:`blog-card`,children:[(0,y.jsxs)(`div`,{className:`blog-card-top`,children:[(0,y.jsxs)(`p`,{className:`blog-meta`,children:[(0,y.jsx)(`span`,{children:B(e.publishedAt,i)}),(0,y.jsx)(`span`,{children:`•`}),(0,y.jsx)(`span`,{children:e.readingTime}),(0,y.jsx)(`span`,{children:`•`}),(0,y.jsx)(`span`,{children:e.source===`firebase`?`Firebase`:n(`blog.sourceLocal`)})]}),(0,y.jsx)(`h3`,{children:e.title}),(0,y.jsx)(`p`,{className:`muted`,children:e.excerpt})]}),(0,y.jsx)(`div`,{className:`tag-group`,children:e.tags.map(e=>(0,y.jsx)(D,{children:e},e))}),(0,y.jsx)(t,{className:`button button-secondary`,to:`/blog/${e.slug}`,children:n(`blog.readArticle`)})]})}function ye({search:e,onSearchChange:t,selectedTag:n,onTagChange:r,availableTags:i}){let{t:a}=d();return(0,y.jsxs)(`div`,{className:`filters-panel`,children:[(0,y.jsxs)(`label`,{className:`field`,children:[(0,y.jsx)(`span`,{children:a(`blog.search`)}),(0,y.jsx)(`input`,{type:`search`,value:e,onChange:e=>t(e.target.value),placeholder:a(`blog.searchPlaceholder`)})]}),(0,y.jsxs)(`label`,{className:`field`,children:[(0,y.jsx)(`span`,{children:a(`blog.tag`)}),(0,y.jsxs)(`select`,{value:n,onChange:e=>r(e.target.value),children:[(0,y.jsx)(`option`,{value:`all`,children:a(`blog.all`)}),i.map(e=>(0,y.jsx)(`option`,{value:e,children:e},e))]})]})]})}function V({title:e,description:t}){return(0,y.jsxs)(`div`,{className:`empty-state`,children:[(0,y.jsx)(`h3`,{children:e}),(0,y.jsx)(`p`,{children:t})]})}function be({label:e=`Cargando contenido...`}){return(0,y.jsxs)(`div`,{className:`loader`,role:`status`,"aria-live":`polite`,children:[(0,y.jsx)(`span`,{className:`loader-dot`}),(0,y.jsx)(`p`,{children:e})]})}var H={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0,measurementId:void 0},U=[`apiKey`,`authDomain`,`projectId`,`appId`].every(e=>!!H[e]);function xe(){return U?ne().length?g():m(H):null}var W=xe(),G=W?_(W):null,Se=[{id:`1`,slug:`net-10-features-2026`,title:`.NET 10: Nuevas características y mejoras de performance`,excerpt:`.NET 10 trae mejoras significativas en performance, seguridad y herramientas de desarrollo. Descubre las características clave que debes conocer.`,content:`
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
    `,tags:[`React`,`Full Stack`,`.NET`],publishedAt:`2026-03-10`,readingTime:`4 min`,source:`local`},{id:`10`,slug:`typescript-para-frontends-mantenibles`,title:`TypeScript para frontends mantenibles`,excerpt:`Cómo TypeScript ayuda a construir interfaces más seguras, predecibles y fáciles de evolucionar en proyectos React.`,content:`
## Por qué TypeScript aporta tanto en frontend

En una interfaz moderna, el problema no suele ser pintar componentes. El reto real aparece cuando crecen los estados, formularios, rutas, permisos, respuestas de APIs y reglas visuales.

TypeScript ayuda a convertir esas decisiones en contratos claros. Si el backend cambia una respuesta, si un componente recibe una propiedad incompleta o si un flujo no contempla un estado, el error aparece antes de llegar a producción.

## Dónde lo uso con más intención

- Tipos para respuestas de APIs y DTOs.
- Props explícitas en componentes reutilizables.
- Estados discriminados para loading, success y error.
- Helpers tipados para formularios, filtros y tablas.
- Modelos compartidos cuando el dominio lo permite.

## Buenas prácticas

No se trata de tipar todo de forma excesiva. La clave es tipar lo que protege decisiones importantes: contratos externos, estados de negocio y componentes que se reutilizan mucho.

## En resumen

TypeScript mejora el frontend porque obliga a pensar en contratos. Eso reduce bugs, facilita refactors y hace que el equipo pueda moverse más rápido con menos incertidumbre.
    `,tags:[`TypeScript`,`React`,`Frontend`,`Buenas prácticas`],publishedAt:`2026-04-30`,readingTime:`5 min`,source:`local`},{id:`11`,slug:`python-en-soluciones-de-datos-e-ia`,title:`Python en soluciones de datos e IA`,excerpt:`Por qué Python sigue siendo una herramienta práctica para automatización, analítica, APIs de IA y prototipos de datos.`,content:`
## Python como herramienta de productividad

Python destaca porque permite pasar rápido de una idea a una solución funcional. Para datos, automatización e IA, esa velocidad importa mucho.

En proyectos modernos, Python puede vivir como servicio independiente, script de procesamiento, pipeline de datos o API especializada que complementa un backend principal.

## Casos donde aporta valor

- Procesamiento y limpieza de datos.
- Automatización de tareas repetitivas.
- Modelos de predicción y análisis.
- Servicios con FastAPI para exponer capacidades de IA.
- Integraciones con archivos, bases de datos y servicios externos.

## Buen criterio técnico

Python es muy flexible, pero esa flexibilidad necesita orden. Conviene definir estructuras claras, validaciones, pruebas y contratos de entrada y salida.

## En resumen

Python encaja muy bien cuando se necesita resolver problemas de datos, IA o automatización sin sobrecargar el sistema principal. Usado con arquitectura, se convierte en una pieza fuerte dentro de soluciones full stack.
    `,tags:[`Python`,`FastAPI`,`Data`,`AI`],publishedAt:`2026-04-28`,readingTime:`5 min`,source:`local`},{id:`12`,slug:`java-y-spring-boot-para-backends-empresariales`,title:`Java y Spring Boot para backends empresariales`,excerpt:`Una mirada práctica a Java y Spring Boot como base para construir APIs, microservicios y sistemas empresariales robustos.`,content:`
## Java sigue siendo fuerte en enterprise

Java mantiene una presencia muy sólida en sistemas empresariales porque ofrece estabilidad, rendimiento, ecosistema maduro y buenas prácticas para proyectos grandes.

Spring Boot simplifica mucho la creación de APIs y servicios, sin perder capacidades importantes como seguridad, inyección de dependencias, configuración por ambientes y observabilidad.

## Qué valoro de Spring Boot

- APIs REST productivas y bien estructuradas.
- Integración con bases de datos y JPA.
- Seguridad con Spring Security.
- Buen soporte para microservicios.
- Ecosistema amplio para testing, mensajería y despliegue.

## Cuándo lo elegiría

Spring Boot encaja muy bien cuando el sistema necesita crecer, integrarse con otros servicios y mantenerse estable durante años.

## En resumen

Java y Spring Boot son una combinación sólida para backends empresariales. No solo sirven para construir rápido, también para sostener sistemas complejos con orden y consistencia.
    `,tags:[`Java`,`Spring Boot`,`Backend`,`Microservicios`],publishedAt:`2026-04-26`,readingTime:`5 min`,source:`local`},{id:`13`,slug:`integracion-de-apis-con-frontends-modernos`,title:`Integración de APIs con frontends modernos`,excerpt:`Patrones prácticos para conectar frontends React con APIs REST de forma clara, resiliente y mantenible.`,content:`
## La integración define gran parte de la experiencia

Un frontend puede verse bien, pero si consume mal las APIs la experiencia se vuelve lenta, frágil o inconsistente.

La integración entre frontend y backend debe pensarse como un contrato: qué datos llegan, cuándo llegan, cómo se validan y qué ocurre cuando algo falla.

## Patrones que uso

- Clientes HTTP centralizados.
- Tipos para requests y responses.
- Manejo consistente de errores.
- Estados claros de carga, vacío y fallo.
- Cache y sincronización con herramientas como React Query.
- Separación entre componentes visuales y lógica de datos.

## Buen diseño de contratos

Los endpoints deben entregar respuestas consistentes. El frontend debe evitar depender de detalles accidentales del backend y trabajar con modelos claros.

## En resumen

Integrar APIs con frontends modernos no es solo hacer fetch. Es diseñar una frontera estable entre sistemas para que la UI pueda crecer sin volverse frágil.
    `,tags:[`APIs`,`React`,`Frontend`,`React Query`],publishedAt:`2026-04-24`,readingTime:`6 min`,source:`local`},{id:`14`,slug:`frontend-backend-contratos-y-experiencia-de-usuario`,title:`Frontend y backend: contratos que mejoran la experiencia de usuario`,excerpt:`Cómo buenos contratos entre API y UI ayudan a reducir errores, mejorar tiempos de respuesta y construir productos más confiables.`,content:`
## El contrato también es parte del producto

La experiencia de usuario no depende solo del diseño visual. También depende de qué tan claro sea el contrato entre frontend y backend.

Cuando una API responde con estructuras previsibles, errores útiles y datos listos para la interfaz, el frontend puede ofrecer una experiencia más rápida y estable.

## Decisiones que ayudan

- Respuestas consistentes para éxito y error.
- Paginación, filtros y ordenamiento pensados para la UI.
- Mensajes de validación accionables.
- Versionado cuando el contrato cambia.
- Documentación mínima pero útil.

## Impacto en el equipo

Un contrato claro reduce discusiones, evita supuestos y permite trabajar en paralelo. Backend y frontend dejan de bloquearse por detalles ambiguos.

## En resumen

Buenas integraciones nacen de buenos contratos. Cuando la API y el frontend se entienden bien, el producto se siente más rápido, confiable y profesional.
    `,tags:[`API Design`,`UX`,`Frontend`,`Backend`],publishedAt:`2026-04-22`,readingTime:`5 min`,source:`local`}];function K(e,t=`local`){if(`data`in e){let n=e.data();return{id:e.id,slug:n.slug??e.id,title:n.title??``,excerpt:n.excerpt??``,content:n.content??``,tags:n.tags??[],publishedAt:n.publishedAt??new Date().toISOString(),readingTime:n.readingTime??`4 min`,source:t}}return{...e,source:t}}function q(){let[e,t]=(0,v.useState)(Se.map(e=>K(e))),[n,r]=(0,v.useState)(U),[i,a]=(0,v.useState)(``);return(0,v.useEffect)(()=>{async function e(){if(!U||!G){r(!1);return}try{let e=await te(p(re(G,`posts`),h(`publishedAt`,`desc`)));e.empty||t(e.docs.map(e=>K(e,`firebase`)))}catch(e){console.warn(`No se pudieron cargar los posts desde Firebase. Se usarán los locales.`,e),a(`blog.firebaseFallback`)}finally{r(!1)}}e()},[]),{posts:(0,v.useMemo)(()=>[...e].sort((e,t)=>new Date(t.publishedAt).getTime()-new Date(e.publishedAt).getTime()),[e]),isLoading:n,error:i}}var Ce={en:{1:{title:`.NET 10: New features and performance improvements`,excerpt:`.NET 10 brings meaningful improvements in performance, security and developer tooling. These are the key features worth knowing.`,content:`
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
      `,tags:[`React`,`Full Stack`,`.NET`]},10:{title:`TypeScript for maintainable frontends`,excerpt:`How TypeScript helps build safer, more predictable interfaces that are easier to evolve in React projects.`,content:`
## Why TypeScript matters so much in frontend

In a modern interface, the hard part is not only rendering components. Complexity appears when state, forms, routes, permissions, API responses and UI rules start to grow.

TypeScript turns those decisions into clear contracts. If the backend changes a response, a component receives incomplete props or a flow misses a state, the error appears before production.

## Where I use it intentionally

- Types for API responses and DTOs.
- Explicit props in reusable components.
- Discriminated states for loading, success and error.
- Typed helpers for forms, filters and tables.
- Shared domain models when it makes sense.

## Good practices

It is not about overtyping everything. The key is to type what protects important decisions: external contracts, business states and highly reused components.

## In summary

TypeScript improves frontend work because it forces better contracts. That reduces bugs, makes refactoring safer and helps teams move faster with less uncertainty.
      `,tags:[`TypeScript`,`React`,`Frontend`,`Best practices`]},11:{title:`Python in data and AI solutions`,excerpt:`Why Python remains practical for automation, analytics, AI APIs and data prototypes.`,content:`
## Python as a productivity tool

Python stands out because it helps move quickly from an idea to a working solution. In data, automation and AI, that speed matters.

In modern projects, Python can live as an independent service, a processing script, a data pipeline or a specialized API that complements the main backend.

## Where it adds value

- Data processing and cleaning.
- Automation of repetitive tasks.
- Forecasting and analytics models.
- FastAPI services that expose AI capabilities.
- Integrations with files, databases and external services.

## Technical judgment

Python is flexible, but that flexibility needs structure. Clear modules, validation, tests and input/output contracts matter.

## In summary

Python fits very well when solving data, AI or automation problems without overloading the main system. Used with architecture, it becomes a strong part of full stack solutions.
      `,tags:[`Python`,`FastAPI`,`Data`,`AI`]},12:{title:`Java and Spring Boot for enterprise backends`,excerpt:`A practical look at Java and Spring Boot as a foundation for APIs, microservices and robust enterprise systems.`,content:`
## Java remains strong in enterprise

Java keeps a strong position in enterprise systems because it offers stability, performance, a mature ecosystem and good practices for large projects.

Spring Boot simplifies API and service development while keeping important capabilities such as security, dependency injection, environment configuration and observability.

## What I value in Spring Boot

- Productive and well-structured REST APIs.
- Database and JPA integration.
- Security with Spring Security.
- Strong support for microservices.
- A broad ecosystem for testing, messaging and deployment.

## When I would choose it

Spring Boot fits well when a system needs to grow, integrate with other services and remain stable for years.

## In summary

Java and Spring Boot are a strong combination for enterprise backends. They are not only useful for building quickly, but also for sustaining complex systems with order and consistency.
      `,tags:[`Java`,`Spring Boot`,`Backend`,`Microservices`]},13:{title:`Integrating APIs with modern frontends`,excerpt:`Practical patterns for connecting React frontends with REST APIs in a clear, resilient and maintainable way.`,content:`
## Integration defines much of the experience

A frontend can look good, but if it consumes APIs poorly, the experience becomes slow, fragile or inconsistent.

The integration between frontend and backend should be treated as a contract: what data arrives, when it arrives, how it is validated and what happens when something fails.

## Patterns I use

- Centralized HTTP clients.
- Types for requests and responses.
- Consistent error handling.
- Clear loading, empty and failure states.
- Cache and synchronization with tools like React Query.
- Separation between visual components and data logic.

## Good contract design

Endpoints should return consistent responses. The frontend should avoid depending on accidental backend details and work with clear models.

## In summary

Integrating APIs with modern frontends is not just making fetch calls. It is designing a stable boundary between systems so the UI can grow without becoming fragile.
      `,tags:[`APIs`,`React`,`Frontend`,`React Query`]},14:{title:`Frontend and backend: contracts that improve user experience`,excerpt:`How good contracts between API and UI reduce errors, improve response times and create more reliable products.`,content:`
## The contract is also part of the product

User experience does not depend only on visual design. It also depends on how clear the contract between frontend and backend is.

When an API returns predictable structures, useful errors and data ready for the interface, the frontend can provide a faster and more stable experience.

## Decisions that help

- Consistent success and error responses.
- Pagination, filtering and sorting designed with the UI in mind.
- Actionable validation messages.
- Versioning when the contract changes.
- Minimal but useful documentation.

## Impact on the team

A clear contract reduces discussion, avoids assumptions and allows parallel work. Backend and frontend stop blocking each other over ambiguous details.

## In summary

Good integrations come from good contracts. When the API and frontend understand each other well, the product feels faster, more reliable and more professional.
      `,tags:[`API Design`,`UX`,`Frontend`,`Backend`]}}};function J(e,t=`es`){let n=Ce[t===`en`?`en`:`es`]?.[e.id]??{};return{...e,title:n.title??w(e.title,t),excerpt:n.excerpt??w(e.excerpt,t),content:n.content??w(e.content,t),tags:n.tags??w(e.tags,t)}}function we(){z(`Portafolio | Blog técnico .NET`);let{t:e,i18n:t}=d(),n=t.resolvedLanguage||t.language,{posts:r,isLoading:i,error:a}=q(),[o,s]=f(),c=o.get(`search`)??``,l=o.get(`tag`)??`all`,u=(0,v.useMemo)(()=>r.map(e=>J(e,n)),[r,n]),p=(0,v.useMemo)(()=>[...new Set(u.flatMap(e=>e.tags))].sort((e,t)=>e.localeCompare(t,n)),[u,n]),m=(0,v.useMemo)(()=>u.filter(e=>{let t=!c||[e.title,e.excerpt,e.content,e.tags.join(` `)].join(` `).toLowerCase().includes(c.toLowerCase()),n=l===`all`||e.tags.includes(l);return t&&n}),[u,c,l]);function h(e){let t=new URLSearchParams(o);Object.entries(e).forEach(([e,n])=>{!n||n===`all`?t.delete(e):t.set(e,n)}),s(t)}return(0,y.jsx)(`section`,{className:`section`,children:(0,y.jsxs)(`div`,{className:`container`,children:[(0,y.jsx)(E,{eyebrow:e(`sections.blogEyebrow`),title:e(`blog.title`),description:e(`blog.description`)}),(0,y.jsx)(ye,{search:c,onSearchChange:e=>h({search:e}),selectedTag:l,onTagChange:e=>h({tag:e}),availableTags:p}),a?(0,y.jsx)(`p`,{className:`helper-text`,children:e(a)}):null,i?(0,y.jsx)(be,{label:e(`blog.loading`)}):null,!i&&m.length===0?(0,y.jsx)(V,{title:e(`blog.emptyTitle`),description:e(`blog.emptyDescription`)}):null,(0,y.jsx)(`div`,{className:`card-grid blog-grid`,children:m.map(e=>(0,y.jsx)(ve,{post:e},e.id))})]})})}function Te(e){return e.trim().split(`
`).filter(Boolean).map((e,t)=>e.startsWith(`## `)?(0,y.jsx)(`h2`,{children:e.replace(`## `,``)},`${e}-${t}`):e.startsWith(`- `)?(0,y.jsx)(`li`,{children:e.replace(`- `,``)},`${e}-${t}`):/^\d+\.\s/.test(e)?(0,y.jsx)(`li`,{children:e.replace(/^\d+\.\s/,``)},`${e}-${t}`):(0,y.jsx)(`p`,{children:e},`${e}-${t}`))}function Ee(){let{slug:e}=o(),{t:n,i18n:r}=d(),i=r.resolvedLanguage||r.language,{posts:a,isLoading:s}=q(),c=a.find(t=>_e(t,e)),l=c?J(c,i):null;if(z(l?`Portafolio | ${l.title}`:`Portafolio | Artículo`),s)return(0,y.jsx)(`section`,{className:`section`,children:(0,y.jsx)(`div`,{className:`container`,children:(0,y.jsx)(`p`,{children:n(`blog.loadingArticle`)})})});if(!l)return(0,y.jsx)(`section`,{className:`section`,children:(0,y.jsxs)(`div`,{className:`container`,children:[(0,y.jsx)(V,{title:n(`blog.articleNotFoundTitle`),description:n(`blog.articleNotFoundDescription`)}),(0,y.jsx)(t,{className:`button`,to:`/blog`,children:n(`blog.backToBlog`)})]})});let u=Te(l.content),f=[],p=[];return u.forEach((e,t)=>{if(e.type===`li`){f.push(e);let n=u[t+1];(!n||n.type!==`li`)&&p.push((0,y.jsx)(`ul`,{className:`bullet-list article-list`,children:f.splice(0,f.length)},`list-group-${t}`))}else p.push(e)}),(0,y.jsx)(`section`,{className:`section`,children:(0,y.jsxs)(`div`,{className:`container article-container`,children:[(0,y.jsxs)(t,{className:`text-link`,to:`/blog`,children:[`<`,` `,n(`blog.backToBlog`)]}),(0,y.jsxs)(`article`,{className:`article-card`,children:[(0,y.jsxs)(`p`,{className:`blog-meta`,children:[(0,y.jsx)(`span`,{children:B(l.publishedAt,i)}),(0,y.jsx)(`span`,{children:`•`}),(0,y.jsx)(`span`,{children:l.readingTime})]}),(0,y.jsx)(`h1`,{children:l.title}),(0,y.jsx)(`p`,{className:`article-lead`,children:l.excerpt}),(0,y.jsx)(`div`,{className:`tag-group`,children:l.tags.map(e=>(0,y.jsx)(D,{children:e},e))}),(0,y.jsx)(`div`,{className:`article-content`,children:p})]})]})})}function Y(){z(`Portafolio | Página no encontrada`);let{t:e}=d();return(0,y.jsx)(`section`,{className:`section`,children:(0,y.jsxs)(`div`,{className:`container empty-state`,children:[(0,y.jsx)(`h1`,{children:`404`}),(0,y.jsx)(`p`,{children:e(`notFound.description`)}),(0,y.jsx)(t,{className:`button`,to:`/`,children:e(`notFound.button`)})]})})}var X=`/Portfolio/`.replace(/\/$/,``)||`/`,De=n([{path:`/`,element:(0,y.jsx)(ce,{}),errorElement:(0,y.jsx)(Y,{}),children:[{index:!0,element:(0,y.jsx)(ge,{})},{path:`blog`,element:(0,y.jsx)(we,{})},{path:`blog/:slug`,element:(0,y.jsx)(Ee,{})},{path:`*`,element:(0,y.jsx)(Y,{})}]}],{basename:X}),Z=`portfolio-theme`;function Oe(){if(typeof window>`u`)return`dark`;let e=localStorage.getItem(Z);return e===`light`||e===`dark`?e:`dark`}function ke({children:e}){let[t,n]=(0,v.useState)(Oe);(0,v.useEffect)(()=>{document.documentElement.dataset.theme=t,document.documentElement.style.colorScheme=t,localStorage.setItem(Z,t)},[t]);let r=(0,v.useMemo)(()=>({theme:t,toggleTheme:()=>n(e=>e===`dark`?`light`:`dark`)}),[t]);return(0,y.jsx)(S.Provider,{value:r,children:e})}var Q=localStorage.getItem(`portfolio-language`)||`es`;document.documentElement.lang=Q,ee.use(s).init({resources:{es:{translation:{nav:{home:`Inicio`,blog:`Blog`,language:`Cambiar idioma`,theme:`Cambiar tema`},hero:{eyebrow:`Portafolio de ingeniería full-stack`,profile:`Perfil`,profileTitle:`Backend sólido, frontend moderno y delivery con Azure DevOps`,profileText:`Experiencia construyendo soluciones empresariales con C#, ASP.NET Core, Java, Spring Boot, React, TypeScript, SQL Server y Azure DevOps, con enfoque en arquitectura limpia, mantenibilidad e integración. Certificado AZ-900 y MS-900.`,bullets:[`APIs REST y seguridad con JWT`,`Frontend con React, TypeScript, Vue y Blazor`,`SQL Server, Oracle e integraciones`,`CI/CD, Azure DevOps y fundamentos Microsoft Cloud`],resumeButton:`Descargar CV`,resumeQuestion:`Elige idioma`,resumeSpanish:`Español`,resumeEnglish:`Inglés`},sections:{stackEyebrow:`Stack principal`,stackTitle:`Tecnologías y fortalezas con las que construyo`,stackDescription:`Mi perfil está orientado a desarrollo de software empresarial, desde la capa backend hasta la interfaz y la entrega continua.`,certificationsEyebrow:`Certificaciones`,certificationsTitle:`Credenciales profesionales y formación continua`,certificationsDescription:`Certificaciones Microsoft y formación complementaria que respaldan mi perfil en cloud, Microsoft 365, datos y preventa técnica.`,experienceEyebrow:`Experiencia`,experienceTitle:`Trayectoria en orden cronológico`,experienceDescription:`El recorrido muestra cómo evolucionó mi perfil desde desarrollo y prácticas técnicas hasta software engineering full stack y visión de arquitectura aplicada al negocio.`,projectsEyebrow:`Proyectos`,projectsTitle:`Trabajo representativo en backend, full stack, mobile y DevOps`,projectsDescription:`Casos que refuerzan mi perfil como desarrollador con visión integral de arquitectura, frontend, mobile, datos y delivery.`,blogEyebrow:`Blog técnico`,blogTitle:`Notas sobre .NET, arquitectura y desarrollo full stack`,blogDescription:`Mantén el blog como soporte a tu marca técnica: artículos breves sobre APIs, Clean Architecture, React y DevOps ayudan a reforzar tu perfil frente a reclutadores.`,blogButton:`Ir al blog`},projectLinks:{live:`Ver sitio`,code:`Ver código`,appStore:`App Store`,playStore:`Google Play`},blog:{title:`Contenido pensado para reforzar tu marca como desarrollador .NET`,description:`Publica artículos breves sobre arquitectura, APIs, frontend y prácticas de entrega para mostrar criterio técnico, no solo herramientas.`,search:`Buscar`,searchPlaceholder:`Ej. ASP.NET Core, React, Clean Architecture...`,tag:`Etiqueta`,all:`Todas`,loading:`Cargando artículos...`,emptyTitle:`No hay artículos para este filtro`,emptyDescription:`Cambia la búsqueda o etiqueta para ver más resultados.`,readArticle:`Leer artículo`,backToBlog:`Volver al blog`,loadingArticle:`Cargando artículo...`,articleNotFoundTitle:`Artículo no encontrado`,articleNotFoundDescription:`El contenido que buscas no existe o fue movido.`,sourceLocal:`Local`,firebaseFallback:`No se pudo conectar con Firebase. Se cargaron artículos locales.`},notFound:{description:`La página que buscas no existe.`,button:`Volver al inicio`}}},en:{translation:{nav:{home:`Home`,blog:`Blog`,language:`Change language`,theme:`Change theme`},hero:{eyebrow:`Full-stack engineering portfolio`,profile:`Profile`,profileTitle:`Strong backend, modern frontend and Azure DevOps delivery`,profileText:`Experience building enterprise solutions with C#, ASP.NET Core, Java, Spring Boot, React, TypeScript, SQL Server and Azure DevOps, focused on clean architecture, maintainability and integrations. AZ-900 and MS-900 certified.`,bullets:[`REST APIs and JWT security`,`Frontend with React, TypeScript, Vue and Blazor`,`SQL Server, Oracle and integrations`,`CI/CD, Azure DevOps and Microsoft Cloud fundamentals`],resumeButton:`Download resume`,resumeQuestion:`Choose language`,resumeSpanish:`Spanish`,resumeEnglish:`English`},sections:{stackEyebrow:`Core stack`,stackTitle:`Technologies and strengths I build with`,stackDescription:`My profile focuses on enterprise software development, from backend services to user interfaces and continuous delivery.`,certificationsEyebrow:`Certifications`,certificationsTitle:`Professional credentials and continuous learning`,certificationsDescription:`Microsoft certifications and complementary training that support my profile across cloud, Microsoft 365, data and technical pre-sales.`,experienceEyebrow:`Experience`,experienceTitle:`Career path in chronological order`,experienceDescription:`This timeline shows how my profile evolved from development and technical practice into full stack software engineering with architecture applied to business needs.`,projectsEyebrow:`Projects`,projectsTitle:`Representative work in backend, full stack, mobile and DevOps`,projectsDescription:`Projects that reinforce my profile as a developer with end-to-end vision across architecture, frontend, mobile, data and delivery.`,blogEyebrow:`Technical blog`,blogTitle:`Notes about .NET, architecture and full stack development`,blogDescription:`The blog supports my technical brand with short articles about APIs, Clean Architecture, React and DevOps practices.`,blogButton:`Go to blog`},projectLinks:{live:`View site`,code:`View code`,appStore:`App Store`,playStore:`Google Play`},blog:{title:`Content designed to strengthen your brand as a .NET developer`,description:`Publish short articles about architecture, APIs, frontend and delivery practices to show technical judgment, not just tools.`,search:`Search`,searchPlaceholder:`E.g. ASP.NET Core, React, Clean Architecture...`,tag:`Tag`,all:`All`,loading:`Loading articles...`,emptyTitle:`No articles match this filter`,emptyDescription:`Change the search term or tag to see more results.`,readArticle:`Read article`,backToBlog:`Back to blog`,loadingArticle:`Loading article...`,articleNotFoundTitle:`Article not found`,articleNotFoundDescription:`The content you are looking for does not exist or was moved.`,sourceLocal:`Local`,firebaseFallback:`Could not connect to Firebase. Local articles were loaded.`},notFound:{description:`The page you are looking for does not exist.`,button:`Back home`}}}},lng:Q,fallbackLng:`es`,interpolation:{escapeValue:!1}});var $=document.getElementById(`root`);if(!$)throw Error(`Root element was not found`);ie.createRoot($).render((0,y.jsx)(v.StrictMode,{children:(0,y.jsx)(ke,{children:(0,y.jsx)(a,{router:De})})}));