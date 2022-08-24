import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientModule ]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getMovie method', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service.getMovie).toBeTruthy();
  });

  it('should have getSingleMovie method', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service.getSingleMovie).toBeTruthy();
  });

  it('should have getSeats method', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service.getSeats).toBeTruthy();
  });

  it('should have postBookTicket method', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service.postBookTicket).toBeTruthy();
  });

  it('should have getBookTicket method', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service.getBookTicket).toBeTruthy();
  })

});
