import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ChatComponent } from './chat/chat.component';
import { Sign1Component } from './sign1/sign1.component';
import { Sign2Component } from './sign2/sign2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ChatComponent,
    Sign1Component,
    Sign2Component,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
