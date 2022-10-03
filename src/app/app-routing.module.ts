import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TvsComponent } from './tvs/tvs.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';

const routes: Routes = [
   { path: '', component: MovieListComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'tv', component: TvsComponent },
  {path:'movies/:id',component:MoviedetailsComponent},
  {path:'tv/:id',component:TvDetailsComponent},
  {path:'**',component:PageNotFoundComponent}

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
