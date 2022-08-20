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

  getSubscription !: Subscription;

  rows : number[] = [1,2,3,4,5];
  column : string[] = ['A','B','C','D','E'];

  reserved : string[] = [];
  selected : string[] = [];


  constructor(
    private movieApiService : ApiService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.getSubscription.unsubscribe();
  }
}
