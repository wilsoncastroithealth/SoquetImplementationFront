import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { Sign1Component } from './sign1/sign1.component';
import { Sign2Component } from './sign2/sign2.component';

const routes: Routes = [
  { path: 'chat', component: ChatComponent }, // Define las rutas y sus componentes asociados
  { path: 'sign1', component: Sign1Component }, // Define las rutas y sus componentes asociados
  { path: 'sign2', component: Sign2Component }, // Define las rutas y sus componentes asociados
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
