import { Component } from '@angular/core';

interface Project {
  title: string;
  desc: string;
  tech: string[];
  github: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {

  allProjects: Project[] = [

    {
      title: 'Banking Microservices Platform',
      desc: 'A production-grade Spring Boot 3.2 multi-module system comprising Customer, Account, and Transaction services. Features in...',
      tech: ['Java 17', 'Spring Boot', 'Maven', 'REST', 'JUnit 5'],
      github: 'https://github.com/rahulraj42/banking-system',
      featured: true
    },

    {
      title: 'Real-time Order Processing Engine',
      desc: 'Event-driven order management system built on Apache Kafka for async processing, with Redis caching layer achieving sub-50...',
      tech: ['Java', 'Kafka', 'Redis', 'Spring Boot', 'PostgreSQL'],
      github: '#',
      featured: true
    },

    {
      title: 'Cloud Cost Optimizer',
      desc: 'AWS Lambda-based tool that analyzes EC2 and RDS usage patterns, identifies idle resources, and sends Slack alerts – reduc...',
      tech: ['Python', 'AWS Lambda', 'CloudWatch', 'Slack API'],
      github: '#',
      featured: true
    },

    {
      title: 'API Gateway Rate Limiter',
      desc: 'Spring Cloud Gateway filter implementing token-bucket rate limiting with Redis, supporting per-client quotas and graceful...',
      tech: ['Spring Cloud', 'Redis', 'Docker', 'Lua'],
      github: '#',
      featured: false
    },

    {
      title: 'CI/CD Pipeline Templates',
      desc: 'Reusable Jenkins and GitHub Actions pipeline templates for Java microservices – build, test, Dockerize, push to ECR, and h...',
      tech: ['Jenkins', 'GitHub Actions', 'Docker', 'AWS ECR', 'Helm'],
      github: '#',
      featured: false
    },

    {
      title: 'Resume Portfolio (This site)',
      desc: 'Personal portfolio and resume built with Angular featuring a dark tech theme, responsive layout, and smooth navigation a...',
      tech: ['Angular', 'TypeScript', 'CSS', 'HTML5'],
      github: '#',
      featured: false
    }

  ];

  get featured(): Project[] {
    return this.allProjects.filter(p => p.featured);
  }

  get others(): Project[] {
    return this.allProjects.filter(p => !p.featured);
  }

}