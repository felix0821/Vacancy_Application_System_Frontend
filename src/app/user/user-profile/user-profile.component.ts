import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user!: User;
  isLogged = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    //const id = this.activatedRoute.snapshot.params.id;
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      //Esto se muestra a todos
      this.userService.profile().subscribe(
        data => {
          this.user = data;
        },
        err => {
          console.log("Error de vista por id");
          this.isLogged = false;
          window.sessionStorage.clear();
          this.volver();
        }
      );

      
      /*if (rol === 'EVALUATOR') {
      //Se muestra a solo evaluadores (this.userService.evaluationSheet) user/evaluations
        this.isAdmin = true;
      }*/

      /*if (rol === 'POSTULANT') {
      //Se muestra a solo postulante (this.userService.competitionWorkplace) user/workplaces
        this.isAdmin = true;
      }*/

    } else {
      this.isLogged = false;
    }

  }

volver(): void {
    this.router.navigate(['/']);
  }

}
