import { Component, OnInit } from '@angular/core';
import { MbtaService } from './mbta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  routeArray = [];
  stopArray = ['stop1', 'stop2'];
  directionArray = ['direction1', 'direction2'];
  selectedRoute: string;
  selectedStop: string;
  selectedDirection: string;
  disableStopAndDirection = true;
  submitted = false;

  constructor(private mbtaService: MbtaService){}

  ngOnInit() {
    this.mbtaService.getRoutes().subscribe(res => {
      res.data.forEach(element => {
        this.routeArray.push(element.attributes.long_name);
      });
    });
  }

  getStopsAndDirections() {
    this.disableStopAndDirection = false;
  }

  onSubmit() {
    this.submitted = true;
  }

}
