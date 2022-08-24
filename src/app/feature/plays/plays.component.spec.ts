import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CardCarouselComponent } from 'src/app/elements/card-carousel/card-carousel.component';
import { NavBarComponent } from 'src/app/elements/nav-bar/nav-bar.component';
import { ApiService } from 'src/app/shared/service/api.service';

import { PlaysComponent } from './plays.component';

describe('PlaysComponent', () => {
  let component: PlaysComponent;
  let fixture: ComponentFixture<PlaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaysComponent, CardCarouselComponent, NavBarComponent ],
      imports : [ RouterTestingModule, HttpClientModule ],
      providers : [ ApiService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
