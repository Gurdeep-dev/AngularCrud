import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { APIService } from '../Service/api.service';
import { Login } from '../Model/Token';
import { Voter, VoterRequest } from '../Model/VoterList';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  login: Login = {
    userEmail: 'gurdeepkumar7310@gmail.com',
    password: '123456'
  };
  VotersList: Voter[] = [];

  voterReq: VoterRequest = {
    name: '',
    status: true
  }

  constructor(private ApiService: APIService) { }
  ngOnInit() {
    this.ApiService.LoginToken(this.login).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
      },
      error: (err) => {
        console.error(err);
      }
    });

    this.ApiService.GetVoterList(this.voterReq).subscribe({
      next: (res) => {
        console.log('Response:', res);
        this.VotersList = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
