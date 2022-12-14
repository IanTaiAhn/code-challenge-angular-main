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
  filmApiArr: Array<any> = [];

  constructor(private planetsService: PlanetsService) {
    planetsService.getPlanets().subscribe((planets: any) => {
      this.planetName = planets.results;
      this.planetName.sort((a, b) => a.name.localeCompare(b.name));

      this.planetName.forEach((el => {
        // console.log(el.films);
        let resArr = el.residents
        // console.log(resArr);
        let filmArr = el.films;
        el.films = "";
        el.residents = "";
        filmArr.forEach(((film: any) => {
          // console.log(film)
          planetsService.getFilms(film).subscribe((item: any) => {
            // console.log(item.title);
            el.films += item.title + ", ";
          })
        }));
        resArr.forEach(((resident: any) => {
          // console.log(resident)
          planetsService.getFilms(resident).subscribe((item: any) => {
            // console.log(item);
            el.residents += item.name + ", ";
          })
        }));

      }));

    });
    // console.log(planetsService.getFilms('https://swapi.dev/api/films/1/'));
    // planetsService.getFilms(this.filmApiArr[0]).subscribe((film: any) => {
    //   console.log(film.title);
    // })

    // planetsService.getFilms('https://swapi.dev/api/films/5/').subscribe((film: any) => {
    //   console.log(film.title);
    // })

    // I can try to change the contents of planetName here?
  }
  
  expandDetails(i: number){
    this.flagArray[i] = !this.flagArray[i];
  }

  ngOnInit(): void {
  }
}
