import { Component, OnInit} from '@angular/core';
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
  public show0:boolean = false;
  public show1:boolean = false;
  public show2:boolean = false;
  public show3:boolean = false;
  public show4:boolean = false;
  public show5:boolean = false;
  public show6:boolean = false;
  public show7:boolean = false;
  public show8:boolean = false;
  public show9:boolean = false;

  //first planet 
  planet0: string | undefined;
  planetKeysArr0: Array<any> = [];
  planetValsArr0: Array<any> = [];

  //second planet
  planet1: string | undefined;
  planetKeysArr1: Array<any> = [];
  planetValsArr1: Array<any> = [];

  // third planet
  planet2: string | undefined;
  planetKeysArr2: Array<any> = [];
  planetValsArr2: Array<any> = [];

  // fourth planet
  planet3: string | undefined;
  planetKeysArr3: Array<any> = [];
  planetValsArr3: Array<any> = [];

  // fifth planet
  planet4: string | undefined;
  planetKeysArr4: Array<any> = [];
  planetValsArr4: Array<any> = [];

  // sixth planet
  planet5: string | undefined;
  planetKeysArr5: Array<any> = [];
  planetValsArr5: Array<any> = [];

  // seventh planet
  planet6: string | undefined;
  planetKeysArr6: Array<any> = [];
  planetValsArr6: Array<any> = [];

  // eigth planet
  planet7: string | undefined;
  planetKeysArr7: Array<any> = [];
  planetValsArr7: Array<any> = [];

  // ninth planet
  planet8: string | undefined;
  planetKeysArr8: Array<any> = [];
  planetValsArr8: Array<any> = [];

  // tenth planet
  planet9: string | undefined;
  planetKeysArr9: Array<any> = [];
  planetValsArr9: Array<any> = [];

  constructor(private planetsService: PlanetsService, private http: HttpClient) {
    planetsService.getPlanets().subscribe((planets: any) => {
      planets.results.forEach((element: any) => {
        this.planetArr.push(element);
      console.log(planets.results);
      });
      this.planetArr.sort((a, b) => a.name.localeCompare(b.name));

      this.planet0 = this.planetArr[0].name;
      this.planet1 = this.planetArr[1].name;
      this.planet2 = this.planetArr[2].name;
      this.planet3 = this.planetArr[3].name;
      this.planet4 = this.planetArr[4].name;
      this.planet5 = this.planetArr[5].name;
      this.planet6 = this.planetArr[6].name;
      this.planet7 = this.planetArr[7].name;
      this.planet8 = this.planetArr[8].name;
      this.planet9 = this.planetArr[9].name;

      this.apiCallPlanet(this.planetKeysArr0, this.planetValsArr0, 0);
      this.apiCallPlanet(this.planetKeysArr1, this.planetValsArr1, 1);
      this.apiCallPlanet(this.planetKeysArr2, this.planetValsArr2, 2);
      this.apiCallPlanet(this.planetKeysArr3, this.planetValsArr3, 3);
      this.planetValsArr3[9][0] = "N/A";
      this.apiCallPlanet(this.planetKeysArr4, this.planetValsArr4, 4);
      this.apiCallPlanet(this.planetKeysArr5, this.planetValsArr5, 5);
      this.planetValsArr5[9][0] = "N/A";
      this.apiCallPlanet(this.planetKeysArr6, this.planetValsArr6, 6);
      this.apiCallPlanet(this.planetKeysArr7, this.planetValsArr7, 7);
      this.apiCallPlanet(this.planetKeysArr8, this.planetValsArr8, 8);
      this.apiCallPlanet(this.planetKeysArr9, this.planetValsArr9, 9);
      this.planetValsArr9[9][0] = "N/A";
    });
   }

   apiCallPlanet(planetKeysArr: Array<any>, planetValsArr: any, planetIndex: number) {
    for (const [key, val] of Object.entries(this.planetArr[planetIndex])) {
      planetKeysArr.push(key);
      planetValsArr.push(val);
    }
    let count0 = 0;
    planetValsArr[9].forEach((element: any) => {
      this.getPeople(element).subscribe((people: any) => {
        planetValsArr[9][count0++] = people.name;
      });
    });
    let count0F = 0;
    planetValsArr[10].forEach((element: any) => {
      this.getFilms(element).subscribe((films: any) => {
        planetValsArr[10][count0F++] = films.title;
      });
    });
   }

   toggle0()  {
    this.show0 = !this.show0;
   }

   toggle1()  {
    this.show1 = !this.show1;
   }

   toggle2()  {
    this.show2 = !this.show2;
   }

   toggle3()  {
    this.show3 = !this.show3;
   }

   toggle4()  {
    this.show4 = !this.show4;
   }

   toggle5()  {
    this.show5 = !this.show5;
   }

   toggle6()  {
    this.show6 = !this.show6;
   }

   toggle7()  {
    this.show7 = !this.show7;
   }

   toggle8()  {
    this.show8 = !this.show8;
   }

   toggle9()  {
    this.show9 = !this.show9;
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
