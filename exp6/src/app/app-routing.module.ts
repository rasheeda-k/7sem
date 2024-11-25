import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';

FacultyComponent
StudentComponent

const routes: Routes = [
  { path: 'ff', component: FacultyComponent },
  { path: 'ss', component: StudentComponent },
  { path: '',   redirectTo: '/ff', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
