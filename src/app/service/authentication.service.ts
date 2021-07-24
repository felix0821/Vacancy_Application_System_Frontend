import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/jwt-dto';
import { UserLogin } from '../models/user-login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authURL = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) { }

  /*public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }*/

  public login(userLogin: UserLogin): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'login', userLogin);
  }
}
