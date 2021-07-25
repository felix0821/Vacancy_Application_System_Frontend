import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
//import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
   user!:User;
  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.userService.detail(id).subscribe(
      data => {
        this.user = data;
      },
      err => {
        
        this.router.navigate(['/']);
      }
    );
  }
 onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.userService.update(id, this.user).subscribe(
      data => {
       
        this.router.navigate(['/lista']);
      },
      err => {
        
         this.router.navigate(['/']);
      }
    );
  }

}
