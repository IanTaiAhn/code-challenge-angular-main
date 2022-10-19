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
// I may just do all of that bizz in here then.
  constructor(private http: HttpClient) {
        // Example on getting planets from swapi api
        this.getPlanets().subscribe((planets: any) => {

        });
   }

   getPlanets(): Observable<any> {
    const planetApiUrl = 'https://swapi.dev/api/planets';
    return this.http.get(planetApiUrl);
  }

  ngOnInit(): void {
  }

}
