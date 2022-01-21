import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUcenikComponent } from './create-ucenik/create-ucenik.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminGuard } from './service/admin.guard';
import { NormalGuard } from './service/normal.guard';
import { SignupComponent } from './signup/signup.component';
import { UcenikGridComponent } from './ucenik-grid/ucenik-grid.component';
import { UcenikListComponent } from './ucenik-list/ucenik-list.component';
import { UpdateUcenikComponent } from './update-ucenik/update-ucenik.component';

const routes: Routes = [
  {path: 'ucenici', component: UcenikListComponent, pathMatch: 'full'},
  {path: 'search/:keyword', component: UcenikListComponent},
  {path: 'create-ucenik', component: CreateUcenikComponent},
  {path: 'ucenik-grid/:id', component: UcenikGridComponent},
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'update-ucenik/:id', component: UpdateUcenikComponent},
  {path: 'razred/:id', component: UcenikListComponent},
  {path: 'signup', component: SignupComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
