import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-print',
  templateUrl: './resume-print.html',
  styleUrl: './resume-print.css'
})
export class ResumePrintComponent {

  name = 'Rahul Raj';
  role = 'Java Full Stack Developer';

  email = 'sayrahulraj@gmail.com';
  phone = '+91 85410 77579';
  linkedin = 'https://www.linkedin.com/in/sayrahulraj/';
  github = 'https://github.com/sayrahulraj';

  summary =
    'Results-driven Java Full Stack Developer with 5+ years of experience developing scalable enterprise applications using Java 8/17, Spring Boot, Microservices, Angular, and AWS. Experienced in building secure RESTful APIs, event-driven systems with Apache Kafka, and cloud-native applications while delivering high-quality solutions for healthcare, insurance, and fintech clients.';

  experience = [
    {
      company: 'Tata Consultancy Services Ltd.',
      role: 'System Engineer',
      period: 'Jan 2021 ➜ Jan 2025',
      location: 'Hyderabad, India',
      projects: [
        {
          client: 'Cardinal Health Inc., USA',
          period: 'Jan 2021 ➜ May 2024',
          highlights: [
            'Developed enterprise applications using Java, Spring Boot, Spring MVC, and Microservices.',
            'Designed and implemented secure RESTful APIs for healthcare business workflows.',
            'Integrated Apache Kafka for asynchronous communication between distributed services.',
            'Worked with JPA/Hibernate, MS SQL Server, and Redis for high-performance backend development.',
            'Contributed to CI/CD pipelines, code quality, and security using GitLab, SonarQube, and Fortify.'
          ],
          tech:
            'Java 8, Spring Boot, Spring MVC, Microservices, REST APIs, Kafka, JPA/Hibernate, Redis, MS SQL Server'
        },
        {
          client: 'State Farm, USA',
          period: 'May 2024 ➜ Jan 2025',
          highlights: [
            'Developed scalable Java microservices for insurance applications.',
            'Implemented secure authentication using OAuth2 and JWT.',
            'Designed REST APIs with Swagger/OpenAPI documentation.',
            'Worked closely with Angular developers to deliver end-to-end features.',
            'Performed unit testing using JUnit and Mockito in Agile environments.'
          ],
          tech:
            'Java 17, Spring Boot, OAuth2, JWT, Swagger, Angular, JUnit, Mockito'
        }
      ]
    },
    {
      company: 'Infosys Ltd.',
      role: 'Associate Consultant',
      period: 'Jan 2025 ➜ Present',
      location: 'Hyderabad, India',
      projects: [
        {
          client: 'Fiserv Inc., USA',
          period: 'Mar 2025 ➜ Present',
          highlights: [
            'Developing enterprise-grade Java applications using Spring Boot and Microservices.',
            'Building secure RESTful APIs for financial services.',
            'Implementing Apache Kafka for event-driven architecture.',
            'Working with AWS and CI/CD pipelines for cloud deployments.',
            'Leveraging GitHub Copilot, Devin AI, and Claude AI to improve development productivity.'
          ],
          tech:
            'Java 17, Spring Boot, Microservices, Kafka, AWS, REST APIs, GitLab CI/CD'
        }
      ]
    }
  ];

  education = {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Kolhan University',
    period: '2017 ➜ 2020',
    percentage: '80.97%'
  };

  certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2024'
    },
    {
      name: 'Programming in Java',
      issuer: 'NPTEL',
      year: '2019'
    },
    {
      name: 'Database Management System',
      issuer: 'NPTEL',
      year: '2019'
    },
    {
      name: 'Android Certification Training Course with Java',
      issuer: 'Edureka',
      year: '2022'
    }
  ];

  skills = [
    {
      label: 'Backend',
      items:
        'Java 8/17, Spring Boot, Spring MVC, Microservices, REST APIs, Kafka, JPA/Hibernate'
    },
    {
      label: 'Frontend',
      items: 'Angular, JavaScript, HTML5, CSS3'
    },
    {
      label: 'Security',
      items: 'OAuth2, JWT Authentication, API Gateway, Swagger/OpenAPI'
    },
    {
      label: 'Database',
      items: 'MS SQL Server, AWS RDS, Redis'
    },
    {
      label: 'Cloud & DevOps',
      items:
        'AWS, GitLab CI/CD, Maven, Gradle, SonarQube, Fortify, Agile'
    },
    {
      label: 'Testing & Tools',
      items:
        'JUnit, Mockito, Git, GitHub, Devin AI, Claude AI, GitHub Copilot'
    }
  ];
}