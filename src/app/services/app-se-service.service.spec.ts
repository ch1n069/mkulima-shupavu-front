import { TestBed } from '@angular/core/testing';

import { AppSeServiceService } from './app-se-service.service';

describe('AppSeServiceService', () => {
  let service: AppSeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppSeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
