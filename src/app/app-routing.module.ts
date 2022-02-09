import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RechercheComponent } from './recherche/recherche.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:DashboardComponent},
  {path:'rechercher',component:RechercheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
