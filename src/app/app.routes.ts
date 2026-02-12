import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

export const routes: Routes = [
    {path:'about',component:AboutComponent,title:'about'},
     {path:'Create',component:AddStudentComponent,title:'AddStudent'},
     {path:'Edit',component:EditStudentComponent,title:'UpdateStudent'},
    {path:'',component:HomeComponent,title:'Home'}
];
