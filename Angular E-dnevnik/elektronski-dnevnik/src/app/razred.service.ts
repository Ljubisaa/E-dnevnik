import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Razred } from './razred';

@Injectable({
  providedIn: 'root'
})
export class RazredService {

  private razredURL = "http://localhost:8080/api/v1/razred";


  constructor(private httpClient: HttpClient) { }

  getRazred(): Observable<Razred[]>{
    return this.httpClient.get<Razred[]>(`${this.razredURL}`);
  }

}
