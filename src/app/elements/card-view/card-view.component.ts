import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {

  @Input() movie :any;

  constructor() { }

  ngOnInit(): void {
  }

}
