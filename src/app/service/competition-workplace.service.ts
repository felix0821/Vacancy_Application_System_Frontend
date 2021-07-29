import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompetitionWorkplace} from '../models/competition-workplace';

@Injectable({
  providedIn: 'root'
})
export class CompetitionWorkplaceService {

 workplaceUrl = "http://localhost:8080/user/";
  constructor(private httpClient: HttpClient) { }

   public listByFacultySchool(id: Number): Observable<CompetitionWorkplace[]> {
    return this.httpClient.get<CompetitionWorkplace[]>(this.workplaceUrl + 'list/'+id);
  }
}
