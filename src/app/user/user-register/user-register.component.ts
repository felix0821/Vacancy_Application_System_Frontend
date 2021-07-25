import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  isRegister = false;
  isRegisterFail = false;
  userRegister?: User;
  username!: string;
  password!: string;
  dni!:string;
  email!:string;
  dateBirth!:Date;
  errMsj?: string;
  isLogged = false;
  constructor(private tokenService: TokenService,
    private authService: UserService,
    private router: Router) { 
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      }
  }
onRegister(): void {
    this.userRegister= new User(this.dni, this.username, this.password, this.email, this.dateBirth);
    this.authService.save(this.userRegister).subscribe(
      data => {
        this.isRegister=true;
        this.isRegisterFail=false;   
        this.router.navigate(['/login']);
      },
      err => {
        this.isRegister = false;
        this.isRegisterFail = true;
        this.errMsj = err.error.message;
        if (this.errMsj == null) {
          this.errMsj = "Error de registro"
        }
      }
    );
  }
}

