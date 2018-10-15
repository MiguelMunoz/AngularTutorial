import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {ActivatedRoute} from "@angular/router";
import { Location } from "@angular/common";
import {MessageService} from "../message.service";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.messageService.add(`Detail calling getHero()`);
    this.getHero();
    this.messageService.add(`Detail called  getHero()`);
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
    this.messageService.add(`detail showing hero id ${id}`)
  }

  goBack(): void {
    this.location.back();
  }
}
