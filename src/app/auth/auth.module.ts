import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login/login.page';
import { IonicModule } from '@ionic/angular';
import { RouterOutlet } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [LoginPage],
  imports: [
    CommonModule,
    IonicModule,
    RouterOutlet,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
