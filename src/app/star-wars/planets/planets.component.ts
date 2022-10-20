import { Component, OnInit, Input } from '@angular/core';
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
  public show1:boolean = false;
  public show2:boolean = false;


  //first planet 
  planet0: string | undefined;
  planetKeysArr0: Array<any> = [];
  planetValsArr0: Array<any> = [];

  //second planet
  planet1: string | undefined;
  planetKeysArr1: Array<any> = [];
  planetValsArr1: Array<any> = [];
  constructor(private planetsService: PlanetsService, private http: HttpClient) {
    // 
    this.getPlanets().subscribe((planets: any) => {
      // populate array with planets.
      planets.results.forEach((element: any) => {
        this.planetArr.push(element);
      });

      // Sort
      this.planetArr.sort((a, b) => a.name.localeCompare(b.name));
      // Testing inputs
      console.log(this.planetArr);


      // Start of planet names
      this.planet0 = this.planetArr[0].name;
      this.planet1 = this.planetArr[1].name;

      // Start of planet details
      for (const [key, val] of Object.entries(this.planetArr[0])) {
        // console.log('val ' + val);
        this.planetKeysArr0.push(key);
        this.planetValsArr0.push(val);
      }
      for (const [key, val] of Object.entries(this.planetArr[1])) {
        // console.log('val ' + val);
        this.planetKeysArr1.push(key);
        this.planetValsArr1.push(val);
      }



      // planetArr is an array of objects.
      for (const el of this.planetArr) {
        // console.log(el.name);

        // const values = Object.values(el);
        // use values array or:
        // console.log(values);
        // for (const val of Object.values(el)) {
        // console.log(val);
        // }

        // We have 11 important key/vals in the planet object.
        for (const [key, val] of Object.entries(el)) {
          // console.log(key);
          // console.log(val);
          // Maybe now, we create variables that hold the key and values for the planets. 
        }
      }
    });
   }


   toggle()  {
    console.log("showing up here");
    // Now here we will make our details show from the planet-detail.components.
    this.show1 = !this.show1;
   }

   toggle2()  {
    console.log("showing up here");
    // Now here we will make our details show from the planet-detail.components.
    this.show2 = !this.show2;
   }

  getPlanets(): Observable<any> {
    const planetApiUrl = 'https://swapi.dev/api/planets';
    return this.http.get(planetApiUrl);
  }

  ngOnInit(): void {
  }

}
