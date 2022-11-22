import { Component, OnInit, Input } from '@angular/core';
import { PlanetListComponent } from '../planet-list/planet-list.component';
import { PlanetsService } from 'src/app/star-wars/planets.service';


@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit {
  // planetArr: Array<any> = [];
  thePlanets: Array<any> = [];
  @Input() planetKeys: Array<any> = [];
  @Input() planetVals: Array<any> = [];
  @Input() stringTest: String | undefined;

  public show0:boolean = false;

constructor(private planetsService: PlanetsService) {
  planetsService.getPlanets().subscribe((planets: any) => {
    // Now we need this to be loopable on our planet list?
    this.thePlanets = planets.results;
    
    // console.log(this.thePlanets[0])
  });
}

  ngOnInit(): void {
  }

  toggle0()  {
    this.show0 = !this.show0;
   }

}
