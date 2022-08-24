import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/service/api.service';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-feature-deatils',
  templateUrl: './feature-deatils.component.html',
  styleUrls: ['./feature-deatils.component.scss']
})
export class FeatureDeatilsComponent implements OnInit, OnDestroy {

  id:any;
  dataMovie:string | any = '';

  getSubscription !: Subscription;

  constructor(
    private apiService : ApiService,
    private dataService : DataService,
    private route : ActivatedRoute,
    private router : Router
  ) { 
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.getSubscription = this.apiService.getSingleMovie(this.id).subscribe(
      (res:any) => {
        this.dataMovie = res.data;
      },
      (err:any) => {
        console.error(err);
      }
    );

   
  }

  ngOnDestroy(): void {
    this.getSubscription.unsubscribe();
  }

  selectSeat() {
    this.dataService.movieTitle.next(this.dataMovie.movieTitle);
    this.dataService.movieSubtitle.next(this.dataMovie.movieText);
    this.router.navigate(["/ticket/seats/"+ this.id]);
  }
}
