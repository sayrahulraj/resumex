import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent {
  techBadges = [
    'Java',
    'Spring Boot',
    'Microservices',
    'Angular',
    'AWS',
    'REST APIs'
  ];
}