import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-plays',
  templateUrl: './plays.component.html',
  styleUrls: ['./plays.component.scss']
})
export class PlaysComponent implements OnInit , OnDestroy{

  allPlays : any = [];
  playData : any = [];

  getSubscription !: Subscription;

  constructor(
    private movieApiService : ApiService
  ) { }

  ngOnInit(): void {

    this.getSubscription = this.movieApiService.getMovie().subscribe(
      (res:any) => {
        this.allPlays = res;
        this.getFilteredData(this.allPlays);
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
    data.filter((dataplay: any)=>{
      if(dataplay.type === 'play'){
        this.playData.push(dataplay);
      }
    })
  }

}
