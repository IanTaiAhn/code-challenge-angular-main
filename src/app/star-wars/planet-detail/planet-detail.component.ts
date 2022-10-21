import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit {
  planetArr: Array<any> = [];
  @Input() planetKeys: Array<any> = [];
  @Input() planetVals: Array<any> = [];
  // I messed up the interpolation in the planets.component.html file,
  // and I think that is why my map didn't work. 
constructor() {}

  ngOnInit(): void {
  }

}
