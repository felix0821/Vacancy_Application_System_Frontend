import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl = "http://localhost:8080/user/";
  constructor(private httpClient: HttpClient) { }
  
  public list(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.userUrl + 'list');
  }

  public detail(id: Number): Observable<User> {
    return this.httpClient.get<User>(this.userUrl + 'user/'+id);
  }

  public save(id: Number, user: User): Observable<any> {
    return this.httpClient.post<any>(this.userUrl + 'register', user);
  }

  public update(id: Number, user: User): Observable<any> {
    return this.httpClient.put<any>(this.userUrl + 'update/' + id, user);
  }

  public delete(id: Number): Observable<any> {
    return this.httpClient.delete<User>(this.userUrl + 'delete/' + id);
  }
}
