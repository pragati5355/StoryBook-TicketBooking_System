import { Component, OnInit , OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit , OnDestroy{

  allMovies: any = []; 
  movieData: any = [];

  getSubscription !: Subscription;

  constructor(
    private movieApiService : ApiService
  ) { }

  ngOnInit(): void {

    this.getSubscription = this.movieApiService.getMovie().subscribe(
      (res:any) => {
        this.allMovies = res;
        this.getFilteredData(this.allMovies);
      },
      (err:any) => {
        console.error(err);
      }
    );
  }

  ngOnDestroy(): void {
    this.getSubscription.unsubscribe();
  }

  getFilteredData(data:any) {
    data.filter((datamovie: any)=>{
      if(datamovie.type === 'movie'){
        this.movieData.push(datamovie);
      }
    })
  }

}
