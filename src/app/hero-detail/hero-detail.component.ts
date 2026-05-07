import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import {NgIf, UpperCasePipe} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [NgIf, FormsModule, UpperCasePipe ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  //use input to pass the parent component data over to child
  @Input() hero?: Hero;

}
