import { animate, style, transition, trigger } from '@angular/animations';
import { Component} from '@angular/core';
import { PlanetsService } from 'src/app/star-wars/planets.service';

const enterTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate('1s ease-in', style({ opacity: 1
  })),
]);
const fadeIn = trigger('fadeIn', [enterTransition]);

const exitTransition = transition(':leave', [
  style({
    opacity: 1,
  }),
  animate('1s ease-out', style({ opacity: 0
  })),
]);
const fadeOut = trigger('fadeOut', [exitTransition]);

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss'],
  animations: [fadeIn, fadeOut]
})
export class PlanetListComponent {
  planetName: Array<any> = [];
  flagArray: Array<any> = [];

  constructor(private planetsService: PlanetsService) {
    planetsService.getPlanets().subscribe((planets: any) => {
      this.planetName = planets.results;
      this.planetName.sort((a, b) => a.name.localeCompare(b.name));
      this.planetName.forEach((el => {
        let resArr = el.residents
        let filmArr = el.films;
        el.films = "";
        el.residents = "";
        filmArr.forEach(((film: any) => {
          planetsService.getFilms(film).subscribe((item: any) => {
            el.films += item.title + ", ";
          })
        }));
        resArr.forEach(((resident: any) => {
          planetsService.getFilms(resident).subscribe((item: any) => {
            el.residents += item.name + ", ";
          })
        }));
      }));
    });
  }
  
  expandDetails(i: number){
    this.flagArray[i] = !this.flagArray[i];
  }
}
