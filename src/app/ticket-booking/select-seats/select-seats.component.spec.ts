import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavBarComponent } from 'src/app/elements/nav-bar/nav-bar.component';
import { ApiService } from 'src/app/shared/service/api.service';
import { DataService } from 'src/app/shared/service/data.service';

import { SelectSeatsComponent } from './select-seats.component';

describe('SelectSeatsComponent', () => {
  let component: SelectSeatsComponent;
  let fixture: ComponentFixture<SelectSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSeatsComponent, NavBarComponent ],
      imports: [ RouterTestingModule, HttpClientModule ],
      providers: [ ApiService, DataService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
