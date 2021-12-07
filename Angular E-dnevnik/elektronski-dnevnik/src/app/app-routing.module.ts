import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUcenikComponent } from './create-ucenik/create-ucenik.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UcenikGridComponent } from './ucenik-grid/ucenik-grid.component';
import { UcenikListComponent } from './ucenik-list/ucenik-list.component';
import { UpdateUcenikComponent } from './update-ucenik/update-ucenik.component';

const routes: Routes = [
  {path: 'ucenici', component: UcenikListComponent},
  {path: 'search/:keyword', component: UcenikListComponent},
  {path: 'create-ucenik', component: CreateUcenikComponent},
  {path: 'ucenik-grid/:id', component: UcenikGridComponent},
  {path: '', redirectTo: 'ucenici', pathMatch: 'full'},
  {path: 'update-ucenik/:id', component: UpdateUcenikComponent},
  {path: 'razred/:id', component: UcenikListComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
