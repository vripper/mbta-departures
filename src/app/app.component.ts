import { Component, OnInit } from '@angular/core';
import { MbtaService } from './mbta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  routeArray = [];
  stopArray = [];
  directionArray = [];

  selectedRoute: string;
  selectedStop: string;
  selectedDirection: string;
  disableStopAndDirection = true;
  submitted = false;
  nextDeparture = null;

  constructor(private mbtaService: MbtaService){}

  ngOnInit() {
    this.mbtaService.getRoutes().subscribe(res => {
      res.data.forEach(element => {
        this.routeArray.push({"long_name": element.attributes.long_name, "id": element.id});
      });
    });
  }

  getStopsAndDirections() {
    this.mbtaService.getStops(this.selectedRoute).subscribe(res => {
      res.data.forEach(element => {
        this.stopArray.push({"name": element.attributes.name, "id": element.id});
      });
    });
    this.mbtaService.getDirections(this.selectedRoute).subscribe(res => this.directionArray = res.data.attributes.direction_destinations);
    this.disableStopAndDirection = false;
  }

  onSubmit() {
    if (!!this.selectedStop && !!this.selectedDirection) {
    this.submitted = true;
      let direction_id = this.directionArray.indexOf(this.selectedDirection).toString();
      this.mbtaService.getNextDeparture(this.selectedRoute, this.selectedStop, direction_id).subscribe(res => this.nextDeparture = res.data[0].attributes.departure_time);
    }
  }

}
