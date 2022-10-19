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
  // We can have all 10 planets, and assign them to our sorted array.
  planet1: string | undefined;
  planet2: string | undefined;


  constructor(private planetsService: PlanetsService, private http: HttpClient) {
    const planetArr: any[] = [];
    const planetNameArr: any[] = [];

    this.getPlanets().subscribe((planets: any) => {
      // populate array with planets.
      planets.results.forEach((element: any) => {
        planetArr.push(element);
      });
      // Will delete later
      this.planet1 = planets.results[0].name;
      this.planet2 = planets.results[1].name;

      // Here we're sorting the array of objects by name.
      planetArr.sort((a, b) => a.name.localeCompare(b.name));
      
      // planetArr is an array of objects.
      for (const el of planetArr) {
        // console.log(el);

        // const values = Object.values(el);
        // use values array or:
        // console.log(values);
        // for (const val of Object.values(el)) {
        // // use val
        // console.log(val);
        // }
        // We have 11 important key/vals in the planet object.
        // Ideally, I don't have two arrays, instead, maybe I can sort the array by the value of the name.
        for (const [key, val] of Object.entries(el)) {
          // use key and val
          console.log(key);
          console.log(val);
          // Maybe now, we create variables that hold the key and values for the planets. 
        }
      }

    });
    // Can't have it outside of the api call loop since it loads.


   }

  getPlanetName() {
  }

  getPlanets(): Observable<any> {
    const planetApiUrl = 'https://swapi.dev/api/planets';
    return this.http.get(planetApiUrl);
  }

  ngOnInit(): void {
  }

}
