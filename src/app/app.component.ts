import { Component } from '@angular/core';
import { PlanetsService } from './star-wars/planets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-coding-challenge';
  planetArr: Array<any> = [];


  constructor(private planetsService: PlanetsService) {
    planetsService.getPlanets().subscribe((planets: any) => {
      planets.results.forEach((element: any) => {
      // console.log(planets.results);
      // this.planetArr.push(planets.results.name);
      });
    });
  }
}
