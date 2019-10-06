import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { quiz } from '../../dulieu/quiz';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }
  getquiz(id) : Observable<quiz[]> {
      return this.http.get<quiz[]>(`../../../assets/dl/${id}.json`);
  }
}