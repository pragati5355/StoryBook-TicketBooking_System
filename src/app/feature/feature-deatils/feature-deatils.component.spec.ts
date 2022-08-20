import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDeatilsComponent } from './feature-deatils.component';

describe('FeatureDeatilsComponent', () => {
  let component: FeatureDeatilsComponent;
  let fixture: ComponentFixture<FeatureDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureDeatilsComponent ]
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
