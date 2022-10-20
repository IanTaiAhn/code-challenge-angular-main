import { Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { PlanetsService } from 'src/app/star-wars/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
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

  constructor(private planetsService: PlanetsService, private http: HttpClient) {
    this.getPlanets().subscribe((planets: any) => {
      // populate array with planets.
      planets.results.forEach((element: any) => {
        this.planetArr.push(element);
      });
      // Sort alphabetically
      this.planetArr.sort((a, b) => a.name.localeCompare(b.name));
      // Console log, and potentially include a test here to prove it's alphabetical.
      console.log(this.planetArr);

      // Start of planet names
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

      // Start of planet details | Prolly should make method to make this cleaner.
      // I also need to get the 9th and 10th element of the object array, and iterate through those to get the residents/films
      // Right now it doesn't show the residents or films, so that's a bug.
      for (const [key, val] of Object.entries(this.planetArr[0])) {
        this.planetKeysArr0.push(key);
        this.planetValsArr0.push(val);
      }
      for (const [key, val] of Object.entries(this.planetArr[1])) {
        this.planetKeysArr1.push(key);
        this.planetValsArr1.push(val);
      }
      for (const [key, val] of Object.entries(this.planetArr[2])) {
        this.planetKeysArr2.push(key);
        this.planetValsArr2.push(val);
      }
      for (const [key, val] of Object.entries(this.planetArr[3])) {
        this.planetKeysArr3.push(key);
        this.planetValsArr3.push(val);
      }
      for (const [key, val] of Object.entries(this.planetArr[4])) {
        this.planetKeysArr4.push(key);
        this.planetValsArr4.push(val);
      }
      for (const [key, val] of Object.entries(this.planetArr[5])) {
        this.planetKeysArr5.push(key);
        this.planetValsArr5.push(val);
      }
      for (const [key, val] of Object.entries(this.planetArr[6])) {
        this.planetKeysArr6.push(key);
        this.planetValsArr6.push(val);
      }
      for (const [key, val] of Object.entries(this.planetArr[7])) {
        this.planetKeysArr7.push(key);
        this.planetValsArr7.push(val);
      }
      for (const [key, val] of Object.entries(this.planetArr[8])) {
        this.planetKeysArr8.push(key);
        this.planetValsArr8.push(val);
      }
      for (const [key, val] of Object.entries(this.planetArr[9])) {
        this.planetKeysArr9.push(key);
        this.planetValsArr9.push(val);
      }
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

  ngOnInit(): void {
  }

}
