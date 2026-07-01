import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar';
import { HeroComponent } from './hero/hero';
import { AboutComponent } from './about/about';
import { SkillsComponent } from './skills/skills';
import { ExperienceComponent } from './experience/experience';
import { ProjectsComponent } from './projects/projects';
import { EducationComponent } from './education/education';
import { ContactComponent } from './contact/contact';
import { ResumePrintComponent } from './resume-print/resume-print';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent,
    ResumePrintComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}