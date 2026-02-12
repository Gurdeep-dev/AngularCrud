import { NgIf, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { APIService } from '../Service/api.service';
import { Cities, States } from '../Model/Location';
import { ApiResponse, Voter } from '../Model/VoterList';

@Component({
  selector: 'app-add-student',
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  States: States[] = [];
  Cities: Cities[] = [];
    response!: ApiResponse;
  voter!:Voter;

  AddStudentForm!: FormGroup;

  constructor(private fb: FormBuilder, private ApiService: APIService) { }

  ngOnInit() {
    this.AddStudentForm = this.fb.group({
      FullName: ['', Validators.required],
      FatherName: ['', Validators.required],
      Dob: ['', Validators.required],
      StateId: ['', Validators.required],
      Gender: ['', Validators.required],
      Mobile: ['', Validators.required],
      Email: ['', Validators.required],
      Pincode: ['', Validators.required],
      Address: ['', Validators.required],
      DistrictId: [],
      CityId: []
    });

    this.ApiService.GetStateLsit().subscribe({
      next: (res) => {
        this.States = res
      },
      error: (err) => (
        console.error(err)
      )
    })
  }
  get Name() {
    return this.AddStudentForm.get('Name');
  }
  get FatherName() {
    return this.AddStudentForm.get('FatherName');
  }

  get Dob() {
    return this.AddStudentForm.get('Dob')
  }

  onsubmit() {
    
    if (this.AddStudentForm.invalid) {
      this.AddStudentForm.markAllAsTouched();
      return;
    }
    this.voter = this.AddStudentForm.value;
    this.ApiService.SaveVoterData(this.voter).subscribe({
      next: (res) => {
        this.response = res
        this.AddStudentForm.reset();
        alert(this.response.message)
      },
      error: (err) => (
        console.error(err)
      )
      
    })
    console.log(this.voter);
  }

  onStateChange(event: Event) {
    const stateId = (event.target as HTMLSelectElement).value;
    console.log('Selected StateId:', stateId);

    this.ApiService.GetCityList(parseInt(stateId)).subscribe({
      next: (res) => {
        this.Cities = res
      },
      error: (err) => (
        console.error(err)
      )
    })
  }

}
