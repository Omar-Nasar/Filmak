import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MoviesService } from '../movies.service';
import { Imovie } from './movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  private SearchValue: string = '';
  Movies: Imovie[] = [];
  FilterMovies: any[] = [];

  CurrentPage: number = 1;
  Lentgh: number = 35067;
  PageSize: number = 20;

  set ValueToSearch(value: string) {
    this.SearchValue = value;
    this.SearchMovies(value);
  }
  get ValueToSearch() {
    return this.SearchValue;
  }

  constructor(private movsServ: MoviesService) {}

  ngOnInit(): void {
    this.movsServ.getData().subscribe({
      next: (movies) => {
        console.log(movies.results);
        
        this.Movies = movies.results;
        this.FilterMovies = this.Movies;
      },
    });
  }

  SearchMovies(val: string) {
    this.movsServ.getSearchedData(val).subscribe({
      next: (mov) => {
        console.log(mov.results);
        this.FilterMovies = mov.results;
      },
    });
  }

  SetVisib(id: number) {
    this.Movies.forEach((movie) => {
      if (movie.id == id) {
        movie.isvisable = !movie.isvisable;
      }
    });
  }

  OnChangePage(data: PageEvent) {
    this.CurrentPage = data.pageIndex + 1;
    this.movsServ.getData(this.CurrentPage).subscribe({
      next: (movies) => {
        this.Movies = movies.results;
        this.FilterMovies = this.Movies;
      },
    });
  }
}
