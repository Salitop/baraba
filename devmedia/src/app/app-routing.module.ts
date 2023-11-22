import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuAdmComponent } from './administrativo/menu-adm/menu-adm.component';

const routes: Routes = [
  {path:'menuadm',component: MenuAdmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
