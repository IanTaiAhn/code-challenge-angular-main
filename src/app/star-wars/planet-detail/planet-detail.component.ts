import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent {
@Input() planetDetails: Array<any> = [];

// Run some code here that replaces the film, and residents.
ngOnInit(): void {
  // console.log(this.planetDetails);
}
}
