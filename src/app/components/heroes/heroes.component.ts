import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor( private _heroesService: HeroesService ) {

   }

   heroes: Heroe[] = [];

  ngOnInit(){
    
    this.heroes=this._heroesService.getHeroes();
    

  }

}
