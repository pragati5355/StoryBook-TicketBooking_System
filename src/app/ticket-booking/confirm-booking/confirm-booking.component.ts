import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/service/api.service';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.scss']
})
export class ConfirmBookingComponent implements OnInit , OnDestroy{

  emailpattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
  alphaPattern = "[a-zA-Z][a-zA-Z ]+";
  mobilePattern = "^((\\+91-?)|0)?[0-9]{10}$";

  movie: any;
  movieName :any;
  movieSeats :any;
  movieSubtitle :any;
  id :any;
  getSubscription !: Subscription;

  data = {
    userName : "",
    userEmail : "",
    userMobileno : "",
    movieId : "",
    seats : [""]
  }

  confirmTicketForm = new FormGroup({
    name : new FormControl('',[Validators.required,Validators.maxLength(10), this.noSpaceAllowed, Validators.pattern(this.alphaPattern)]),
    email : new FormControl('',[Validators.required,Validators.pattern(this.emailpattern)]),
    mobileNo : new FormControl('',[Validators.required,Validators.pattern(this.mobilePattern)])
  });


  constructor(
    private dataService : DataService,
    private router : Router,
    private apiService : ApiService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    this.data.movieId = this.id;
    this.getSubscription = this.apiService.getSingleMovie(this.id).subscribe(
      (res:any) => {
        this.movie = res.data;
      },
      (err:any) => {
        console.error(err);
      }
    );

    this.dataService.movieTitle.subscribe(
      (res) => {
        this.movieName = res;
      }
    );

    this.dataService.movieSubtitle.subscribe(
      (res) => {
        this.movieSubtitle = res;
      }
    )

    this.dataService.seats.subscribe(
      (res) => {
        this.movieSeats = res;
        this.data.seats = this.movieSeats;
      }
    )
  }

  ngOnDestroy(): void {
    this.getSubscription.unsubscribe();
  }

  get form()
  {
    return this.confirmTicketForm.controls;
  }

  get name() {
    return this.confirmTicketForm.get('name');
  }

  get email() {
    return this.confirmTicketForm.get('email');
  }

  get mobileNo() {
    return this.confirmTicketForm.get('mobileNo');
  }


  noSpaceAllowed(control : FormControl){

    if(control.value != null && control.value.indexOf(' ') != -1){
      return {noSpaceAllowed : true}
    }

    return null;
  }

  bookATicket(formData:any) {
    this.data.userName = formData.name,
    this.data.userEmail = formData.email,
    this.data.userMobileno = formData.mobileNo,
    this.apiService.postBookTicket(this.data).subscribe();
    this.router.navigate(["/dashboard"]);
    
  }

}
