import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PlanetsService {

  constructor(private http: HttpClient) {

    // Example on getting planets from swapi api
    this.getPlanets().subscribe((planets: any) => {
      // console.log(planets);
      // console.log(planets.results[0].name);
      // console.log(planets.results.length);
      // Okay. This here is looping through the api called array. Cool.
      // planets.results.forEach((element: any) => console.log(element.name));

    });
  }

  getPlanets(): Observable<any> {
    const planetApiUrl = 'https://swapi.dev/api/planets';
    return this.http.get(planetApiUrl);
  }
}
