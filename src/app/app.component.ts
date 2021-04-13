import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routeArray = ['route1', 'route2'];
  stopArray = ['stop1', 'stop2'];
  directionArray = ['direction1', 'direction2'];
}
