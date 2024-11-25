import { Component } from '@angular/core';
import { EnrollService } from '../Service/enrollservice';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css'
})
export class AngularComponent {
  title="Angular"
  constructor(private enrollService:EnrollService){

  }
  onEnroll(){
    this.enrollService.onEnrollClicked(this.title)
  }
}
