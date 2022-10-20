import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {
  @Input() planetName: string | undefined;

// I'm leaving the HttpClient on for testing purposes. TODO delete when finished
  constructor(private http: HttpClient) {
    // this.getPlanets().subscribe((planets: any) => {
    //   // populate array with planets.
    //   planets.results.forEach((element: any) => {
    //     this.planetArr.push(element);
    //   });
    //   // Here we're sorting the array of objects by name.
    //   this.planetArr.sort((a, b) => a.name.localeCompare(b.name));

    // });
   }

  //TODO Delete when done
  //  getPlanets(): Observable<any> {
  //   const planetApiUrl = 'https://swapi.dev/api/planets';
  //   return this.http.get(planetApiUrl);
  // }

  ngOnInit(): void {
  }

}
