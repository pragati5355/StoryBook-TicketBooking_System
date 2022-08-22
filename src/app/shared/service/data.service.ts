import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  movieTitle = new Subject();
  movieSubtitle = new Subject();
  seats = new BehaviorSubject([""]);
  auth = new BehaviorSubject<boolean>(false);

  constructor() { }
}
