import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit ,OnDestroy{

  bookedDetails:any;
  getSubscription !: Subscription;

  constructor(
    private apiService : ApiService
  ) { }

  ngOnInit(): void {
    this.getSubscription = this.apiService.getBookTicket().subscribe(
      (res:any) => {
        this.bookedDetails = res;
      }
    )
  }

  ngOnDestroy(): void {
    this.getSubscription.unsubscribe();
  }



}
