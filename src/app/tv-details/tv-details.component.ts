import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {

  SingleTv:any;
  constructor(private movServ: MoviesService, private rout: ActivatedRoute) { }

  ngOnInit(): void {
    let id = Number(this.rout.snapshot.paramMap.get('id'));
    this.movServ.getTvById(id).subscribe({next:(tv)=>{
      console.log(tv);
      
      this.SingleTv = tv;
    }})
  }

}
