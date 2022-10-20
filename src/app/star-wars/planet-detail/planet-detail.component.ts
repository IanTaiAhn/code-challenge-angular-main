import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit {
  planetArr: Array<any> = [];
  @Input() planetKeys: Array<any> = [];
  @Input() planetVals: Array<any> = [];
  planetKeysArr: Array<any> = []; // for tests
  planetValsArr: Array<any> = []; // for tests
  // I messed up the interpolation in the planets.component.html file, and I think
  // that is why my map didn't work. 

constructor(private http: HttpClient) {
  this.getPlanets().subscribe((planets: any) => {
    // populate array with planets.
    planets.results.forEach((element: any) => {
      this.planetArr.push(element);
    });
    // Here we're sorting the array of objects by name.
    this.planetArr.sort((a, b) => a.name.localeCompare(b.name));
    
    // testing purposes.
    // for (const [key, val] of Object.entries(this.planetArr[0])) {
    //   console.log('key ' + key);
    //   // console.log('val ' + val);
    //   this.planetKeysArr.push(key);
    //   this.planetValsArr.push(val);
    // }
  });
 }

 

 getPlanets(): Observable<any> {
  const planetApiUrl = 'https://swapi.dev/api/planets';
  return this.http.get(planetApiUrl);
}

  ngOnInit(): void {
  }

}
