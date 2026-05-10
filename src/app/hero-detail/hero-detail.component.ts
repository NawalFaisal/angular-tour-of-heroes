import { Component} from '@angular/core';
import { Hero } from '../hero';
import {NgIf, UpperCasePipe, Location} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [NgIf, FormsModule, UpperCasePipe ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  hero? : Hero;
  
  constructor(
    private route: ActivatedRoute, //read route from url
    private heroService: HeroService ,//fetch the heroes data
    private location : Location
  ){}

  ngOnInit(): void{
    console.log('ngOnInit fired');
    this.getHero();
  }

  getHero(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('id from URL:', id);
    this.heroService.getHero(id)
    .subscribe(hero => {
       this.hero = hero;
      console.log('hero received:', hero); 
    });
    

  }
 
  goBack(): void {
    this.location.back();
  }
  

}
