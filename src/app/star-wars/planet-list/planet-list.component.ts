import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {
  @Input() planetName: string | undefined;

  constructor(private http: HttpClient) {
        // Example on getting planets from swapi api
        this.getPlanets().subscribe((planets: any) => {
          // console.log(planets);
          // console.log(planets.results[0].name);
          // console.log(planets.results.length);
          // Okay. This here is looping through the api called array. Cool.
          // @Input() planetName: string;

          // planets.results.forEach((element: any) => console.log(element.name));
        });
   }

  //  @Input() planetName: string | undefined;

   getPlanets(): Observable<any> {
    const planetApiUrl = 'https://swapi.dev/api/planets';
    return this.http.get(planetApiUrl);
  }

  ngOnInit(): void {
  }

}
