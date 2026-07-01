import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class EducationComponent {

  degrees = [
    {
      degree: 'Bachelor of Computer Applications (BCA) 🎓',
      institution: 'Kolhan University',
      period: '2017 📅 2020',
      percentage: '80.97%',
      highlights: [
        'Focused on Java programming, Data Structures, DBMS, Operating Systems, and Computer Networks.',
        'Developed a strong foundation in software engineering and application development.',
        'Earned NPTEL certifications in Java Programming and Database Management Systems.',
      ],
    }
  ];

  certifications = [
    {
      name: 'AWS Certified Cloud Practitioner ☁️',
      issuer: 'Amazon Web Services (AWS)',
      year: '2024',
      badge: '☁️'
    },
    {
      name: 'Programming in Java 🎯',
      issuer: 'NPTEL',
      year: '2019',
      badge: '☕'
    },
    {
      name: 'Database Management System 🗄️',
      issuer: 'NPTEL',
      year: '2019',
      badge: '🗄️'
    },
    {
      name: 'Android Certification Training Course with Java 📱',
      issuer: 'Edureka',
      year: '2022',
      badge: '🤖'
    },
  ];

}