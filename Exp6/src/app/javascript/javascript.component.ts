import { Component } from '@angular/core';
import { EnrollService } from '../Service/enrollservice';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrl: './javascript.component.css'
})
export class JavascriptComponent {
  title="Javascript"
  constructor(private enrollService:EnrollService){

  }
  onEnroll(){
    this.enrollService.onEnrollClicked(this.title)
  }
}
