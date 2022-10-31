import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {
  @Input() planetName: string | undefined;

  constructor() {}
  
  ngOnInit(): void {
  }

}
