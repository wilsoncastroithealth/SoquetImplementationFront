import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from '../user/chat/chat.component';
import { Sign1Component } from '../user/sign1/sign1.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: 'menu', component: MenuComponent,
    loadChildren: () => import('../user/user.module').then(m => m.UserModule),
  }, // Define las rutas y sus componentes asociados


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
