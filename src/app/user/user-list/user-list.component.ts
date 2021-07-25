import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  roles!: string[];
  isAdmin = false;

  constructor(
    private userService: UserService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  loadUsers(): void {
    this.userService.list().subscribe(
      data => {
        this.users = data;
      },
      err => {
        console.log(err);
      }
    )

  }

}
