import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UcenikListComponent } from './ucenik-list/ucenik-list.component';
import { ExponentiaStrengthPipe } from './ucenik-list/exponential-strength.pipe';
import { CreateUcenikComponent } from './create-ucenik/create-ucenik.component';
import { FormsModule } from '@angular/forms';
import { UpdateUcenikComponent } from './update-ucenik/update-ucenik.component';
import { RazredComponent } from './razred/razred.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    UcenikListComponent,
    ExponentiaStrengthPipe,
    CreateUcenikComponent,
    UpdateUcenikComponent,
    RazredComponent,
    SearchComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }