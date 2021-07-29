import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../../models/user-login';
import { AuthenticationService } from '../../service/authentication.service';
import { TokenService } from '../../service/token.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  userLogin?: UserLogin;
  username!: string;
  password!: string;
  roles: string[] = [];
  errMsj?: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthenticationService,
    private router: Router
    //private toastr: ToastrService
  ) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.userLogin = new UserLogin(this.username, this.password);
    this.authService.login(this.userLogin).subscribe(
      data => {
        this.isLogged = true;
        this.isLoginFail = false;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.username);
        this.tokenService.setAuthorities(data.authorities);
        this.tokenService.setKeyData(data.key);
        this.roles = data.authorities;
        /*this.toastr.success('Bienvenido ' + data.nombreUsuario, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });*/
        this.router.navigate(['/']);
      },
      err => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.errMsj = err.error.message;
        if (this.errMsj == null) {
          this.errMsj = "Error de conexion"
        }
        /*this.toastr.error(this.errMsj, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });*/
        console.log(this.errMsj);
      }
    );
  }

}
