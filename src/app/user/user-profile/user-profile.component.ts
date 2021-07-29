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
  username = '';
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
      this.username = String(this.tokenService.getUserName());
      this.userService.profile(this.username).subscribe(
        data => {
          this.user = data;
        },
        err => {
          console.log("Error de vista por id");
          window.sessionStorage.clear();
          this.volver();
        }
      );
    } else {
      this.isLogged = false;
      this.username = '';
    }

  }

volver(): void {
    this.router.navigate(['/']);
  }

}
