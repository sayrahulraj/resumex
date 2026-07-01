import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent {

  categories = [
    {
      icon: '🧠',
      title: 'Languages',
      skills: ['Java 8', 'Java 17', 'Java Script']
    },
    {
      icon: '☁️',
      title: 'Backend Technologies',
      skills: [ 'Spring Boot', 'Spring MVC', 'Microservices', 'RESTful APIs', 'Kafka']
    },
    {
      icon: '🗄️',
      title: 'Front-End Technologies',
      skills: ['Angular', 'HTML5', 'CSS3']
    },
    {
      icon: '🔧',
      title: 'API Security',
      skills: ['OAuth2', 'JWT Authentication', 'API Gateway', 'Swagger/OpenAPI', 'Confluence']
    },
    {
      icon: '🌐',
      title: 'Database, ORM & Caching',
      skills: [ 'MS SQL Server', 'AWS RDS', 'JPA/Hibernate', 'Redis']
    },
    {
      icon: '🧪',
      title: 'Build & Testing Tools',
      skills: ['Maven', 'Gradle', 'JUnit', 'Mockito']
    },
    {
      icon: '🧪',
      title: 'DevOps Tools & Methodologies',
      skills: ['CI/CD Pipelines', 'Gitlab', 'SonarQube', 'Fortify Scan', 'Agile']
    },
    {
      icon: '🧪',
      title: 'AI Tools',
      skills: [ 'Devin AI', 'Claude AI', 'GitHub Co-Pilot']
    },
  ];

}