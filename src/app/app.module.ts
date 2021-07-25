import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './interceptor/user-interceptor.service';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { LoginComponent } from './authentication/login/login.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserEditComponent,
    LoginComponent,
    MenuComponent,
    IndexComponent,
    UserRegisterComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
