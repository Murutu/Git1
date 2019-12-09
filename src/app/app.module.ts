import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { RepositoryComponent } from './repository/repository.component';
import { ForksPipe } from './fork.ts.pipe';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepoComponent } from './repo/repo.component';
import { SearchFormComponent } from './search-form/search-form.component';
// import { Highlight } from './highlight.ts.directive';
// import { Highlight } from './highlight.ts.directive';
// import { ForksPipe } from './fork.ts.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    ForksPipe,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    RepoComponent,
    SearchFormComponent,
    // Highlight.Highlight.TsDirective,
    // Highlight.TsDirective,
    // Fork.TsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
