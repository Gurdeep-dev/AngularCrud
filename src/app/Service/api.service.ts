import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Voter, VoterRequest} from '../Model/VoterList'
import { Login } from '../Model/Token';
import { Cities, States } from '../Model/Location';
import { formatCurrency } from '@angular/common';

Injectable({
  providedIn: 'root'
})
let token:string|null=null;
token=localStorage.getItem('token');
export class APIService {

  private baseUrl = 'https://localhost:3000/api';
  constructor(private http: HttpClient) { }

  //post Token

  LoginToken(login: Login): Observable<any> {
  return this.http.post<any>(
    `${this.baseUrl}/Home/login`,
    login
  );

}

  GetVoterList(Req:VoterRequest):Observable<Voter[]>{
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`  
    });
    return this.http.post<Voter[]>(`${this.baseUrl}/Home/GetVoterList`,Req,{headers})
  }

  //GetState
  GetStateLsit():Observable<States[]>{
    return this.http.get<States[]>(`${this.baseUrl}/Home/GetState`)
  }

GetCityList(id:number):Observable<Cities[]>{
  return this.http.post<Cities[]>(`${this.baseUrl}/Home/GetCityById?Id=${id}`,id)
}

SaveVoterData(fromdata:Voter):Observable<any>{
      const token = localStorage.getItem('token');
  const headers= new HttpHeaders({
     'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`  
  });
  return this.http.post<any>(`${this.baseUrl}/Home/AddVoter`,fromdata,{headers})
}

GetBYId(Id:number):Observable<Voter>{
  const headers= new HttpHeaders({
     'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`  
  })
  return this.http.post<Voter>(`${this.baseUrl}/home`,Id)
}

}
