import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Faculty} from '../models/faculty';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  facultyUrl = "http://localhost:1026/v2/entities/";
  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Faculty[]> {
    return this.httpClient.get<Faculty[]>(this.facultyUrl);
  }
}
