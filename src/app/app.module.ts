import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {MatPaginatorModule} from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { RatingComponent } from './rating/rating.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { TvsComponent } from './tvs/tvs.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent,
    RatingComponent,
    FooterComponent,
    MoviedetailsComponent,
    PageNotFoundComponent,
    TvsComponent,
    TvDetailsComponent,
  ],
  imports: [
    BrowserModule,
     FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatPaginatorModule,
     AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
