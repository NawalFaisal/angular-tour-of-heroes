import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock.heroes'; 
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    this.messageService.add('HeroService: Fetch worked !')
    return of(HEROES);
  }

  getHero(id:number): Observable <Hero> {
    //remember this is an fucntion arrow
    const hero = HEROES.find(h => h.id === id )!
    //cannot use interpolation or wth for .ts files use backtick 
    this.messageService.add(`HeroService: Fetch by ${id} worked !`);
    return of(hero);
  }
}
