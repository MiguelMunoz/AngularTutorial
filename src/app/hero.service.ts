import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { Hero } from "./hero";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private heroesUrl = 'http://localhost:4848/NeptuneDreams/Heroes/1.0.0/heroes/';

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
    // return of(this.heroes);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService fetched hero id=${id}`);
    return this.http.get<Hero>(this.heroesUrl + `${id}`);
  }
}
