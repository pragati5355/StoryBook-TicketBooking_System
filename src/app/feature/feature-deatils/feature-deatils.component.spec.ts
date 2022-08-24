import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NavBarComponent } from 'src/app/elements/nav-bar/nav-bar.component';
import { ApiService } from 'src/app/shared/service/api.service';
import { DataService } from 'src/app/shared/service/data.service';

import { FeatureDeatilsComponent } from './feature-deatils.component';

describe('FeatureDeatilsComponent', () => {
  let component: FeatureDeatilsComponent;
  let fixture: ComponentFixture<FeatureDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureDeatilsComponent, NavBarComponent ],
      imports : [ RouterTestingModule, HttpClientModule],
      providers : [ ApiService, DataService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
