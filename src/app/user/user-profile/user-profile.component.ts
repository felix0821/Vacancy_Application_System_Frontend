import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
//import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user!:User;
  constructor(/*private tokenService: TokenService,*/
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params.id;
    this.userService.detail(id).subscribe(
      data => {
        this.user = data;
      },
      err => {
        console.log("Error de vista por id");
        this.volver();
      }
    );

  }

volver(): void {
    this.router.navigate(['/login']);
  }

}
