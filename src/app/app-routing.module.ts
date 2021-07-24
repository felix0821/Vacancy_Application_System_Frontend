import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserGuardService as guard } from './guard/user-guard.service';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: UserListComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'detail/:id', component: UserDetailComponent },
  { path: 'add', component: UserAddComponent },
  { path: 'edit/:id', component: UserEditComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
