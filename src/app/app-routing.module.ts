import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserGuardService as guard } from './guard/user-guard.service';
import { LoginComponent } from './authentication/login/login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { FacultyComponent } from './faculty/faculty.component';
import { CompetitionWorkplaceListComponent } from './competition-workplace/competition-workplace-list/competition-workplace-list.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: UserListComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'profile', component: UserProfileComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'edit/:id', component: UserEditComponent },
  { path: 'faculties/facultySchools', component: FacultyComponent },
  { path: 'competitionWorkplace/facultySchool/:id', component: CompetitionWorkplaceListComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
