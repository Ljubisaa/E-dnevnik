import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUcenikComponent } from './create-ucenik/create-ucenik.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UcenikListComponent } from './ucenik-list/ucenik-list.component';
import { UpdateUcenikComponent } from './update-ucenik/update-ucenik.component';

const routes: Routes = [
  {path: 'ucenici', component: UcenikListComponent},
  {path: 'create-ucenik', component: CreateUcenikComponent},
  {path: '', redirectTo: 'ucenici', pathMatch: 'full'},
  {path: 'update-ucenik/:id', component: UpdateUcenikComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }