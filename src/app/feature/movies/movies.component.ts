import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  allMovies: any = []; 
  movieData: any = [];


  constructor(
    private movieApiService : ApiService
  ) { }

  ngOnInit(): void {

    this.movieApiService.getMovie().subscribe(
      (res:any) => {
        console.log(res);
        this.allMovies = res;
        this.getFilteredData(this.allMovies);
      },
      (err:any) => {
        console.error(err);
      }
    );
  }

  getFilteredData(data:any) {
    data.filter((datamovie: any)=>{
      if(datamovie.type === 'movie'){
        this.movieData.push(datamovie);
      }
    })
  }

}
