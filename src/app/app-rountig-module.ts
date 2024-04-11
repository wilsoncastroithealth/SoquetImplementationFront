import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { Sign1Component } from './components/sign1/sign1.component';
import { Sign2Component } from './components/sign2/sign2.component';


const routes: Routes = [
  { path: '', component: ChatComponent }, // Define las rutas y sus componentes asociados
  { path: 'sign1', component: Sign1Component }, // Define las rutas y sus componentes asociados
  { path: 'sign2', component: Sign2Component }, // Define las rutas y sus componentes asociados

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
