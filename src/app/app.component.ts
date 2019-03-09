import { Component } from '@angular/core';

// non-angular classes
import { Player } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public currentPlayer: Player = null;
}
