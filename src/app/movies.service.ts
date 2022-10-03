import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {} //Dependency Injection

  getData(PageNumber = 1): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=3e75949cb706b01ef440ec4608b71868&language=en-US&page=${PageNumber}`
    );
  }
  getSearchedData(searchval: string): Observable<any> {
    if (searchval == '') {
      return this.getData();
    } else {
      return this.http.get(
        `https://api.themoviedb.org/3/search/movie?api_key=3e75949cb706b01ef440ec4608b71868&language=en-US&page=1&include_adult=false&query=${searchval}`
      );
    }
  }
  getTvShows(PageNumber: number = 1): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=3e75949cb706b01ef440ec4608b71868&language=en-US&page=${PageNumber}`
    );
  }
  getMovieById(movie_id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=3e75949cb706b01ef440ec4608b71868&language=en-US`
    );
  }
  getTvById(tv_id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/${tv_id}?api_key=3e75949cb706b01ef440ec4608b71868&language=en-US`
    );
  }
}
