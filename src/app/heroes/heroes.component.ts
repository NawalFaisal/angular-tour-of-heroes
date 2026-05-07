import { Component } from '@angular/core';
import{Hero} from '../hero';
import {UpperCasePipe, NgFor } from '@angular/common';
import { HEROES } from '../mock.heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe, NgFor,HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})

export class HeroesComponent {
  heroes = HEROES;


  // this is property so it has : 
  selectedHero?: Hero;
  //this is method so it has () taking params. and retruns type is empty
  onSelect(hero:Hero): void{
    this.selectedHero = hero;
  }
}
