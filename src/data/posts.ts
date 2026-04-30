import type { BlogPost } from '@/types';

export const mockPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'net-10-features-2026',
    title: '.NET 10: Nuevas características y mejoras de performance',
    excerpt:
      '.NET 10 trae mejoras significativas en performance, seguridad y herramientas de desarrollo. Descubre las características clave que debes conocer.',
    content: `
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
    `,
    tags: ['.NET', 'Performance', 'C#', 'Tendencias'],
    publishedAt: '2026-04-20',
    readingTime: '8 min',
    source: 'local',
  },
  {
    id: '2',
    slug: 'clean-architecture-2026',
    title: 'Clean Architecture en .NET: Guía práctica 2026',
    excerpt:
      'Implementa Clean Architecture en tus proyectos .NET. Aprende cómo estructurar tu código para máxima mantenibilidad y escalabilidad.',
    content: `
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
    `,
    tags: ['Clean Architecture', 'SOLID', 'Design Patterns', '.NET'],
    publishedAt: '2026-04-15',
    readingTime: '12 min',
    source: 'local',
  },
  {
    id: '3',
    slug: 'microservices-net-2026',
    title: 'Microservicios en .NET: Patrones y prácticas',
    excerpt:
      'Diseña y despliega microservicios escalables con .NET. Aprende sobre comunicación, resiliencia y orquestación.',
    content: `
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
    `,
    tags: ['Microservices', 'gRPC', 'Kubernetes', '.NET'],
    publishedAt: '2026-04-10',
    readingTime: '10 min',
    source: 'local',
  },
  {
    id: '4',
    slug: 'async-await-best-practices',
    title: 'Async/Await: Mejores prácticas en .NET',
    excerpt:
      'Domina la programación asíncrona en .NET. Evita deadlocks, memory leaks y otros problemas comunes.',
    content: `
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
    `,
    tags: ['Async', 'Performance', 'C#', 'Concurrency'],
    publishedAt: '2026-04-05',
    readingTime: '9 min',
    source: 'local',
  },
  {
    id: '5',
    slug: 'entity-framework-core-2026',
    title: 'Entity Framework Core 10: Guía completa',
    excerpt:
      'Domina Entity Framework Core 10. Aprende sobre queries optimizadas, lazy loading y mejores prácticas de ORM.',
    content: `
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
    `,
    tags: ['Entity Framework', 'ORM', 'SQL', '.NET'],
    publishedAt: '2026-03-30',
    readingTime: '11 min',
    source: 'local',
  },
  {
    id: '6',
    slug: 'testing-net-2026',
    title: 'Testing en .NET: Unit, Integration y E2E',
    excerpt:
      'Implementa una estrategia de testing completa. Aprende sobre xUnit, Moq, TestContainers y más.',
    content: `
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
    `,
    tags: ['xUnit', 'Testing', 'Moq', 'Quality Assurance'],
    publishedAt: '2026-03-25',
    readingTime: '10 min',
    source: 'local',
  },
  {
    id: '7',
    slug: 'como-estructuro-apis-rest-en-aspnet-core',
    title: 'Cómo estructuro APIs REST en ASP.NET Core',
    excerpt:
      'Mi enfoque para organizar una API mantenible usando separación por capas, servicios claros y foco en evolución.',
    content: `
## Qué busco al diseñar una API

Una API empresarial no solo debe funcionar. También debe ser fácil de mantener, probar y extender cuando cambian los requerimientos.

## Mi enfoque

1. Separar dominio, aplicación e infraestructura.
2. Mantener controladores delgados.
3. Llevar la lógica de negocio a servicios y casos de uso.
4. Cuidar validaciones, contratos y manejo de errores.

## Resultado

Esto facilita que el proyecto escale sin convertirse en una base de código difícil de entender.
    `,
    tags: ['ASP.NET Core', 'REST API', 'Arquitectura'],
    publishedAt: '2026-04-01',
    readingTime: '4 min',
    source: 'local',
  },
  {
    id: '8',
    slug: 'clean-architecture-en-proyectos-net-reales',
    title: 'Clean Architecture en proyectos .NET reales',
    excerpt:
      'Más que teoría: cómo aporta orden, mantenibilidad y claridad cuando el sistema empieza a crecer.',
    content: `
## Por qué la uso

Cuando una solución empieza a crecer, mezclar acceso a datos, reglas de negocio y detalles de framework complica todo.

## Beneficios prácticos

- Aísla reglas de negocio.
- Facilita pruebas y cambios.
- Reduce acoplamiento con infraestructura.
- Hace más clara la responsabilidad de cada capa.

## Dónde aporta más

Especialmente en sistemas con integraciones, reglas complejas y varios ambientes de despliegue.
    `,
    tags: ['Clean Architecture', '.NET', 'Buenas prácticas'],
    publishedAt: '2026-03-22',
    readingTime: '5 min',
    source: 'local',
  },
  {
    id: '9',
    slug: 'react-como-capa-frontend-para-soluciones-full-stack-net',
    title: 'React como capa frontend para soluciones full stack .NET',
    excerpt:
      'Por qué React encaja bien como interfaz moderna cuando el backend vive en ASP.NET Core.',
    content: `
## Una combinación práctica

ASP.NET Core permite construir APIs robustas y React aporta flexibilidad para crear interfaces rápidas y modulares.

## Qué valoro de esta combinación

- Separación clara entre frontend y backend.
- Escalabilidad para equipos y módulos.
- Mejor experiencia de usuario.
- Facilidad para consumir APIs y evolucionar la UI.

## En resumen

Es una combinación muy útil para construir productos empresariales modernos sin perder orden técnico.
    `,
    tags: ['React', 'Full Stack', '.NET'],
    publishedAt: '2026-03-10',
    readingTime: '4 min',
    source: 'local',
  },
  {
    id: '10',
    slug: 'typescript-para-frontends-mantenibles',
    title: 'TypeScript para frontends mantenibles',
    excerpt:
      'Cómo TypeScript ayuda a construir interfaces más seguras, predecibles y fáciles de evolucionar en proyectos React.',
    content: `
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
    `,
    tags: ['TypeScript', 'React', 'Frontend', 'Buenas prácticas'],
    publishedAt: '2026-04-30',
    readingTime: '5 min',
    source: 'local',
  },
  {
    id: '11',
    slug: 'python-en-soluciones-de-datos-e-ia',
    title: 'Python en soluciones de datos e IA',
    excerpt:
      'Por qué Python sigue siendo una herramienta práctica para automatización, analítica, APIs de IA y prototipos de datos.',
    content: `
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
    `,
    tags: ['Python', 'FastAPI', 'Data', 'AI'],
    publishedAt: '2026-04-28',
    readingTime: '5 min',
    source: 'local',
  },
  {
    id: '12',
    slug: 'java-y-spring-boot-para-backends-empresariales',
    title: 'Java y Spring Boot para backends empresariales',
    excerpt:
      'Una mirada práctica a Java y Spring Boot como base para construir APIs, microservicios y sistemas empresariales robustos.',
    content: `
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
    `,
    tags: ['Java', 'Spring Boot', 'Backend', 'Microservicios'],
    publishedAt: '2026-04-26',
    readingTime: '5 min',
    source: 'local',
  },
  {
    id: '13',
    slug: 'integracion-de-apis-con-frontends-modernos',
    title: 'Integración de APIs con frontends modernos',
    excerpt:
      'Patrones prácticos para conectar frontends React con APIs REST de forma clara, resiliente y mantenible.',
    content: `
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
    `,
    tags: ['APIs', 'React', 'Frontend', 'React Query'],
    publishedAt: '2026-04-24',
    readingTime: '6 min',
    source: 'local',
  },
  {
    id: '14',
    slug: 'frontend-backend-contratos-y-experiencia-de-usuario',
    title: 'Frontend y backend: contratos que mejoran la experiencia de usuario',
    excerpt:
      'Cómo buenos contratos entre API y UI ayudan a reducir errores, mejorar tiempos de respuesta y construir productos más confiables.',
    content: `
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
    `,
    tags: ['API Design', 'UX', 'Frontend', 'Backend'],
    publishedAt: '2026-04-22',
    readingTime: '5 min',
    source: 'local',
  },
];
