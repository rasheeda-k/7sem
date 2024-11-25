import { Component,OnInit } from '@angular/core';
import { StudentsService } from '../students.service';


@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit{
  stulist:any[]=[];
constructor(private studentsService:StudentsService)
{
  
}
ngOnInit(): void {
  this.stulist=this.studentsService.getAllStudents();
}
}


/*import { Component } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class FacultyComponent {

}
*/