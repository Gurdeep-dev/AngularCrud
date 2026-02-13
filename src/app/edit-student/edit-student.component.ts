import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Voter } from '../Model/VoterList';
import { APIService } from '../Service/api.service';


@Component({
  selector: 'app-edit-student',
  imports: [],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})


export class EditStudentComponent {

  voter!: Voter | null
Id:number|0=0
constructor(
  private route: ActivatedRoute,
  private apiService: APIService
) {}

ngOnInit()
{
  this.Id = Number(this.route.snapshot.paramMap.get('id'));
  this.apiService.GetBYId(this.Id).subscribe({
    next:(res)=>{
      this.voter=res
    },
    error:(err)=>{
      console.error(err);
    }
  })
}

}
