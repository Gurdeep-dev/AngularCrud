import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voter, VoterRequest } from '../Model/VoterList';
import { Login } from '../Model/Token';
import { Cities, States } from '../Model/Location';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private baseUrl = 'https://localhost:3000/api';

  constructor(private http: HttpClient) { }

  private getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Post Token
  LoginToken(login: Login): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}/Home/login`,
      login
    );
  }

  GetVoterList(req: VoterRequest): Observable<Voter[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`
    });

    return this.http.post<Voter[]>(
      `${this.baseUrl}/Home/GetVoterList`,
      req,
      { headers }
    );
  }

  // Get State
  GetStateLsit(): Observable<States[]> {
    return this.http.get<States[]>(
      `${this.baseUrl}/Home/GetState`
    );
  }

  GetCityList(id: number): Observable<Cities[]> {
    return this.http.post<Cities[]>(
      `${this.baseUrl}/Home/GetCityById?Id=${id}`,
      id
    );
  }

  SaveVoterData(formData: Voter): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`
    });

    return this.http.post<any>(
      `${this.baseUrl}/Home/AddVoter`,
      formData,
      { headers }
    );
  }

  GetBYId(id: number): Observable<Voter> {
    console.log(id);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`
    });

    return this.http.post<Voter>(
      `${this.baseUrl}/Home/VoterGetById?Id=${id}`,null,{ headers }
    );
  }
}
