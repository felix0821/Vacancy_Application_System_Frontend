import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FacultySchoolWorkplace } from '../models/faculty-school-workplace';

@Injectable({
  providedIn: 'root'
})
export class CompetitionWorkplaceService {

 workplaceUrl = "http://localhost:8080/workplace/";
  constructor(private httpClient: HttpClient) { }

  public listByFacultySchool(id: Number): Observable<FacultySchoolWorkplace> {
    return this.httpClient.get<FacultySchoolWorkplace>(this.workplaceUrl + 'faculty-school/'+id);
  }
}
