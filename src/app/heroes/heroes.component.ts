import { Component } from '@angular/core';
import{Hero} from '../hero';
import {NgFor } from '@angular/common';
import { HeroService } from '../hero.service';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})

export class HeroesComponent {
  heroes: Hero[] = [];

  //getting a reference to the HeroService instance
  constructor(private heroService: HeroService){}


  //remember (this.) means look inside this class for this method
  //checks if component is ready. 
  ngOnInit(): void{
    this.getHeroes();
  }
//typescript reads entire file so no forwared declartion needed
  getHeroes(): void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}