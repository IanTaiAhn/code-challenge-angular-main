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
  planet1: string | undefined;
  planet2: string | undefined;

  constructor(private planetsService: PlanetsService, private http: HttpClient) {
    // So this is a thing?
    this.getPlanets().subscribe((planets: any) => {
      // console.log(planets);
      // console.log(planets.results[0].name);
      // console.log(planets.results.length);
      // Okay. This here is looping through the api called array. Cool.
      // @Input() planetName: string;

      planets.results.forEach((element: any) => console.log(element.name));
      this.planet1 = planets.results[0].name;
      this.planet2 = planets.results[1].name;
    });
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
