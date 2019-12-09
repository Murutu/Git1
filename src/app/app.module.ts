import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule  } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepoComponent } from './repo/repo.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { DatePipe } from './date.pipe';
import { HighlightDirective } from './highlight.directive';
// import { Highlight } from './highlight.ts.directive';
// import { Highlight } from './highlight.ts.directive';
// import { ForksPipe } from './fork.ts.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    RepoComponent,
    SearchFormComponent,
    DatePipe,
    HighlightDirective,
    // Highlight.Highlight.TsDirective,
    // Highlight.TsDirective,
    // Fork.TsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
