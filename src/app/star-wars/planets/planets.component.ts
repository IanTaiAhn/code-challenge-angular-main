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
  // I'm going to go the route of a bunch of variables...
  planetArr: Array<any> = [];
  // I also may go this hideous route. Ah!
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

  // I read that best practice is not to have nested subscribes... Wuh oh.
  // TODO Consider using a switchmap to avoid nested subscribes.
  // I also realize now we imported planetsService with the getPlanets().subscrbe method, so I didn't need to do it in here.
  constructor(private planetsService: PlanetsService, private http: HttpClient) {
    // Should of used this instead haha.
    // planetsService.getPlanets().subscribe((planets: any) => {
    //   console.log(planets);
    // })
    this.getPlanets().subscribe((planets: any) => {
      // populate array with planets.
      planets.results.forEach((element: any) => {
        this.planetArr.push(element);
      });
      // Sort alphabetically
      this.planetArr.sort((a, b) => a.name.localeCompare(b.name));
      // Console log, and potentially include a test here to prove it's alphabetical.
      // console.log(this.planetArr);

      // Declare planet names
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


      // For planet 0
      for (const [key, val] of Object.entries(this.planetArr[0])) {
        this.planetKeysArr0.push(key);
        this.planetValsArr0.push(val);
      }
      // Rest Api Calls to update People | idk why but i can't resuse the same count, or else it bugs out.
      let count0 = 0;
      this.planetValsArr0[9].forEach((element: any) => {
        this.getPeople(element).subscribe((people: any) => {
          this.planetValsArr0[9][count0++] = people.name;
        });
      });
      // Rest Api Calls for the Films | Gosh. I'm using a lot of variables. There must be a better way!
      let count0F = 0;
      this.planetValsArr0[10].forEach((element: any) => {
        this.getFilms(element).subscribe((films: any) => {
          this.planetValsArr0[10][count0F++] = films.title;
        });
      });

      // For planet 1
      for (const [key, val] of Object.entries(this.planetArr[1])) {
        this.planetKeysArr1.push(key);
        this.planetValsArr1.push(val);
      }
      // Rest Api Calls to update People
      let count1 = 0;
      this.planetValsArr1[9].forEach((element: any) => {
        this.getPeople(element).subscribe((people: any) => {
          this.planetValsArr1[9][count1++] = people.name;
        });
      });
      // Rest Api Calls for the Films
      let count1F = 0;
      this.planetValsArr1[10].forEach((element: any) => {
        this.getFilms(element).subscribe((films: any) => {
          this.planetValsArr1[10][count1F++] = films.title;
        });
      });

      // For planet 2
      for (const [key, val] of Object.entries(this.planetArr[2])) {
        this.planetKeysArr2.push(key);
        this.planetValsArr2.push(val);
      }
      // Rest Api Calls to update People
      let count2 = 0;
      this.planetValsArr2[9].forEach((element: any) => {
        this.getPeople(element).subscribe((people: any) => {
          this.planetValsArr2[9][count2++] = people.name;
        });
      });
      // Rest Api Calls for the Films
      let count2F = 0;
      this.planetValsArr2[10].forEach((element: any) => {
        this.getFilms(element).subscribe((films: any) => {
          this.planetValsArr2[10][count2F++] = films.title;
        });
      });

      // For planet 3
      for (const [key, val] of Object.entries(this.planetArr[3])) {
        this.planetKeysArr3.push(key);
        this.planetValsArr3.push(val);
      }
      // We got a mysterious yoda on this planet, so the array is empty.
      this.planetValsArr3[9][0] = "N/A";
      // Rest Api Calls for the Films
      let count3F = 0;
      this.planetValsArr3[10].forEach((element: any) => {
        this.getFilms(element).subscribe((films: any) => {
          this.planetValsArr3[10][count3F++] = films.title;
        });
      });

      // For planet 4
      for (const [key, val] of Object.entries(this.planetArr[4])) {
        this.planetKeysArr4.push(key);
        this.planetValsArr4.push(val);
      }
      // Rest Api Calls to update People
      let count4 = 0;
      this.planetValsArr4[9].forEach((element: any) => {
        this.getPeople(element).subscribe((people: any) => {
          this.planetValsArr4[9][count4++] = people.name;
        });
      });
      // Rest Api Calls for the Films
      let count4F = 0;
      this.planetValsArr4[10].forEach((element: any) => {
        this.getFilms(element).subscribe((films: any) => {
          this.planetValsArr4[10][count4F++] = films.title;
        });
      });

      // For planet 5
      for (const [key, val] of Object.entries(this.planetArr[5])) {
        this.planetKeysArr5.push(key);
        this.planetValsArr5.push(val);
      }
      // Hoth is an ice block, no peeps live here.
      this.planetValsArr5[9][0] = "N/A";
      // Rest Api Calls for the Films
      let count5F = 0;
      this.planetValsArr5[10].forEach((element: any) => {
        this.getFilms(element).subscribe((films: any) => {
          this.planetValsArr5[10][count5F++] = films.title;
        });
      });

      // For planet 6
      for (const [key, val] of Object.entries(this.planetArr[6])) {
        this.planetKeysArr6.push(key);
        this.planetValsArr6.push(val);
      }
      // Rest Api Calls to update People
      let count6 = 0;
      this.planetValsArr6[9].forEach((element: any) => {
        this.getPeople(element).subscribe((people: any) => {
          this.planetValsArr6[9][count6++] = people.name;
        });
      });
      // Rest Api Calls for the Films
      let count6F = 0;
      this.planetValsArr6[10].forEach((element: any) => {
        this.getFilms(element).subscribe((films: any) => {
          this.planetValsArr6[10][count6F++] = films.title;
        });
      });

      // For planet 7
      for (const [key, val] of Object.entries(this.planetArr[7])) {
        this.planetKeysArr7.push(key);
        this.planetValsArr7.push(val);
      }
      // Rest Api Calls to update People
      let count7 = 0;
      this.planetValsArr7[9].forEach((element: any) => {
        this.getPeople(element).subscribe((people: any) => {
          this.planetValsArr7[9][count7++] = people.name;
        });
      });
      // Rest Api Calls for the Films
      let count7F = 0;
      this.planetValsArr7[10].forEach((element: any) => {
        this.getFilms(element).subscribe((films: any) => {
          this.planetValsArr7[10][count7F++] = films.title;
        });
      });

      // For planet 8
      for (const [key, val] of Object.entries(this.planetArr[8])) {
        this.planetKeysArr8.push(key);
        this.planetValsArr8.push(val);
      }
      // Rest Api Calls to update People
      let count8 = 0;
      this.planetValsArr8[9].forEach((element: any) => {
        this.getPeople(element).subscribe((people: any) => {
          this.planetValsArr8[9][count8++] = people.name;
        });
      });
      // Rest Api Calls for the Films
      let count8F = 0;
      this.planetValsArr8[10].forEach((element: any) => {
        this.getFilms(element).subscribe((films: any) => {
          this.planetValsArr8[10][count8F++] = films.title;
        });
      });

      // For planet 9
      for (const [key, val] of Object.entries(this.planetArr[9])) {
        this.planetKeysArr9.push(key);
        this.planetValsArr9.push(val);
      }
      this.planetValsArr9[9][0] = "N/A";
      // Rest Api Calls for the Films
      let count9F = 0;
      this.planetValsArr9[10].forEach((element: any) => {
        this.getFilms(element).subscribe((films: any) => {
          this.planetValsArr9[10][count9F++] = films.title;
        });
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
   
  getPlanets(): Observable<any> {
    const planetApiUrl = 'https://swapi.dev/api/planets';
    return this.http.get(planetApiUrl);
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
