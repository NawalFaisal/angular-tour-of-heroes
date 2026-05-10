import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  //only template imports go into imports.
  imports: [RouterLink, NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  heroes : Hero[] =[];
  //inject hero service but show only top 4 so youll need to slice 
  //constructor is only for recieving the services nothing else really
  constructor (private heroService: HeroService) {}

  ngOnInit(): void{
    this.getHeroes();
  }

  getHeroes(): void {
     this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes.slice(1,5));
  }


}
