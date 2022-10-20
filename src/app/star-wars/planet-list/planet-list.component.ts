import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
// Might not need input after all.

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {
  planetArr: Array<any> = [];
  @Input() planetName: string | undefined;

// I may just do all of that bizz in here then.
  constructor(private http: HttpClient) {
    this.getPlanets().subscribe((planets: any) => {
      // populate array with planets.
      planets.results.forEach((element: any) => {
        this.planetArr.push(element);
      });
      // Here we're sorting the array of objects by name.
      this.planetArr.sort((a, b) => a.name.localeCompare(b.name));

    });
   }

   showDetails() {
    // let clickedText = 
    console.log("showing up here");
    let details = document.getElementById("details");
    details?.classList.toggle('hidden');
    console.log(details);
    // console.log(this.planetArr[0].name);
    // Now here we will make our details show from the planet-detail.components.
   }

   getPlanets(): Observable<any> {
    const planetApiUrl = 'https://swapi.dev/api/planets';
    return this.http.get(planetApiUrl);
  }

  ngOnInit(): void {
  }

}
