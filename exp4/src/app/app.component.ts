import { Component } from '@angular/core';


import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing-app';
}
