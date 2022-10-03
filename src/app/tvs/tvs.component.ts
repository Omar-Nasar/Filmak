import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Imovie } from '../movie-list/movie';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tvs',
  templateUrl: './tvs.component.html',
  styleUrls: ['./tvs.component.css'],
})
export class TvsComponent implements OnInit {
  TvShow: any[] = [];
  CurrentPage: number = 1;

  constructor(private TvServ: MoviesService) {}

  ngOnInit(): void {
    this.TvServ.getTvShows().subscribe({
      next: (tvs) => {
        console.log(tvs.results);

        this.TvShow = tvs.results;
      },
    });
  }

  SetVisib(id: number) {
    this.TvShow.forEach((tv) => {
      if (tv.id == id) {
        tv.isvisable = !tv.isvisable;
      }
    });
  }
}
