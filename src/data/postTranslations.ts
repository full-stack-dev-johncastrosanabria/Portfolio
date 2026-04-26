export type PostTranslation = {
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
};

export const postTranslations: Partial<Record<'es' | 'en', Record<string, PostTranslation>>> = {
  en: {
    '1': {
      title: '.NET 10: New features and performance improvements',
      excerpt:
        '.NET 10 brings meaningful improvements in performance, security and developer tooling. These are the key features worth knowing.',
      content: `
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
      `,
      tags: ['.NET', 'Performance', 'C#', 'Trends'],
    },
    '2': {
      title: 'Clean Architecture in .NET: Practical guide 2026',
      excerpt:
        'Implement Clean Architecture in your .NET projects. Learn how to structure code for better maintainability and scalability.',
      content: `
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
      `,
      tags: ['Clean Architecture', 'SOLID', 'Design Patterns', '.NET'],
    },
    '3': {
      title: 'Microservices in .NET: Patterns and practices',
      excerpt:
        'Design and deploy scalable microservices with .NET. Learn about communication, resilience and orchestration.',
      content: `
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
      `,
      tags: ['Microservices', 'gRPC', 'Kubernetes', '.NET'],
    },
    '4': {
      title: 'Async/Await: Best practices in .NET',
      excerpt:
        'Master asynchronous programming in .NET. Avoid deadlocks, memory leaks and other common issues.',
      content: `
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
      `,
      tags: ['Async', 'Performance', 'C#', 'Concurrency'],
    },
    '5': {
      title: 'Entity Framework Core 10: Complete guide',
      excerpt:
        'Master Entity Framework Core 10. Learn about optimized queries, lazy loading and ORM best practices.',
      content: `
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
      `,
      tags: ['Entity Framework', 'ORM', 'SQL', '.NET'],
    },
    '6': {
      title: 'Testing in .NET: Unit, integration and E2E',
      excerpt:
        'Build a complete testing strategy. Learn about xUnit, Moq, TestContainers and more.',
      content: `
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
      `,
      tags: ['xUnit', 'Testing', 'Moq', 'Quality Assurance'],
    },
    '7': {
      title: 'How I structure REST APIs in ASP.NET Core',
      excerpt:
        'My approach to organizing a maintainable API with layered separation, clear services and room to evolve.',
      content: `
## What I look for when designing an API

An enterprise API should not only work. It should also be easy to maintain, test and extend when requirements change.

## My approach

1. Separate domain, application and infrastructure.
2. Keep controllers thin.
3. Move business logic into services and use cases.
4. Take care of validation, contracts and error handling.

## Result

This helps the project scale without becoming a codebase that is hard to understand.
      `,
      tags: ['ASP.NET Core', 'REST API', 'Architecture'],
    },
    '8': {
      title: 'Clean Architecture in real .NET projects',
      excerpt:
        'Beyond theory: how it brings order, maintainability and clarity when a system starts to grow.',
      content: `
## Why I use it

When a solution starts to grow, mixing data access, business rules and framework details makes everything harder.

## Practical benefits

- Isolates business rules.
- Makes testing and change easier.
- Reduces coupling with infrastructure.
- Clarifies the responsibility of each layer.

## Where it helps most

Especially in systems with integrations, complex rules and multiple deployment environments.
      `,
      tags: ['Clean Architecture', '.NET', 'Best practices'],
    },
    '9': {
      title: 'React as the frontend layer for full stack .NET solutions',
      excerpt:
        'Why React fits well as a modern interface when the backend lives in ASP.NET Core.',
      content: `
## A practical combination

ASP.NET Core enables robust APIs, while React provides flexibility for fast and modular interfaces.

## What I value in this combination

- Clear separation between frontend and backend.
- Scalability for teams and modules.
- Better user experience.
- Easy API consumption and UI evolution.

## In summary

It is a very useful combination for building modern enterprise products without losing technical order.
      `,
      tags: ['React', 'Full Stack', '.NET'],
    },
  },
};
