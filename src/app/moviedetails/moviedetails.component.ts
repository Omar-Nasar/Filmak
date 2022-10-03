import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css'],
})
export class MoviedetailsComponent implements OnInit {
  SingleMovie: any = {};
  constructor(private movServ: MoviesService, private rout: ActivatedRoute) {}

  ngOnInit(): void {
    let id = Number(this.rout.snapshot.paramMap.get('id'));
    this.movServ.getMovieById(id).subscribe({next:(mov)=>{
      this.SingleMovie = mov;
    }})
  }
}
