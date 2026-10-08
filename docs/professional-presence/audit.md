# Perfil profesional consolidado

Fecha de revisión: 8 de octubre de 2026 (Costa Rica).

## Propuesta de valor

Ingeniero de Software Full-Stack con experiencia en fintech regulado e IA aplicada. Combina sistemas financieros confiables, arquitectura limpia, SQL, pruebas automatizadas y entrega verificable con proyectos multiagente y capacidad de traducir necesidades de negocio en soluciones Microsoft Cloud.

Objetivos: Ingeniero de Software / Ingeniero de IA. No se convierte el objetivo laboral en un cargo ya ocupado.

La versión bilingüe reutilizable está en `src/data/professionalProfile.ts`. La experiencia se comparte con `src/data/experience.ts`; los PDFs se generan desde los mismos datos que la versión web `/cv`.

## Fuentes integradas

| Fuente | Aporte | Límites |
| --- | --- | --- |
| CV EN/ES v6, septiembre/octubre de 2026 | Regresión de 3 días a 6 horas; 22 suites E2E; 11 defectos en 4 releases; SQL de 47 s a 3,1 s; educación; TOEIC 935/990; pruebas de proyectos | Las diferencias de fechas y reuniones se resolvieron con confirmación del usuario |
| Portafolio existente | Productos fintech, enlaces oficiales, NovaToken OTP 60 s, NovaBank, JUPEMA, experiencia móvil, credenciales e identidad visual | Texto de experiencia y CV descargable más antiguos |
| LinkedIn propio, perfil y actividad visible | Experiencia con APIs LLM/Python, modalidad remota, AI NOVA colaborativo con LangGraph/RAG/MCP/Langfuse/Ollama/FastAPI/React, recomendaciones, competencias y contexto comercial | No prueba métricas nuevas de impacto de IA ni cobertura de tests del 100% |
| GitHub público | Docker Coding Agent, BusinessAI Analytics, proyectos full-stack, recursos de aprendizaje y límites de las demos | No se exponen repositorios privados ni se presenta una demo frontend como backend productivo |
| X propio, @JohnCS97 | Distribución de proyectos, demos y aprendizajes; publicación fijada de PropFlow | No se anuncian nuevos puestos ni se publican posts durante esta actualización |
| Imágenes aportadas | Contexto profesional, formación y publicación corporativa sobre NovaMP, NovaToken y NovaExpediente | No se identifican personas ni se infieren fechas, cargos o logros personales a partir de las fotos |

CV v6 consultado en `Mis_Documentos/Búsqueda_Empleo/CV_Optimized/John_Castro_Sanabria_CV_EN_v6.pdf` y su versión ES. Se contrastó también con los PDFs anteriores de `Desktop/util/CVs/Ultimo/Last version/files`.

## Logros seleccionados

- Regresión: 3 días a 6 horas con 22 suites E2E de rutas críticas, Playwright/Selenium y pruebas paralelas xUnit/NUnit.
- Calidad: 11 defectos detectados antes de producción en 4 releases consecutivos de una plataforma de pagos 24/7.
- SQL: consulta de reportería de 47 s a 3,1 s mediante planes de ejecución, índices con INCLUDE y lógica basada en conjuntos.
- Fintech: módulos de configuración y reportería para NovaMP SINPE, más de 10 entidades; NovaToken 2FA; transferencias/core bancario en NovaBank; expedientes y reportería JUPEMA.
- IA: AI NOVA como proyecto colaborativo, Docker Coding Agent como proyecto público acotado y BusinessAI Analytics como integración aplicada a datos de negocio.

## Diferencias resueltas con el usuario

| Dato | CV v6 / portafolio | LinkedIn actual | Tratamiento |
| --- | --- | --- | --- |
| Preventa | Octubre 2025–febrero 2026 | Febrero 2025–marzo 2026 | Usuario confirmó octubre 2025–marzo 2026 el 7 de octubre de 2026 |
| Práctica | Mayo–agosto 2022 | Mayo–octubre 2022 | Usuario confirmó mayo–octubre 2022 |
| Reuniones calificadas | Aproximadamente 15/mes | Aproximadamente 10/mes | Usuario confirmó 15/mes |
| Licenciatura ULACIT | Licenciatura, post-bachelor | Encabezado anterior decía B.S.; descripción decía Licenciatura | Corregido a Licenciatura / Licentiate (post-bachelor), sin cambiar fechas ni documentos |

## Decisiones editoriales

- 4 años de experiencia combinada; no sumar períodos superpuestos ni redondear a 5.
- Fintech/Agentic AI describe el enfoque, no un cargo oficial ni experiencia empresarial de IA a escala no demostrada.
- AZ-900, MS-900 y SFPC como credenciales obtenidas. DP-800 permanece en preparación.
- No replicar el 100% de cobertura de un post antiguo: el CV cita cantidades de pruebas respaldadas por v6.
- Correo único: `castrosanabriajohn@gmail.com`. GitHub README corregido y verificado en commit `c1adf0c8d2be7492bc75fb2a9b2f00570a32d70c`.
- El usuario autorizó incluir las cuatro fotos en el portafolio. Se usan captions neutrales y WebP optimizado; no se publican anuncios de nuevos puestos ni posts durante las ediciones.
- Carruseles: autoplay de 4,5 a 9 segundos y transición controlada de 800 ms; interacción manual cancela la animación pendiente, y movimiento reducido mantiene avance instantáneo sin autoplay.
- Rueda: un gesto avanza como máximo una tarjeta; se absorbe la inercia y se aplica una separación mínima de 950 ms entre avances. Se normalizan mouse/trackpad, eje horizontal y deltas en líneas/páginas. El zoom con Ctrl no se intercepta.
- X: biografía alineada con Full-stack Software Engineer, Fintech & Agentic AI y tecnologías respaldadas. El enlace principal dirige al portafolio; se conserva la publicación fijada de PropFlow y no se publican nuevos posts.

## Visibilidad recomendada

1. Destacar la demo de BusinessAI Analytics y el repositorio Docker Coding Agent junto al CV actualizado, manteniendo recomendaciones profesionales relevantes.
2. Publicación sobre QA: contexto, cambio de 3 días a 6 horas, 22 suites, límites y aprendizajes; sin datos de clientes ni material interno.
3. Publicación sobre Agentic AI: diagrama del flujo, guardrails, observabilidad y verificación; enlazar un repositorio público y distinguir prototipo de producción.
4. Publicación de trayectoria con las fotos de eventos: identificar evento/fecha únicamente tras confirmación y usar una reflexión técnica concreta. La foto de graduación puede acompañar formación, no justificar un título o fecha distinta.
5. X: compartir una o dos notas técnicas por semana, cada una con una decisión, evidencia visual y enlace público. Alternar una demo de producto, un aprendizaje de QA/SQL y un resultado de Agentic AI con sus límites. Mantener PropFlow fijado hasta disponer de un caso más representativo; enlazar el CV desde el portafolio. No convertir el feed en una lista de tecnologías ni publicar información interna de clientes.

## Correo por visitas

No activado. El sitio es estático en GitHub Pages: no debe contener credenciales SMTP/Gmail ni tokens de un proveedor de correo. Una implementación segura requiere un backend con secretos del servidor, validación de origen, deduplicación y límites de envío para evitar spam/costos por bots. Debe enviar un evento mínimo, sin IP, agente de usuario ni información identificable del visitante. No se promete conocer a todos los visitantes ni se envía un correo de prueba no solicitado.

## Regeneración de CV

`npm run generate:resumes` requiere Python 3 con ReportLab. Puede usarse `PYTHON_BIN` para seleccionar un intérprete que ya lo incluya. Fuentes Arial de macOS o Vera distribuida con ReportLab como alternativa; el código no copia fuentes del sistema al repositorio. PDFs A4 de dos páginas, texto seleccionable y enlaces clicables.

## Estado de verificación

- Pruebas de scroll: coalescencia RAF, lectura de layout en caché, límites, resize, contenido dinámico, página corta y limpieza.
- TypeScript y build GitHub Pages ejecutados. Prueba de rueda: ráfagas, inercia, cooldown, cambio de dirección, trackpad, eje horizontal y modos de delta.
- CV web observado en escritorio; home observado a 390 px sin desbordamiento. Barra visible con `prefers-reduced-motion: reduce`, escala 0 arriba y 1 al final del CV.
- Ambas páginas de ambos PDFs renderizadas y revisadas: dos páginas A4, sin cortes, correo, fechas y enlaces actualizados.
- LinkedIn: titular principal y Acerca de ES/EN actualizados; las cuatro etapas de experiencia ES/EN y fechas confirmadas. Aptitudes nuevas verificadas: LangGraph, Retrieval-Augmented Generation (RAG) y Model Context Protocol (MCP); 78 aptitudes sin borrar las anteriores. Educación ULACIT corregida. El formulario de titular inglés no confirma el guardado: no se afirma que la traducción secundaria esté publicada.
- Carruseles en navegador: intervalo entre avances medido en 8998 ms, transición aproximada de 798 ms. Un impulso de rueda de 18000 px avanzó una tarjeta (565,5 px en la prueba de escritorio), no 18000 px.
- Portafolio publicado: PR #5, #6 y #7 fusionadas; último despliegue de Pages verificado #37803341976. HTML, CSS, PDF ES/EN y fotos contrastados con los artefactos locales; el checklist conserva la evidencia de cada revisión.
- Revisión visual posterior a PR #7: un impulso de rueda de 18000 px avanzó 565,5 px en tecnologías (una tarjeta); snap `x mandatory` restaurado. Los cinco indicadores conservaron exactamente su ancho y posición al cambiar la selección; la animación usa `transform`, sin suprimir el aviso de diseño.
- Único pendiente de publicación externa: confirmar manualmente el titular secundario inglés en LinkedIn. También se probó entrada con teclado nativo, pero Guardar no cerró el formulario ni mostró confirmación; no se presenta como cambio publicado. El titular principal, Acerca de, experiencia y aptitudes ya están verificados.
