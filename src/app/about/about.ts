import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  highlights = [
    { value: '5+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Delivered' },
    { value: '10+', label: 'Technologies' },
    { value: '3', label: 'Certifications' },
  ];
}