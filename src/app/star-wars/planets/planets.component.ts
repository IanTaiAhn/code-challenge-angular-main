import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { PlanetsService } from 'src/app/star-wars/planets.service';
import { animate, style, transition, trigger } from '@angular/animations';

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
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss'],
  animations: [fadeIn, fadeOut],
})
export class PlanetsComponent implements OnInit {
  planetArr: Array<any> = [];
  @Input() planets: Array<any> = [];
  public show0:boolean = false;
  // We're learning.
  thePlanets: Array<any> = [];

  //first planet 
  // planet0: string | undefined;
  planetKeysArr: Array<any> = [];
  planetValsArr: Array<any> = [];

  // TODO!
  constructor(private planetsService: PlanetsService, private http: HttpClient) {
    planetsService.getPlanets().subscribe((planets: any) => {
      this.thePlanets = planets.results;
      // console.log(this.thePlanets)
      // console.log(Object.entries(planets));
      console.log(planets.results);
      // console.log(planets.results[0]);
      // console.log(Object.values(planets.results[0]));
      this.planetKeysArr = Object.values(Object.keys(planets.results));
      // this.planetValsArr = Object.values(planets.results);    
      // console.log(this.planetKeysArr[0]); 

      planets.results.forEach((element: any) => {
        this.planetArr.push(element);
        this.planets.push(element);
      });
      this.planetArr.sort((a, b) => a.name.localeCompare(b.name));

      // this.planet0 = this.planetArr[0].name;
      // this.apiCallPlanet(this.planetKeysArr0, this.planetValsArr0, 0);
    });
   }

  //  apiCallPlanet(planetKeysArr: Array<any>, planetValsArr: any, planetIndex: number) {
  //   for (const [key, val] of Object.entries(this.planetArr[planetIndex])) {
  //     planetKeysArr.push(key);
  //     planetValsArr.push(val);
  //   }
  //   let count0 = 0;
  //   planetValsArr[9].forEach((element: any) => {
  //     this.getPeople(element).subscribe((people: any) => {
  //       planetValsArr[9][count0++] = people.name;
  //     });
  //   });
  //   let count0F = 0;
  //   planetValsArr[10].forEach((element: any) => {
  //     this.getFilms(element).subscribe((films: any) => {
  //       planetValsArr[10][count0F++] = films.title;
  //     });
  //   });
  //  }

   toggle0()  {
    this.show0 = !this.show0;
   }
   
  getPeople(url: any): Observable<any> {
    const peopleApiUrl = url;
    return this.http.get(peopleApiUrl);
  }

  getFilms(url: any): Observable<any> {
    const filmsApiUrl = url;
    return this.http.get(filmsApiUrl);
  }

  ngOnInit(): void {
  }

}
