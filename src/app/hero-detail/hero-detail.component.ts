import { NgIf, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedModule } from '../shared.module';
import { Hero } from '../types/hero';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [NgIf, SharedModule, UpperCasePipe],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
