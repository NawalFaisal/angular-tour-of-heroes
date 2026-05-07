import { Component } from '@angular/core';
import{Hero} from '../hero';
import {UpperCasePipe, NgFor } from '@angular/common';
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';



@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe, NgFor,HeroDetailComponent,],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})

export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService){}

  ngOnInit(): void{
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero:Hero): void{
    this.selectedHero = hero;
  }
}