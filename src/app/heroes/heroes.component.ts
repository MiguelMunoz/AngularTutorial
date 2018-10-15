import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from "../hero.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  // HEROES: Hero[] = [
  //   {id: 10, name: 'Mighty Wind'},
  //   {id: 11, name: 'Mr. Nice'},
  //   {id: 12, name: 'Narco'},
  //   {id: 13, name: 'Bombasto'},
  //   {id: 14, name: 'Celeritas'},
  //   {id: 15, name: 'Magneta'},
  //   {id: 16, name: 'RubberMan'},
  //   {id: 17, name: 'Dynama'},
  //   {id: 18, name: 'Dr IQ'},
  //   {id: 19, name: 'Magma'},
  //   {id: 20, name: 'Tornado'},
  // ];

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  // selectedHero : Hero; // = this.HEROES[0];

  // onSelect(hero: Hero): void {
  //   if (this.selectedHero == hero) {
  //     this.selectedHero = null;
  //   } else {
  //     this.selectedHero = hero;
  //   }
  // }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(theHeroes => {
      this.heroes = theHeroes;
      this.messageService.add(`getHeroes returned ${this.heroes.length} Heroes`)
    });
  }

  ngOnInit() {
    this.getHeroes();
  }
}
