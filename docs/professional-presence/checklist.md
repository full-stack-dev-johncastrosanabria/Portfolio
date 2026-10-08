# Checklist de presencia profesional

Revisión: 8 de octubre de 2026, Costa Rica. Fuentes integradas: CV EN/ES v6, portafolio, LinkedIn, GitHub, X y confirmaciones del usuario. Los perfiles breves enlazan al portafolio; no necesitan repetir toda la trayectoria.

## Identidad y enfoque

- [x] John Castro Sanabria / John Benjamín Castro Sanabria: nombre público y nombre completo del CV, respectivamente.
- [x] Ingeniero de Software Full-Stack, con enfoque Fintech & Agentic AI; objetivo laboral Software Engineer / AI Engineer, sin atribuir un puesto de AI Engineer no ocupado.
- [x] San José, Costa Rica; correo único `castrosanabriajohn@gmail.com`.
- [x] Experiencia combinada de 4 años; no sumar períodos superpuestos ni afirmar 5 años.
- [x] Stack consistente: C#/.NET, React, Angular, Java, Python y SQL; IA aplicada con LangGraph, RAG, MCP, FastAPI y herramientas de observabilidad.

## Trayectoria y evidencia

| Etapa | Fechas verificadas | Evidencia compartida |
| --- | --- | --- |
| Innovative, Ingeniero de Software | Abril 2026–actualidad | Regresión de 3 días a 6 horas; 22 suites E2E; 11 defectos en 4 releases; APIs LLM/Python |
| Novacomp, SDR / Ingeniero de Preventa | Octubre 2025–marzo 2026 | Aproximadamente 15 reuniones calificadas por mes; Microsoft Cloud y conversaciones técnico-consultivas |
| Innovative, Ingeniero de Software | Octubre 2022–septiembre 2025 | NovaMP, NovaToken, NovaBank y JUPEMA; SQL de 47 s a 3,1 s |
| Innovative, práctica de desarrollo | Mayo–octubre 2022 | App web/móvil para colaboradores, Vue, React Native, .NET Core y SQL Server |

- [x] Fechas y cifra de preventa confirmadas expresamente por el usuario, no elegidas entre fuentes contradictorias.
- [x] CV web y PDF ES/EN reutilizan la experiencia y el perfil consolidado, en orden cronológico inverso.
- [x] LinkedIn conserva las cuatro etapas, medios existentes y fechas confirmadas; descripciones publicadas en ES/EN.
- [x] ULACIT 2023–2024: Licenciatura / Licentiate (post-bachelor), no otro B.S. Universidad Latina 2019–2022: bachillerato.
- [x] AZ-900, MS-900 y SFPC obtenidas; DP-800 identificado como preparación, no credencial obtenida.
- [x] Inglés avanzado, TOEIC 935/990; sin inventar resultados nuevos.

## Plataformas y entregables

- [x] Portafolio: barra de progreso restaurada, fotos autorizadas, proyectos de IA, tecnologías y CV descargables actualizados.
- [x] CV: dos páginas A4 en cada idioma, texto seleccionable, enlaces clicables y versión web `/cv`; ambas páginas/idiomas revisadas visualmente.
- [x] LinkedIn: titular principal y Acerca de actualizados; LangGraph, RAG y MCP añadidos sin borrar aptitudes anteriores (78 aptitudes).
- [x] GitHub: biografía Fintech & Agentic AI, enlace al portafolio y enlaces sociales; README con correo correcto y proyectos destacados. Contacto verificado tras el commit `c1adf0c8d2be7492bc75fb2a9b2f00570a32d70c`.
- [x] X: biografía profesional alineada y enlace al portafolio; publicación fijada de PropFlow conservada. Durante este trabajo no publiqué nuevos posts ni anuncios de empleo; la actividad del usuario se preservó.
- [x] Recomendaciones de publicaciones y destacados disponibles en `audit.md`.
- [ ] Traducción del titular secundario inglés de LinkedIn: el formulario no confirma su guardado. El titular español publicado es correcto; pendiente de preferencia/acción del usuario, sin afirmar que la traducción está publicada.

## Interacción y calidad

- [x] Scroll: RAF, geometría en caché, límites, resize, contenido dinámico y limpieza comprobados con `npm run test:scroll`.
- [x] Carruseles: autoplay 9 segundos, pausa por hover/foco/interacción, transición 800 ms y sin autoplay con movimiento reducido.
- [x] Rueda: una tarjeta por gesto, inercia absorbida y separación mínima de 950 ms; mouse/trackpad, eje horizontal y deltas en píxeles/líneas/páginas cubiertos por `npm run test:carousel`.
- [x] Navegador: un impulso de rueda de 18000 px avanzó una tarjeta, tanto en tecnologías como en credenciales. Autoplay medido: 8998 ms entre avances; transición aproximada: 798 ms.
- [x] Perfil consolidado: fechas, orden, logros, idiomas, enlaces y estado de credenciales comprobados con `npm run test:profile`.
- [x] TypeScript, lint sin advertencias de código y build GitHub Pages correctos. Aviso informativo existente: base Browserslist antigua; no impide el build.
- [x] Verificación automática de estos checks añadida a las PR y a `main`.

## Enlaces

- Portafolio: https://full-stack-dev-johncastrosanabria.github.io/Portfolio/
- CV web: https://full-stack-dev-johncastrosanabria.github.io/Portfolio/cv
- CV español: https://full-stack-dev-johncastrosanabria.github.io/Portfolio/resume/John_Castro_Sanabria_CV_ES.pdf
- CV inglés: https://full-stack-dev-johncastrosanabria.github.io/Portfolio/resume/John_Castro_Sanabria_CV_EN.pdf
- LinkedIn: https://www.linkedin.com/in/john-castro-sanabria/
- GitHub: https://github.com/full-stack-dev-johncastrosanabria
- X: https://x.com/JohnCS97

## Correo por visitas

No activado: GitHub Pages es estático y no debe exponer secretos SMTP/Gmail. Requiere un backend/proveedor aprobado con secretos del servidor, límites de envío, deduplicación y privacidad mínima. No se instaló seguimiento identificable ni se enviaron mensajes de prueba.

## Publicación verificada

- [x] PR #5 fusionada: `8e75d4066a7f52003e74719dc79f07666fce8619`; verificación automática y SonarCloud aprobados.
- [x] Despliegue de GitHub Pages #37799567366 finalizado correctamente; HTML, PDF ES/EN y las cuatro fotos coinciden con el build y los archivos locales mediante SHA-256.
- [x] Producción: rueda de 18000 px avanza una sola tarjeta (566 px) en tecnologías y credenciales; snap restaurado y bucle por teclado comprobado.
- [x] Configuración de ejemplo apunta a GitHub Pages. El dashboard conserva descripción, tecnologías y repositorio; su enlace de demo externa fue retirado conforme a la limpieza solicitada.
- [x] PR #7 fusionada: `1d55f15cb78e68b56528b89136ddd69f0fcb913d`; verify, SonarCloud y despliegue de Pages #37803341976 aprobados. CSS de producción `index-B2kaTrg6.css` coincide con el build local.
- [x] Comparación visual posterior a PR #7 completada en tecnologías: impulso de rueda de 18000 px, desplazamiento de 565,5 px (una tarjeta) y snap `x mandatory`. Los cinco indicadores mantuvieron idénticos `offsetLeft` y `offsetWidth` al cambiar la selección. Captura: `/private/tmp/portfolio-evidence/carousel-final-production.jpg`.

La traducción del titular secundario inglés indicada arriba sigue pendiente; no se incluye como resultado verificado.
