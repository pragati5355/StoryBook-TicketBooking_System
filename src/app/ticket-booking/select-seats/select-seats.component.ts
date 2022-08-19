import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-select-seats',
  templateUrl: './select-seats.component.html',
  styleUrls: ['./select-seats.component.scss']
})
export class SelectSeatsComponent implements OnInit , OnDestroy{

  id:any;
  dataMovie:any;

  getSubscription !: Subscription;

  rows : number[] = [1,2,3,4,5,6,7];
  column : string[] = ['A','B','C','D','E','F','G'];

  reserved : string[] = [];
  selected : string[] = [];


  constructor(
    private movieApiService : ApiService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.getSubscription = this.movieApiService.getSingleMovie(this.id).subscribe(
      (res:any) => {
        console.log(res);
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
}
