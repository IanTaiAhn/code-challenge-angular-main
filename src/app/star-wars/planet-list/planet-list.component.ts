import { Component, OnInit, Input} from '@angular/core';
import { PlanetsService } from 'src/app/star-wars/planets.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {
  @Input() planetName: string | undefined;

  constructor(private planetsService: PlanetsService) {
    planetsService.getPlanets().subscribe((planets: any) => {
      // Now we need this to be loopable on our planet list?
      // console.log(planets.results[0].name)
    });
  }
  
  ngOnInit(): void {
  }

}
