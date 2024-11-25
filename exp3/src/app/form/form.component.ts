import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {


  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  
  submitForm() {
    console.log('Form Submitted');
    console.log(`First Name: ${this.firstName}`);
    console.log(`Last Name: ${this.lastName}`);
    console.log(`Email ID: ${this.email}`);
    console.log(`Password: ${this.password}`);
    alert("Form Submitted");
  }


  

}
