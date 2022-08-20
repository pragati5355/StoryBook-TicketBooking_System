import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-select-seats',
  templateUrl: './select-seats.component.html',
  styleUrls: ['./select-seats.component.scss']
})
export class SelectSeatsComponent implements OnInit{

  getSubscription !: Subscription;

  constructor(
    private movieApiService : ApiService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {

  }
}
