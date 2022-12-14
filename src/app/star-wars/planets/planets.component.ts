import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { PlanetsService } from 'src/app/star-wars/planets.service';
import { animate, style, transition, trigger } from '@angular/animations';

const enterTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate('1s ease-in', style({ opacity: 1
  })),
]);
const fadeIn = trigger('fadeIn', [enterTransition]);

const exitTransition = transition(':leave', [
  style({
    opacity: 1,
  }),
  animate('1s ease-out', style({ opacity: 0
  })),
]);
const fadeOut = trigger('fadeOut', [exitTransition]);

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss'],
  animations: [fadeIn, fadeOut],
})
export class PlanetsComponent implements OnInit {

  constructor(private planetsService: PlanetsService, private http: HttpClient) {
    planetsService.getPlanets().subscribe((planets: any) => {
    });
   }

  getPeople(url: any): Observable<any> {
    const peopleApiUrl = url;
    return this.http.get(peopleApiUrl);
  }

  getFilms(url: any): Observable<any> {
    const filmsApiUrl = url;
    return this.http.get(filmsApiUrl);
  }

  ngOnInit(): void {
  }

}
