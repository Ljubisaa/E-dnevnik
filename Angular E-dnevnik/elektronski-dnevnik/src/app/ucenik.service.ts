import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ucenik } from './ucenik';

@Injectable({
  providedIn: 'root'
})
export class UcenikService {

  private baseURL = "http://localhost:8080/api/v1/ucenici";
  private baseURLUcenik = "http://localhost:8080/api/v1/ucenik";

  constructor(private httpClient: HttpClient) { 
  }

  getUceniciList(): Observable<Ucenik[]>{
    return this.httpClient.get<Ucenik[]>(`${this.baseURL}`);
  }

  createUcenik(ucenik: Ucenik): Observable<Object>{
    return this.httpClient.post(`${this.baseURLUcenik}`, ucenik)
  }

  getUcenikById(id: number): Observable<Ucenik>{
    return this.httpClient.get<Ucenik>(`${this.baseURLUcenik}/${id}`);
  }

  updateUcenik(id: number, ucenik: Ucenik): Observable<Object> {
    return this.httpClient.put(`${this.baseURLUcenik}/${id}`, ucenik);
  }

  deleteUcenik(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURLUcenik}/${id}`);
  }
}
