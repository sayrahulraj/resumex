import { Component } from '@angular/core';

interface Project {
  client: string;
  clientLocation?: string;
  period: string;
  highlights: string[];
  tech: string[];
}

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  projects: Project[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class ExperienceComponent {
  active = 0;
  jobs: Job[] = [
    {
      company: 'Tata Consultancy Services (TCS)',
      role: 'System Engineer',
      period: 'Jan 2021 ➜ Jan 2025',
      location: 'Hyderabad, India',
      projects: [
        {
          client: 'Cardinal Health Inc.',
          clientLocation: 'USA',
          period: 'Jan 2021 ➜ May 2024',
          highlights: [
            'Developed and maintained enterprise applications using Java, Spring Boot, Spring MVC, and Microservices.',
            'Designed and implemented secure RESTful APIs for healthcare business workflows.',
            'Integrated Apache Kafka for asynchronous communication between distributed services.',
            'Worked with JPA/Hibernate, MS SQL Server, and Redis to build high-performance backend services.',
            'Collaborated with cross-functional Agile teams and contributed to CI/CD pipelines using GitLab, SonarQube, and Fortify.',
          ],
          tech: [
            'Java 8',
            'Spring Boot',
            'Spring MVC',
            'Microservices',
            'REST APIs',
            'Kafka',
            'MS SQL Server',
            'JPA/Hibernate',
            'Redis',
            'GitLab',
          ],
        },
        {
          client: 'State Farm',
          clientLocation: 'USA',
          period: 'May 2024 ➜ Jan 2025',
          highlights: [
            'Built scalable Java microservices for insurance domain applications.',
            'Implemented secure authentication using OAuth2 and JWT Authentication.',
            'Developed and enhanced REST APIs with API Gateway and Swagger/OpenAPI documentation.',
            'Optimized backend performance and collaborated with frontend teams for seamless Angular integration.',
            'Participated in code reviews, unit testing using JUnit and Mockito, and Agile sprint planning.',
          ],
          tech: [
            'Java 17',
            'Spring Boot',
            'Microservices',
            'OAuth2',
            'JWT',
            'Swagger',
            'Angular',
            'JUnit',
            'Mockito',
          ],
        },
      ],
    },
    {
      company: 'Infosys Ltd.',
      role: 'Associate Consultant',
      period: 'Jan 2025 ➜ Present',
      location: 'Hyderabad, India',
      projects: [
        {
          client: 'Fiserv Inc.',
          clientLocation: 'USA',
          period: 'Mar 2025 ➜ Present',
          highlights: [
            'Developing enterprise-grade Java applications using Spring Boot and Microservices architecture.',
            'Building secure and scalable RESTful APIs for financial services and payment processing.',
            'Implementing event-driven communication using Apache Kafka.',
            'Working with AWS services, CI/CD pipelines, and modern DevOps practices for reliable deployments.',
            'Leveraging AI-assisted development tools including GitHub Copilot, Devin AI, and Claude AI to improve productivity.',
          ],
          tech: [
            'Java 17',
            'Spring Boot',
            'Microservices',
            'Kafka',
            'AWS',
            'REST APIs',
            'GitLab CI/CD',
            'SonarQube',
            'Maven',
          ],
        },
      ],
    },
  ];

  get currentJob(): Job {
    return this.jobs[this.active];
  }
}