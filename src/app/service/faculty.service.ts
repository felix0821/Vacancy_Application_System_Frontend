import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Faculty} from '../models/faculty';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  facultyUrl = "http://localhost:8080/faculty-school/";
  constructor(private httpClient: HttpClient) { }

  //public list(): Observable<Faculty[]> {
  //  return this.httpClient.get<Faculty[]>(this.facultyUrl + 'list');
  //}

  public list(): Observable<Faculty[]> {
    return this.httpClient.get<Faculty[]>(this.facultyUrl + 'list');
  }
}
