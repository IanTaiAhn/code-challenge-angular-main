import { Component, OnInit, Input } from '@angular/core';
import { PlanetListComponent } from '../planet-list/planet-list.component';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit {
  planetArr: Array<any> = [];
  @Input() planetKeys: Array<any> = [];
  @Input() planetVals: Array<any> = [];

  public show0:boolean = false;

constructor() {}

  ngOnInit(): void {
    
  }

  toggle0()  {
    this.show0 = !this.show0;
   }

}
