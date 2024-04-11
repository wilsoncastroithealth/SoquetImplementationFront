import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './components/chat/chat.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-rountig-module';
import { RouterModule } from '@angular/router';
import { Sign1Component } from './components/sign1/sign1.component';
import { HttpClientModule } from '@angular/common/http';
import { Sign2Component } from './components/sign2/sign2.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    SideBarComponent,
    HeaderComponent,
    Sign1Component,
    Sign2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
