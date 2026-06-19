export const personalInfo = {
  name: "Emmanuel Mathew",
  title: ".NET Developer",
  email: "hello@emmanuelmathew.dev",
  linkedin: "https://www.linkedin.com/in/emmanuel-kv-m",
  github: "https://github.com/DotNetTitan",
  experienceStart: new Date("2019-05-01"),
  bio: "A result driven .NET Developer with over {years} years of experience in designing, developing, and deploying scalable, and secure applications using .NET and Azure. Proficient in building RESTful APIs and cloud based architectures, with a strong focus on best practices such as Clean Architecture, SOLID principles, and DevOps integration.",
};

export const experience = [
  {
    company: "Xilligence",
    role: "Senior Software Engineer",
    period: "Feb 2021 — Present",
    location: "Trivandrum",
    highlights: [
      "Built and deployed high-performance RESTful APIs in .NET 6+, EF Core, MS SQL & Azure.",
      "Enhanced security with JWT authentication and Azure Key Vault for protecting sensitive information.",
      "Designed event-driven architectures using Azure Service Bus for effective async operations.",
      "Leveraged caching, asynchronous programming and parallel processing to improve API responsiveness and reduce latency under heavy loads.",
      "Established CI/CD pipelines via Azure DevOps, cutting deployment times by 90% and ensuring automated releases.",
      "Containerized and deployed applications using Docker with Azure Container Apps and Azure Container Registry.",
      "Enhanced observability with Azure Log Analytics and Application Insights, leading to improvement in incident detection.",
      "Mentored junior developers in Clean Architecture and SOLID principles.",
      "Leveraged AI-assisted development tools (Cursor, GitHub Copilot) to accelerate coding workflows.",
      "Built custom MCP tools to integrate AI capabilities directly into development pipelines and internal workflows.",
    ],
  },
  {
    company: "Progressive Cybernetics",
    role: "Software Engineer",
    period: "May 2019 — Feb 2021",
    location: "Ernakulam",
    highlights: [
      "Developed and deployed full-stack web applications with ASP.NET MVC, EF Core, and MS SQL Server.",
      "Designed and implemented RESTful APIs, integrated with third-party services for secure, multi-platform data access.",
      "Created data rich dashboards and notification systems for stakeholders using jQuery, AJAX, and Bootstrap.",
    ],
  },
];

export const skills = [
  {
    category: "Languages",
    icon: "Code2",
    items: ["C#", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "AI & Productivity",
    icon: "Sparkles",
    items: ["Cursor", "GitHub Copilot", "MCP server development"],
  },
  {
    category: "Frameworks",
    icon: "Layers",
    items: [".NET", "ASP.NET Core", "EF Core", "Next.js", "Tailwind CSS", "shadcn/ui", "PostgreSQL", "MongoDB", "RabbitMQ"],
  },
  {
    category: "Architecture & Patterns",
    icon: "GitBranch",
    items: ["REST APIs", "Clean Architecture", "CQRS", "Event-Driven", "SOLID Principles", "Microservices", "DDD", "TDD", "Vertical Slice Architecture"],
  },
  {
    category: "Azure",
    icon: "Cloud",
    items: [
      "Service Bus",
      "Key Vault",
      "App Service",
      "Functions",
      "Container Apps",
      "Log Analytics",
      "Managed Identity",
    ],
  },
  {
    category: "DevOps & Infrastructure",
    icon: "Container",
    items: ["Docker", "Azure DevOps", "CI/CD", "Bicep", "YAML", "Git", "Swagger", "Testing", "GitHub Actions", "Terraform"],
  },
];

export const projects = [
  {
    name: "Strum & Spruce",
    description:
      "A premium, beginner-focused ukulele reference app built as a progressive four-module lesson hub.",
    url: "https://github.com/DotNetTitan/strum-and-spruce",
    demo: "https://strumandspruce.com",
    tech: ["TypeScript", "Next.js"],
  },
  {
    name: "Zero To DSA",
    description:
      "A structured, interactive platform for mastering Data Structures & Algorithms: from Big O to Dynamic Programming.",
    url: "https://github.com/DotNetTitan/BeginnerDSA",
    demo: "https://zerotodsa.com",
    tech: ["TypeScript", "Next.js"],
  },
];

export const education = [
  {
    degree: "B.Sc. Computer Applications",
    school: "Mahatma Gandhi University, Kottayam, Kerala",
    period: "June 2016 — April 2019",
  },
];
