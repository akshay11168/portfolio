import { Component } from '@angular/core';
import { TrackMouseDirective } from '../../directives/trackmouse.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ TrackMouseDirective ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  
})
export class HomeComponent {

}
