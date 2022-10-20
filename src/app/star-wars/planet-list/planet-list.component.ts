import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Might not need input after all.

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
@Injectable()
export class PlanetListComponent implements OnInit {
  planetArr: Array<any> = [];
  @Input() planetName: string | undefined;

  // Communicate between components
  toggleDetails: EventEmitter<boolean> = new EventEmitter<boolean>();

  

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
    // let details = document.getElementById("details");
    // details?.classList.toggle('hidden');
    // console.log(details);

    // this.toggleDetails = !this.toggleDetails;
   }

   getPlanets(): Observable<any> {
    const planetApiUrl = 'https://swapi.dev/api/planets';
    return this.http.get(planetApiUrl);
  }

  ngOnInit(): void {
  }

}
