import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {

  @Input() movieDetail :any;

  constructor(
    private route : Router
  ) { }

  ngOnInit(): void {
  }

  bookTickets() {
    this.route.navigate(['/feature/details/' + this.movieDetail.id]);
  }
}
