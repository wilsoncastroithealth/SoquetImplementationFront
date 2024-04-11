import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu/menu.component';
import { ChatComponent } from '../user/chat/chat.component';
import { SideBarComponent } from 'src/app/components/user/side-bar/side-bar.component';
import { HeaderComponent } from 'src/app/components/user/header/header.component';
import { Sign1Component } from '../user/sign1/sign1.component';
import { Sign2Component } from '../user/sign2/sign2.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-rountig-module';


@NgModule({
  declarations: [
    MenuComponent,
    SideBarComponent,
    HeaderComponent,


  ],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    MenuRoutingModule
  ],

})
export class MenuModule { }
