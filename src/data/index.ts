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
    role: "Lead Software Engineer",
    period: "Feb 2021 - Present",
    startDate: new Date("2021-02-01"),
    location: "Trivandrum",
    highlights: [
      "I joined Xilligence to build backend systems, and ended up shaping how the team thinks about architecture, infrastructure, and tooling. I designed and deployed high-performance RESTful APIs on .NET 6+ with EF Core and Azure, and hardened security across the board with JWT authentication and Azure Key Vault.",
      "As the systems grew, I moved into event-driven design using Azure Service Bus for reliable async communication, and leaned into performance work with caching, async programming, and parallel processing to keep latency low under load. On the infrastructure side, I cut deployment times by 90% by building CI/CD pipelines on Azure DevOps, containerized services with Docker, and ran them on Azure Container Apps with ACR.",
      "I also introduced observability tooling (Log Analytics, Application Insights) that cut down incident response time, mentored juniors on Clean Architecture and SOLID principles, and pushed the team into AI-assisted development, integrating Cursor and Copilot into our workflows and building custom MCP tools to plug AI capabilities directly into our pipelines.",
    ],
  },
  {
    company: "Progressive Cybernetics",
    role: "Software Engineer",
    period: "May 2019 - Feb 2021",
    startDate: new Date("2019-05-01"),
    endDate: new Date("2021-02-01"),
    location: "Ernakulam",
    highlights: [
      "This was where I cut my teeth as a professional developer. I built full-stack web applications from the ground up with ASP.NET MVC on the server, EF Core for data access, and MS SQL Server on the back end, and designed RESTful APIs that integrated with third-party services for secure, multi-platform access.",
      "I also built data-rich dashboards and notification systems for stakeholders using jQuery, AJAX, and Bootstrap. It gave me a solid foundation in the full lifecycle of a web application, from database schema to UI.",
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
    category: "Frameworks & Tools",
    icon: "Layers",
    items: [".NET", "ASP.NET Core", "EF Core", "Next.js", "Tailwind CSS", "shadcn/ui", "PostgreSQL", "MongoDB", "RabbitMQ"],
  },
  {
    category: "Architecture & Patterns",
    icon: "GitBranch",
    items: ["Clean Architecture", "Microservices", "Vertical Slice Architecture", "SOLID Principles", "DDD", "REST APIs", "CQRS", "Event-Driven", "TDD"],
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
    items: ["Docker", "Azure DevOps", "CI/CD", "Bicep", "YAML", "Git", "Swagger", "GitHub Actions", "Terraform"],
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
    period: "June 2016 - April 2019",
  },
];
