import { Component, OnInit, Input} from '@angular/core';
import { PlanetsService } from 'src/app/star-wars/planets.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent {
  planetName: Array<any> = [];
  flagArray: Array<any> = [];

  constructor(private planetsService: PlanetsService) {
    planetsService.getPlanets().subscribe((planets: any) => {
      this.planetName = planets.results;
      this.planetName.sort((a, b) => a.name.localeCompare(b.name));
      console.log(this.planetName[0].films[0])
      // planetsService.getFilms(this.planetName[0].films)
      let strTest = planetsService.getFilms(this.planetName[0].films[0]);
      console.log(strTest);
      console.log(planetsService.getFilms(this.planetName[0].films[0]));
    });
    
    // I can try to change the contents of planetName here?
  }
  
  expandDetails(i: number){
    this.flagArray[i] = !this.flagArray[i];
  }

  ngOnInit(): void {
    console.log(this.planetName);
  }
}
