# Portafolio Full Stack - John Castro Sanabria

Portafolio profesional moderno construido con React 19, Vite y mejores prácticas de 2026. Optimizado para Netlify con arquitectura limpia, SEO mejorado y performance de clase mundial.

## 📑 Tabla de Contenidos

- [Características](#características)
- [Stack Tecnológico](#stack-tecnológico)
- [Instalación](#instalación)
- [Desarrollo](#desarrollo)
- [Build y Despliegue](#build-y-despliegue)
- [Personalización](#personalización)
- [Mejores Prácticas](#mejores-prácticas)
- [Despliegue en Netlify](#despliegue-en-netlify)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Troubleshooting](#troubleshooting)
- [Recursos](#recursos)

---

## 🎯 Características

- **React 19** con arquitectura moderna y hooks avanzados
- **Vite** para build ultra-rápido y HMR instantáneo
- **Tailwind CSS** para estilos escalables y mantenibles
- **React Router v7** para navegación SPA fluida
- **SEO Optimizado** con meta tags, structured data y Open Graph
- **Performance** optimizado para Core Web Vitals
- **Responsive Design** mobile-first
- **Blog Técnico** con artículos sobre .NET, React y arquitectura
- **Proyectos Destacados** con enlaces a repositorios y demos en vivo
- **Firebase Integration** (opcional) para gestión de contenido dinámico
- **12 Proyectos Reales** con tecnologías variadas
- **9 Artículos de Blog** sobre tendencias .NET 2026

---

## 🚀 Stack Tecnológico

### Frontend
- React 19.0.0
- React Router DOM 7.0.0
- Tailwind CSS 3.4.14
- Vite 8.0.0

### Backend (Opcional)
- Firebase 11.8.1

### DevTools
- ESLint 9.19.0
- TypeScript 5.6.3
- PostCSS 8.4.40
- Autoprefixer 10.4.20

---

## 📋 Requisitos

- Node.js 20+
- Yarn 1.22.22 (o npm)

---

## 🛠️ Instalación

```bash
# Instalar dependencias
yarn install

# Configurar variables de entorno (opcional)
cp .env.example .env
```

---

## 🏃 Desarrollo

```bash
# Iniciar servidor de desarrollo
yarn dev

# Ejecutar linter
yarn lint

# Verificar tipos (TypeScript)
yarn type-check
```

El servidor estará disponible en `http://localhost:5173`

---

## 📦 Build y Despliegue

### Build para Producción

```bash
# Crear build optimizado
yarn build

# Previsualizar build
yarn preview
```

### Despliegue en Netlify

Este proyecto está configurado para desplegar automáticamente en Netlify:

1. Conecta tu repositorio a Netlify
2. Netlify detectará automáticamente `netlify.toml`
3. El build se ejecutará con `yarn build`
4. Los archivos en `dist/` se servirán

#### Configuración de Netlify

- **Build command**: `yarn build`
- **Publish directory**: `dist`
- **Node version**: 20

#### Variables de Entorno en Netlify

Ve a "Site settings" > "Build & deploy" > "Environment" y agrega:

```
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
VITE_FIREBASE_MEASUREMENT_ID=tu_measurement_id
VITE_SITE_URL=https://tu-dominio.netlify.app
VITE_ENVIRONMENT=production
```

#### Despliegue Manual

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Autenticarse
netlify login

# Desplegar
netlify deploy --prod --dir=dist
```

---

## 📝 Personalización

### Información Personal

Edita `src/config/site.js`:

```javascript
export const siteConfig = {
  author: 'Tu Nombre',
  role: 'Tu Rol',
  email: 'tu@email.com',
  headline: 'Tu titular',
  description: 'Tu descripción',
  socialLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/tu-usuario',
      icon: 'github',
    },
    // ...
  ],
};
```

### Proyectos

Edita `src/data/projects.js`:

```javascript
{
  id: 'proyecto-id',
  title: 'Nombre del Proyecto',
  category: 'Full Stack',
  description: 'Descripción breve',
  highlights: ['Feature 1', 'Feature 2'],
  technologies: ['React', '.NET', 'SQL Server'],
  link: 'https://github.com/...',
  liveDemo: 'https://demo.netlify.app', // Opcional
  featured: true,
}
```

### Blog

Edita `src/data/posts.js`:

```javascript
{
  id: '1',
  slug: 'titulo-articulo',
  title: 'Título del Artículo',
  excerpt: 'Resumen breve',
  content: '# Contenido en Markdown',
  tags: ['Tag1', 'Tag2'],
  publishedAt: '2026-04-20',
  readingTime: '8 min',
  source: 'local',
}
```

### Experiencia

Edita `src/data/experience.js` para agregar tu experiencia laboral.

### Skills

Edita `src/data/skills.js` para listar tus habilidades técnicas.

### Temas y Estilos

Edita `tailwind.config.js` para cambiar colores, fuentes y otros estilos.

---

## 🏗️ Mejores Prácticas

### Arquitectura

El proyecto está organizado en capas claras:

- **Pages**: Componentes de página (nivel superior)
- **Components**: Componentes reutilizables
- **Hooks**: Lógica personalizada de React
- **Data**: Datos estáticos y configuración
- **Lib**: Utilidades y funciones auxiliares
- **Config**: Configuración global

### React Best Practices 2026

#### 1. Componentes Funcionales

```javascript
// ✅ BUENO
export function MyComponent() {
  const [state, setState] = useState(null);
  return <div>{state}</div>;
}
```

#### 2. Hooks Personalizados

```javascript
// ✅ BUENO
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
```

#### 3. Lazy Loading

```javascript
import { lazy, Suspense } from 'react';

const BlogPage = lazy(() => import('@/pages/BlogPage'));

export function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BlogPage />
    </Suspense>
  );
}
```

#### 4. Keys en Listas

```javascript
// ✅ BUENO
{items.map(item => (
  <div key={item.id}>{item.name}</div>
))}
```

### Tailwind CSS

#### Utility-first

```javascript
// ✅ BUENO
<div className="bg-primary-500 text-white p-4 rounded-lg md:p-6">
  Contenido
</div>
```

#### Responsive Design

```javascript
// Mobile-first
<div className="
  text-sm md:text-base lg:text-lg
  p-4 md:p-6 lg:p-8
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
">
  Contenido
</div>
```

### SEO

#### Meta Tags

```javascript
import { useDocumentTitle, useMetaTags, useStructuredData } from '@/hooks/useDocumentTitle';

export function BlogPost({ post }) {
  useDocumentTitle(post.title);
  useMetaTags({
    description: post.excerpt,
    image: post.image,
    url: `https://portafolio.netlify.app/blog/${post.slug}`,
  });
  useStructuredData({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
  });

  return <article>{post.content}</article>;
}
```

### Performance

#### Code Splitting

Vite automáticamente divide el código. Para control manual:

```javascript
const routes = [
  {
    path: '/blog',
    component: lazy(() => import('@/pages/BlogPage')),
  },
];
```

#### Image Optimization

```javascript
// ✅ BUENO
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Descripción" loading="lazy" />
</picture>
```

### Seguridad

#### Validación de Entrada

```javascript
import { isValidEmail } from '@/lib/utils';

function ContactForm() {
  const [email, setEmail] = useState('');
  const isValid = isValidEmail(email);
  
  return (
    <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      disabled={!isValid}
    />
  );
}
```

#### Sanitización

```javascript
// ✅ BUENO - Usa textContent
element.textContent = userInput;

// ❌ MALO - XSS vulnerability
element.innerHTML = userInput;
```

---

## 🔍 SEO

El proyecto incluye:

- Meta tags dinámicos
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)
- Sitemap automático
- Robots.txt

---

## 📊 Performance

- **Lazy loading** de componentes
- **Code splitting** automático con Vite
- **Image optimization** con formatos modernos
- **CSS purging** con Tailwind
- **Minificación** automática en build
- **Caching headers** configurados en Netlify

---

## 🔐 Seguridad

- Headers de seguridad configurados en `netlify.toml`
- No hay exposición de secretos
- HTTPS forzado en Netlify
- CSP headers recomendados

---

## 📱 Responsive Design

El proyecto es completamente responsive:

- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large: 1280px+

---

## 📚 Estructura del Proyecto

```
src/
├── app/
│   └── router.jsx          # Configuración de rutas
├── components/
│   ├── blog/               # Componentes del blog
│   ├── common/             # Componentes reutilizables
│   ├── experience/         # Componentes de experiencia
│   ├── home/               # Componentes del home
│   ├── layout/             # Layout principal
│   └── projects/           # Componentes de proyectos
├── config/
│   └── site.js             # Configuración del sitio
├── data/
│   ├── experience.js       # Datos de experiencia
│   ├── posts.js            # Artículos del blog
│   ├── projects.js         # Proyectos destacados
│   └── skills.js           # Habilidades técnicas
├── hooks/
│   ├── useBlogPosts.js     # Hook para posts
│   └── useDocumentTitle.js # Hooks de SEO
├── lib/
│   ├── firebase.js         # Configuración Firebase
│   ├── seo.js              # Utilidades SEO
│   └── utils.js            # Utilidades generales
├── pages/
│   ├── BlogPage.jsx        # Página del blog
│   ├── HomePage.jsx        # Página de inicio
│   ├── NotFoundPage.jsx    # Página 404
│   └── PostDetailPage.jsx  # Detalle de artículo
├── styles/
│   └── global.css          # Estilos globales
└── main.jsx                # Punto de entrada
```

---

## 🆘 Troubleshooting

### Error: "Cannot find module 'tailwindcss'"

```bash
yarn install
```

### Error: "Port 5173 already in use"

```bash
yarn dev -- --port 3000
```

### Build falla

```bash
rm -rf node_modules dist
yarn install
yarn build
```

### Cambios no se reflejan

```bash
# Reinicia el servidor
# Presiona Ctrl+C en la terminal
yarn dev
```

### Rutas no funcionan en Netlify

Ya está configurado en `netlify.toml`:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Variables de entorno no funcionan

1. Verifica que estén en "Build & deploy" > "Environment"
2. Asegúrate de que usan el prefijo `VITE_`
3. Redeploy después de agregar variables

---

## 📈 Monitoreo

### Netlify Analytics

1. Ve a "Analytics" en tu sitio
2. Habilita "Netlify Analytics"
3. Visualiza visitantes, páginas más visitadas, fuentes de tráfico

### Core Web Vitals

Monitorea:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

### Lighthouse

Ejecuta auditorías automáticas en Chrome DevTools:
- Performance > 90
- Accessibility > 90
- Best Practices > 90
- SEO > 90

---

## 🎓 Tendencias .NET 2026

El blog incluye artículos sobre:

1. **.NET 10** - Nuevas características y mejoras de performance
2. **Clean Architecture** - Guía práctica para 2026
3. **Microservicios** - Patrones y prácticas
4. **Async/Await** - Mejores prácticas en .NET
5. **Entity Framework Core 10** - Guía completa
6. **Testing** - Unit, Integration y E2E
7. **APIs REST** - Cómo estructuro en ASP.NET Core
8. **Clean Architecture** - Proyectos reales
9. **React + .NET** - Full Stack

---

## 📊 Proyectos Incluidos

### Full Stack
- **Reactivities** - Red social con .NET 8 y React 19
- **eTickets** - Plataforma cinematográfica
- **Criadero Pastores** - E-commerce

### Backend
- **Interview Clean API** - Arquitectura limpia
- **Spring Demo** - Backend Java
- **SmartGym API** - API PHP
- **WebAPI Matrícula** - Sistema universitario .NET
- **BasicBusinessApp** - Clean Architecture .NET
- **WCF Tarjetas** - Servicio WCF

### Frontend
- **PropFlow** - Landing page inmobiliaria
- **Admin Dashboard** - Dashboard React
- **Vue Project** - Frontend Vue 3

### Mobile
- **MealsToGo** - Uber Eats clone
- **Expo Amplify Demo** - Mobile con AWS

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

---

## 👤 Autor

**John Castro Sanabria**

- GitHub: [@full-stack-dev-johncastrosanabria](https://github.com/full-stack-dev-johncastrosanabria)
- LinkedIn: [John Castro Sanabria](https://www.linkedin.com/in/john-castro-sanabria/)
- Email: castrosanabriajohn2@gmail.com

---

## 🙏 Agradecimientos

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)
- [Netlify](https://netlify.com)

---

## 📞 Soporte

Si tienes preguntas o necesitas ayuda, abre un issue en el repositorio.

---

## ✅ Checklist Rápido

Antes de desplegar:

- [ ] `yarn install` ejecutado
- [ ] `yarn dev` funciona
- [ ] `yarn build` exitoso
- [ ] `yarn lint` sin errores
- [ ] Todas las páginas funcionan
- [ ] Links internos funcionan
- [ ] Mobile responsive funciona
- [ ] Meta tags configurados
- [ ] Imágenes optimizadas
- [ ] Performance > 90 (Lighthouse)
- [ ] Variables de entorno configuradas
- [ ] Repositorio en GitHub
- [ ] Netlify conectado
- [ ] Deploy exitoso
- [ ] Sitio en vivo

---

Hecho con ❤️ por John Castro Sanabria

**Última actualización**: Abril 2026  
**Versión**: 2.0.0  
**Estado**: ✅ Listo para producción
