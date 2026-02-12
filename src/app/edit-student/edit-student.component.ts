import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  imports: [],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent {
  
// ngonInit(){
//   this.route.queryParams.subscribe(params => {
//     console.log(params['id']);
//    });
// }
constructor(private route:ActivatedRoute){}
ngOnInit()
{
  console.log(this.route.snapshot.paramMap.get('id'));
  
}

}
