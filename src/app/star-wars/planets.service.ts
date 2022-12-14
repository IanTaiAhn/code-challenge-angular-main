import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PlanetsService {

  constructor(private http: HttpClient) {

    this.getPlanets().subscribe((planets: any) => {
      // console.log(planets);
      // planets.results.forEach((element: any) => console.log(element.name));
    });
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
}
