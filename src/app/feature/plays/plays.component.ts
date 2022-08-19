import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-plays',
  templateUrl: './plays.component.html',
  styleUrls: ['./plays.component.scss']
})
export class PlaysComponent implements OnInit {

  allPlays : any = [];
  playData : any = [];

  constructor(
    private movieApiService : ApiService
  ) { }

  ngOnInit(): void {

    this.movieApiService.getMovie().subscribe(
      (res:any) => {
        console.log(res);
        this.allPlays = res;
        this.getFilteredData(this.allPlays);
      },
      (err:any) => {
        console.error(err);
      }
    )
  
  }

  getFilteredData(data:any) {
    data.filter((dataplay: any)=>{
      if(dataplay.type === 'play'){
        this.playData.push(dataplay);
      }
    })
  }

}
