import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-feature-deatils',
  templateUrl: './feature-deatils.component.html',
  styleUrls: ['./feature-deatils.component.scss']
})
export class FeatureDeatilsComponent implements OnInit, OnDestroy {

  id:any;
  dataMovie:any;

  getSubscription !: Subscription;

  constructor(
    private apiService : ApiService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.getSubscription = this.apiService.getSingleMovie(this.id).subscribe(
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

  selectSeat() {
    this.router.navigate(["/ticket/seats"]);
  }
}
